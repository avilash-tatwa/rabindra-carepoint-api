// --- DATABASE ---
const diagnosticTests = [
  { "SL NO.": 1, "TEST NAME": "FBS (Fasting Blood Sugar)", "CPD MRP": 50, "TAT TIME": "3hr" },
  { "SL NO.": 2, "TEST NAME": "PPBS (Post Prandial Blood Sugar)", "CPD MRP": 50, "TAT TIME": "3hr" },
  { "SL NO.": 3, "TEST NAME": "RBS (Random Blood Sugar)", "CPD MRP": 50, "TAT TIME": "3hr" },
  { "SL NO.": 4, "TEST NAME": "HbAlc", "CPD MRP": 400, "TAT TIME": "3hr" },
  { "SL NO.": 5, "TEST NAME": "Urea", "CPD MRP": 100, "TAT TIME": "3hr" },
  { "SL NO.": 6, "TEST NAME": "Creatinine", "CPD MRP": 100, "TAT TIME": "3hr" },
  { "SL NO.": 7, "TEST NAME": "BUN", "CPD MRP": 150, "TAT TIME": "3hr" },
  { "SL NO.": 8, "TEST NAME": "vitamin d3", "CPD MRP": 1300, "TAT TIME": "4.5hr" },
  { "SL NO.": 9, "TEST NAME": "Na, K, CI (Electrolytes)", "CPD MRP": 300, "TAT TIME": "3hr" },
  { "SL NO.": 10, "TEST NAME": "Uric Acid", "CPD MRP": 100, "TAT TIME": "3hr" },
  { "SL NO.": 11, "TEST NAME": "Kidney Function Test KFT", "CPD MRP": 500, "TAT TIME": "4.5hr" },
  { "SL NO.": 12, "TEST NAME": "Total Cholesterol", "CPD MRP": 120, "TAT TIME": "3hr" },
  { "SL NO.": 13, "TEST NAME": "Triglycerides", "CPD MRP": 150, "TAT TIME": "3hr" },
  { "SL NO.": 14, "TEST NAME": "Lipid Profile", "CPD MRP": 500, "TAT TIME": "3hr" },
  { "SL NO.": 15, "TEST NAME": "Total Bilirubin", "CPD MRP": 100, "TAT TIME": "3hr" },
  { "SL NO.": 16, "TEST NAME": "Direct Bilirubin", "CPD MRP": 100, "TAT TIME": "3hr" },
  { "SL NO.": 17, "TEST NAME": "ALT", "CPD MRP": 100, "TAT TIME": "3hr" },
  { "SL NO.": 18, "TEST NAME": "AST", "CPD MRP": 100, "TAT TIME": "3hr" },
  { "SL NO.": 19, "TEST NAME": "ALP", "CPD MRP": 100, "TAT TIME": "3hr" },
  { "SL NO.": 20, "TEST NAME": "Total Protein", "CPD MRP": 100, "TAT TIME": "3hr" },
  { "SL NO.": 21, "TEST NAME": "S Albumin", "CPD MRP": 120, "TAT TIME": "3hr" },
  { "SL NO.": 22, "TEST NAME": "GGT", "CPD MRP": 200, "TAT TIME": "3hr" },
  { "SL NO.": 23, "TEST NAME": "LFT- Liver Function Test", "CPD MRP": 600, "TAT TIME": "4.5hr" },
  { "SL NO.": 24, "TEST NAME": "Amylase", "CPD MRP": 400, "TAT TIME": "3hr" },
  { "SL NO.": 25, "TEST NAME": "Lipase", "CPD MRP": 400, "TAT TIME": "4hr" },
  { "SL NO.": 26, "TEST NAME": "IRON", "CPD MRP": 250, "TAT TIME": "3.5hr" },
  { "SL NO.": 27, "TEST NAME": "Ferritin", "CPD MRP": 650, "TAT TIME": "4hr" },
  { "SL NO.": 28, "TEST NAME": "TIBC", "CPD MRP": 300, "TAT TIME": "3.5hr" },
  { "SL NO.": 29, "TEST NAME": "Iron Profile", "CPD MRP": 600, "TAT TIME": "4hr" },
  { "SL NO.": 30, "TEST NAME": "CRP Quantitative", "CPD MRP": 300, "TAT TIME": "3hr" },
  { "SL NO.": 31, "TEST NAME": "HSCRP", "CPD MRP": 500, "TAT TIME": "3hr" },
  { "SL NO.": 32, "TEST NAME": "RA", "CPD MRP": 350, "TAT TIME": "3hr" },
  { "SL NO.": 33, "TEST NAME": "ASO", "CPD MRP": 500, "TAT TIME": "3hr" },
  { "SL NO.": 34, "TEST NAME": "T3", "CPD MRP": 200, "TAT TIME": "4hr" },
  { "SL NO.": 35, "TEST NAME": "T4", "CPD MRP": 200, "TAT TIME": "4hr" },
  { "SL NO.": 36, "TEST NAME": "TSH", "CPD MRP": 250, "TAT TIME": "3hr" },
  { "SL NO.": 37, "TEST NAME": "TFT-Thyroid Function Test", "CPD MRP": 400, "TAT TIME": "4hr" },
  { "SL NO.": 38, "TEST NAME": "FT3", "CPD MRP": 250, "TAT TIME": "3hr" },
  { "SL NO.": 39, "TEST NAME": "FT4", "CPD MRP": 250, "TAT TIME": "4hr" },
  { "SL NO.": 40, "TEST NAME": "FREE Thyroid Function Test", "CPD MRP": 650, "TAT TIME": "4hr" },
  { "SL NO.": 41, "TEST NAME": "Anti TPO", "CPD MRP": 750, "TAT TIME": "4hr" },
  { "SL NO.": 42, "TEST NAME": "URINE ACR", "CPD MRP": 250, "TAT TIME": "4hr" },
  { "SL NO.": 43, "TEST NAME": "URINE PCR", "CPD MRP": 250, "TAT TIME": "4hr" },
  { "SL NO.": 44, "TEST NAME": "Vitamin D 25-0H", "CPD MRP": 1200, "TAT TIME": "4hr" },
  { "SL NO.": 45, "TEST NAME": "Vitamin B12", "CPD MRP": 1000, "TAT TIME": "4hr" },
  { "SL NO.": 46, "TEST NAME": "Folic Acid", "CPD MRP": 650, "TAT TIME": "4hr" },
  { "SL NO.": 47, "TEST NAME": "FSH", "CPD MRP": 450, "TAT TIME": "4hr" },
  { "SL NO.": 48, "TEST NAME": "LH", "CPD MRP": 450, "TAT TIME": "4hr" },
  { "SL NO.": 49, "TEST NAME": "Prolactin", "CPD MRP": 450, "TAT TIME": "4hr" },
  { "SL NO.": 50, "TEST NAME": "Beta HCG", "CPD MRP": 500, "TAT TIME": "4hr" },
  { "SL NO.": 51, "TEST NAME": "AMH", "CPD MRP": 1600, "TAT TIME": "4hr" },
  { "SL NO.": 52, "TEST NAME": "Progesterone", "CPD MRP": 500, "TAT TIME": "4hr" },
  { "SL NO.": 53, "TEST NAME": "Estrogen", "CPD MRP": 500, "TAT TIME": "6hr" },
  { "SL NO.": 54, "TEST NAME": "Testosterone TOTAL", "CPD MRP": 500, "TAT TIME": "4hr" },
  { "SL NO.": 55, "TEST NAME": "Testosterone FREE", "CPD MRP": 1250, "TAT TIME": "4hr" },
  { "SL NO.": 56, "TEST NAME": "Insulin", "CPD MRP": 600, "TAT TIME": "6hr" },
  { "SL NO.": 57, "TEST NAME": "C Peptide", "CPD MRP": 1000, "TAT TIME": "6hr" },
  { "SL NO.": 58, "TEST NAME": "PSA (Prostate Specific Antigen) FREE", "CPD MRP": 750, "TAT TIME": "6hr" },
  { "SL NO.": 59, "TEST NAME": "CEA (Carcinoembryonic Antigen)", "CPD MRP": 900, "TAT TIME": "6hr" },
  { "SL NO.": 60, "TEST NAME": "CA 125 (Ovary cancer marker)", "CPD MRP": 1000, "TAT TIME": "6hr" },
  { "SL NO.": 61, "TEST NAME": "AFP (Alpha Fetoprotein)", "CPD MRP": 650, "TAT TIME": "6hr" },
  { "SL NO.": 62, "TEST NAME": "Double Marker", "CPD MRP": 2200, "TAT TIME": "next day" },
  { "SL NO.": 63, "TEST NAME": "Triple Marker", "CPD MRP": 4000, "TAT TIME": "Next day" },
  { "SL NO.": 64, "TEST NAME": "Quadruple Marker", "CPD MRP": 3500, "TAT TIME": "Next day" },
  { "SL NO.": 65, "TEST NAME": "ANA ELISA", "CPD MRP": 600, "TAT TIME": "6hr" },
  { "SL NO.": 66, "TEST NAME": "TORCH Panel - 8 (IgG and IgM)", "CPD MRP": 2000, "TAT TIME": "Next day" },
  { "SL NO.": 67, "TEST NAME": "Sputum Culture", "CPD MRP": 450, "TAT TIME": "3 days" },
  { "SL NO.": 68, "TEST NAME": "Urine R/M", "CPD MRP": 100, "TAT TIME": "3hr" },
  { "SL NO.": 69, "TEST NAME": "Urine C/S (Culture and Sensitivity)", "CPD MRP": 400, "TAT TIME": "3 Days" },
  { "SL NO.": 70, "TEST NAME": "Stool R/E", "CPD MRP": 100, "TAT TIME": "3hr" },
  { "SL NO.": 71, "TEST NAME": "Stool Culture", "CPD MRP": 450, "TAT TIME": "3 Days" },
  { "SL NO.": 72, "TEST NAME": "Blood Culture", "CPD MRP": 1000, "TAT TIME": "7 Days" },
  { "SL NO.": 73, "TEST NAME": "CBC", "CPD MRP": 250, "TAT TIME": "3hr" },
  { "SL NO.": 74, "TEST NAME": "CBC+ESR", "CPD MRP": 300, "TAT TIME": "4hr" },
  { "SL NO.": 75, "TEST NAME": "CBC+ESR+PS", "CPD MRP": 350, "TAT TIME": "4.5hr" },
  { "SL NO.": 76, "TEST NAME": "ESR", "CPD MRP": 100, "TAT TIME": "3hr" },
  { "SL NO.": 77, "TEST NAME": "BT/CT", "CPD MRP": 100, "TAT TIME": "2hr" },
  { "SL NO.": 78, "TEST NAME": "PT/INR", "CPD MRP": 300, "TAT TIME": "3hr" },
  { "SL NO.": 79, "TEST NAME": "APTT", "CPD MRP": 350, "TAT TIME": "3hr" },
  { "SL NO.": 80, "TEST NAME": "PS", "CPD MRP": 100, "TAT TIME": "3hr" },
  { "SL NO.": 81, "TEST NAME": "Biopsy Small", "CPD MRP": 700, "TAT TIME": "10 days" },
  { "SL NO.": 82, "TEST NAME": "Biopsy medium", "CPD MRP": 800, "TAT TIME": "10 days" },
  { "SL NO.": 83, "TEST NAME": "Biopsy Large", "CPD MRP": 1100, "TAT TIME": "10 days" },
  { "SL NO.": 84, "TEST NAME": "Blood Grouping and Typing (ABO and Rh)", "CPD MRP": 100, "TAT TIME": "3hr" },
  { "SL NO.": 85, "TEST NAME": "Hemoglobin", "CPD MRP": 80, "TAT TIME": "3hr" },
  { "SL NO.": 86, "TEST NAME": "VDRL/Rapid Plasma Reagin (RPR) Test", "CPD MRP": 150, "TAT TIME": "3hr" },
  { "SL NO.": 87, "TEST NAME": "Hepatitis B Surface Antigen (HBsAg) CARD", "CPD MRP": 280, "TAT TIME": "3hr" },
  { "SL NO.": 88, "TEST NAME": "HIV Antibody RAPID CARD", "CPD MRP": 500, "TAT TIME": "3hr" },
  { "SL NO.": 89, "TEST NAME": "Hepatitis C virus Anti body (Anti HCV Ab)", "CPD MRP": 350, "TAT TIME": "3hr" },
  { "SL NO.": 90, "TEST NAME": "AFB stain", "CPD MRP": 230, "TAT TIME": "5hr" },
  { "SL NO.": 91, "TEST NAME": "WIDAL TEST Slide method", "CPD MRP": 120, "TAT TIME": "3hr" },
  { "SL NO.": 92, "TEST NAME": "WIDAL TEST Tube method", "CPD MRP": 250, "TAT TIME": "2 Days" },
  { "SL NO.": 93, "TEST NAME": "ENA PROFILE", "CPD MRP": 9000, "TAT TIME": "Next day" },
  { "SL NO.": 94, "TEST NAME": "Total IgE", "CPD MRP": 600, "TAT TIME": "3hr" },
  { "SL NO.": 95, "TEST NAME": "Typhidot IgG, IgM rapid card", "CPD MRP": 500, "TAT TIME": "3hr" },
  { "SL NO.": 96, "TEST NAME": "Microalbumin Quantitative 24 Hours URINE", "CPD MRP": 400, "TAT TIME": "3hr" },
  { "SL NO.": 97, "TEST NAME": "Cortisol serum 7 to 9 am", "CPD MRP": 500, "TAT TIME": "3hr" },
  { "SL NO.": 98, "TEST NAME": "Cortisol serum 3 to 5 pm", "CPD MRP": 500, "TAT TIME": "3hr" },
  { "SL NO.": 99, "TEST NAME": "Creatine kinase CK (CPK)", "CPD MRP": 400, "TAT TIME": "4hr" },
  { "SL NO.": 100, "TEST NAME": "Anti Cyclic Citrullinated Peptide (Anti CCP)", "CPD MRP": 1200, "TAT TIME": "3hr" },
  { "SL NO.": 101, "TEST NAME": "Malaria ICT", "CPD MRP": 250, "TAT TIME": "3hr" },
  { "SL NO.": 102, "TEST NAME": "Dengue IgG and IgM antibodi Eia", "CPD MRP": 1200, "TAT TIME": "3hr" },
  { "SL NO.": 103, "TEST NAME": "PAP SMEAR", "CPD MRP": 400, "TAT TIME": "8hr" },
  { "SL NO.": 104, "TEST NAME": "SPUTUM CYTOLOGY", "CPD MRP": 250, "TAT TIME": "8hr" }
];

// --- LOGIC & SCORING ALGORITHM ---

// 1. Pre-processing: Strip spoken punctuation and squash isolated letters
const normalizeText = (text) => {
    let cleanText = text.toLowerCase()
                        .replace(/&/g, 'and')
                        .replace(/\b(slash|dash|stroke|by|over)\b/g, ' ')
                        .replace(/[^a-z0-9\s]/g, ' '); 

    cleanText = cleanText.replace(/\b([a-z])\s+(?=[a-z]\b)/g, '$1');
    return cleanText;
};

// 2. The Medical Translator: Map spoken words TO database acronyms
const synonyms = {
// Squashed STT acronyms -> DB acronyms
    "btct": ["bt", "ct"],
    "rm": ["rm", "routine", "microscopy"],
    "re": ["re", "routine", "examination"],
    "cs": ["cs", "culture", "sensitivity"],

    // Spoken aliases -> DB words/acronyms
    "fasting": ["fbs", "fasting"],
    "lunch": ["ppbs"],
    "prandial": ["ppbs"],
    "postprandial": ["ppbs"],
    "random": ["rbs", "random"],
    "sugar": ["fbs", "ppbs", "rbs", "sugar"], 
    
    "a1c": ["hbalc"],
    "hba1c": ["hbalc"], 

    "sodium": ["na"],
    "potassium": ["k"],
    "chlorine": ["ci"],
    "chloride": ["ci"],
    "electrolyte": ["electrolytes"],
    "urea": ["bun", "urea"],

    "kidney": ["kft", "kidney"],
    "liver": ["lft", "liver"],
    "thyroid": ["tft", "thyroid"],
    "cholesterol": ["lipid", "cholesterol"],

    "prostate": ["psa", "prostate"],
    "antigen": ["psa", "antigen"],
    "carcinoembryonic": ["cea"],
    "ovary": ["ca"],
    "alpha": ["afp", "alpha"],
    "fetoprotein": ["afp", "fetoprotein"],
    "pregnancy": ["hcg"],
    "mullerian": ["amh"],
    "follicle": ["fsh"],
    "luteinizing": ["lh"],

    "routine": ["r", "m", "e"],
    "microscopy": ["m"],
    "examination": ["e"],
    
    "complete": ["cbc"],
    "count": ["cbc"],
    
    "erythrocyte": ["esr"],
    "bleeding": ["bt", "bleeding"],
    "clotting": ["ct", "clotting"],
    "prothrombin": ["pt"],
    "activated": ["aptt"],
    "peripheral": ["ps", "peripheral"],
    "smear": ["ps", "smear"],

    "grouping": ["abo", "grouping"],
    "typing": ["rh", "typing"],

    "syphilis": ["vdrl", "rpr"],
    "hepatitis": ["hbsag", "hcv"],
    "aids": ["hiv"],
    "typhoid": ["widal", "typhidot"],

    "citrullinated": ["ccp"],
    "peptide": ["ccp", "peptide"],
    "creatine": ["cpk", "ck"],
    "kinase": ["cpk", "ck"],
    "antinuclear": ["ana"],
    "morning": ["7", "am"],
    "evening": ["3", "pm"]
};

// 3. Words to ignore completely
const fillerWords = ["and", "or", "for", "the", "test", "checkup", "profile", "scan"];

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        
        const corsHeaders = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            "Content-Type": "application/json"
        };

        if (request.method === "OPTIONS") {
            return new Response(null, { headers: corsHeaders });
        }

        if (url.pathname === "/search" || url.pathname === "/api/test") {
            let query = url.searchParams.get("q");

            if (!query && request.method === "POST") {
                try {
                    const body = await request.json();
                    query = body.query || body.test_name || body.q;
                } catch { }
            }

            if (!query) {
                return new Response(
                    JSON.stringify({ error: "Please provide a test name via ?q= or JSON body." }),
                    { status: 400, headers: corsHeaders }
                );
            }

            // Clean and split the spoken query
            const searchWords = normalizeText(query)
                .trim()
                .split(/\s+/)
                .filter(word => word.length > 0);

            // Score every test in the database
            const scoredTests = diagnosticTests.map(test => {
                const testName = normalizeText(test["TEST NAME"]);
                
                // Split database name into words for exact matching
                const testWords = testName.split(/\s+/).filter(word => word.length > 0);
                
                let matchScore = 0;

                searchWords.forEach(word => {
                    if (fillerWords.includes(word)) return;

                    const termsToCheck = synonyms[word] || [word];
                    
                    // Check if the term matches an EXACT word in the array
                    if (termsToCheck.some(term => testWords.includes(term))) {
                        matchScore += 1;
                    }
                });

                return { ...test, matchScore };
            });

            // Return top 3 matches with a score > 0
            const results = scoredTests
                .filter(test => test.matchScore > 0)
                .sort((a, b) => b.matchScore - a.matchScore)
                .slice(0, 3)
                .map(test => {
                    const { matchScore, ...cleanTest } = test; 
                    return cleanTest;
                });

            return new Response(
                JSON.stringify({ query, count: results.length, results }),
                { status: 200, headers: corsHeaders }
            );
        }

        return new Response(
            JSON.stringify({ message: "Rabindra CarePoint Price & TAT API is running." }),
            { status: 200, headers: corsHeaders }
        );
    }
};
