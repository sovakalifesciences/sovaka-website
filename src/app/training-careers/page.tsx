"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, MapPin, BookOpen, Layers, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Language = "en" | "mr" | "hi";

interface CertifiedProfessional {
  srNo: string;
  name: string;
  month: string;
  year: string;
}

const fallbackProfessionals: CertifiedProfessional[] = [];

// The spreadsheet must be shared as "Anyone with the link can view"
const GOOGLE_SHEET_ID: string = "1QZfQ84--Xbjfvdq_Cz1Tzy60HWR5OQAvMUlXMMY1GA4";

const parseGVizJson = (text: string): CertifiedProfessional[] => {
  const match = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*?)\);/);
  if (!match) throw new Error("Invalid response format");
  const obj = JSON.parse(match[1]);
  const table = obj.table;
  const rows = table.rows;
  
  return rows.map((row: any) => {
    const cells = row.c;
    return {
      srNo: cells[0] ? String(cells[0].f || cells[0].v || "") : "",
      name: cells[1] ? String(cells[1].f || cells[1].v || "") : "",
      month: cells[2] ? String(cells[2].f || cells[2].v || "") : "",
      year: cells[3] ? String(cells[3].f || cells[3].v || "") : "",
    };
  });
};

export default function TrainingCareersPage() {
  const [language, setLanguage] = useState<Language>("en");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [professionals, setProfessionals] = useState<CertifiedProfessional[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  React.useEffect(() => {
    if (!GOOGLE_SHEET_ID || GOOGLE_SHEET_ID === "YOUR_GOOGLE_SHEET_ID_HERE") {
      setProfessionals(fallbackProfessionals);
      setLoading(false);
      return;
    }

    const fetchSheet = async () => {
      try {
        const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch Google Sheet");
        const text = await res.text();
        const parsed = parseGVizJson(text);
        if (parsed && parsed.length > 0) {
          setProfessionals(parsed);
        } else {
          setProfessionals(fallbackProfessionals);
        }
      } catch (err) {
        console.error("Error loading certified professionals registry:", err);
        setProfessionals(fallbackProfessionals);
      } finally {
        setLoading(false);
      }
    };

    fetchSheet();
  }, []);

  const content = {
    en: {
      pageLabel: "Technician Training & Job Opportunities",
      heroTitle: "Dental Radiology Technician Training & Job Opportunities",
      heroValueStrip: "1-Month Practical Training Program | Train Inside Active Nidaan CBCT & OPG Centres | Job Opportunities for High-Performing Candidates",
      heroCredStrip: "40+ Years of Nidaan Legacy | 6 Operational Centres | Active Clinical Training Environment",
      heroDesc: "SOVAKA Lifesciences is developing the next generation of dental imaging professionals. Through structured training, multilingual guidance and practical exposure inside active Nidaan CBCT & OPG Centres, candidates gain the skills required to build careers within modern dental imaging environments. Train inside real Nidaan CBCT & OPG Centres. Potentially work inside real Nidaan CBCT & OPG Centres.",
      nidaanHeading: "Operational Infrastructure",
      nidaanSub: "Active Training Centre Network ↗",
      
      careerPathwayTitle: "Job Opportunities",
      careerPathwayDesc: "High-performing candidates may be considered for job opportunities within Nidaan CBCT & OPG Centres and the broader SOVAKA ecosystem based on operational requirements, performance, professionalism and organizational fit. Potentially work inside real Nidaan CBCT & OPG Centres.",
      careerPathwayDisclaimer: "Job opportunities are based on performance audits, professionalism, and operational vacancy.",

      eligibilityTitle: "Admission & Eligibility",
      eligibilitySubtitle: "Structured pathways designed to help motivated individuals build practical careers within modern dental imaging environments.",
      minReq: "Minimum Requirements",
      minReq1: "18 years of age or older",
      minReq2: "12th Standard pass or higher",
      minReq3: "Basic computer knowledge",
      minReq4: "Ability to read and understand educational material in English, Marathi or Hindi",
      whoCanApplyTitle: "Who Can Apply?",
      whoCanApplyDesc1: "Applicants from any educational stream are welcome, including Science, Commerce, Arts and vocational backgrounds.",
      whoCanApplyDesc2: "Prior healthcare experience is not required.",
      whoCanApplyDesc3: "The desire to learn, work sincerely, maintain professionalism and demonstrate integrity is valued more highly than any specific academic stream.",
      whoCanApplyDesc4: "Science background is NOT mandatory.",

      trainWhereTitle: "Train Where Professionals Work",
      trainWhereDesc: "A comparison between active clinical environments and potential job opportunities.",
      trainWhereSub: "Train inside real Nidaan Centres. Potentially work inside real Nidaan Centres.",
      trainingEnvTitle: "Training Environment",
      trainingEnv1: "Real dental imaging centres",
      trainingEnv2: "Real CBCT & OPG workflows",
      trainingEnv3: "Real equipment exposure",
      trainingEnv4: "Real operational systems",
      trainingEnv5: "Real patient-facing environments",
      careerPathwayOppTitle: "Job Opportunities",
      careerPathwayOpp1: "Performance-based consideration",
      careerPathwayOpp2: "Professionalism and ethics",
      careerPathwayOpp3: "Operational requirements",
      careerPathwayOpp4: "Organizational fit",
      careerPathwayOpp5: "Opportunities within Nidaan and SOVAKA",

      frameworkTitle: "Operational Radiology Exposure",
      frameworkSubtitle: "Key parameters governing patient safety, language coordination, and clinical locations.",
      nidaanTitle: "Training Inside Active Imaging Environments",
      nidaanDesc: "Unlike simulated classrooms, our training ecosystem is fully integrated with active clinical operations. Students undergo practical training directly inside functioning Nidaan CBCT & OPG imaging centres in Pune. This ensures hands-on competence with real patients, clinical schedules, and teleradiology data routing protocols.",
      nidaanLink: "Explore Nidaan CBCT & OPG Centre Locations ↗",
      trainingInfoText1: "Training material is provided in English, spoken Marathi or spoken Hindi depending on the student’s preferred language, ensuring operational radiology concepts can be understood clearly without language becoming a barrier to learning.",
      trainingInfoText2: "Practical workflow exposure and operational training are conducted within active Nidaan CBCT & OPG imaging environments in Pune, enabling students to learn directly inside functioning dental imaging ecosystems.",
      trainingInfoText3: "Training locations are coordinated mutually between the student and the SOVAKA/Nidaan operational team based on workflow availability and infrastructure scheduling.",

      curriculumTitle: "Inside the Training Curriculum",
      curriculumDesc: "Preview the structured educational manuals developed by SOVAKA's academic and clinical coordination desks.",
      curriculumNote: "Note: The pages below represent proprietary curriculum preview sheets for patient positioning, OPG/CBCT concepts, and multilingual workflow glossary.",
      curriculumMicroCaption: "Selected excerpts from the SOVAKA Dental Radiology Technician Training curriculum, available in English, Marathi or Hindi based on the student's preferred language.",

      applyTitle: "Apply for Training",
      applyStep1: "1. Program Evaluation",
      applyStep1Desc: "Review the curriculum details, eligibility guidelines, and operational scope listed on this page.",
      applyStep2: "2. Clinical Location Coordination",
      applyStep2Desc: "Coordinate training timelines and Pune clinical centre schedules with our operations team.",
      applyStep3: "3. Submit Application Form",
      applyStep3Desc: "Fill out the digital gateway coordinates to register your credentials for batch intake.",
      applyStep4: "4. Telephonic Verification",
      applyStep4Desc: "Receive a call from our Pune academic support team to align on schedules, batch timing, and slots.",
      btnApply: "Apply for Training",
      btnCall: "Speak With Our Training Team",
      rollingNotice: "Applications are reviewed on a rolling basis based on training capacity and operational schedules.",
      secondaryCareerMsg: "Job opportunities may be available for selected candidates upon successful completion.",
      registryTitle: "SOVAKA & NIDAAN Certified Professionals Registry",
      registryCertLabel: "Certificate Name",
      registryCertName: "Certificate Course in Extraoral Dental Radiography",
      registryIntro: "This registry allows employers, institutions and professionals to verify individuals who have successfully completed the Certificate Course in Extraoral Dental Radiography conducted under the SOVAKA & NIDAAN ecosystem.",
      registryTotal: "Total Certified Professionals",
      registrySearch: "Search Certified Professional",
      registrySrNo: "Sr. No.",
      registryName: "Name",
      registryMonth: "Month",
      registryYear: "Year",
      registryLoading: "Loading registry...",
      registryNoResults: 'No certified professionals found matching "{query}"',
      registryEmptyState: "No certified professionals have been published yet. The registry will be updated as candidates successfully complete the Certificate Course in Extraoral Dental Radiography."
    },
    mr: {
      pageLabel: "डेंटल रेडिओलॉजी टेक्निशियन ट्रेनिंग आणि नोकरीच्या संधी",
      heroTitle: "डेंटल रेडिओलॉजी टेक्निशियन ट्रेनिंग आणि नोकरीच्या संधी",
      heroValueStrip: "१-महिन्याचा प्रात्याक्षिक प्रशिक्षण कार्यक्रम | कार्यरत निदान सीबीसीटी आणि ओपीजी केंद्रांमध्ये प्रशिक्षण | उत्कृष्ट कामगिरी करणाऱ्या उमेदवारांसाठी नोकरीच्या संधी",
      heroCredStrip: "४०+ वर्षांचा वारसा | ६ कार्यरत क्लिनिकल सेंटर्स | सक्रिय प्रॅक्टिकल ट्रेनिंग वातावरण",
      heroDesc: "सोव्हाका लाइफसायन्सेस (SOVAKA Lifesciences) दंत इमेजिंग तंत्रज्ञांची नवीन पिढी तयार करत आहे. अभ्यासक्रम, बहुभाषिक मार्गदर्शन आणि कार्यरत निदान (Nidaan) सीबीसीटी आणि ओपीजी केंद्रांमधील प्रत्यक्ष कामाच्या अनुभवाद्वारे उमेदवार आधुनिक दंत इमेजिंग क्षेत्रात यशस्वी करिअर घडवण्यासाठी आवश्यक कौशल्ये आत्मसात करतात. प्रत्यक्ष निदान केंद्रांमध्ये प्रशिक्षण घ्या आणि भविष्यात तेथेच काम करण्याची संधी मिळवा.",
      nidaanHeading: "कार्यरत पायाभूत सुविधा",
      nidaanSub: "सक्रिय प्रशिक्षण केंद्र नेटवर्क ↗",

      careerPathwayTitle: "नोकरीच्या संधी",
      careerPathwayDesc: "उत्कृष्ट कामगिरी करणाऱ्या उमेदवारांना त्यांच्या कार्यातील गुणवत्ता, व्यावसायिकता आणि सोव्हाका/निदान ऑपरेशन्स टीमच्या निकषांच्या आधारे, निदान सीबीसीटी आणि ओपीजी सेंटर्स तसेच सोव्हाका परिसंस्थेमध्ये नोकरीच्या संधींसाठी विचार केला जाऊ शकतो. प्रत्यक्ष निदान केंद्रांमध्ये काम करण्याची संधी मिळवा.",
      careerPathwayDisclaimer: "नोकरीच्या संधी गुणवत्ता तपासणी, व्यावसायिकता आणि ऑपरेशन्स टीमच्या गरजेवर आधारित आहेत.",

      eligibilityTitle: "प्रवेश आणि पात्रता निकष",
      eligibilitySubtitle: "प्रेरित उमेदवारांना आधुनिक डेंटल इमेजिंग क्षेत्रात प्रत्यक्ष करिअर घडवण्यासाठी तयार केलेले सुलभ मार्ग.",
      minReq: "किमान आवश्यकता",
      minReq1: "वय १८ वर्षे किंवा त्याहून अधिक",
      minReq2: "१२ वी उत्तीर्ण किंवा उच्च शिक्षण",
      minReq3: "मूलभूत संगणक ज्ञान",
      minReq4: "इंग्रजी, मराठी किंवा हिंदी भाषेतील अभ्यास साहित्य वाचण्याची आणि समजून घेण्याची क्षमता",
      whoCanApplyTitle: "कोण अर्ज करू शकतात?",
      whoCanApplyDesc1: "विज्ञान, वाणिज्य, कला किंवा व्यावसायिक (व्होकेशनल) अशा कोणत्याही शैक्षणिक शाखेतील उमेदवारांचे स्वागत आहे.",
      whoCanApplyDesc2: "आरोग्य सेवा क्षेत्रातील (हेल्थकेयर) कोणत्याही पूर्व अनुभवाची आवश्यकता नाही.",
      whoCanApplyDesc3: "कोणत्याही विशिष्ट पदवीपेक्षा शिकण्याची इच्छा, प्रामाणिकपणे काम करण्याची वृत्ती, व्यावसायिकता आणि सचोटी राखणे या गुणांना अधिक महत्त्व दिले जाते.",
      whoCanApplyDesc4: "विज्ञानाची पार्श्वभूमी असणे बंधनकारक नाही.",

      trainWhereTitle: "व्यावसायिकांच्या सानिध्यात प्रॅक्टिकल शिक्षण",
      trainWhereDesc: "थेट प्रॅक्टिकल क्लिनिकल प्रशिक्षण वातावरण आणि नोकरीच्या संधींची तुलना.",
      trainWhereSub: "प्रत्यक्ष कार्यरत निदान सीबीसीटी आणि ओपीजी केंद्रांमध्ये प्रशिक्षण घ्या. भविष्यात कार्यरत निदान केंद्रांमध्येच कामाची संधी मिळवा.",
      trainingEnvTitle: "प्रशिक्षण वातावरण",
      trainingEnv1: "प्रत्यक्ष दंत इमेजिंग सेंटर्स",
      trainingEnv2: "प्रत्यक्ष सीबीसीटी आणि ओपीजी वर्कफ्लो",
      trainingEnv3: "प्रत्यक्ष मशिन व उपकरण अनुभव",
      trainingEnv4: "कार्यरत ऑपरेशन्स पद्धती",
      trainingEnv5: "प्रत्यक्ष रुग्णांशी संवाद आणि हाताळणी",
      careerPathwayOppTitle: "नोकरीच्या संधी",
      careerPathwayOpp1: "कामगिरीवर आधारित संधी",
      careerPathwayOpp2: "व्यावसायिकता आणि आचारसंहिता",
      careerPathwayOpp3: "ऑपरेशन्स टीमच्या गरजा",
      careerPathwayOpp4: "योग्य संघटनात्मक परस्परसंवाद",
      careerPathwayOpp5: "निदान आणि सोव्हाका परिसंस्थेमध्ये नोकरीच्या संधी",

      frameworkTitle: "कार्यप्रणाली आणि प्रशिक्षण फ्रेमवर्क",
      frameworkSubtitle: "रुग्ण सुरक्षा, भाषा समन्वय आणि क्लिनिकल केंद्रांचे नियोजन करणारे मुख्य निकष.",
      nidaanTitle: "सक्रिय क्लिनिकल वातावरणात प्रत्यक्ष प्रशिक्षण",
      nidaanDesc: "सिम्युलेटर किंवा वर्गांपलीकडे जाऊन, आमचा प्रशिक्षण कार्यक्रम थेट पुण्यातील कार्यरत निदान (Nidaan) सीबीसीटी आणि ओपीजी इमेजिंग केंद्रांशी जोडलेला आहे. विद्यार्थी येथे प्रत्यक्ष रुग्ण, क्लिनिकल वेळापत्रक आणि टेलिराडिओलॉजी डेटा व्यवस्थापनाचा अनुभव घेतात.",
      nidaanLink: "निदान सीबीसीटी आणि ओपीजी केंद्रांची ठिकाणे एक्सप्लोर करा ↗",
      trainingInfoText1: "प्रशिक्षण साहित्य इंग्रजीमध्ये, आणि संवाद/स्पष्टीकरण विद्यार्थ्यांच्या पसंतीनुसार बोलल्या जाणाऱ्या मराठी किंवा हिंदी भाषेत प्रदान केले जाते, ज्यामुळे तांत्रिक संकल्पना समजताना भाषा ही अडथळा ठरणार नाही.",
      trainingInfoText2: "प्रात्याक्षिक काम आणि ऑपरेशन्सचे थेट प्रशिक्षण पुण्यातील कार्यरत निदान (Nidaan) सीबीसीटी आणि ओपीजी इमेजिंग केंद्रांमध्ये दिले जाते, ज्यामुळे विद्यार्थ्यांना थेट कार्यरत दंत इमेजिंग केंद्रांमध्ये शिकण्याची संधी मिळते.",
      trainingInfoText3: "प्रशिक्षणाचे ठिकाण आणि वेळापत्रक विद्यार्थी आणि सोव्हाका/निदान ऑपरेशन्स टीम यांच्यातील चर्चेद्वारे केंद्रातील मशीनची उपलब्धता आणि वेळापत्रकानुसार परस्पर संमतीने ठरवले जाते.",

      curriculumTitle: "अभ्यासक्रमाचे स्वरूप",
      curriculumDesc: "सोव्हाका शैक्षणिक विभागाद्वारे विकसित केलेल्या अधिकृत अभ्यासक्रम मॅन्युअलचे पूर्वावलोकन करा.",
      curriculumNote: "टीप: खालील पृष्ठे अभ्यासक्रम, रुग्णांची पोझिशनिंग आणि बहुभाषिक शब्दावली दर्शवणारे नमुने आहेत.",
      curriculumMicroCaption: "सोव्हाका दंत रेडिओलॉजी तंत्रज्ञ अभ्यासक्रमातील निवडक नमुने, विद्यार्थ्यांच्या पसंतीनुसार इंग्रजी, मराठी किंवा हिंदीमध्ये उपलब्ध.",

      applyTitle: "प्रशिक्षणासाठी अर्ज करा",
      applyStep1: "१. अभ्यासक्रम समजून घेणे",
      applyStep1Desc: "या पृष्ठावर दिलेल्या अभ्यासक्रमाची माहिती, पात्रता आणि केंद्रांची माहिती तपासा.",
      applyStep2: "२. केंद्राचे नियोजन",
      applyStep2Desc: "पुण्यातील आमच्या केंद्रांमधील मशिनची उपलब्धता आणि वेळेचे ऑपरेशन्स टीमसोबत नियोजन करा.",
      applyStep3: "३. अर्ज सादर करणे",
      applyStep3Desc: "पुढील प्रवेश बॅचसाठी आमचा ऑनलाइन चौकशी अर्ज भरून तुमची नोंदणी पूर्ण करा.",
      applyStep4: "४. फोनद्वारे पडताळणी",
      applyStep4Desc: "वेळापत्रक, बॅचची वेळ आणि इतर तपशीलांसाठी आमच्या पुणे ऑपरेशन्स टीमकडून फोनद्वारे संपर्क केला जाईल.",
      btnApply: "प्रशिक्षणासाठी अर्ज करा",
      btnCall: "आमच्या ट्रेनिंग टीमशी बोला",
      rollingNotice: "प्रवेश क्षमता आणि ऑपरेशन्सच्या वेळापत्रकावर आधारित अर्जांचे पुनरावलोकन वेळोवेळी (रोलिंग बेसिस) केले जाते.",
      secondaryCareerMsg: "प्रशिक्षण यशस्वीरीत्या पूर्ण केल्यावर निवडक उमेदवारांसाठी नोकरीच्या संधी उपलब्ध असू शकतात.",
      registryTitle: "सोव्हाका आणि निदान प्रमाणित व्यावसायिक नोंदणी",
      registryCertLabel: "प्रमाणपत्राचे नाव",
      registryCertName: "एक्स्ट्राओरल डेंटल रेडिओलॉजीमधील प्रमाणपत्र अभ्यासक्रम",
      registryIntro: "ही नोंदणी नियोक्ते, संस्था आणि व्यावसायिकांना सोव्हाका आणि निदान परिसंस्थेअंतर्गत एक्स्ट्राओरल डेंटल रेडिओग्राफीमधील प्रमाणपत्र अभ्यासक्रम यशस्वीरित्या पूर्ण केलेल्या व्यक्तींची पडताळणी करण्यास मदत करते.",
      registryTotal: "एकूण प्रमाणित व्यावसायिक",
      registrySearch: "प्रमाणित व्यावसायिक शोधा",
      registrySrNo: "अनुक्रमांक",
      registryName: "नाव",
      registryMonth: "महिना",
      registryYear: "वर्ष",
      registryLoading: "नोंदणी लोड होत आहे...",
      registryNoResults: '"{query}" या नावाने कोणीही प्रमाणित व्यावसायिक आढळले नाही',
      registryEmptyState: "अद्याप कोणतेही प्रमाणित व्यावसायिक प्रकाशित केलेले नाहीत. उमेदवारांनी एक्स्ट्राओरल डेंटल रेडिओग्राफीमधील प्रमाणपत्र अभ्यासक्रम यशस्वीरित्या पूर्ण केल्यानंतर नोंदणी अपडेट केली जाईल."
    },
    hi: {
      pageLabel: "डेंटल रेडियोलॉजी तकनीशियन प्रशिक्षण और नौकरी के अवसर",
      heroTitle: "डेंटल रेडियोलॉजी तकनीशियन प्रशिक्षण और नौकरी के अवसर",
      heroValueStrip: "1-महीने का व्यावहारिक प्रशिक्षण कार्यक्रम | कार्यरत निदान सीबीसीटी और ओपीजी केंद्रों में प्रशिक्षण | उत्कृष्ट प्रदर्शन करने वाले उम्मीदवारों के लिए नौकरी के अवसर",
      heroCredStrip: "40+ वर्षों की विरासत | 6 सक्रिय क्लिनिकल सेंटर्स | वास्तविक व्यावहारिक प्रशिक्षण वातावरण",
      heroDesc: "सोवाका लाइफसाइंसेज (SOVAKA Lifesciences) डेंटल इमेजिंग पेशेवरों की अगली पीढ़ी को तैयार कर रहा है। व्यवस्थित प्रशिक्षण, बहुभाषी मार्गदर्शन और कार्यरत निदान (Nidaan) सीबीसीटी और ओपीजी केंद्रों में व्यावहारिक अनुभव के माध्यम से उम्मीदवार आधुनिक डेंटल इमेजिंग वातावरण में करियर बनाने के लिए आवश्यक कौशल प्राप्त करते हैं। वास्तविक निदान केंद्रों के भीतर प्रशिक्षण प्राप्त करें और वहां काम करने के अवसर पाएं।",
      nidaanHeading: "सक्रिय संचालन अवसंरचना",
      nidaanSub: "सक्रिय प्रशिक्षण केंद्र नेटवर्क ↗",

      careerPathwayTitle: "नौकरी के अवसर",
      careerPathwayDesc: "उत्कृष्ट प्रदर्शन करने वाले उम्मीदवारों को उनकी व्यावसायिकता, कार्य गुणवत्ता और संगठनात्मक आवश्यकताओं के आधार पर निदान सीबीसीटी और ओपीजी केंद्रों तथा व्यापक सोवाका पारिस्थितिकी तंत्र के भीतर नौकरी के अवसरों के लिए विचार किया जा सकता है। वास्तविक निदान केंद्रों के भीतर काम करने के अवसर पाएं।",
      careerPathwayDisclaimer: "नौकरी के अवसर प्रदर्शन मूल्यांकन, व्यावसायिकता और परिचालन आवश्यकता पर आधारित हैं।",

      eligibilityTitle: "प्रवेश एवं पात्रता मानदंड",
      eligibilitySubtitle: "प्रेरित व्यक्तियों को आधुनिक डेंटल इमेजिंग वातावरण में व्यावहारिक करियर बनाने में मदद करने के लिए डिज़ाइन किए गए सुलभ मार्ग।",
      minReq: "न्यूनतम आवश्यकताएं",
      minReq1: "आयु 18 वर्ष या उससे अधिक",
      minReq2: "12वीं कक्षा उत्तीर्ण या उच्चतर",
      minReq3: "बुनियादी कंप्यूटर ज्ञान",
      minReq4: "अंग्रेजी, मराठी या हिंदी में शैक्षिक सामग्री को पढ़ने और समझने की क्षमता",
      whoCanApplyTitle: "कौन आवेदन कर सकता है?",
      whoCanApplyDesc1: "विज्ञान, वाणिज्य, कला और व्यावसायिक (वोकेशनल) पृष्ठभूमि सहित किसी भी शैक्षणिक स्ट्रीम के उम्मीदवारों का स्वागत है।",
      whoCanApplyDesc2: "स्वास्थ्य सेवा (हेल्थकेयर) क्षेत्र में किसी पूर्व अनुभव की आवश्यकता नहीं है।",
      whoCanApplyDesc3: "किसी विशिष्ट शैक्षणिक स्ट्रीम की तुलना में सीखने की इच्छा, ईमानदारी से काम करना, व्यावसायिकता बनाए रखना और ईमानदारी का प्रदर्शन करना अधिक मूल्यवान माना जाता है।",
      whoCanApplyDesc4: "विज्ञान पृष्ठभूमि होना अनिवार्य नहीं है।",

      trainWhereTitle: "सीखें वहां जहां पेशेवर काम करते हैं",
      trainWhereDesc: "सक्रिय व्यावहारिक नैदानिक प्रशिक्षण वातावरण और संभावित नौकरी के अवसरों की तुलना।",
      trainWhereSub: "वास्तविक निदान सीबीसीटी और ओपीजी केंद्रों के भीतर प्रशिक्षण प्राप्त करें। संभावित रूप से वास्तविक निदान केंद्रों के भीतर काम करें।",
      trainingEnvTitle: "प्रशिक्षण वातावरण",
      trainingEnv1: "वास्तविक दंत इमेजिंग केंद्र",
      trainingEnv2: "वास्तविक सीबीसीटी और ओपीजी वर्कफ़्लो",
      trainingEnv3: "वास्तविक उपकरण एवं मशीन अनुभव",
      trainingEnv4: "सक्रिय संचालन प्रणालियाँ",
      trainingEnv5: "वास्तविक रोगी-सामना वातावरण",
      careerPathwayOppTitle: "नौकरी के अवसर",
      careerPathwayOpp1: "प्रदर्शन-आधारित अवसर",
      careerPathwayOpp2: "व्यावसायिकता और नैतिकता",
      careerPathwayOpp3: "परिचालन आवश्यकताएं",
      careerPathwayOpp4: "संगठनात्मक उपयुक्तता",
      careerPathwayOpp5: "निदान और सोवाका पारिस्थितिकी तंत्र में नौकरी के अवसर",

      frameworkTitle: "संचालन एवं प्रशिक्षण रूपरेखा",
      frameworkSubtitle: "रोगी सुरक्षा, भाषा समन्वय और नैदानिक स्थानों को नियंत्रित करने वाले प्रमुख पैरामीटर।",
      nidaanTitle: "सक्रिय नैदानिक केंद्रों में व्यावहारिक प्रशिक्षण",
      nidaanDesc: "कृत्रिम क्लासरूम से परे, हमारा प्रशिक्षण पारिस्थितिकी तंत्र पुणे में कार्यरत निदान (Nidaan) सीबीसीटी और ओपीजी केंद्रों से सीधे जुड़ा है। छात्र वास्तविक मरीजों, नैदानिक समय सारिणी और टेलीरेडियोलॉजी डेटा ट्रांसफर का लाइव अनुभव प्राप्त करते हैं.",
      nidaanLink: "निदान सीबीसीटी और ओपीजी केंद्रों के स्थानों की जांच करें ↗",
      trainingInfoText1: "प्रशिक्षण सामग्री अंग्रेजी में, और निर्देश/स्पष्टीकरण छात्रों की पसंद के अनुसार बोली जाने वाली मराठी या हिंदी में प्रदान किए जाते हैं, जिससे तकनीकी अवधारणाओं को सीखने में भाषा बाधा न बने और संकल्पनाएं स्पष्ट रूप से समझी जा सकें।",
      trainingInfoText2: "व्यावहारिक कार्य और संचालन प्रशिक्षण पुणे में कार्यरत निदान (Nidaan) सीबीसीटी और ओपीजी इमेजिंग केंद्रों के भीतर संचालित किया जाता है, जिससे छात्र सीधे कार्यरत दंत इमेजिंग केंद्रों में सीख सकते हैं।",
      trainingInfoText3: "प्रशिक्षण स्थान और समय सारिणी मशीन की उपलब्धता और ऑपरेशन्स शेड्यूल के आधार पर छात्र और सोवाका/निदान टीम की आपसी सहमति से तय की जाती है।",

      curriculumTitle: "पाठ्यक्रम का पूर्वावलोकन",
      curriculumDesc: "सोवाका शैक्षणिक विभाग द्वारा तैयार की गई आधिकारिक प्रशिक्षण नियमावली का पूर्वावलोकन करें.",
      curriculumNote: "नोट: नीचे दी गई पृष्ठ प्रतियां पाठ्यक्रम, रोगी पोजीशनिंग और बहुभाषी तकनीकी शब्दावली की झलक प्रदान करती हैं.",
      curriculumMicroCaption: "सोवाका दंत रेडियोलॉजी तकनीशियन प्रशिक्षण नियमावली के चयनित अंश, छात्र की पसंद के अनुसार अंग्रेजी, मराठी या हिंदी में उपलब्ध।",

      applyTitle: "प्रशिक्षण के लिए आवेदन करें",
      applyStep1: "1. कार्यक्रम मूल्यांकन",
      applyStep1Desc: "इस पृष्ठ पर दिए गए पाठ्यक्रम विवरण, पात्रता दिशानिर्देश और संचालन क्षेत्रों की समीक्षा करें.",
      applyStep2: "2. नैदानिक केंद्र समन्वय",
      applyStep2Desc: "पुणे के केंद्रों में मशीन उपलब्धता और प्रशिक्षण समय सारिणी का संचालन टीम के साथ समन्वय करें.",
      applyStep3: "3. आवेदन पत्र जमा करें",
      applyStep3Desc: "बैच प्रवेश के लिए क्रेडेंशियल दर्ज करने हेतु हमारी डिजिटल पूछताछ खिड़की पर पंजीकरण करें.",
      applyStep4: "4. टेलीफोनिक सत्यापन",
      applyStep4Desc: "शेड्यूल, बैच समय और स्लॉट आवंटन के लिए हमारी पुणे शैक्षणिक समन्वय टीम से कॉल प्राप्त करें.",
      btnApply: "प्रशिक्षण के लिए आवेदन करें",
      btnCall: "हमारी ट्रेनिंग टीम से बात करें",
      rollingNotice: "प्रवेश क्षमता और परिचालन कार्यक्रम के आधार पर आवेदनों की समीक्षा रोलिंग आधार पर समय-समय पर की जाती है।",
      secondaryCareerMsg: "प्रशिक्षण सफलतापूर्वक पूरा करने पर चयनित उम्मीदवारों के लिए नौकरी के अवसर उपलब्ध हो सकते हैं।",
      registryTitle: "सोवाका और निदान प्रमाणित पेशेवर रजिस्ट्री",
      registryCertLabel: "प्रमाणपत्र का नाम",
      registryCertName: "एक्स्ट्राओरल डेंटल रेडियोलॉजी में प्रमाणपत्र पाठ्यक्रम",
      registryIntro: "यह रजिस्ट्री नियोक्ताओं, संस्थानों और पेशेवरों को उन व्यक्तियों को सत्यापित करने की अनुमति देती है जिन्होंने सोवाका और निदान पारिस्थितिकी तंत्र के तहत आयोजित एक्स्ट्राओरल डेंटल रेडियोग्राफी में प्रमाणपत्र पाठ्यक्रम सफलतापूर्वक पूरा कर लिया है।",
      registryTotal: "कुल प्रमाणित पेशेवर",
      registrySearch: "प्रमाणित पेशेवर खोजें",
      registrySrNo: "क्र. सं.",
      registryName: "नाम",
      registryMonth: "महिना",
      registryYear: "वर्ष",
      registryLoading: "रजिस्ट्री लोड हो रही है...",
      registryNoResults: '"{query}" नाम से कोई भी प्रमाणित पेशेवर नहीं मिला',
      registryEmptyState: "अभी तक कोई भी प्रमाणित पेशेवर प्रकाशित नहीं किया गया है। उम्मीदवारों द्वारा एक्स्ट्राओरल डेंटल रेडियोग्राफी में प्रमाणपत्र पाठ्यक्रम सफलतापूर्वक पूरा करने के बाद रजिस्ट्री अपडेट की जाएगी।"
    }
  };

  const faqs = {
    en: [
      {
        q: "Is training provided in regional languages?",
        a: "Yes. The coursebook, explaining concepts, practical workflows and student guidance are provided in English, Marathi or Hindi depending on the language preference of the student."
      },
      {
        q: "What is the duration of the training program?",
        a: "The program spans 1 month, combining theory, equipment safety training and intensive hands-on clinical exposure."
      },
      {
        q: "Will I receive a certificate upon completion?",
        a: "Yes. Students who successfully complete the operational assessments and practical audits receive a certification from SOVAKA Lifesciences co-branded with Nidaan."
      },
      {
        q: "Is a science background mandatory?",
        a: "No. Students from Science, Commerce, Arts and other educational backgrounds are welcome to apply."
      },
      {
        q: "Where is practical training conducted?",
        a: "Practical training is conducted within active Nidaan CBCT & OPG imaging environments in Pune."
      },
      {
        q: "Can students from Arts or Commerce backgrounds apply?",
        a: "Yes. Applicants from any educational stream may apply provided they meet the minimum eligibility requirements."
      }
    ],
    mr: [
      {
        q: "प्रशिक्षण प्रादेशिक भाषांमध्ये दिले जाते का?",
        a: "होय. विद्यार्थ्यांच्या भाषेच्या पसंतीनुसार अभ्यासक्रम पुस्तक, संकल्पनांचे स्पष्टीकरण, प्रात्याक्षिक काम आणि मार्गदर्शन इंग्रजी, मराठी किंवा हिंदीमध्ये उपलब्ध करून दिले जाते."
      },
      {
        q: "प्रशिक्षण कार्यक्रमाचा कालावधी किती आहे?",
        a: "हा कार्यक्रम १ महिन्याचा आहे, ज्यामध्ये थेअरी शिक्षण, उपकरण सुरक्षा प्रशिक्षण आणि सक्रिय इमेजिंग केंद्रांमध्ये सखोल प्रात्याक्षिक कामाचा समावेश आहे."
      },
      {
        q: "कोर्स पूर्ण झाल्यावर मला प्रमाणपत्र मिळेल का?",
        a: "होय. जे विद्यार्थी प्रात्याक्षिक मूल्यांकन आणि ऑपरेशन्स ऑडिट यशस्वीरित्या पूर्ण करतील त्यांना सोव्हाका लाइफसायन्सेस (SOVAKA Lifesciences) आणि निदान (Nidaan) यांचे सह-ब्रँडेड प्रमाणपत्र दिले जाईल."
      },
      {
        q: "विज्ञानाची पार्श्वभूमी असणे बंधनकारक आहे का?",
        a: "नाही. सायन्स, कॉमर्स, आर्ट्स आणि इतर कोणत्याही शैक्षणिक पार्श्वभूमीचे विद्यार्थी अर्ज करू शकतात."
      },
      {
        q: "प्रात्याक्षिक प्रशिक्षण कोठे आयोजित केले जाते?",
        a: "प्रात्याक्षिक (प्रॅक्टिकल) प्रशिक्षण पुण्यातील कार्यरत निदान (Nidaan) सीबीसीटी आणि ओपीजी केंद्रांमध्ये दिले जाते."
      },
      {
        q: "आर्ट्स किंवा कॉमर्स शाखेचे विद्यार्थी अर्ज करू शकतात का?",
        a: "होय. किमान पात्रता निकष पूर्ण करणारे कोणत्याही शैक्षणिक शाखेतील उमेदवार अर्ज करू शकतात."
      }
    ],
    hi: [
      {
        q: "क्या प्रशिक्षण क्षेत्रीय भाषाओं में प्रदान किया जाता है?",
        a: "हाँ। छात्र की भाषा प्राथमिकता के आधार पर पाठ्यक्रम नियमावली, अवधारणाओं का स्पष्टीकरण, व्यावहारिक कार्यप्रणाली और छात्र मार्गदर्शन अंग्रेजी, मराठी या हिंदी में प्रदान किया जाता है।"
      },
      {
        q: "प्रशिक्षण कार्यक्रम की अवधि क्या है?",
        a: "यह कार्यक्रम 1 महीने का है, जिसमें सिद्धांत, उपकरण सुरक्षा प्रशिक्षण और सक्रिय इमेजिंग केंद्रों के भीतर व्यावहारिक नैदानिक अनुभव शामिल है।"
      },
      {
        q: "क्या कोर्स पूरा होने पर मुझे प्रमाणपत्र मिलेगा?",
        a: "हाँ। जो छात्र व्यावहारिक मूल्यांकन और परिचालन ऑडिट को सफलतापूर्वक पूरा करते हैं, उन्हें सोवाका लाइफसाइंसेज (SOVAKA Lifesciences) और निदान (Nidaan) द्वारा सह-ब्रांडेड प्रमाणपत्र प्राप्त होता है।"
      },
      {
        q: "क्या विज्ञान पृष्ठभूमि होना अनिवार्य है?",
        a: "नहीं। विज्ञान, वाणिज्य, कला और अन्य शैक्षणिक पृष्ठभूमि के छात्र आवेदन करने के लिए स्वागत योग्य हैं।"
      },
      {
        q: "व्यावहारिक प्रशिक्षण कहाँ आयोजित किया जाता है?",
        a: "व्यावहारिक प्रशिक्षण पुणे में कार्यरत निदान (Nidaan) सीबीसीटी और ओपीजी इमेजिंग केंद्रों के भीतर आयोजित किया जाता है।"
      },
      {
        q: "क्या कला या वाणिज्य पृष्ठभूमि के छात्र आवेदन कर सकते हैं?",
        a: "हाँ। न्यूनतम पात्रता आवश्यकताओं को पूरा करने वाले किसी भी शैक्षणिक स्ट्रीम के उम्मीदवार आवेदन कर सकते हैं।"
      }
    ]
  };

  const activeContent = content[language];
  const activeFaqs = faqs[language];

  const filteredProfessionals = professionals.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const ITEMS_PER_PAGE = 10;
  const totalPages = Math.ceil(filteredProfessionals.length / ITEMS_PER_PAGE) || 1;
  const activePage = Math.min(currentPage, totalPages);
  const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
  const paginatedProfessionals = filteredProfessionals.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAF9F5] dark:bg-[#0a0a0a] pt-[120px] pb-24 text-[#1A1A1A] dark:text-zinc-200 transition-colors duration-300">
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 xl:px-32">
          
          {/* Section 1: Hero Section */}
          <section className="mb-16 lg:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-8 space-y-6">
                <span className="inline-block uppercase tracking-[0.15em] text-xs font-semibold text-[#1A1A1A] dark:text-zinc-300 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-sm">
                  {activeContent.pageLabel}
                </span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#1A1A1A] dark:text-zinc-50">
                  {activeContent.heroTitle}
                </h1>
                
                {/* Multilingual Accessibility System (Relocated below title for primary visibility) */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 py-4 my-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#666666] dark:text-zinc-400 whitespace-nowrap">
                    Choose Your Language / भाषा निवडा / भाषा चुनें
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {(["en", "mr", "hi"] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`px-6 py-2.5 rounded-full text-[13px] font-bold tracking-wider uppercase transition-all duration-300 ${
                          language === lang
                            ? "bg-zinc-950 dark:bg-zinc-50 text-white dark:text-[#1A1A1A] scale-[0.98] shadow-sm"
                            : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[#666666] hover:text-[#1A1A1A] dark:hover:text-zinc-350 hover:bg-zinc-50 dark:hover:bg-zinc-850"
                        }`}
                      >
                        {lang === "en" ? "English" : lang === "mr" ? "मराठी" : "हिंदी"}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Value Strip */}
                <div className="border-y border-zinc-200 dark:border-zinc-800/80 py-4 my-6">
                  <p className="text-sm md:text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-250 leading-relaxed uppercase">
                    {activeContent.heroValueStrip}
                  </p>
                </div>

                {/* Trust/Credibility Strip */}
                <div className="bg-sand-50 dark:bg-zinc-900/50 border border-sand-200 dark:border-zinc-800/80 p-4 rounded-sm">
                  <p className="text-xs md:text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {activeContent.heroCredStrip}
                  </p>
                </div>

                <p className="text-lg md:text-xl text-[#4F4F4F] dark:text-zinc-400 leading-relaxed max-w-[760px]">
                  {activeContent.heroDesc}
                </p>

                {/* Hero CTAs */}
                <div className="pt-8 space-y-4">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <a 
                      href="https://forms.gle/vGUGby9hmxY3wDTW8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-[#1A1A1A] font-medium rounded-sm transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[0.98]"
                    >
                      <span>{activeContent.btnApply}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <a 
                      href="tel:+919307668998"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-zinc-200 dark:border-zinc-800 text-[#1A1A1A] dark:text-zinc-100 font-medium rounded-sm transition-all duration-300 hover:bg-sand-50 dark:hover:bg-zinc-900 hover:scale-[0.98]"
                    >
                      <span>{activeContent.btnCall}</span>
                    </a>
                  </div>

                  {/* Direct Coordination Desks contact strip */}
                  <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 mt-2 max-w-[500px]">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-[#666666] dark:text-zinc-500 mb-1">
                      Direct Coordination Desks
                    </span>
                    <span className="block text-sm sm:text-base font-semibold text-[#1A1A1A] dark:text-zinc-300 tracking-tight">
                      +91 93076 68998 &nbsp;|&nbsp; +91 98230 99115 &nbsp;|&nbsp; +91 98230 05337
                    </span>
                  </div>

                  <p className="text-xs text-[#666666] dark:text-zinc-500 italic pt-1">
                    {activeContent.secondaryCareerMsg}
                  </p>
                </div>
              </div>
              
              {/* Nidaan Logo Area (Right Column) - Trust Anchor */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <a 
                  href="https://www.nidaandental.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block p-10 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 max-w-[340px] text-center w-full"
                >
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-[#666666] dark:text-zinc-500 mb-6">
                    {activeContent.nidaanHeading}
                  </span>
                  <img 
                    src="/nidaan-logo.webp" 
                    alt="Nidaan CBCT & OPG Centre" 
                    className="h-20 md:h-24 mx-auto object-contain dark:invert mb-6 transition-transform duration-300 group-hover:scale-105"
                    width={1024}
                    height={427}
                  />
                  <span className="block text-[11px] font-semibold text-[#1A1A1A] dark:text-zinc-300 tracking-wider uppercase mt-4 border-t border-zinc-150 dark:border-zinc-900 pt-4">
                    {activeContent.nidaanSub}
                  </span>
                </a>
              </div>
            </div>
          </section>

          {/* Section 2: Admission & Eligibility */}
          <section className="mb-20 border-t border-zinc-200 dark:border-zinc-800 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4">
                <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-4">Ecosystem Entry</span>
                <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                  {activeContent.eligibilityTitle}
                </h2>
                <p className="text-base md:text-lg text-[#4F4F4F] dark:text-zinc-400 mt-4 max-w-[320px] leading-relaxed">
                  {activeContent.eligibilitySubtitle}
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Minimum Requirements */}
                <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 p-10 md:p-12 rounded-sm space-y-8 shadow-xs">
                  <h3 className="text-sm uppercase tracking-wider font-semibold text-[#1A1A1A] dark:text-zinc-350 border-b border-zinc-150 dark:border-zinc-800 pb-3">
                    {activeContent.minReq}
                  </h3>
                  <ul className="space-y-6 text-base text-[#4F4F4F] dark:text-zinc-400">
                    <li className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-200 shrink-0 mt-2.5" />
                      <span className="leading-relaxed">{activeContent.minReq1}</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-200 shrink-0 mt-2.5" />
                      <span className="leading-relaxed">{activeContent.minReq2}</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-200 shrink-0 mt-2.5" />
                      <span className="leading-relaxed">{activeContent.minReq3}</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-200 shrink-0 mt-2.5" />
                      <span className="leading-relaxed">{activeContent.minReq4}</span>
                    </li>
                  </ul>
                </div>

                {/* Who Can Apply */}
                <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 p-10 md:p-12 rounded-sm space-y-8 flex flex-col justify-between shadow-xs">
                  <div className="space-y-6">
                    <h3 className="text-sm uppercase tracking-wider font-semibold text-[#1A1A1A] dark:text-zinc-350 border-b border-zinc-150 dark:border-zinc-800 pb-3">
                      {activeContent.whoCanApplyTitle}
                    </h3>
                    <div className="space-y-6 text-base text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                      <p>{activeContent.whoCanApplyDesc1}</p>
                      <p>{activeContent.whoCanApplyDesc2}</p>
                      <p className="text-base italic text-[#666666] dark:text-zinc-500 border-l-2 border-zinc-200 dark:border-zinc-800 pl-4 leading-relaxed">
                        &ldquo;{activeContent.whoCanApplyDesc3}&rdquo;
                      </p>
                    </div>
                  </div>
                  <p className="text-xs font-semibold uppercase text-zinc-800 dark:text-zinc-300 border-t border-zinc-150 dark:border-zinc-800 pt-4 mt-6">
                    * {activeContent.whoCanApplyDesc4}
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* Section 6: Coursebook Preview System (Editorial Layout) */}
          <section className="mb-20 border-t border-zinc-200 dark:border-zinc-800 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              <div className="lg:col-span-4 space-y-6">
                <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666]">
                  Academic Integrity
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                  {activeContent.curriculumTitle}
                </h2>
                <p className="text-base text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                  {activeContent.curriculumDesc}
                </p>
                <div className="border-t border-zinc-200 dark:border-zinc-850 pt-6">
                  <p className="text-xs text-[#666666] dark:text-zinc-500 italic leading-relaxed">
                    {activeContent.curriculumNote}
                  </p>
                </div>
              </div>

              {/* Overlapping coursebook pages editorial composition */}
              <div className="lg:col-span-8">
                <div className="relative w-full h-[440px] sm:h-[460px] md:h-[300px] lg:h-[360px] xl:h-[420px] overflow-hidden md:overflow-visible flex flex-col md:block items-center pt-4">
                  
                  {/* Page 1: Guide Cover */}
                  <motion.div
                    whileHover={{ rotate: 0, scale: 1.05, zIndex: 60, transition: { duration: 0.2 } }}
                    className="absolute left-[5%] top-[20px] md:left-[0%] md:top-[40px] lg:top-[50px] xl:top-[60px] rotate-[-6deg] md:rotate-[-8deg] z-10 w-[160px] sm:w-[180px] md:w-[155px] lg:w-[195px] xl:w-[235px] aspect-[1/1.4] bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg dark:shadow-black/50 p-1 rounded-sm transition-shadow duration-300 cursor-zoom-in"
                  >
                    <img
                      src="/coursebook-1.webp"
                      alt="SOVAKA Dental Radiology Coursebook Cover"
                      className="w-full h-full object-cover select-none pointer-events-none rounded-xs"
                      width={403}
                      height={531}
                    />
                  </motion.div>

                  {/* Page 2: FDI Tooth Numbering */}
                  <motion.div
                    whileHover={{ rotate: 0, scale: 1.05, zIndex: 60, transition: { duration: 0.2 } }}
                    className="absolute left-[18%] top-[40px] md:left-[17%] md:top-[10px] lg:top-[15px] xl:top-[20px] rotate-[4deg] md:rotate-[3deg] z-25 w-[160px] sm:w-[180px] md:w-[155px] lg:w-[195px] xl:w-[235px] aspect-[1/1.4] bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg dark:shadow-black/50 p-1 rounded-sm transition-shadow duration-300 cursor-zoom-in"
                  >
                    <img
                      src="/coursebook-2.webp"
                      alt="FDI Tooth Numbering System"
                      className="w-full h-full object-cover select-none pointer-events-none rounded-xs"
                      width={405}
                      height={438}
                    />
                  </motion.div>

                  {/* Page 3: Golden Rule OPG */}
                  <motion.div
                    whileHover={{ rotate: 0, scale: 1.05, zIndex: 60, transition: { duration: 0.2 } }}
                    className="absolute left-[10%] top-[100px] md:left-[34%] md:top-[25px] lg:top-[30px] xl:top-[40px] rotate-[-3deg] md:rotate-[-4deg] z-20 w-[160px] sm:w-[180px] md:w-[155px] lg:w-[195px] xl:w-[235px] aspect-[1/1.4] bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg dark:shadow-black/50 p-1 rounded-sm transition-shadow duration-300 cursor-zoom-in"
                  >
                    <img
                      src="/coursebook-3.webp"
                      alt="OPG Golden Rule"
                      className="w-full h-full object-cover select-none pointer-events-none rounded-xs"
                      width={400}
                      height={482}
                    />
                  </motion.div>

                  {/* Page 4: Chin Position */}
                  <motion.div
                    whileHover={{ rotate: 0, scale: 1.05, zIndex: 60, transition: { duration: 0.2 } }}
                    className="absolute left-[24%] top-[150px] md:left-[51%] md:top-[5px] lg:top-[5px] xl:top-[10px] rotate-[5deg] md:rotate-[5deg] z-35 w-[160px] sm:w-[180px] md:w-[155px] lg:w-[195px] xl:w-[235px] aspect-[1/1.4] bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg dark:shadow-black/50 p-1 rounded-sm transition-shadow duration-300 cursor-zoom-in"
                  >
                    <img
                      src="/coursebook-4.webp"
                      alt="Frankfort Plane and Chin Alignment"
                      className="w-full h-full object-cover select-none pointer-events-none rounded-xs"
                      width={403}
                      height={483}
                    />
                  </motion.div>

                  {/* Page 5: TMJ Joint */}
                  <motion.div
                    whileHover={{ rotate: 0, scale: 1.05, zIndex: 60, transition: { duration: 0.2 } }}
                    className="absolute left-[14%] top-[200px] md:left-[68%] md:top-[35px] lg:top-[40px] xl:top-[50px] rotate-[-4deg] md:rotate-[-3deg] z-30 w-[160px] sm:w-[180px] md:w-[155px] lg:w-[195px] xl:w-[235px] aspect-[1/1.4] bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg dark:shadow-black/50 p-1 rounded-sm transition-shadow duration-300 cursor-zoom-in"
                  >
                    <img
                      src="/coursebook-5.webp"
                      alt="Jaw Joint (TMJ) Positions"
                      className="w-full h-full object-cover select-none pointer-events-none rounded-xs"
                      width={403}
                      height={495}
                    />
                  </motion.div>

                </div>
                
                {/* Micro-caption */}
                <p className="mt-8 text-xs text-[#666666] dark:text-zinc-500 font-mono tracking-wide text-center md:text-left leading-relaxed">
                  {activeContent.curriculumMicroCaption}
                </p>
              </div>

            </div>
          </section>

          {/* Section 3: Job Opportunities */}
          <section className="mb-20 border-t border-zinc-200 dark:border-zinc-800 pt-16">
            <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 p-8 md:p-12 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
              <div className="lg:col-span-4">
                <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-4">
                  {language === "en" ? "Future Scope" : language === "mr" ? "भविष्यातील संधी" : "भविष्य की संभावनाएं"}
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                  {activeContent.careerPathwayTitle}
                </h2>
              </div>
              <div className="lg:col-span-8 border-l border-zinc-200 dark:border-zinc-800 lg:pl-12">
                <p className="text-base md:text-lg text-[#4F4F4F] dark:text-zinc-300 leading-relaxed font-medium">
                  {activeContent.careerPathwayDesc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-[#666666] dark:text-zinc-500 italic">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-zinc-500" />
                  <span>{activeContent.careerPathwayDisclaimer}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Train Where Professionals Work (New Trust Section) */}
          <section className="mb-20 border-t border-zinc-200 dark:border-zinc-800 pt-16">
            <div className="max-w-[1200px]">
              <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-4">Ecosystem Integrity</span>
              <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 mb-4">
                {activeContent.trainWhereTitle}
              </h2>
              <p className="text-base text-[#666666] dark:text-zinc-400 mb-10 max-w-[640px]">
                {activeContent.trainWhereDesc}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-200 dark:border-zinc-800 pt-8">
                
                {/* Training Environment Card */}
                <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 p-8 rounded-sm space-y-6 shadow-xs">
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-900 pb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-950 dark:bg-zinc-50" />
                    {activeContent.trainingEnvTitle}
                  </h3>
                  <ul className="space-y-4">
                    {[
                      activeContent.trainingEnv1,
                      activeContent.trainingEnv2,
                      activeContent.trainingEnv3,
                      activeContent.trainingEnv4,
                      activeContent.trainingEnv5
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[15px] text-[#4F4F4F] dark:text-zinc-400">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-zinc-700 dark:text-zinc-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Job Opportunities Card */}
                <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 p-8 rounded-sm space-y-6 shadow-xs flex flex-col justify-between">
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-900 pb-3 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-950 dark:bg-zinc-50" />
                      {activeContent.careerPathwayOppTitle}
                    </h3>
                    <ul className="space-y-4">
                      {[
                        activeContent.careerPathwayOpp1,
                        activeContent.careerPathwayOpp2,
                        activeContent.careerPathwayOpp3,
                        activeContent.careerPathwayOpp4,
                        activeContent.careerPathwayOpp5
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-[15px] text-[#4F4F4F] dark:text-zinc-400">
                          <CheckCircle2 className="w-4 h-4 shrink-0 text-zinc-700 dark:text-zinc-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-[10px] tracking-wider font-mono uppercase text-[#666666] border-t border-zinc-100 dark:border-zinc-900 pt-4 mt-6">
                    * {activeContent.trainWhereSub}
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* Section 5: Operational Radiology Exposure */}
          <section className="mb-20 border-t border-zinc-200 dark:border-zinc-800 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-6">
                <span className="inline-block uppercase tracking-[0.1em] text-xs font-semibold text-[#666666]">
                  Clinical Operations Linkage
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                  {activeContent.nidaanTitle}
                </h2>
                <p className="text-[#4F4F4F] dark:text-zinc-400 leading-relaxed text-base md:text-lg">
                  {activeContent.nidaanDesc}
                </p>
                <div className="pt-4">
                  <a 
                    href="https://www.nidaandental.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#1A1A1A] dark:text-zinc-200 font-semibold hover:text-[#4F4F4F] transition-all duration-300"
                  >
                    <span>{activeContent.nidaanLink}</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-7 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 p-8 md:p-12 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-8 shadow-xs">
                {[
                  {
                    title: "Active CBCT Hardware",
                    desc: "Gain operational proficiency on modern cone beam diagnostic units with multi-planar reconstruction capacities."
                  },
                  {
                    title: "Centralized Remote OMR",
                    desc: "Understand remote reporting workflows, case submission loops, and teleradiology coordination structures."
                  },
                  {
                    title: "Dosimetry & Safety Audits",
                    desc: "Operate under radiation safety guidelines compliant with AERB regulations."
                  },
                  {
                    title: "DICOM PACS Router Integration",
                    desc: "Manage direct cloud uploads, database entries, and patient file segmentations."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-[17px] font-semibold text-[#1A1A1A] dark:text-zinc-100 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-400" />
                      {item.title}
                    </h3>
                    <p className="text-base text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Operational Framework Strip details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-20 pt-16 border-t border-zinc-200 dark:border-zinc-800">
              <div className="lg:col-span-4 space-y-3">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 leading-tight">
                  {activeContent.frameworkTitle}
                </h3>
                <p className="text-base text-[#666666] dark:text-zinc-400 mt-3 max-w-[320px] leading-relaxed">
                  {activeContent.frameworkSubtitle}
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                <div className="space-y-5">
                  <span className="block text-xs font-mono text-[#666666] dark:text-zinc-500 uppercase tracking-widest">
                    01 / Language Adaption
                  </span>
                  <p className="text-base text-[#4F4F4F] dark:text-zinc-400 leading-[1.75]">
                    {activeContent.trainingInfoText1}
                  </p>
                </div>
                <div className="space-y-5">
                  <span className="block text-xs font-mono text-[#666666] dark:text-zinc-500 uppercase tracking-widest">
                    02 / Active Infrastructure
                  </span>
                  <p className="text-base text-[#4F4F4F] dark:text-zinc-400 leading-[1.75]">
                    {activeContent.trainingInfoText2}
                  </p>
                </div>
                <div className="space-y-5">
                  <span className="block text-xs font-mono text-[#666666] dark:text-zinc-500 uppercase tracking-widest">
                    03 / Locations scheduling
                  </span>
                  <p className="text-base text-[#4F4F4F] dark:text-zinc-400 leading-[1.75]">
                    {activeContent.trainingInfoText3}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: SOVAKA & NIDAAN Certified Professionals */}
          <section className="mb-20 border-t border-zinc-200 dark:border-zinc-800 pt-16">
            <div className="max-w-[1200px]">
              <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-4">
                Verification Registry
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 mb-4">
                {activeContent.registryTitle}
              </h2>
              
              <div className="mb-6">
                <span className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  {activeContent.registryCertLabel}
                </span>
                <p className="text-base md:text-lg font-semibold text-[#666666] dark:text-zinc-400 font-mono tracking-wide uppercase">
                  {activeContent.registryCertName}
                </p>
              </div>
              
              <p className="text-sm md:text-base text-[#4F4F4F] dark:text-zinc-400 leading-relaxed mb-10 max-w-[760px]">
                {activeContent.registryIntro}
              </p>
              
              {/* Registry Control Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 bg-white dark:bg-zinc-950 p-6 border border-zinc-200 dark:border-zinc-850 rounded-sm shadow-xs">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#666666] dark:text-zinc-400 block mb-1">
                    {activeContent.registryTotal}
                  </span>
                  <span className="text-3xl font-semibold text-[#1A1A1A] dark:text-zinc-50 font-mono">
                    {loading ? "..." : professionals.length}
                  </span>
                </div>
                
                {/* Search Box */}
                {!loading && professionals.length > 0 && (
                  <div className="relative max-w-sm w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                      <Search className="h-4 w-4" />
                    </div>
                     <input
                      id="registry-search"
                      type="text"
                      placeholder={activeContent.registrySearch}
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="block w-full pl-10 pr-4 py-3 border border-zinc-200 dark:border-zinc-800 rounded-sm bg-white dark:bg-zinc-900 text-sm placeholder-zinc-400 text-[#1A1A1A] dark:text-zinc-100 focus:outline-hidden focus:border-zinc-400 dark:focus:border-zinc-700 transition-colors"
                    />
                  </div>
                )}
              </div>

              {/* Table / Registry List / Empty State */}
              {loading ? (
                <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded-sm overflow-hidden shadow-xs p-12 text-center text-sm text-[#666666] dark:text-zinc-400">
                  {activeContent.registryLoading}
                </div>
              ) : professionals.length === 0 ? (
                /* Empty state design: clean professional card */
                <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded-sm p-8 text-center shadow-xs max-w-2xl mx-auto">
                  <div className="flex justify-center mb-4">
                    <ShieldCheck className="h-12 w-12 text-zinc-300 dark:text-zinc-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-zinc-100 mb-2">
                    {language === "en" ? "Registry Currently Empty" : language === "mr" ? "नोंदणी सध्या रिकामी आहे" : "रजिस्ट्री वर्तमान में खाली है"}
                  </h3>
                  <p className="text-sm text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                    {activeContent.registryEmptyState}
                  </p>
                </div>
              ) : (
                <>
                  {/* Table / Registry List */}
                  <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded-sm overflow-hidden shadow-xs">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800 text-left">
                        <thead className="bg-sand-50 dark:bg-zinc-900/60">
                          <tr>
                            <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#666666] dark:text-zinc-400 w-[15%]">
                              {activeContent.registrySrNo}
                            </th>
                            <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#666666] dark:text-zinc-400 w-[55%]">
                              {activeContent.registryName}
                            </th>
                            <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#666666] dark:text-zinc-400 w-[15%]">
                              {activeContent.registryMonth}
                            </th>
                            <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#666666] dark:text-zinc-400 w-[15%]">
                              {activeContent.registryYear}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-900 text-[#1A1A1A] dark:text-zinc-200 text-sm">
                          {paginatedProfessionals.length > 0 ? (
                            paginatedProfessionals.map((prof, idx) => (
                              <tr key={idx} className="hover:bg-sand-50/50 dark:hover:bg-zinc-900/20 transition-colors">
                                <td className="px-6 py-4 font-mono text-zinc-500">
                                  {prof.srNo}
                                </td>
                                <td className="px-6 py-4 font-medium text-zinc-900 dark:text-zinc-100">
                                  {prof.name}
                                </td>
                                <td className="px-6 py-4">
                                  {prof.month}
                                </td>
                                <td className="px-6 py-4 font-mono text-zinc-500">
                                  {prof.year}
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={4} className="px-6 py-12 text-center text-sm text-[#666666] dark:text-zinc-500 italic">
                                {activeContent.registryNoResults.replace("{query}", searchQuery)}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Pagination Controls (Only show if total pages > 1 and we have results) */}
                  {filteredProfessionals.length > 0 && totalPages > 1 && (
                    <div className="flex items-center justify-between mt-6 bg-white dark:bg-zinc-950 px-6 py-4 border border-zinc-200 dark:border-zinc-850 rounded-sm shadow-xs">
                      <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-sm text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] dark:text-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                      >
                        {language === "en" ? "Previous" : language === "mr" ? "मागे" : "पीछे"}
                      </button>
                      <span className="text-xs font-mono text-[#666666] dark:text-zinc-400 uppercase tracking-widest text-center">
                        {language === "en" ? "Previous" : language === "mr" ? "मागे" : "पीछे"} | {language === "en" ? "Page" : language === "mr" ? "पृष्ठ" : "पृष्ठ"} {currentPage} {language === "en" ? "of" : language === "mr" ? "चे" : "का"} {totalPages} | {language === "en" ? "Next" : language === "mr" ? "पुढे" : "आगे"}
                      </span>
                      <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-sm text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] dark:text-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                      >
                        {language === "en" ? "Next" : language === "mr" ? "पुढे" : "आगे"}
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </section>

          {/* Section 8: Application Flow Pathways */}
          <section className="mb-20 border-t border-zinc-200 dark:border-zinc-800 pt-16">
            <div className="mb-16 text-center">
              <span className="inline-block uppercase tracking-[0.1em] text-xs font-semibold text-[#666666]">
                Admission Flow
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] dark:text-zinc-50 mt-4">
                Ecosystem Participation Pathway
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { step: activeContent.applyStep1, desc: activeContent.applyStep1Desc },
                { step: activeContent.applyStep2, desc: activeContent.applyStep2Desc },
                { step: activeContent.applyStep3, desc: activeContent.applyStep3Desc },
                { step: activeContent.applyStep4, desc: activeContent.applyStep4Desc }
              ].map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 p-10 md:p-12 rounded-sm space-y-4 shadow-xs">
                  <h3 className="text-xl font-semibold text-[#1A1A1A] dark:text-zinc-50">
                    {item.step}
                  </h3>
                  <p className="text-base text-[#4F4F4F] dark:text-zinc-400 leading-[1.75]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center space-y-6 max-w-[600px] mx-auto pt-4">
              
              {/* Rolling admissions notice directly above CTA buttons */}
              <p className="text-xs md:text-sm font-medium text-zinc-600 dark:text-zinc-400 italic">
                {activeContent.rollingNotice}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://forms.gle/vGUGby9hmxY3wDTW8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-[#1A1A1A] font-medium rounded-sm transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[0.98]"
                >
                  <span>{activeContent.btnApply}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a 
                  href="tel:+919307668998"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-zinc-200 dark:border-zinc-850 text-[#1A1A1A] dark:text-zinc-100 font-medium rounded-sm transition-all duration-300 hover:bg-sand-50 dark:hover:bg-zinc-900 hover:scale-[0.98]"
                >
                  <span>{activeContent.btnCall}</span>
                </a>
              </div>
              
              {/* Secondary placement text directly below CTA buttons */}
              <p className="text-sm text-[#666666] dark:text-zinc-500 italic mt-2">
                {activeContent.secondaryCareerMsg}
              </p>
              
              <div className="text-[10px] tracking-wider uppercase text-[#666666] font-mono space-y-1 pt-4">
                <span className="block">Direct Coordination desks:</span>
                <span className="block text-[#1A1A1A] dark:text-zinc-300 font-medium font-sans">
                  +91 93076 68998 &nbsp;|&nbsp; +91 98230 99115 &nbsp;|&nbsp; +91 98230 05337
                </span>
              </div>
            </div>
          </section>

          {/* Section 7: Dynamic FAQ Section */}
          <section className="border-t border-zinc-200 dark:border-zinc-800 pt-16">
            <div className="max-w-[800px] mx-auto">
              <span className="block text-xs uppercase tracking-widest font-semibold text-[#666666] mb-12 text-center">
                Frequently Asked Questions
              </span>
              <div className="space-y-4">
                {activeFaqs.map((faq, index) => (
                  <div key={index} className="border-b border-zinc-200 dark:border-zinc-900 pb-4">
                    <button
                      className="w-full flex items-center justify-between py-4 text-left font-medium text-[#1A1A1A] dark:text-zinc-50 hover:text-[#4F4F4F] dark:hover:text-zinc-300 transition-colors"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="py-2 text-sm text-[#4F4F4F] dark:text-zinc-400 leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
