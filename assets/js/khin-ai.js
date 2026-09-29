/**
 * ==========================================================================
 * KHIN.AI - Specialized Portfolio AI Assistant Engine
 * 
 * Strict Domain Scope: Only answers about Khin Andrei Gamboa, his skills,
 * projects, certifications, education, career, contact, and this website.
 * Presented in an elevated minimalist modal viewport matching typing test.
 * ==========================================================================
 */

(function () {
    'use strict';

    /* ==========================================================================
       1. Knowledge Base & Domain Ontology
       ========================================================================== */
    const KHIN_KNOWLEDGE = {
        name: "Khin Andrei Gamboa",
        alias: "Sondre",
        role: "Aspiring Software Developer / Associate Data Engineer",
        location: "Philippines",
        email: "gamboa.khinandrei@gmail.com",
        linkedin: "https://www.linkedin.com/in/khinandreigamboa",
        credly: "https://www.credly.com/users/gamboa-khin-andrei",
        instagram: "https://www.instagram.com/khinandrei.gmb/?hl=en",
        facebook: "https://www.facebook.com/khinandrei.gmb",
        
        education: {
            degree: "Bachelor of Science in Computer Engineering (BSCpE)",
            school: "Rizal Technological University (RTU)",
            summary: "Graduate of Computer Engineering at Rizal Technological University with a strong academic foundation in computing architecture, algorithmic data manipulation, systems hardware, and distributed networking."
        },

        overview: "Khin Andrei is a Computer Engineering graduate, adaptable Software Developer, and Data Engineer based in the Philippines. He builds end-to-end software and data solutions across the complete engineering lifecycle—from developing responsive applications and engineering resilient ETL/ELT pipelines to extracting strategic analytical insights, designing interactive business intelligence dashboards, and developing applied AI models.",

        stats: {
            projectsShipped: "8",
            technologies: "10+",
            enterpriseImmersion: "6 Months",
            certifications: "5+"
        },

        skills: {
            dataEngineering: "ETL/ELT pipeline design, database architecture, data manipulation, data migration, data ingestion, query optimization, data cleaning, and warehousing.",
            databases: "PostgreSQL, SQL (Azure SQL & Relational Databases), Snowflake, and Supabase.",
            programming: "Python (data pipelines, automation, machine learning & scripting), PowerShell (system automation), JavaScript (ES6+), and HTML5/CSS3.",
            analyticsBI: "Power BI, Tableau, Interactive Dashboards, Microsoft Excel (advanced data modeling & formulas), and Google Sheets.",
            toolsDevOps: "Docker, GitHub & Git version control, Vercel edge deployment, and Microsoft Office Suite.",
            aiIot: "Computer vision, sensor data telemetry, microcontroller interfacing (ESP32/Arduino), and applied artificial intelligence."
        },

        projects: [
            {
                name: "Social Media ETL Pipeline",
                role: "Data Pipeline & ETL Engineer",
                tech: "Python, SQL, PostgreSQL, REST APIs, ETL/ELT",
                desc: "An automated end-to-end data extraction and transformation pipeline that collects social metrics, normalizes schema structures, and orchestrates loading into an analytical warehouse for trend monitoring."
            },
            {
                name: "FOVB-AIOT (Capstone)",
                role: "Data & Database Architect",
                tech: "AIoT, Cloud Database, Computer Vision, Telemetry",
                desc: "Smart enterprise telemetry and AIoT monitoring platform integrating sensor data streams, automated computer vision capture, and cloud-synchronized analytical dashboards."
            },
            {
                name: "AI Kilo Bot",
                role: "Data Scientist & IoT Engineer",
                tech: "Python, Computer Vision, Embedded Machine Learning",
                desc: "An intelligent automated sorting and weighing robotic system utilizing sensor data fusion and applied machine learning algorithms for precise measurement."
            },
            {
                name: "RFID Tollgate System",
                role: "Database & Systems Prototyper",
                tech: "RFID, Relational Database, Hardware Interfacing, Systems Integration",
                desc: "Real-time automated toll transaction simulation recording contactless RFID card swipes with instant balance deductions and ledger audit logs."
            },
            {
                name: "Xvidia Shop",
                role: "Data Analyst & DB Developer",
                tech: "SQL, E-Commerce Analytics, Relational Schema",
                desc: "Retail data analytics and e-commerce inventory system tracking transaction volumes, profit margins, sales velocity, and product performance trends."
            },
            {
                name: "GG Resto POS Dashboard",
                role: "Database Developer",
                tech: "POS System Architecture, Relational Schema, Financial Reporting",
                desc: "Restaurant point-of-sale data system designed to track dining orders, table churn, menu item velocity, and real-time revenue analytics."
            }
        ],

        certifications: [
            {
                title: "Associate Data Engineer (Certification)",
                issuer: "DataCamp",
                id: "DEA0017096233010",
                validity: "Issued Aug 31, 2026 • Valid through Aug 2028",
                desc: "Formal assessment-based credential certifying hands-on competency in designing scalable data architectures, executing ETL/ELT pipelines, query optimization, and managing data integrity under strict timed examination standards.",
                verifyUrl: "https://www.datacamp.com/certificate/DEA0017096233010"
            },
            {
                title: "Associate Data Engineer in SQL",
                issuer: "DataCamp Track",
                id: "5255ec7f1484d5f2be75802567507ec4d31dd4a4",
                validity: "28 hours curriculum completed",
                desc: "Curriculum validating advanced PostgreSQL querying, complex subqueries, window functions, relational database normalization, and query performance optimization.",
                verifyUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/5255ec7f1484d5f2be75802567507ec4d31dd4a4"
            },
            {
                title: "Python Essentials 1 & 2",
                issuer: "Cisco Networking Academy",
                desc: "Comprehensive dual certifications covering procedural programming, object-oriented concepts, algorithm design, data structures, and standard library modules in Python.",
                verifyUrl: "https://www.credly.com/users/gamboa-khin-andrei"
            },
            {
                title: "Working with Data Fundamentals",
                issuer: "IBM SkillsBuild & TESDA",
                desc: "Credentials demonstrating structured data cleaning, statistical modeling fundamentals, data integrity principles, and data ethics.",
                verifyUrl: "https://www.credly.com/users/gamboa-khin-andrei"
            }
        ],

        website: {
            version: "Portfolio V2 (2026 Edition)",
            frontend: "Semantic HTML5, modular CSS3, and high-performance vanilla JavaScript (Zero bulky runtime frameworks).",
            backend: "Supabase PostgreSQL Database for telemetry logs, Vercel Serverless Edge Functions, and Formspree SMTP API for email dispatch.",
            database: "Supabase Cloud Database powering the live Realtime Analytics telemetric view counters and contact queues.",
            email: "Formspree transactional SMTP pipeline sending validated inquiries directly to Khin's inbox with automated response copies."
        }
    };

    /* ==========================================================================
       2. Strict Intent Classifier & Response Synthesizer
       ========================================================================== */
    function processQuery(rawQuery) {
        const query = rawQuery.toLowerCase().trim();

        // 1. Greetings & Identity Inquiries
        if (/^(hi|hello|hey|greetings|good day|sup|yo|hola)\b/i.test(query) || /^who are you\??$/i.test(query)) {
            return {
                text: `Hello! I am <strong>khin.ai</strong>, Khin Andrei's specialized portfolio assistant.<br><br>I can provide fast, verified information regarding Khin's <strong>software development</strong>, <strong>data engineering projects</strong>, <strong>certifications</strong>, <strong>technical stack</strong>, and <strong>career background</strong>.<br><br>What would you like to explore?`,
                actions: [
                    { label: "Who is Khin Andrei?", action: "ask", query: "Who is Khin Andrei?" },
                    { label: "View Top Skills", action: "ask", query: "What are your top skills?" },
                    { label: "See Featured Projects", action: "ask", query: "Show me your projects" }
                ]
            };
        }

        // 2. Who is Khin Andrei? (Bio / Background / Summary)
        if (/who is (khin|andrei|sondre)|tell me about (khin|yourself|him)|bio|background|profile/i.test(query)) {
            return {
                text: `<strong>Khin Andrei Gamboa</strong> is a Computer Engineering graduate from Rizal Technological University (RTU), adaptable Software Developer, and Associate Data Engineer based in the Philippines.<br><br>He specializes in designing resilient ETL/ELT pipelines, architecting relational SQL databases, developing responsive web applications, and generating actionable business intelligence.<br><br>He has shipped <strong>8+ engineering projects</strong>, holds <strong>5+ industry credentials</strong> (including DataCamp Associate Data Engineer), and completed 6 months of enterprise systems immersion at Staff Domain Inc.`,
                actions: [
                    { label: "View Experience", action: "navigate", target: "#education" },
                    { label: "View Resume", action: "resume" },
                    { label: "Contact Khin", action: "navigate", target: "#contact" }
                ]
            };
        }

        // 3. Resume / Curriculum Vitae
        if (/resume|cv|curriculum vitae|download cv|hire him/i.test(query)) {
            return {
                text: `You can review and download Khin Andrei's official resume directly right here.<br><br>It highlights his <strong>DataCamp Associate Data Engineer certification</strong>, BS Computer Engineering degree, enterprise internship at Staff Domain Inc., and end-to-end data pipeline projects.`,
                actions: [
                    { label: "Open Resume Viewport", action: "resume" },
                    { label: "Direct PDF Download", action: "download", url: "./data/documents/resume/khin-andrei-gamboa-resume.pdf", filename: "Khin_Andrei_Gamboa_Resume.pdf" },
                    { label: "Inquire via Email", action: "open_url", url: `mailto:${KHIN_KNOWLEDGE.email}` }
                ]
            };
        }

        // 4. Skills & Technologies
        if (/skill|tech stack|technolog(y|ies)|what (tools|languages|stack)|tools/i.test(query)) {
            if (/python/i.test(query)) {
                return {
                    text: `<strong>Python Expertise:</strong><br>Python is Khin's primary language for data engineering, automation, and backend logic.<br>• Certified in <strong>Cisco Python Essentials 1 & 2</strong>.<br>• Builds automated ETL data pipelines, API integrations, and pandas/NumPy analytical workflows.<br>• Developed machine learning computer vision models in his <strong>FOVB-AIOT</strong> and <strong>AI Kilo Bot</strong> projects.`,
                    actions: [
                        { label: "See Python Projects", action: "navigate", target: "#work" },
                        { label: "Certifications", action: "navigate", target: "#certifications" }
                    ]
                };
            }
            if (/sql|postgres|database|snowflake/i.test(query)) {
                return {
                    text: `<strong>Databases & SQL Mastery:</strong><br>• <strong>PostgreSQL & SQL:</strong> Complex querying, table partitioning, relational schema modeling, indexing, and performance optimization.<br>• <strong>Snowflake:</strong> Cloud data warehousing fundamentals.<br>• <strong>Supabase:</strong> PostgreSQL connection pooling and RPC functions driving this website's telemetry.<br>• Credential: Certified in <strong>DataCamp Associate Data Engineer in SQL</strong> (28-hour comprehensive track).`,
                    actions: [
                        { label: "View SQL Projects", action: "navigate", target: "#work" },
                        { label: "Verify SQL Credential", action: "open_url", url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/5255ec7f1484d5f2be75802567507ec4d31dd4a4" }
                    ]
                };
            }
            if (/etl|elt|pipeline/i.test(query)) {
                return {
                    text: `<strong>ETL / ELT Capabilities:</strong><br>Khin specializes in designing resilient pipelines that ingest raw unstructured data, clean and validate schema consistency, and transform it into structured warehouse tables. His <strong>Social Media ETL Pipeline</strong> and <strong>DataCamp Associate Data Engineer Certification</strong> demonstrate practical mastery in pipeline orchestration.`,
                    actions: [
                        { label: "Jump to Projects", action: "navigate", target: "#work" },
                        { label: "View DataCamp Cert", action: "navigate", target: "#certifications" }
                    ]
                };
            }
            if (/power bi|tableau|dashboard|bi|analytics/i.test(query)) {
                return {
                    text: `<strong>Business Intelligence & Dashboards:</strong><br>Khin builds intuitive dashboards in <strong>Power BI</strong> and <strong>Tableau</strong>, transforming business metrics into actionable visual insights. He also leverages advanced <strong>Excel</strong> and <strong>Google Sheets</strong> for fast modeling.`,
                    actions: [
                        { label: "See Dashboard Projects", action: "navigate", target: "#work" }
                    ]
                };
            }

            return {
                text: `Khin's technical stack spans the full data & software lifecycle:<br><br>• <strong>Data Engineering:</strong> ${KHIN_KNOWLEDGE.skills.dataEngineering}<br>• <strong>Databases & Warehouses:</strong> ${KHIN_KNOWLEDGE.skills.databases}<br>• <strong>Programming & Scripting:</strong> ${KHIN_KNOWLEDGE.skills.programming}<br>• <strong>BI & Dashboards:</strong> ${KHIN_KNOWLEDGE.skills.analyticsBI}<br>• <strong>DevOps & Tools:</strong> ${KHIN_KNOWLEDGE.skills.toolsDevOps}`,
                actions: [
                    { label: "Explore Skills Marquee", action: "navigate", target: "#home" },
                    { label: "See Applied Projects", action: "navigate", target: "#work" }
                ]
            };
        }

        // 5. Projects
        if (/project|portfolio|work|built|fovb|kilo bot|etl pipeline|tollgate|xvidia|resto|pos/i.test(query)) {
            if (/social media|etl pipeline/i.test(query)) {
                return {
                    text: `<strong>Social Media ETL Pipeline</strong><br><em>Role: Data Pipeline & ETL Engineer</em><br><br>An automated pipeline written in Python that ingests social metrics, handles data cleaning and validation, and loads structured data into PostgreSQL for trend analytics.`,
                    actions: [{ label: "View in Projects Section", action: "navigate", target: "#work" }]
                };
            }
            if (/fovb|capstone|aiot/i.test(query)) {
                return {
                    text: `<strong>FOVB-AIOT (College Capstone Project)</strong><br><em>Role: Data & Database Architect</em><br><br>Integrated IoT sensor telemetry, image capture through computer vision, and cloud database synchronization feeding an analytical monitoring dashboard.`,
                    actions: [{ label: "View in Projects Section", action: "navigate", target: "#work" }]
                };
            }
            if (/kilo bot|weighing|sorting/i.test(query)) {
                return {
                    text: `<strong>AI Kilo Bot</strong><br><em>Role: Data Scientist & IoT Engineer</em><br><br>Smart weighing and sorting robotic platform fusing real-time sensor streams and machine learning algorithms for precise measurement.`,
                    actions: [{ label: "View in Projects Section", action: "navigate", target: "#work" }]
                };
            }
            if (/tollgate|rfid/i.test(query)) {
                return {
                    text: `<strong>RFID Tollgate System</strong><br><em>Role: Database & Systems Prototyper</em><br><br>Hardware and database integration simulating contactless expressway toll transactions with automated ledger deductions and audit logging.`,
                    actions: [{ label: "View in Projects Section", action: "navigate", target: "#work" }]
                };
            }
            if (/xvidia/i.test(query)) {
                return {
                    text: `<strong>Xvidia Shop</strong><br><em>Role: Data Analyst & DB Developer</em><br><br>E-commerce data modeling tracking product sales velocities, profit margins, and inventory metrics via relational SQL queries.`,
                    actions: [{ label: "View in Projects Section", action: "navigate", target: "#work" }]
                };
            }
            if (/resto|gg/i.test(query)) {
                return {
                    text: `<strong>GG Resto POS Dashboard</strong><br><em>Role: Database Developer</em><br><br>Restaurant point-of-sale data system analyzing orders, peak table churn, menu item popularity, and sales revenue.`,
                    actions: [{ label: "View in Projects Section", action: "navigate", target: "#work" }]
                };
            }

            return {
                text: `Khin has shipped <strong>6 key featured projects</strong>:<br><br>1. <strong>Social Media ETL Pipeline</strong> (Python, PostgreSQL, Data Ingestion)<br>2. <strong>FOVB-AIOT Capstone</strong> (Cloud Telemetry, Computer Vision)<br>3. <strong>AI Kilo Bot</strong> (Robotic Sorting & Machine Learning)<br>4. <strong>RFID Tollgate System</strong> (Relational DB & Hardware Interfacing)<br>5. <strong>Xvidia Shop</strong> (E-Commerce SQL Analytics)<br>6. <strong>GG Resto POS Dashboard</strong> (Restaurant Revenue Analytics)`,
                actions: [
                    { label: "Jump to Projects Section", action: "navigate", target: "#work" }
                ]
            };
        }

        // 6. Certifications & Qualifications
        if (/certif(y|ication|icate)|datacamp|cisco|ibm|tesda|credly|credentials|qualification/i.test(query)) {
            return {
                text: `Khin holds industry-verified credentials:<br><br>• <strong>DataCamp Associate Data Engineer</strong><br>  Timed assessment credential (ID: <code>DEA0017096233010</code>, Exp: Aug 2028).<br>• <strong>DataCamp Associate Data Engineer in SQL</strong><br>  Comprehensive 28-hour curriculum (ID: <code>5255ec7f...</code>).<br>• <strong>Cisco Python Essentials 1 & 2</strong><br>  Algorithmic programming and OOP.<br>• <strong>IBM SkillsBuild & TESDA Data Fundamentals</strong><br>  Data cleaning, analysis, and ethical management.`,
                actions: [
                    { label: "View Certifications", action: "navigate", target: "#certifications" },
                    { label: "Verify DataCamp Cert", action: "open_url", url: "https://www.datacamp.com/certificate/DEA0017096233010" },
                    { label: "View Credly Badges", action: "open_url", url: KHIN_KNOWLEDGE.credly }
                ]
            };
        }

        // 7. Education & Alma Mater
        if (/school|college|university|education|degree|graduate|rtu|rizal/i.test(query)) {
            return {
                text: `<strong>Academic Foundation:</strong><br>Khin Andrei graduated with a <strong>${KHIN_KNOWLEDGE.education.degree}</strong> from <strong>${KHIN_KNOWLEDGE.education.school}</strong>.<br><br>His degree provided extensive rigor in computer architecture, algorithmic design, embedded IoT engineering, and relational database systems.`,
                actions: [
                    { label: "View Education Timeline", action: "navigate", target: "#education" }
                ]
            };
        }

        // 8. Experience / Internship / Career Milestones
        if (/experience|intern|internship|staff domain|job|freelance|career/i.test(query)) {
            return {
                text: `<strong>Career Trajectory:</strong><br><br>• <strong>Staff Domain Inc. (6 Mos):</strong> Enterprise IT Systems & Operations immersion, focusing on enterprise reliability, process automation, and systems maintenance.<br>• <strong>Freelance Engineering:</strong> Delivered custom client database schemas, ETL pipelines, and reporting solutions.<br>• <strong>Target Roles:</strong> Software Developer, Associate Data Engineer, Junior IT Systems Specialist, Data Pipeline Specialist, and Data Analyst.`,
                actions: [
                    { label: "Explore Trajectory Flow", action: "navigate", target: "#education" },
                    { label: "View Resume", action: "resume" }
                ]
            };
        }

        // 9. Contact / Hiring / Email / Socials
        if (/contact|email|hire|reach|message|social|linkedin|facebook|instagram|phone|call/i.test(query)) {
            return {
                text: `You can connect with Khin Andrei through multiple channels:<br><br>• <strong>Email:</strong> <a href="mailto:${KHIN_KNOWLEDGE.email}" style="color:#ff5e00; text-decoration:underline;">${KHIN_KNOWLEDGE.email}</a><br>• <strong>LinkedIn:</strong> <a href="${KHIN_KNOWLEDGE.linkedin}" target="_blank" rel="noopener noreferrer" style="color:#ff5e00;">linkedin.com/in/khinandreigamboa</a><br>• <strong>Credly:</strong> <a href="${KHIN_KNOWLEDGE.credly}" target="_blank" rel="noopener noreferrer" style="color:#ff5e00;">gamboa-khin-andrei</a><br>• <strong>Direct Form:</strong> Fill out the contact form right here on the website!`,
                actions: [
                    { label: "Go to Contact Form", action: "navigate", target: "#contact" },
                    { label: "Send Email", action: "open_url", url: `mailto:${KHIN_KNOWLEDGE.email}` },
                    { label: "Open LinkedIn", action: "open_url", url: KHIN_KNOWLEDGE.linkedin }
                ]
            };
        }

        // 10. About this Website / Tech Stack / Features
        if (/website|this web|portfolio|stack|how is this (made|built)|tech stack|supabase|vercel|audio|sound|theme|features/i.test(query)) {
            return {
                text: `<strong>About this Portfolio (V2):</strong><br><br>• <strong>Frontend:</strong> ${KHIN_KNOWLEDGE.website.frontend}<br>• <strong>Backend & Edge:</strong> ${KHIN_KNOWLEDGE.website.backend}<br>• <strong>Database:</strong> ${KHIN_KNOWLEDGE.website.database}<br>• <strong>Email Delivery:</strong> ${KHIN_KNOWLEDGE.website.email}<br><br><strong>Key Interactive Highlights:</strong><br>• Retractable glassmorphic left sidebar with rail mode<br>• Real-time database telemetry view counter<br>• Theme switcher (Dark / Light mode)<br>• Web Audio API sound synthesizer<br>• Dual view modes (Portfolio vs. Data & Dev)<br>• Khin.ai assistant!`,
                actions: [
                    { label: "Toggle Theme", action: "theme" },
                    { label: "Sound Effects", action: "sound" },
                    { label: "Go to Top", action: "navigate", target: "#home" }
                ]
            };
        }

        // 11. Polite Thank You / Goodbye
        if (/thank|thanks|appreciated|goodbye|bye|see ya/i.test(query)) {
            return {
                text: `You're very welcome! If you have any more questions about Khin, his projects, or want to collaborate, feel free to ask or leave a message through the contact form!`,
                actions: [
                    { label: "Contact Khin", action: "navigate", target: "#contact" }
                ]
            };
        }

        // 12. Strict Scope Guardrail: Deflect unrelated queries
        return {
            text: `I am <strong>khin.ai</strong>, Khin Andrei's dedicated portfolio AI assistant.<br><br>To keep our discussion productive, I am strictly programmed to answer questions about <strong>Khin Andrei</strong>, his <strong>skills</strong>, <strong>projects</strong>, <strong>certifications</strong>, <strong>experience</strong>, and <strong>this website</strong>.<br><br>What would you like to know about his engineering background?`,
            actions: [
                { label: "Who is Khin?", action: "ask", query: "Who is Khin?" },
                { label: "What are his skills?", action: "ask", query: "What are your top skills?" },
                { label: "Show his projects", action: "ask", query: "Show me his projects" },
                { label: "How to contact him?", action: "ask", query: "How do I contact Khin?" }
            ]
        };
    }

    /* ==========================================================================
       3. DOM Injection: Minimalist Modal Viewport & Floating Launcher
       ========================================================================== */
    function initKhinAiWidget() {
        if (document.getElementById('khinAiModalOverlay')) return;

        // Custom Vector SVG Logo
        const KHIN_AI_LOGO_SVG = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
                <defs>
                    <linearGradient id="khinAiLogoOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#ff944d"/>
                        <stop offset="50%" stop-color="#ff5e00"/>
                        <stop offset="100%" stop-color="#d63d00"/>
                    </linearGradient>
                </defs>
                <g class="khin-ai-logo-monogram" fill="#ffffff">
                    <path d="M 172,62 L 270,62 L 110,248 L 214,442 L 158,474 L 8,252 Z" />
                    <polygon points="112,216 338,216 352,284 112,284" />
                    <polygon points="426,216 496,216 496,284 412,284" />
                    <path d="M 388,52 L 476,52 L 372,448 L 332,474 L 298,446 Z" />
                </g>
                <g class="khin-ai-logo-sparkle" fill="url(#khinAiLogoOrange)">
                    <path d="M 426,28 C 426,56 444,68 472,68 C 444,68 426,80 426,108 C 426,80 408,68 380,68 C 408,68 426,56 426,28 Z"/>
                    <circle class="khin-ai-sparkle-core" cx="426" cy="68" r="4.5" fill="#ffffff"/>
                </g>
            </svg>
        `;

        // 1. Create Floating Launcher Trigger Button
        const widgetEl = document.createElement('div');
        widgetEl.id = 'khin-ai-widget';
        widgetEl.className = 'khin-ai-widget';
        widgetEl.setAttribute('aria-label', 'khin.ai Assistant');

        widgetEl.innerHTML = `
            <button type="button" class="khin-ai-launcher" id="khinAiLauncher" aria-label="Open khin.ai Chat" title="Got questions? (Ctrl+Q)">
                <div class="khin-ai-launcher-logo">
                    ${KHIN_AI_LOGO_SVG}
                </div>
                <div class="khin-ai-launcher-label">
                    <span>khin<span class="brand-ai">.ai</span></span>
                    <span class="khin-ai-pulse-dot"></span>
                </div>
            </button>
        `;
        document.body.appendChild(widgetEl);

        // 2. Create Minimalist Modal Viewport (Matching Typing Test Viewport)
        const modalOverlay = document.createElement('div');
        modalOverlay.id = 'khinAiModalOverlay';
        modalOverlay.className = 'khin-ai-modal-overlay';
        modalOverlay.setAttribute('aria-modal', 'true');
        modalOverlay.setAttribute('role', 'dialog');
        modalOverlay.setAttribute('aria-label', 'khin.ai Assistant');
        modalOverlay.setAttribute('aria-hidden', 'true');

        modalOverlay.innerHTML = `
            <div class="khin-ai-viewport-container">
                <!-- Top Right Minimalist Exit Button -->
                <button type="button" class="khin-ai-exit-btn" id="khinAiModalCloseBtn" aria-label="Close khin.ai" title="Exit [ESC or Ctrl+Q]">
                    <i data-lucide="x"></i>
                </button>

                <!-- Minimalist Centered Workspace Body -->
                <div class="khin-ai-minimal-body">
                    <!-- Subtle Minimalist Telemetry Bar at top -->
                    <div class="khin-ai-minimal-telemetry">
                        <span class="khin-ai-telemetry-brand">khin<span class="brand-ai">.ai</span></span>
                        <span class="khin-ai-telemetry-sep">·</span>
                        <span class="khin-ai-telemetry-status"><span class="khin-ai-pulse-dot"></span> portfolio assistant</span>
                    </div>

                    <!-- Central Content Stage -->
                    <div class="khin-ai-center-stage" id="khinAiCenterStage">
                        <!-- Prompt & Input Zone: "Got questions?" that disappears when typing -->
                        <div class="khin-ai-prompt-wrapper" id="khinAiPromptWrapper">
                            <div class="khin-ai-got-questions-text" id="khinAiGotQuestionsText"><span class="khin-ai-cursor" id="khinAiCursor"></span>Got questions?</div>
                            <input type="text" class="khin-ai-hero-input" id="khinAiHeroInput" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" aria-label="Ask a question about Khin">
                        </div>

                        <!-- Conversation Q&A Area (Shown after question is submitted) -->
                        <div class="khin-ai-qa-area" id="khinAiQaArea" style="display: none;">
                            <div class="khin-ai-user-query-badge" id="khinAiUserQueryBadge"></div>
                            <div class="khin-ai-bot-answer-box" id="khinAiBotAnswerBox"></div>
                        </div>
                    </div>

                    <!-- Minimal Status Hint (Matching Typing Test) -->
                    <div class="khin-ai-status-hint" id="khinAiStatusHint">
                        type your question · press enter to send · esc to exit · tab to reset
                    </div>

                    <!-- Minimalist Action Links: Pure Clickable Letters / Words -->
                    <div class="khin-ai-action-links" id="khinAiActionLinks">
                        <button type="button" class="khin-ai-letter-btn" data-query="Who is Khin Andrei?">who is khin?</button>
                        <span class="khin-ai-letter-sep">/</span>
                        <button type="button" class="khin-ai-letter-btn" data-query="What are your top skills?">skills</button>
                        <span class="khin-ai-letter-sep">/</span>
                        <button type="button" class="khin-ai-letter-btn" data-query="Show me your projects">projects</button>
                        <span class="khin-ai-letter-sep">/</span>
                        <button type="button" class="khin-ai-letter-btn" data-query="Can I view your resume?">resume</button>
                        <span class="khin-ai-letter-sep">/</span>
                        <button type="button" class="khin-ai-letter-btn" data-query="What certifications do you have?">certifications</button>
                        <span class="khin-ai-letter-sep">/</span>
                        <button type="button" class="khin-ai-letter-btn" data-query="How can I contact Khin?">contact</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modalOverlay);

        // Instantiate lucide icons inside injected elements
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }

        // Wire Event Handlers
        setupEventListeners(modalOverlay);
    }

    /* ==========================================================================
       4. Event Listeners & Interaction Wiring
       ========================================================================== */
    function setupEventListeners(modalOverlay) {
        const launcherBtn = document.getElementById('khinAiLauncher');
        const closeBtn = document.getElementById('khinAiModalCloseBtn');
        const promptWrapper = document.getElementById('khinAiPromptWrapper');
        const input = document.getElementById('khinAiHeroInput');
        const qaArea = document.getElementById('khinAiQaArea');
        const userQueryBadge = document.getElementById('khinAiUserQueryBadge');
        const botAnswerBox = document.getElementById('khinAiBotAnswerBox');
        const statusHint = document.getElementById('khinAiStatusHint');
        const actionLinks = document.getElementById('khinAiActionLinks');

        function playSound(freq, duration) {
            if (typeof window.playUiSound === 'function') {
                try {
                    window.playUiSound(freq, duration);
                } catch (e) {}
            }
        }

        function openModal() {
            if (!modalOverlay) return;

            // Close typing test modal if active
            const typingModal = document.getElementById('typingTestOverlay');
            if (typingModal && typingModal.classList.contains('is-active')) {
                typingModal.classList.remove('is-active');
            }

            modalOverlay.classList.add('is-active');
            modalOverlay.setAttribute('aria-hidden', 'false');

            if (typeof window.lockMainWebScroll === 'function') {
                window.lockMainWebScroll();
            }
            if (window.lucide && typeof window.lucide.createIcons === 'function') {
                window.lucide.createIcons();
            }

            playSound(720, 0.03);

            setTimeout(() => {
                if (input) input.focus();
            }, 80);
        }

        function closeModal() {
            if (!modalOverlay) return;
            modalOverlay.classList.remove('is-active');
            modalOverlay.setAttribute('aria-hidden', 'true');

            if (typeof window.unlockMainWebScroll === 'function') {
                window.unlockMainWebScroll();
            }
            playSound(540, 0.02);
        }

        function toggleModal() {
            if (modalOverlay && modalOverlay.classList.contains('is-active')) {
                closeModal();
            } else {
                openModal();
            }
        }

        // Launcher & Close buttons
        if (launcherBtn) launcherBtn.addEventListener('click', toggleModal);
        if (closeBtn) closeBtn.addEventListener('click', closeModal);

        // Click outside viewport container to close
        modalOverlay.addEventListener('click', (e) => {
            if (!e.target.closest('.khin-ai-viewport-container')) {
                closeModal();
            }
        });

        // "Got questions?" prompt disappearance on typing
        if (input && promptWrapper) {
            promptWrapper.addEventListener('click', () => {
                if (input) input.focus();
            });

            input.addEventListener('input', () => {
                if (input.value.length > 0) {
                    promptWrapper.classList.add('has-typed');
                } else {
                    promptWrapper.classList.remove('has-typed');
                }
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const text = input.value.trim();
                    if (!text) return;
                    handleUserQuery(text);
                } else if (e.key === 'Tab') {
                    e.preventDefault();
                    resetConversation();
                } else if (e.key === 'Escape') {
                    e.preventDefault();
                    closeModal();
                }
            });
        }

        // Auto-focus input on any typed character if modal is open
        modalOverlay.addEventListener('keydown', (e) => {
            if (input && document.activeElement !== input && !e.ctrlKey && !e.altKey && !e.metaKey) {
                if (e.key.length === 1 || e.key === 'Backspace') {
                    input.focus();
                }
            }
        });

        // Reset Conversation back to initial "Got questions?" screen
        function resetConversation() {
            if (qaArea) qaArea.style.display = 'none';
            if (botAnswerBox) botAnswerBox.innerHTML = '';
            if (userQueryBadge) userQueryBadge.innerHTML = '';
            if (input) {
                input.value = '';
                input.placeholder = '';
            }
            if (promptWrapper) promptWrapper.classList.remove('has-typed');
            if (statusHint) {
                statusHint.innerHTML = 'type your question · press enter to send · esc to exit · tab to reset';
            }
            playSound(540, 0.02);
            if (input) input.focus();
        }

        // Process and handle user question
        function handleUserQuery(text) {
            playSound(780, 0.02);
            if (input) {
                input.value = '';
                input.placeholder = 'Ask a follow-up question...';
            }
            if (promptWrapper) promptWrapper.classList.add('has-typed');

            // 1. Show user query badge
            if (userQueryBadge) {
                userQueryBadge.innerHTML = `<i data-lucide="help-circle" style="width:14px;height:14px;"></i> <span>&ldquo;${escapeHtml(text)}&rdquo;</span>`;
            }

            // 2. Show QA area and typing dots
            if (qaArea) qaArea.style.display = 'flex';
            if (botAnswerBox) {
                botAnswerBox.innerHTML = `
                    <div class="khin-ai-typing-indicator">
                        <span class="khin-ai-typing-dot"></span>
                        <span class="khin-ai-typing-dot"></span>
                        <span class="khin-ai-typing-dot"></span>
                    </div>
                `;
            }
            if (statusHint) {
                statusHint.innerHTML = 'thinking... · press esc to exit';
            }
            if (window.lucide && typeof window.lucide.createIcons === 'function') {
                window.lucide.createIcons();
            }

            // 3. Process query with natural slight delay
            const latency = Math.min(550, Math.max(220, text.length * 10));
            setTimeout(() => {
                const res = processQuery(text);

                let actionsHtml = '';
                if (res.actions && res.actions.length > 0) {
                    actionsHtml = `<div class="khin-ai-actions-row">` +
                        res.actions.map(act => {
                            if (act.action === 'ask') {
                                return `<button type="button" class="khin-ai-action-btn" data-type="ask" data-query="${escapeHtml(act.query)}"><i data-lucide="message-circle" style="width:12px;height:12px;"></i> ${escapeHtml(act.label)}</button>`;
                            }
                            if (act.action === 'navigate') {
                                return `<button type="button" class="khin-ai-action-btn" data-type="navigate" data-target="${escapeHtml(act.target)}"><i data-lucide="arrow-down-right" style="width:12px;height:12px;"></i> ${escapeHtml(act.label)}</button>`;
                            }
                            if (act.action === 'resume') {
                                return `<button type="button" class="khin-ai-action-btn" data-type="resume"><i data-lucide="file-text" style="width:12px;height:12px;"></i> ${escapeHtml(act.label)}</button>`;
                            }
                            if (act.action === 'download') {
                                return `<a href="${act.url}" download="${act.filename || ''}" class="khin-ai-action-btn"><i data-lucide="download" style="width:12px;height:12px;"></i> ${escapeHtml(act.label)}</a>`;
                            }
                            if (act.action === 'open_url') {
                                return `<a href="${act.url}" target="_blank" rel="noopener noreferrer" class="khin-ai-action-btn"><i data-lucide="external-link" style="width:12px;height:12px;"></i> ${escapeHtml(act.label)}</a>`;
                            }
                            if (act.action === 'theme') {
                                return `<button type="button" class="khin-ai-action-btn" data-type="theme"><i data-lucide="sun-moon" style="width:12px;height:12px;"></i> ${escapeHtml(act.label)}</button>`;
                            }
                            if (act.action === 'sound') {
                                return `<button type="button" class="khin-ai-action-btn" data-type="sound"><i data-lucide="volume-2" style="width:12px;height:12px;"></i> ${escapeHtml(act.label)}</button>`;
                            }
                            return '';
                        }).join('') +
                    `</div>`;
                }

                if (botAnswerBox) {
                    botAnswerBox.innerHTML = `
                        <div>${res.text}</div>
                        ${actionsHtml}
                    `;
                }

                if (window.lucide && typeof window.lucide.createIcons === 'function') {
                    window.lucide.createIcons();
                }

                playSound(640, 0.025);

                if (statusHint) {
                    statusHint.innerHTML = 'type another question · press enter to send · tab to clear · esc to exit';
                }

                if (input) input.focus();
            }, latency);
        }

        // Action links (starter questions) click handling
        if (actionLinks) {
            actionLinks.addEventListener('click', (e) => {
                const btn = e.target.closest('.khin-ai-letter-btn');
                if (!btn) return;
                const query = btn.getAttribute('data-query');
                if (query) {
                    handleUserQuery(query);
                }
            });
        }

        // Action Buttons inside Bot Answer box
        if (botAnswerBox) {
            botAnswerBox.addEventListener('click', (e) => {
                const btn = e.target.closest('.khin-ai-action-btn');
                if (!btn) return;
                const type = btn.getAttribute('data-type');

                if (type === 'ask') {
                    const q = btn.getAttribute('data-query');
                    if (q) handleUserQuery(q);
                } else if (type === 'navigate') {
                    const target = btn.getAttribute('data-target');
                    if (target) {
                        closeModal();
                        setTimeout(() => {
                            const el = document.querySelector(target);
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                if (target === '#contact') {
                                    const nameInp = document.getElementById('contact-name');
                                    if (nameInp) setTimeout(() => nameInp.focus(), 650);
                                }
                            }
                        }, 250);
                    }
                } else if (type === 'resume') {
                    closeModal();
                    setTimeout(() => {
                        if (typeof window.openDocumentViewport === 'function') {
                            window.openDocumentViewport('resume');
                        } else if (typeof window.openThemedViewport === 'function') {
                            window.openThemedViewport('resume');
                        } else {
                            const resumeLink = document.querySelector('a[href*="khin-andrei-gamboa-resume.pdf"]');
                            if (resumeLink) {
                                resumeLink.click();
                            } else {
                                window.open('./data/documents/resume/khin-andrei-gamboa-resume.pdf', '_blank');
                            }
                        }
                    }, 250);
                } else if (type === 'theme') {
                    const themeBtn = document.querySelector('.theme-seg-btn:not(.is-active)');
                    if (themeBtn) themeBtn.click();
                } else if (type === 'sound') {
                    const soundBtn = document.getElementById('themeSoundToggleBtn');
                    if (soundBtn) soundBtn.click();
                }
            });
        }

        // Global keydown listeners for Escape & Tab
        document.addEventListener('keydown', (e) => {
            if (!modalOverlay || !modalOverlay.classList.contains('is-active')) return;

            if (e.key === 'Escape') {
                e.preventDefault();
                closeModal();
                return;
            }

            if (e.key === 'Tab') {
                e.preventDefault();
                resetConversation();
                return;
            }

            // Auto-focus input on any typed character if focus was elsewhere
            if (input && document.activeElement !== input) {
                if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
                    input.focus();
                }
            }
        });

        // Expose public API on window
        window.khinAi = {
            open: openModal,
            close: closeModal,
            toggle: toggleModal,
            isOpen: () => modalOverlay && modalOverlay.classList.contains('is-active'),
            ask: (q) => {
                openModal();
                handleUserQuery(q);
            },
            reset: resetConversation
        };
        window.openKhinAiModal = openModal;
        window.closeKhinAiModal = closeModal;
    }

    function escapeHtml(str) {
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Auto-mount when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initKhinAiWidget);
    } else {
        initKhinAiWidget();
    }
})();
