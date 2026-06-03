const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const localOutDir = path.join(__dirname, 'out');
const ftpHost = '91.108.101.182';
const ftpUser = 'u156087372.sovakalifesciences.com';
const ftpPass = '21June@1984';

function getFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const allFiles = getFiles(localOutDir);
console.log(`Found ${allFiles.length} files to upload.`);

let activeCount = 0;
let currentIndex = 0;
const concurrency = 10;
let completedCount = 0;

function cleanStateFiles() {
  console.log('Cleaning up remote FTP sync state files to prevent corruption...');
  const cmd = `curl.exe -s --user "${ftpUser}:${ftpPass}" "ftp://${ftpHost}/" -Q "-DELE .ftp-deploy-sync-state-v2.json" -Q "-DELE .ftp-deploy-sync-state.json"`;
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.warn(`Warning: Failed to clean state files: ${error.message}`);
    } else {
      console.log('SUCCESS: Remote FTP sync state files successfully reset!');
    }
  });
}

function uploadNext() {
  if (currentIndex >= allFiles.length) {
    if (activeCount === 0 && completedCount === allFiles.length) {
      console.log('SUCCESS: All files uploaded to Hostinger successfully!');
      cleanStateFiles();
    }
    return;
  }


  const localFile = allFiles[currentIndex++];
  const relativePath = path.relative(localOutDir, localFile).replace(/\\/g, '/');
  const remoteUrl = `ftp://${ftpHost}/${relativePath}`;

  activeCount++;
  const cmd = `curl.exe -s -S --ftp-create-dirs -T "${localFile}" "${remoteUrl}" --user "${ftpUser}:${ftpPass}"`;

  exec(cmd, (error, stdout, stderr) => {
    activeCount--;
    completedCount++;
    if (error) {
      console.error(`FAILED: ${relativePath} - ${error.message}`);
    } else {
      console.log(`[${completedCount}/${allFiles.length}] Uploaded: ${relativePath}`);
    }
    uploadNext();
  });
}

if (allFiles.length > 0) {
  for (let i = 0; i < Math.min(concurrency, allFiles.length); i++) {
    uploadNext();
  }
} else {
  console.log('No files found in out directory to upload. Please build the site first.');
}
