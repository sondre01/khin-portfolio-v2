/**
 * ==========================================================================
 * KHIN.AI - Specialized Portfolio AI Assistant Engine
 * 
 * Strict Domain Scope: Only answers about Khin Andrei Gamboa, his skills,
 * projects, certifications, education, career, contact, and this website.
 * Sticky in bottom-right corner, synchronized with left sidebar navbar.
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
        role: "Aspiring Data Specialist / Associate Data Engineer",
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

        overview: "Khin Andrei is a Computer Engineering graduate and adaptable Data Specialist based in the Philippines. He builds end-to-end data solutions across the complete data lifecycle—from engineering resilient ETL/ELT pipelines and database architectures to extracting strategic analytical insights, designing interactive business intelligence dashboards, and developing applied AI models.",

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
                title: "Associate Data Engineer in SQL (Track)",
                issuer: "DataCamp",
                id: "5255ec7f1484d5f2be75802567507ec4d31dd4a4",
                validity: "Completed Aug 30, 2026 • 28-Hour Comprehensive Track",
                desc: "Comprehensive 28-hour course track covering SQL database design, ETL/ELT pipelines, data cleaning, schema optimization, and warehousing.",
                verifyUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/5255ec7f1484d5f2be75802567507ec4d31dd4a4"
            },
            {
                title: "Python Essentials 1 & 2",
                issuer: "Cisco Networking Academy / Python Institute",
                desc: "Industry curriculum covering Python fundamentals, algorithmic problem solving, data structures, and object-oriented programming."
            },
            {
                title: "Data Fundamentals",
                issuer: "IBM SkillsBuild & TESDA",
                desc: "Foundational certification covering data analytics, data lifecycle management, visualization techniques, and ethical AI/data handling."
            }
        ],

        experience: [
            {
                company: "Staff Domain Inc.",
                role: "IT Systems & Operations Immersion (6 Months)",
                desc: "Completed enterprise internship delivering hands-on technical support, hardware/software deployment, enterprise IT infrastructure maintenance, and process automation."
            },
            {
                company: "Freelance Engineering",
                role: "Custom Systems & Data Solutions",
                desc: "Delivered real-world client database solutions, automation scripts, and custom data processing workflows for micro and small businesses."
            }
        ],

        website: {
            frontend: "Built with semantic HTML5, modular Vanilla CSS3 (glassmorphic aesthetic, custom animations), and ES6+ JavaScript.",
            backend: "Runs on Vercel Serverless Functions (/api/submit-message.js).",
            database: "Supabase PostgreSQL instance connected via connection pool (`pg` driver) for real-time page telemetry and message logging.",
            email: "Integrated with Resend API for transactional email forwarding of contact inquiries directly to Khin.",
            features: [
                "Retractable glassmorphic left sidebar navbar with minimized rail mode and smooth scrollspy",
                "Theme switcher with segmented sliding control supporting Dark and Light aesthetics",
                "Built-in Web Audio API sound synthesizer engine for tactical tactile feedback",
                "Live database-backed telemetry view counter with animated count-up numbers",
                "Dedicated dual views: Khin Andrei Portfolio View & Data & Dev View",
                "Integrated document viewer modal for viewing and downloading Khin's Resume & Cover Letter",
                "Sticky Khin.ai minimal assistant bot!"
            ]
        }
    };

    /* ==========================================================================
       2. Natural Language Query Processor & Strict Guardrails
       ========================================================================== */
    function processQuery(rawInput) {
        const query = rawInput.toLowerCase().trim();

        // 1. Greetings & Pleasantries
        if (/^(hi|hello|hey|greetings|good morning|good afternoon|good evening|sup|yo)\b/i.test(query)) {
            return {
                text: `Hello! I'm **khin.ai**, Khin Andrei's dedicated portfolio assistant. I can answer any questions about his skills, projects, certifications, experience, or this website.<br><br>What would you like to explore?`,
                actions: [
                    { label: "Top Skills", action: "ask", query: "What are your top skills?" },
                    { label: "Featured Projects", action: "ask", query: "Show me his projects" },
                    { label: "Certifications", action: "ask", query: "What certifications do you have?" },
                    { label: "Contact Khin", action: "ask", query: "How do I contact Khin?" }
                ]
            };
        }

        // 2. Who is Khin / Bio / About / Background
        if (/who (is|are) (khin|khinandrei|you|sondre)|tell me about (khin|him|yourself)|about khin|introduce/i.test(query)) {
            return {
                text: `**${KHIN_KNOWLEDGE.name}** (also known as *${KHIN_KNOWLEDGE.alias}*) is an **${KHIN_KNOWLEDGE.role}** and Computer Engineering graduate from **${KHIN_KNOWLEDGE.education.school}**, based in the ${KHIN_KNOWLEDGE.location}.<br><br>${KHIN_KNOWLEDGE.overview}<br><br><strong>Key Highlights:</strong><br>• <strong>${KHIN_KNOWLEDGE.stats.projectsShipped}</strong> Projects Shipped<br>• <strong>${KHIN_KNOWLEDGE.stats.technologies}</strong> Core Tech Stack<br>• <strong>${KHIN_KNOWLEDGE.stats.enterpriseImmersion}</strong> Enterprise Immersion at Staff Domain Inc.<br>• <strong>${KHIN_KNOWLEDGE.stats.certifications}</strong> Industry Credentials`,
                actions: [
                    { label: "View Profile", action: "navigate", target: "#about" },
                    { label: "Open Resume", action: "resume" },
                    { label: "Career Milestones", action: "navigate", target: "#education" }
                ]
            };
        }

        // 3. Resume / CV / Cover Letter / Download
        if (/resume|cv|curriculum vitae|cover letter|download resume|view resume/i.test(query)) {
            return {
                text: `You can view and download Khin's credentials directly:<br><br>• <strong>Resume:</strong> Full details on education, certifications, and technical stack.<br>• <strong>Cover Letter:</strong> Personalized narrative of his career mission and value proposition.<br><br>You can preview them in the built-in viewer or download the PDF:`,
                actions: [
                    { label: "Open Resume in Viewer", action: "resume" },
                    { label: "Download Resume PDF", action: "download", url: "./data/documents/resume/khin-andrei-gamboa-resume.pdf", filename: "khin-andrei-gamboa-resume.pdf" },
                    { label: "Download Cover Letter", action: "download", url: "./data/documents/cover_letter/khin_andrei_gamboa_cover_letter.pdf", filename: "khin_andrei_gamboa_cover_letter.pdf" }
                ]
            };
        }

        // 4. Skills & Technologies
        if (/skills|technolog(y|ies)|stack|tools|languages|programming|what can (you|he) do|sql|python|etl|postgres|snowflake|power bi|tableau|docker/i.test(query)) {
            if (/python/i.test(query)) {
                return {
                    text: `<strong>Python Expertise:</strong><br>Khin utilizes Python for data manipulation, ETL/ELT pipeline automation, data extraction via REST APIs, computer vision, and applied machine learning models. He holds the <strong>Cisco Python Essentials</strong> credentials.`,
                    actions: [
                        { label: "View Projects", action: "navigate", target: "#work" },
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
                text: `Khin's technical stack spans the full data lifecycle:<br><br>• <strong>Data Engineering:</strong> ${KHIN_KNOWLEDGE.skills.dataEngineering}<br>• <strong>Databases & Warehouses:</strong> ${KHIN_KNOWLEDGE.skills.databases}<br>• <strong>Programming & Scripting:</strong> ${KHIN_KNOWLEDGE.skills.programming}<br>• <strong>BI & Dashboards:</strong> ${KHIN_KNOWLEDGE.skills.analyticsBI}<br>• <strong>DevOps & Tools:</strong> ${KHIN_KNOWLEDGE.skills.toolsDevOps}`,
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
                text: `<strong>Career Trajectory:</strong><br><br>• <strong>Staff Domain Inc. (6 Mos):</strong> Enterprise IT Systems & Operations immersion, focusing on enterprise reliability, process automation, and systems maintenance.<br>• <strong>Freelance Engineering:</strong> Delivered custom client database schemas, ETL pipelines, and reporting solutions.<br>• <strong>Target Roles:</strong> Associate Data Engineer, Junior IT Systems Specialist, Data Pipeline Specialist, and Data Analyst.`,
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
       3. DOM Generation & UI Controller
       ========================================================================== */
    function initKhinAiWidget() {
        if (document.getElementById('khin-ai-widget')) return;

        // Custom Vector SVG Logo inspired by Khin's logo with glowing AI star
        const KHIN_AI_LOGO_SVG = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
                <defs>
                    <linearGradient id="khinAiLogoOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#ff944d"/>
                        <stop offset="50%" stop-color="#ff5e00"/>
                        <stop offset="100%" stop-color="#d63d00"/>
                    </linearGradient>
                </defs>
                <g fill="#ffffff">
                    <!-- Left Chevron (<) -->
                    <path d="M 172,62 L 270,62 L 110,248 L 214,442 L 158,474 L 8,252 Z" />
                    <!-- Crossbar (-) Left -->
                    <polygon points="112,216 338,216 352,284 112,284" />
                    <!-- Crossbar (-) Right -->
                    <polygon points="426,216 496,216 496,284 412,284" />
                    <!-- Slanted Slash (/) -->
                    <path d="M 388,52 L 476,52 L 372,448 L 332,474 L 298,446 Z" />
                </g>
                <!-- AI Radiant Star ✦ -->
                <g fill="url(#khinAiLogoOrange)">
                    <path d="M 426,28 C 426,56 444,68 472,68 C 444,68 426,80 426,108 C 426,80 408,68 380,68 C 408,68 426,56 426,28 Z"/>
                    <circle cx="426" cy="68" r="4.5" fill="#ffffff"/>
                </g>
            </svg>
        `;

        // Create Widget HTML markup
        const widgetEl = document.createElement('div');
        widgetEl.id = 'khin-ai-widget';
        widgetEl.className = 'khin-ai-widget';
        widgetEl.setAttribute('aria-label', 'khin.ai Assistant');

        widgetEl.innerHTML = `
            <!-- Chat Window Container -->
            <div class="khin-ai-window" id="khinAiWindow" role="dialog" aria-modal="true" aria-label="khin.ai Chat">
                <!-- Header -->
                <div class="khin-ai-header">
                    <div class="khin-ai-header-brand">
                        <div class="khin-ai-header-avatar">
                            ${KHIN_AI_LOGO_SVG}
                        </div>
                        <div class="khin-ai-header-titles">
                            <span class="khin-ai-header-title">khin<span class="brand-ai">.ai</span></span>
                            <span class="khin-ai-header-sub">
                                <span class="khin-ai-pulse-dot"></span> Portfolio AI Assistant
                            </span>
                        </div>
                    </div>
                    <div class="khin-ai-header-actions">
                        <button type="button" class="khin-ai-hdr-btn" id="khinAiResetBtn" title="Reset Conversation" aria-label="Reset Conversation">
                            <i data-lucide="rotate-ccw" style="width: 15px; height: 15px;"></i>
                        </button>
                        <button type="button" class="khin-ai-hdr-btn" id="khinAiCloseBtn" title="Minimize Chat" aria-label="Minimize Chat">
                            <i data-lucide="x" style="width: 17px; height: 17px;"></i>
                        </button>
                    </div>
                </div>

                <!-- Chat Body / Messages Stream -->
                <div class="khin-ai-body" id="khinAiBody">
                    <!-- Welcome Hero Box -->
                    <div class="khin-ai-welcome-box">
                        <strong>Hello! I'm khin.ai 👋</strong><br>
                        I'm Khin Andrei's dedicated portfolio AI assistant. Ask me anything about his skills, projects, certifications, background, or this website!
                    </div>

                    <!-- Quick Starter Topic Chips -->
                    <div class="khin-ai-chips-section">
                        <div class="khin-ai-chips-label">Suggested Questions</div>
                        <div class="khin-ai-chips-track" id="khinAiChipsTrack">
                            <button type="button" class="khin-ai-chip" data-query="Who is Khin Andrei?">Who is Khin?</button>
                            <button type="button" class="khin-ai-chip" data-query="What are your top skills?">Top Skills</button>
                            <button type="button" class="khin-ai-chip" data-query="Show me your projects">Featured Projects</button>
                            <button type="button" class="khin-ai-chip" data-query="What certifications do you have?">Certifications</button>
                            <button type="button" class="khin-ai-chip" data-query="How can I contact Khin?">Contact Khin</button>
                            <button type="button" class="khin-ai-chip" data-query="Can I view your resume?">View Resume</button>
                        </div>
                    </div>

                    <!-- Dynamic Message Stream -->
                    <div id="khinAiStream" style="display: flex; flex-direction: column; gap: 12px;"></div>

                    <!-- Typing Indicator -->
                    <div id="khinAiTyping" class="khin-ai-msg bot" style="display: none;">
                        <div class="khin-ai-msg-avatar">${KHIN_AI_LOGO_SVG}</div>
                        <div class="khin-ai-bubble khin-ai-typing">
                            <span class="khin-ai-dot"></span>
                            <span class="khin-ai-dot"></span>
                            <span class="khin-ai-dot"></span>
                        </div>
                    </div>
                </div>

                <!-- Input Footer -->
                <div class="khin-ai-footer">
                    <form class="khin-ai-form" id="khinAiForm" autocomplete="off">
                        <input type="text" id="khinAiInput" class="khin-ai-input" placeholder="Ask anything about Khin..." maxlength="300" required>
                        <button type="submit" id="khinAiSendBtn" class="khin-ai-send-btn" title="Send message" aria-label="Send message">
                            <i data-lucide="send" style="width: 16px; height: 16px;"></i>
                        </button>
                    </form>
                    <div class="khin-ai-disclaimer">Specialized in Khin Andrei's work & portfolio</div>
                </div>
            </div>

            <!-- Floating Launcher Trigger Button -->
            <button type="button" class="khin-ai-launcher" id="khinAiLauncher" aria-label="Open khin.ai Chat" title="Open khin.ai Chat">
                <div class="khin-ai-launcher-logo">
                    ${KHIN_AI_LOGO_SVG}
                </div>
                <div class="khin-ai-launcher-label">
                    <span>khin<span class="brand-ai">.ai</span></span>
                    <span class="khin-ai-pulse-dot"></span>
                </div>
                <div class="khin-ai-launcher-close-icon">
                    <i data-lucide="x" style="width: 20px; height: 20px;"></i>
                </div>
            </button>
        `;

        document.body.appendChild(widgetEl);

        // Re-run lucide icons on the new widget
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }

        // Attach Event Listeners
        setupEventListeners(widgetEl, KHIN_AI_LOGO_SVG);
    }

    /* ==========================================================================
       4. Event Listeners & Interaction Wiring
       ========================================================================== */
    function setupEventListeners(widgetEl, logoSvg) {
        const launcherBtn = document.getElementById('khinAiLauncher');
        const closeBtn = document.getElementById('khinAiCloseBtn');
        const resetBtn = document.getElementById('khinAiResetBtn');
        const form = document.getElementById('khinAiForm');
        const input = document.getElementById('khinAiInput');
        const stream = document.getElementById('khinAiStream');
        const typingEl = document.getElementById('khinAiTyping');
        const bodyEl = document.getElementById('khinAiBody');
        const chipsTrack = document.getElementById('khinAiChipsTrack');

        function playSound(freq, duration) {
            if (typeof window.playUiSound === 'function') {
                try {
                    window.playUiSound(freq, duration);
                } catch (e) {}
            }
        }

        function toggleWidget() {
            const isOpen = widgetEl.classList.toggle('is-open');
            if (isOpen) {
                playSound(680, 0.03);
                setTimeout(() => {
                    if (input) input.focus();
                }, 200);
            } else {
                playSound(480, 0.03);
            }
        }

        launcherBtn.addEventListener('click', toggleWidget);
        closeBtn.addEventListener('click', () => {
            widgetEl.classList.remove('is-open');
            playSound(480, 0.03);
        });

        // Close on Escape key
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && widgetEl.classList.contains('is-open')) {
                widgetEl.classList.remove('is-open');
            }
        });

        // Reset Conversation
        resetBtn.addEventListener('click', () => {
            if (stream) stream.innerHTML = '';
            playSound(540, 0.04);
            if (input) input.focus();
        });

        // Chips click handlers
        if (chipsTrack) {
            chipsTrack.addEventListener('click', (e) => {
                const chip = e.target.closest('.khin-ai-chip');
                if (!chip) return;
                const query = chip.getAttribute('data-query');
                if (query) {
                    handleUserQuery(query);
                }
            });
        }

        // Form submit
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = input.value.trim();
            if (!text) return;
            input.value = '';
            handleUserQuery(text);
        });

        function scrollToBottom() {
            setTimeout(() => {
                bodyEl.scrollTop = bodyEl.scrollHeight;
            }, 60);
        }

        function handleUserQuery(text) {
            playSound(780, 0.02);

            // 1. Append User Message Bubble
            const userMsgEl = document.createElement('div');
            userMsgEl.className = 'khin-ai-msg user';
            userMsgEl.innerHTML = `<div class="khin-ai-bubble"><p>${escapeHtml(text)}</p></div>`;
            stream.appendChild(userMsgEl);
            scrollToBottom();

            // 2. Show Typing Indicator
            typingEl.style.display = 'flex';
            scrollToBottom();

            // 3. Process Query with brief simulated natural latency
            const thinkingTime = Math.min(800, Math.max(300, text.length * 15));
            setTimeout(() => {
                typingEl.style.display = 'none';
                const res = processQuery(text);

                // 4. Append Bot Message Bubble
                const botMsgEl = document.createElement('div');
                botMsgEl.className = 'khin-ai-msg bot';

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

                botMsgEl.innerHTML = `
                    <div class="khin-ai-msg-avatar">${logoSvg}</div>
                    <div class="khin-ai-bubble">
                        <p>${res.text}</p>
                        ${actionsHtml}
                    </div>
                `;

                stream.appendChild(botMsgEl);

                // Re-render lucide icons inside the new message
                if (window.lucide && typeof window.lucide.createIcons === 'function') {
                    window.lucide.createIcons();
                }

                scrollToBottom();
                playSound(640, 0.025);
            }, thinkingTime);
        }

        // Action Buttons Delegation inside Messages Stream
        stream.addEventListener('click', (e) => {
            const btn = e.target.closest('.khin-ai-action-btn');
            if (!btn) return;
            const type = btn.getAttribute('data-type');

            if (type === 'ask') {
                const q = btn.getAttribute('data-query');
                if (q) handleUserQuery(q);
            } else if (type === 'navigate') {
                const target = btn.getAttribute('data-target');
                if (target) {
                    const el = document.querySelector(target);
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        if (target === '#contact') {
                            const nameInp = document.getElementById('contact-name');
                            if (nameInp) setTimeout(() => nameInp.focus(), 650);
                        }
                    }
                    // On mobile, close widget so user sees target
                    if (window.innerWidth <= 600) {
                        widgetEl.classList.remove('is-open');
                    }
                }
            } else if (type === 'resume') {
                // Trigger website's built-in resume viewport if present, else fallback
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
            } else if (type === 'theme') {
                const themeBtn = document.querySelector('.theme-seg-btn:not(.is-active)');
                if (themeBtn) themeBtn.click();
            } else if (type === 'sound') {
                const soundBtn = document.getElementById('themeSoundToggleBtn');
                if (soundBtn) soundBtn.click();
            }
        });
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
