<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

// Meta Credentials
$pixelId = getenv('NEXT_PUBLIC_META_PIXEL_ID') ?: '968593457102948';
$accessToken = getenv('META_ACCESS_TOKEN') ?: 'EAA...'; // Placeholder token (replaced during deployment or via environment variables)

$url = "https://graph.facebook.com/v19.0/{$pixelId}/events?access_token={$accessToken}";

// Build User Data
$user_data = [];

// Cookies and user identifiers
if (!empty($data['user_data']['fbp'])) {
    $user_data['fbp'] = $data['user_data']['fbp'];
}
if (!empty($data['user_data']['fbc'])) {
    $user_data['fbc'] = $data['user_data']['fbc'];
}

// Capture client headers from Apache/Nginx
$user_data['client_ip_address'] = $_SERVER['REMOTE_ADDR'];
$user_data['client_user_agent'] = $_SERVER['HTTP_USER_AGENT'];

// Hash personal data if provided to optimize EMQ (Event Match Quality)
if (!empty($data['user_data']['email'])) {
    $user_data['em'] = hash('sha256', trim(strtolower($data['user_data']['email'])));
}
if (!empty($data['user_data']['phone'])) {
    // Strip non-numeric characters and hash
    $clean_phone = preg_replace('/\D/', '', $data['user_data']['phone']);
    $user_data['ph'] = hash('sha256', $clean_phone);
}
if (!empty($data['user_data']['name'])) {
    $name_parts = explode(' ', trim($data['user_data']['name']), 2);
    if (!empty($name_parts[0])) {
        $user_data['fn'] = hash('sha256', trim(strtolower($name_parts[0])));
    }
    if (!empty($name_parts[1])) {
        $user_data['ln'] = hash('sha256', trim(strtolower($name_parts[1])));
    }
}

// Build Conversions API event structure
$event = [
    'event_name' => $data['event_name'],
    'event_time' => $data['event_time'] ?? time(),
    'event_id' => $data['event_id'],
    'event_source_url' => $data['event_source_url'],
    'action_source' => 'website',
    'user_data' => $user_data
];

if (!empty($data['custom_data'])) {
    $event['custom_data'] = $data['custom_data'];
}

$payload = [
    'data' => [$event]
];

// POST payload to Meta Graph API
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode(['success' => true]);
} else {
    http_response_code($httpCode ?: 500);
    echo json_encode([
        'success' => false,
        'error' => 'Meta API returned error',
        'meta_response' => json_decode($response, true)
    ]);
}
