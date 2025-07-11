document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.section');
    const matrixBackground = document.querySelector('.matrix-background');
    const languageToggleButton = document.getElementById('languageToggleButton');

    const translations = {
        en: {
            pageTitle: "Riccardo Massini - Portfolio",
            tagline: "IT Professional | Junior Developer and Ethical Hacker",
            navAbout: "About Me",
            navExperience: "Work Experience",
            navEducation: "Education",
            navSkills: "Skills",
            navProjects: "Projects",
            navContact: "Contact Me",
            aboutTitle: "About Me",
            jobCyberchallengeTutorTitle: "Cyberchallenge Tutor",
            jobCyberchallengeTutorCompany: "University of Insubria - Varese, Italy",
            jobCyberchallengeTutorDates: "[02/2025-07/2025]",
            jobStemTutorTitle: "STEM Tutor",
            jobStemTutorCompany: "ConTeSto - Appiano Gentile, Italy",
            jobStemTutorDates: "[01/2023-01/2025]",
            jobProjectAssistantTitle: "Project Assistant and Contributor",
            jobProjectAssistantCompany: "Solware - Limido Comasco, Italy",
            jobProjectAssistantDates: "[09/2021-10/2021]",
            experienceTitle: "Work Experience",
            educationTitle: "Education",
            eduBachelorTitle: "Bachelor in Computer Science",
            eduBachelorInstitution: "University of Insubria - Como, Italy",
            eduBachelorDates: "[09/2022 - 07/2025]",
            eduBachelorGrade: "Final grade: 110 cum laude" ,
            eduBachelorThesis: "Thesis: Deep Learning in Dermatology: Automatic Image Analysis",
            eduHighSchoolTitle: "High School Diploma in Information Technology",
            eduHighSchoolInstitution: "Magistri Cumacini - Como, Italy",
            eduHighSchoolDates: "[09/2017-07/2022]",
            eduHighSchoolGrade: "Final grade: 82",
            skillsTitle: "Skills",
            skillsProgrammingTitle: "Programming/Markup Languages",
            skillsCybersecurityTitle: "Cybersecurity & CTF",
            skillsBlueTeamTitle: "Blue Team & Security Operations",
            skillsPentestingTitle: "Pentesting Tools",
            skillsSystemsNetworkingTitle: "Systems & Networking",
            skillsAITitle: "Artificial Intelligence & Data Science",
            skillsOtherTitle: "Other Skills & Tools",
            skillsSoftSkillsTitle: "Soft Skills",
            skillsLanguageTitle: "Language Skills",
            projectsTitle: "Projects",
            projCyberchallenge2024Title: "Cyberchallenge 2024",
            projCyberchallenge2024Dates: "[02/2024-07/2024]",
            projCyberchallenge2024Link1: "Certificate of Participation",
            projCyberchallenge2024Link2: "Certificate of Participation - Local Competition",
            projCyberchallenge2024Link3: "Certificate of Participation - Finalist",
            projInsubriaCTFTitle: "Insubria CTF",
            projInsubriaCTFDates: "[03/2025-05/2025]",
            projInsubriaCTFLink: "INSUBRIA CTF",
            projCubingPracticeAppTitle: "CubingPracticeApp",
            projCubingPracticeAppDates: "[05/2025-06/2025]",
            projCubingPracticeAppLink: "CubingPracticeApp",
            projSkinLesionClassifierTitle: "Skin Lesion Classifier",
            projSkinLesionClassifierDates: "[02/2025-05/2025]",
            projSkinLesionModelLink: "Skin Lesion Model",
            projSkinLesionClassifierLink: "Skin Lesion Classifier",
            projBigDataTasksTitle: "Big Data Tasks",
            projBigDataTasksDates: "[02/2025-06/2025]",
            projBigDataTasksLink: "Big Data Tasks",
            projClimateMonitoringTitle: "Climate Monitoring",
            projClimateMonitoringDates: "[06/2024-09/2024]",
            projClimateMonitoringLink: "ClimateMonitoring",
            projTypeLabel: "Project Type:",
            contactTitle: "Contact Me",
            contactReachOut: "Feel free to reach out!",
            footerText: "&copy; 2025 Riccardo Massini. All rights reserved.",
            buttonText: "Italian"
        },
        it: {
            pageTitle: "Riccardo Massini - Portfolio",
            tagline: "Professionista IT | Junior Developer ed Ethical Hacker",
            navAbout: "Chi Sono",
            navExperience: "Esperienze Lavorative",
            navEducation: "Formazione",
            navSkills: "Competenze",
            navProjects: "Progetti",
            navContact: "Contattami",
            aboutTitle: "Chi Sono",
            jobCyberchallengeTutorTitle: "Tutor Cyberchallenge",
            jobCyberchallengeTutorCompany: "Università dell'Insubria - Varese, Italia",
            jobCyberchallengeTutorDates: "[02/2025-07/2025]",
            jobStemTutorTitle: "Tutor STEM",
            jobStemTutorCompany: "ConTeSto - Appiano Gentile, Italia",
            jobStemTutorDates: "[01/2023-01/2025]",
            jobProjectAssistantTitle: "Assistente di Progetto e Contributore",
            jobProjectAssistantCompany: "Solware - Limido Comasco, Italia",
            jobProjectAssistantDates: "[09/2021-10/2021]",
            experienceTitle: "Esperienze Lavorative",
            educationTitle: "Formazione",
            eduBachelorTitle: "Laurea in Informatica",
            eduBachelorInstitution: "Università dell'Insubria - Como, Italia",
            eduBachelorDates: "[09/2022 - 07/2025]",
            eduBachelorGrade: "Voto finale: 110 e lode",
            eduBachelorThesis: "Tesi: Deep Learning in Dermatologia: Analisi Automatica delle Immagini",
            eduHighSchoolTitle: "Diploma di Scuola Superiore in Informatica",
            eduHighSchoolInstitution: "Magistri Cumacini - Como, Italia",
            eduHighSchoolDates: "[09/2017-07/2022]",
            eduHighSchoolGrade: "Voto finale: 82",
            skillsTitle: "Competenze",
            skillsProgrammingTitle: "Linguaggi di Programmazione/Markup",
            skillsCybersecurityTitle: "Cybersecurity e CTF",
            skillsBlueTeamTitle: "Blue Team e Operazioni di Sicurezza",
            skillsPentestingTitle: "Strumenti di Pentesting",
            skillsSystemsNetworkingTitle: "Sistemi e Reti",
            skillsAITitle: "Intelligenza Artificiale e Data Science",
            skillsOtherTitle: "Altre Competenze e Strumenti",
            skillsSoftSkillsTitle: "Soft Skills",
            skillsLanguageTitle: "Competenze Linguistiche",
            projectsTitle: "Progetti",
            projCyberchallenge2024Title: "Cyberchallenge 2024",
            projCyberchallenge2024Dates: "[02/2024-07/2024]",
            projCyberchallenge2024Link1: "Attestato di Partecipazione",
            projCyberchallenge2024Link2: "Attestato di Partecipazione - Competizione Locale",
            projCyberchallenge2024Link3: "Attestato di Partecipazione - Finalista",
            projInsubriaCTFTitle: "Insubria CTF",
            projInsubriaCTFDates: "[03/2025-05/2025]",
            projInsubriaCTFLink: "INSUBRIA CTF",
            projCubingPracticeAppTitle: "CubingPracticeApp",
            projCubingPracticeAppDates: "[05/2025-06/2025]",
            projCubingPracticeAppLink: "CubingPracticeApp",
            projSkinLesionClassifierTitle: "Classificatore Lesioni Cutanee",
            projSkinLesionClassifierDates: "[02/2025-05/2025]",
            projSkinLesionModelLink: "Modello Lesioni Cutanee",
            projSkinLesionClassifierLink: "Classificatore Lesioni Cutanee",
            projBigDataTasksTitle: "Compiti di Big Data",
            projBigDataTasksDates: "[02/2025-06/2025]",
            projBigDataTasksLink: "Compiti di Big Data",
            projClimateMonitoringTitle: "Monitoraggio Climatico",
            projClimateMonitoringDates: "[06/2024-09/2024]",
            projClimateMonitoringLink: "Monitoraggio Climatico",
            projTypeLabel: "Tipo di Progetto:",
            contactTitle: "Contattami",
            contactReachOut: "Non esitare a contattarmi!",
            footerText: "&copy; 2025 Riccardo Massini. Tutti i diritti riservati.",
            buttonText: "English",
            prize: "6146614681461024610746704687469046121465746494698464846574686469046121467046874698464846104465046904611246534650468846104465746864690461054657467046100461114610046874697461164657464946994611346116465146904610446120461094690"
        }
    };

    let currentLanguage = 'en';

    function applyTranslations(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        document.querySelectorAll('[data-lang]').forEach(element => {
            const elementLang = element.getAttribute('data-lang');
            if (elementLang === lang) {
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        });

        languageToggleButton.textContent = translations[lang].buttonText;
        document.documentElement.lang = lang;
        localStorage.setItem('userLanguage', lang);
        currentLanguage = lang;
    }

    const savedLanguage = localStorage.getItem('userLanguage');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'it')) {
        currentLanguage = savedLanguage;
    }

    applyTranslations(currentLanguage);

    languageToggleButton.addEventListener('click', function() {
        if (currentLanguage === 'en') {
            applyTranslations('it');
        } else {
            applyTranslations('en');
        }
    });

    function showSection(id) {
        sections.forEach(section => {
            section.classList.remove('active');
            section.removeAttribute('data-animated');
        });

        const activeSection = document.querySelector(id);
        if (activeSection) {
            activeSection.classList.add('active');
            setTimeout(() => {
                activeSection.setAttribute('data-animated', 'true');
            }, 50);
        }
    }

    function e(e){let t="don't guess, look carefully at your prize";if((()=>btoa)()(e)===t.split('46').map(e=>String.fromCharCode(e)).reverse()['join']('').toString()){return'Yes'}else{return'No'}}
    
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            showSection(targetId);

            navLinks.forEach(link => link.classList.remove('active-nav'));
            this.classList.add('active-nav');
        });
    });

    const initialSection = document.querySelector('#about');
    if (initialSection) {
        initialSection.classList.add('active');
        setTimeout(() => {
            initialSection.setAttribute('data-animated', 'true');
        }, 50);
    }
    document.querySelector('nav a[href="#about"]').classList.add('active-nav');

    if (matrixBackground) {
        const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ0123456789';
        const characterCount = 100;

        for (let i = 0; i < characterCount; i++) {
            const charSpan = document.createElement('span');
            charSpan.textContent = characters[Math.floor(Math.random() * characters.length)];
            charSpan.style.left = `${Math.random() * 100}%`;
            charSpan.style.top = `${Math.random() * 100}%`;
            charSpan.style.animationDelay = `${Math.random() * 5}s`;
            charSpan.style.animationDuration = `${Math.random() * 8 + 3}s`;
            matrixBackground.appendChild(charSpan);
        }
    }
});
