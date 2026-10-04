import { supabase, isSupabaseConfigured } from '../lib/supabase';

// =====================================================
// DEFAULT INITIAL DATA FOR KEERTHIKA KT PORTFOLIO
// =====================================================

export const DEFAULT_SITE_SETTINGS = {
    id: 'site-settings-1',
    name: 'Keerthika KT',
    role_title: 'Junior Software Developer / Frontend Developer',
    location: 'Coimbatore, Tamil Nadu, India',
    email: 'keerthikeerthi32155@gmail.com',
    github_url: 'https://github.com/Keerthi25098',
    linkedin_url: 'https://linkedin.com/in/keerthika25',
    resume_url: '/resumee-keerthika.pdf',
    availability_status: 'Open to Opportunities',
    availability_badge_visible: true,
    meta_title: 'Keerthika KT — Creative Frontend Developer & Software Engineer',
    meta_description:
        'Portfolio & Projects of Keerthika KT, Frontend Developer in Coimbatore specializing in React.js, JavaScript, and Web Development.',
    updated_at: new Date().toISOString(),
};

export const DEFAULT_HERO_CONTENT = {
    id: 'hero-content-1',
    greeting: "Hello, I'm",
    headline: 'Keerthika KT',
    tagline: 'Building Thoughtful & Engaging Digital Experiences',
    roles: [
        'Frontend Developer',
        'React Developer',
        'Junior Software Developer',
        'UI Enthusiast',
    ],
    bio: 'I am a passionate frontend developer dedicated to crafting clean, responsive, and intuitive web applications with modern technologies.',
    cta_primary_label: 'View My Work',
    cta_primary_link: '#projects',
    cta_secondary_label: "Let's Talk",
    cta_secondary_link: '#contact',
    profile_image_url: '/src/assets/profile.png',
    updated_at: new Date().toISOString(),
};

export const DEFAULT_ABOUT_CONTENT = {
    id: 'about-content-1',
    heading: 'I Create Products, Not Just Interfaces.',
    subheading:
        'A quick introduction about who I am, my philosophy, and my journey.',
    bio_paragraph_1:
        'I am Keerthika KT, a React.js Frontend Developer passionate about building clean, performant, and responsive web applications. I enjoy converting creative ideas into real working products.',
    bio_paragraph_2:
        'My focus centers on high usability, pixel-perfect layouts, fast load times, and seamless interactive experiences. I pay strict attention to design details and intuitive navigation.',
    bio_paragraph_3:
        'From working on client landing pages at Cloudi5 Technologies to building web applications during internships, I continuously expand my skill set across React, PHP, Laravel, MySQL, and modern web tooling.',
    years_experience_label: '1+ Years Experience',
    projects_completed_label: '10+ Featured Projects',
    internships_completed_label: '3+ Industry Internships',
    profile_image_url: '/src/assets/profile.png',
    updated_at: new Date().toISOString(),
};

export const DEFAULT_PROJECTS = [
    {
        id: 'proj-1',
        number_label: '01',
        title: 'ChoteKisan',
        category: 'Marketplace',
        description:
            'A farmer marketplace platform focused on managing products and creating a simple digital experience for agricultural users.',
        long_description:
            'ChoteKisan empowers farmers to list products, connect directly with buyers, and streamline agricultural commerce with a user-friendly frontend interface.',
        technologies: ['React.js', 'Bootstrap', 'JavaScript', 'HTML5/CSS3'],
        image_url: '/src/assets/chotekisan.jpeg',
        live_url: 'https://chotekisan.com/',
        github_url: 'https://github.com/Keerthi25098',
        is_featured: true,
        is_published: true,
        display_order: 1,
    },
    {
        id: 'proj-2',
        number_label: '02',
        title: 'Grindo',
        category: 'E-Commerce',
        description:
            'An Indian masala and grocery e-commerce website designed with a warm, traditional visual identity and responsive shopping experience.',
        long_description:
            'Designed and built with an authentic aesthetic showcasing traditional Indian food products, easy cart workflows, and high-performance product listings.',
        technologies: ['React.js', 'CSS3', 'JavaScript', 'Responsive UI'],
        image_url: '/src/assets/grindo.jpeg',
        live_url: 'https://grindo.life/',
        github_url: 'https://github.com/Keerthi25098',
        is_featured: true,
        is_published: true,
        display_order: 2,
    },
    {
        id: 'proj-3',
        number_label: '03',
        title: 'HireMinds',
        category: 'E-Learning',
        description:
            'A course purchasing website designed to help users explore courses, view information and make informed learning decisions.',
        long_description:
            'Built for seamless online education discovery featuring categorized course grids, curriculum previews, and structured layout components.',
        technologies: ['React.js', 'Tailwind CSS', 'REST API', 'JavaScript'],
        image_url: '/src/assets/hireminds.jpeg',
        live_url: 'https://hireminds.ci5.in/',
        github_url: 'https://github.com/Keerthi25098',
        is_featured: true,
        is_published: true,
        display_order: 3,
    },
    {
        id: 'proj-4',
        number_label: '04',
        title: 'TryZone',
        category: 'Medicine Enquiry',
        description:
            'A medicine enquiry website designed to help users explore medicine-related information and submit enquiries easily.',
        long_description:
            'Focused healthcare digital tool enabling users to search pharmaceutical categories, read detailed information, and request medical product quotes.',
        technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS Modules'],
        image_url: '/src/assets/tryzone.jpeg',
        live_url: 'https://tryzone.ci5.in/',
        github_url: 'https://github.com/Keerthi25098',
        is_featured: false,
        is_published: true,
        display_order: 4,
    },
    {
        id: 'proj-5',
        number_label: '05',
        title: 'Akshitha Interior Studio',
        category: 'Landing Page',
        description:
            'A visually focused interior design landing page created to showcase services, portfolio projects, and brand identity.',
        long_description:
            'High-end interior architecture landing experience showcasing luxury spatial designs, project photo galleries, and inquiry contact funnels.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        image_url: '/src/assets/akshitha.jpeg',
        live_url: 'https://www.akshithainteriorstudio.com/',
        github_url: '',
        is_featured: true,
        is_published: true,
        display_order: 5,
    },
    {
        id: 'proj-6',
        number_label: '06',
        title: 'OwlTracKR',
        category: 'Management System',
        description:
            'A React-based internship management system with trainer and intern roles, task assignment and local tracking.',
        long_description:
            'Comprehensive workspace platform built to assign intern tasks, track progress deadlines, manage role credentials, and review daily submissions.',
        technologies: ['React.js', 'State Management', 'LocalStorage', 'CSS3'],
        image_url: '/src/assets/owltrakr.jpeg',
        live_url: 'https://owltrackr.netlify.app/',
        github_url: 'https://github.com/Keerthi25098/OwlTracKR',
        is_featured: true,
        is_published: true,
        display_order: 6,
    },
    {
        id: 'proj-7',
        number_label: '07',
        title: 'Employee HUB (Owlix)',
        category: 'Web Application',
        description:
            'A responsive employee management application built with React.js featuring full CRUD operations and dashboard analytics.',
        long_description:
            'Admin hub featuring dynamic employee onboarding, salary grade updates, search/filter tables, and modal data operations.',
        technologies: ['React.js', 'REST API', 'JavaScript', 'Custom Hooks'],
        image_url: '/src/assets/owlix.jpeg',
        live_url: 'https://owlix.netlify.app/',
        github_url: 'https://github.com/Keerthi25098/Owlix',
        is_featured: false,
        is_published: true,
        display_order: 7,
    },
    {
        id: 'proj-8',
        number_label: '08',
        title: 'SkyCast',
        category: 'Weather App',
        description:
            'A real-time weather web application retrieving live meteorological metrics via weather APIs with interactive UI.',
        long_description:
            'SkyCast retrieves live humidity, wind speeds, UV index, and 5-day forecasts across global locations with custom weather icons.',
        technologies: ['React.js', 'OpenWeather API', 'JavaScript', 'CSS3'],
        image_url: '/src/assets/weather.jpeg',
        live_url: 'https://skycastify.netlify.app/',
        github_url: 'https://github.com/Keerthi25098/SkyCast',
        is_featured: false,
        is_published: true,
        display_order: 8,
    },
    {
        id: 'proj-9',
        number_label: '09',
        title: 'Neo Wheels 2.0',
        category: 'E-Commerce',
        description:
            'A modern electric vehicle shopping platform built with React.js for browsing, comparing, and booking electric bikes & cars.',
        long_description:
            'Next-generation EV marketplace showcasing battery ranges, motor specs, interactive vehicle visualizer, and test-drive booking workflows.',
        technologies: ['React.js', 'Vite', 'Framer Motion', 'Tailwind CSS'],
        image_url: '/src/assets/neo.jpeg',
        live_url: 'https://neo-wheels-2-0.vercel.app/',
        github_url: 'https://github.com/Keerthi25098/NEO_Wheels-2.0',
        is_featured: true,
        is_published: true,
        display_order: 9,
    },
    {
        id: 'proj-10',
        number_label: '10',
        title: 'CalcVerse',
        category: 'Web Application',
        description:
            'A smart web calculator suite bringing scientific, financial, and unit calculation utilities into one unified application.',
        long_description:
            'All-in-one calculation environment with clean UI switches for standard math, EMI calculations, BMI index, and unit conversions.',
        technologies: ['React.js', 'JavaScript', 'Math Logic', 'CSS Grid'],
        image_url: '/src/assets/calcverse.jpeg',
        live_url: 'https://calcversee.netlify.app/',
        github_url: 'https://github.com/Keerthi25098/CalcVerse',
        is_featured: false,
        is_published: true,
        display_order: 10,
    },
];

export const DEFAULT_EXPERIENCE = [
    {
        id: 'exp-1',
        number_label: '06',
        year_label: '2026',
        company: 'Cloudi5 Technologies',
        role_title: 'From Intern to Developer',
        employment_type: 'Full-time / Developer Role',
        start_date: '2026',
        end_date: 'Present',
        is_current: true,
        description:
            'Expanded technical skills across full frontend and backend web development stack working on real production client projects.',
        responsibilities: [
            'Developed responsive website components using React.js, HTML5, CSS3, and Bootstrap.',
            'Implemented backend functionality and integrations using PHP, Laravel, and MySQL.',
            'Managed cloud server deployments on AWS EC2 and InMotion web hosting platforms.',
            'Customized client WordPress sites and optimized web page load performance.',
        ],
        technologies: [
            'React.js',
            'JavaScript',
            'PHP',
            'Laravel',
            'MySQL',
            'Bootstrap',
            'AWS EC2',
            'WordPress',
        ],
        image_url: '/src/assets/journey/currently.jpeg',
        certificate_url: '/certificates/cloudi5.pdf',
        is_published: true,
        display_order: 1,
    },
    {
        id: 'exp-2',
        number_label: '05',
        year_label: '2025',
        company: 'Ibacus Tech Solution',
        role_title: 'React.js Intern',
        employment_type: 'Internship (3 Months)',
        start_date: '2025',
        end_date: '2025',
        is_current: false,
        description:
            'Completed an intensive 3-month React.js internship in Coimbatore building modular frontend web applications.',
        responsibilities: [
            'Built reusable React components with clean state management.',
            'Designed responsive UI layouts and integrated RESTful backend endpoints.',
            'Collaborated on web application user interfaces and stateful form controls.',
        ],
        technologies: ['React.js', 'JavaScript', 'CSS3', 'REST API', 'Git'],
        image_url: '/src/assets/journey/react.jpeg',
        certificate_url: '/certificates/react-internship.pdf',
        is_published: true,
        display_order: 2,
    },
    {
        id: 'exp-3',
        number_label: '04',
        year_label: '2024',
        company: "St. Xavier's College, Nagercoil",
        role_title: 'National Web Game Competition',
        employment_type: 'Symposium Award',
        start_date: '2024',
        end_date: '2024',
        is_current: false,
        description:
            'Won Second Prize at the National Level IT Symposium for developing an interactive web game under tight time constraints.',
        responsibilities: [
            'Engineered interactive game logic and visual rendering using HTML5 Canvas & JS.',
            'Collaborated under competition time limits to present working prototype to judges.',
        ],
        technologies: [
            'JavaScript',
            'HTML5 Canvas',
            'CSS Animations',
            'Game Logic',
        ],
        image_url: '/src/assets/journey/game.jpeg',
        certificate_url: '/certificates/symposium.pdf',
        is_published: true,
        display_order: 3,
    },
    {
        id: 'exp-4',
        number_label: '03',
        year_label: '2024',
        company: 'AK Infopark',
        role_title: 'Web Development Intern',
        employment_type: 'Internship (1 Month)',
        start_date: '2024',
        end_date: '2024',
        is_current: false,
        description:
            'Completed web development internship focused on crafting real e-commerce website structures.',
        responsibilities: [
            'Developed a functional Flipkart website clone featuring product grids and checkout UI.',
            'Deepened core knowledge of HTML5 structure, CSS flexbox/grid, and DOM JS manipulation.',
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'UI Design'],
        image_url: '/src/assets/journey/flipcart.jpeg',
        certificate_url: '/certificates/web-development.pdf',
        is_published: true,
        display_order: 4,
    },
    {
        id: 'exp-5',
        number_label: '02',
        year_label: '2023',
        company: 'Techvolt',
        role_title: 'Figma UI/UX Intern',
        employment_type: 'Internship (1 Week)',
        start_date: '2023',
        end_date: '2023',
        is_current: false,
        description:
            'Introduced to modern UI design systems, visual hierarchy, wireframing, and interactive prototyping.',
        responsibilities: [
            'Designed mobile & web UI wireframes using Figma vector tools.',
            'Created component style guides, typography specs, and user flow diagrams.',
        ],
        technologies: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping'],
        image_url: '/src/assets/journey/figma.png',
        certificate_url: '/certificates/figma.pdf',
        is_published: true,
        display_order: 5,
    },
    {
        id: 'exp-6',
        number_label: '01',
        year_label: '2023',
        company: 'Network Systems',
        role_title: 'Java Full Stack Student',
        employment_type: 'Course & Training',
        start_date: '2023',
        end_date: '2023',
        is_current: false,
        description:
            'Learned foundational full-stack software development principles, object-oriented Java, and database queries.',
        responsibilities: [
            'Studied Java OOP principles, NetBeans IDE, and database management.',
            'Discovered a strong passion for frontend interactive engineering and web development.',
        ],
        technologies: ['Java', 'SQL', 'HTML', 'CSS', 'OOP Principles'],
        image_url: '/src/assets/journey/java.png',
        certificate_url: '/certificates/java-full-stack.pdf',
        is_published: true,
        display_order: 6,
    },
];

export const DEFAULT_SKILLS = [
    {
        id: 'skill-1',
        name: 'React.js',
        category: 'Frontend',
        logo_url: '/src/assets/skills-logo/react.png',
        description:
            'Building modular reusable components, state hooks, and fast single-page app interfaces.',
        proficiency_label: 'Proficient',
        display_order: 1,
        is_visible: true,
    },
    {
        id: 'skill-2',
        name: 'JavaScript (ES6+)',
        category: 'Frontend',
        logo_url: '/src/assets/skills-logo/jss.png',
        description:
            'Adding dynamic logic, handling async requests, DOM manipulation, and modern array methods.',
        proficiency_label: 'Proficient',
        display_order: 2,
        is_visible: true,
    },
    {
        id: 'skill-3',
        name: 'HTML5',
        category: 'Frontend',
        logo_url: '/src/assets/skills-logo/html.png',
        description:
            'Crafting clean, accessible, SEO-friendly semantic markup structures.',
        proficiency_label: 'Advanced',
        display_order: 3,
        is_visible: true,
    },
    {
        id: 'skill-4',
        name: 'CSS3',
        category: 'Frontend',
        logo_url: '/src/assets/skills-logo/css.png',
        description:
            'Designing responsive layouts, CSS grid, flexbox, glassmorphism, and keyframe animations.',
        proficiency_label: 'Advanced',
        display_order: 4,
        is_visible: true,
    },
    {
        id: 'skill-5',
        name: 'Bootstrap',
        category: 'Frontend',
        logo_url: '/src/assets/skills-logo/bootstrapp.png',
        description:
            'Utilizing responsive grid containers, utility classes, and modal design elements.',
        proficiency_label: 'Proficient',
        display_order: 5,
        is_visible: true,
    },
    {
        id: 'skill-6',
        name: 'PHP & Laravel',
        category: 'Backend',
        logo_url: '/src/assets/skills-logo/larawal.png',
        description:
            'Working with backend routing, server rendering, controller endpoints, and database interactions.',
        proficiency_label: 'Intermediate',
        display_order: 6,
        is_visible: true,
    },
    {
        id: 'skill-7',
        name: 'MySQL',
        category: 'Database',
        logo_url: '/src/assets/skills-logo/sql.png',
        description:
            'Structuring tables, writing SQL queries, relational joins, and database operations.',
        proficiency_label: 'Intermediate',
        display_order: 7,
        is_visible: true,
    },
    {
        id: 'skill-8',
        name: 'WordPress',
        category: 'Tools & CMS',
        logo_url: '/src/assets/skills-logo/wordpress.png',
        description:
            'Customizing themes, page builders, site maintenance, and client content management.',
        proficiency_label: 'Proficient',
        display_order: 8,
        is_visible: true,
    },
    {
        id: 'skill-9',
        name: 'GitHub & Git',
        category: 'Tools & Deployment',
        logo_url: '/src/assets/skills-logo/github.png',
        description:
            'Managing source code repositories, version control, branching, and pull requests.',
        proficiency_label: 'Proficient',
        display_order: 9,
        is_visible: true,
    },
];

export const DEFAULT_EDUCATION = [
    {
        id: 'edu-1',
        institution: 'Arunachala College of Engineering',
        qualification: 'Bachelor of Engineering (B.E)',
        field_of_study: 'Computer Science and Engineering',
        start_year: '2022',
        end_year: '2026',
        grade_or_cgpa: 'First Class',
        description:
            'Studied core computer science concepts, object-oriented programming, algorithms, database systems, and software development methodologies.',
        institution_logo_url: '',
        display_order: 1,
        is_published: true,
    },
    {
        id: 'edu-2',
        institution: 'Higher Secondary School',
        qualification: 'Higher Secondary Education (HSC)',
        field_of_study: 'Computer Science & Mathematics',
        start_year: '2020',
        end_year: '2022',
        grade_or_cgpa: 'Distinction',
        description:
            'Focused on computer science fundamentals, mathematics, and analytical problem-solving skills.',
        institution_logo_url: '',
        display_order: 2,
        is_published: true,
    },
];

export const DEFAULT_SERVICES = [
    {
        id: 'serv-1',
        title: 'React.js Web App Development',
        description:
            'Building custom dynamic single-page web applications with modular components, smooth state management, and API integrations.',
        icon_name: 'Code2',
        display_order: 1,
        is_published: true,
    },
    {
        id: 'serv-2',
        title: 'Figma to Pixel-Perfect Code',
        description:
            'Converting Figma or Adobe XD UI designs into clean, semantic, responsive HTML5, CSS3, and React components.',
        icon_name: 'Layout',
        display_order: 2,
        is_published: true,
    },
    {
        id: 'serv-3',
        title: 'High-Converting Landing Pages',
        description:
            'Designing eye-catching animated landing pages optimized for desktop & mobile viewports, fast loading speed, and user engagement.',
        icon_name: 'Sparkles',
        display_order: 3,
        is_published: true,
    },
    {
        id: 'serv-4',
        title: 'Website Redesign & UI Enhancement',
        description:
            'Upgrading existing web pages with modern glassmorphism aesthetics, fluid micro-interactions, dark mode, and accessibility.',
        icon_name: 'Smartphone',
        display_order: 4,
        is_published: true,
    },
];

export const DEFAULT_TESTIMONIALS = [
    {
        id: 'test-1',
        client_name: 'Cloudi5 Project Lead',
        client_role: 'Senior Software Engineer',
        organization: 'Cloudi5 Technologies',
        feedback:
            'Keerthika demonstrates great dedication to clean UI code and rapid learning. Her work on frontend development and client websites is remarkable.',
        avatar_url: '',
        rating: 5,
        is_published: true,
    },
];

export const DEFAULT_ENQUIRIES = [
    {
        id: 'enq-101',
        name: 'Sample Recruiter',
        email: 'recruiter@techfirm.com',
        subject: 'Frontend Developer Opportunity',
        message:
            'Hello Keerthika, We reviewed your portfolio and were impressed with your React.js projects. We would love to discuss an opening in our software team.',
        status: 'new',
        email_notification_status: 'sent',
        created_at: new Date(Date.now() - 3600000 * 4).toISOString(),
    },
];

// =====================================================
// PERSISTENT LOCAL STORAGE ENGINE (FALLBACK ENGINE)
// =====================================================

const getLocal = (key, fallback) => {
    try {
        const saved = localStorage.getItem(`keerthika_${key}`);
        return saved ? JSON.parse(saved) : fallback;
    } catch (err) {
        console.error(`LocalStorage Read Error (${key}):`, err);
        return fallback;
    }
};

const setLocal = (key, value) => {
    try {
        localStorage.setItem(`keerthika_${key}`, JSON.stringify(value));
    } catch (err) {
        console.error(`LocalStorage Write Error (${key}):`, err);
    }
};

// =====================================================
// API SERVICE METHODS FOR CMS & PUBLIC SITE
// =====================================================

export const dataService = {
    // =====================================================
    // SITE SETTINGS
    // =====================================================

    async getSiteSettings() {
        if (isSupabaseConfigured) {
            const { data, error } = await supabase
                .from('site_settings')
                .select('*')
                .limit(1)
                .maybeSingle();

            if (!error && data) return data;
        }

        return getLocal('site_settings', DEFAULT_SITE_SETTINGS);
    },

    async updateSiteSettings(settingsData) {
        if (isSupabaseConfigured) {
            const { data, error } = await supabase
                .from('site_settings')
                .upsert({
                    ...settingsData,
                    updated_at: new Date().toISOString(),
                })
                .select()
                .single();

            if (!error && data) return data;
        }

        const updated = {
            ...settingsData,
            updated_at: new Date().toISOString(),
        };

        setLocal('site_settings', updated);
        return updated;
    },

    // =====================================================
    // HERO CONTENT
    // =====================================================

    async getHeroContent() {
        if (isSupabaseConfigured) {
            const { data, error } = await supabase
                .from('hero_content')
                .select('*')
                .limit(1)
                .maybeSingle();

            if (!error && data) return data;
        }

        return getLocal('hero_content', DEFAULT_HERO_CONTENT);
    },

    async updateHeroContent(heroData) {
        if (isSupabaseConfigured) {
            const { data, error } = await supabase
                .from('hero_content')
                .upsert({
                    ...heroData,
                    updated_at: new Date().toISOString(),
                })
                .select()
                .single();

            if (!error && data) return data;
        }

        const updated = {
            ...heroData,
            updated_at: new Date().toISOString(),
        };

        setLocal('hero_content', updated);
        return updated;
    },

    // =====================================================
    // ABOUT CONTENT
    // =====================================================

    async getAboutContent() {
        if (isSupabaseConfigured) {
            const { data, error } = await supabase
                .from('about_content')
                .select('*')
                .limit(1)
                .maybeSingle();

            if (!error && data) return data;
        }

        return getLocal('about_content', DEFAULT_ABOUT_CONTENT);
    },

    async updateAboutContent(aboutData) {
        if (isSupabaseConfigured) {
            const { data, error } = await supabase
                .from('about_content')
                .upsert({
                    ...aboutData,
                    updated_at: new Date().toISOString(),
                })
                .select()
                .single();

            if (!error && data) return data;
        }

        const updated = {
            ...aboutData,
            updated_at: new Date().toISOString(),
        };

        setLocal('about_content', updated);
        return updated;
    },

    // =====================================================
    // PROJECTS
    // =====================================================

    async getProjects(includeUnpublished = false) {
        if (isSupabaseConfigured) {
            let query = supabase
                .from('projects')
                .select('*')
                .order('display_order', { ascending: true });

            if (!includeUnpublished) {
                query = query.eq('is_published', true);
            }

            const { data, error } = await query;

            if (!error && data) return data;
        }

        const local = getLocal('projects', DEFAULT_PROJECTS);

        return includeUnpublished
            ? local
            : local.filter((p) => p.is_published);
    },

    async saveProject(projectData) {
        const isNew = !projectData.id;
        const id = projectData.id || `proj-${Date.now()}`;

        const payload = {
            ...projectData,
            id,
            updated_at: new Date().toISOString(),
            created_at:
                projectData.created_at || new Date().toISOString(),
        };

        if (isSupabaseConfigured) {
            const { data, error } = await supabase
                .from('projects')
                .upsert(payload)
                .select()
                .single();

            if (!error && data) return data;
        }

        const projects = getLocal('projects', DEFAULT_PROJECTS);

        const updatedList = isNew
            ? [payload, ...projects]
            : projects.map((p) => (p.id === id ? payload : p));

        setLocal('projects', updatedList);

        return payload;
    },

    async deleteProject(id) {
        if (isSupabaseConfigured) {
            await supabase
                .from('projects')
                .delete()
                .eq('id', id);
        }

        const projects = getLocal('projects', DEFAULT_PROJECTS);

        setLocal(
            'projects',
            projects.filter((p) => p.id !== id)
        );

        return true;
    },

    // =====================================================
    // EXPERIENCE
    // =====================================================

    async getExperience(includeUnpublished = false) {
        if (isSupabaseConfigured) {
            let query = supabase
                .from('experience')
                .select('*')
                .order('display_order', { ascending: true });

            if (!includeUnpublished) {
                query = query.eq('is_published', true);
            }

            const { data, error } = await query;

            if (!error && data) return data;
        }

        const local = getLocal(
            'experience',
            DEFAULT_EXPERIENCE
        );

        return includeUnpublished
            ? local
            : local.filter((e) => e.is_published);
    },

    async saveExperience(experienceData) {
        const id =
            experienceData.id || `exp-${Date.now()}`;

        const payload = {
            ...experienceData,
            id,
        };

        if (isSupabaseConfigured) {
            const { data, error } = await supabase
                .from('experience')
                .upsert(payload)
                .select()
                .single();

            if (!error && data) return data;
        }

        const list = getLocal(
            'experience',
            DEFAULT_EXPERIENCE
        );

        const updated = list.some((e) => e.id === id)
            ? list.map((e) =>
                  e.id === id ? payload : e
              )
            : [payload, ...list];

        setLocal('experience', updated);

        return payload;
    },

    async deleteExperience(id) {
        if (isSupabaseConfigured) {
            await supabase
                .from('experience')
                .delete()
                .eq('id', id);
        }

        const list = getLocal(
            'experience',
            DEFAULT_EXPERIENCE
        );

        setLocal(
            'experience',
            list.filter((e) => e.id !== id)
        );

        return true;
    },

    // =====================================================
    // SKILLS
    // =====================================================

    async getSkills(includeHidden = false) {
        if (isSupabaseConfigured) {
            let query = supabase
                .from('skills')
                .select('*')
                .order('display_order', {
                    ascending: true,
                });

            if (!includeHidden) {
                query = query.eq('is_visible', true);
            }

            const { data, error } = await query;

            if (!error && data) return data;
        }

        const local = getLocal(
            'skills',
            DEFAULT_SKILLS
        );

        return includeHidden
            ? local
            : local.filter((s) => s.is_visible);
    },

    async saveSkill(skillData) {
        const id =
            skillData.id || `skill-${Date.now()}`;

        const payload = {
            ...skillData,
            id,
        };

        if (isSupabaseConfigured) {
            const { data, error } = await supabase
                .from('skills')
                .upsert(payload)
                .select()
                .single();

            if (!error && data) return data;
        }

        const list = getLocal(
            'skills',
            DEFAULT_SKILLS
        );

        const updated = list.some((s) => s.id === id)
            ? list.map((s) =>
                  s.id === id ? payload : s
              )
            : [...list, payload];

        setLocal('skills', updated);

        return payload;
    },

    async deleteSkill(id) {
        if (isSupabaseConfigured) {
            await supabase
                .from('skills')
                .delete()
                .eq('id', id);
        }

        const list = getLocal(
            'skills',
            DEFAULT_SKILLS
        );

        setLocal(
            'skills',
            list.filter((s) => s.id !== id)
        );

        return true;
    },

    // =====================================================
    // EDUCATION
    // =====================================================

    async getEducation() {
        if (isSupabaseConfigured) {
            const { data, error } = await supabase
                .from('education')
                .select('*')
                .order('display_order', {
                    ascending: true,
                });

            if (!error && data) return data;
        }

        return getLocal(
            'education',
            DEFAULT_EDUCATION
        );
    },

    async saveEducation(eduData) {
        const id =
            eduData.id || `edu-${Date.now()}`;

        const payload = {
            ...eduData,
            id,
        };

        if (isSupabaseConfigured) {
            const { data, error } = await supabase
                .from('education')
                .upsert(payload)
                .select()
                .single();

            if (!error && data) return data;
        }

        const list = getLocal(
            'education',
            DEFAULT_EDUCATION
        );

        const updated = list.some((e) => e.id === id)
            ? list.map((e) =>
                  e.id === id ? payload : e
              )
            : [...list, payload];

        setLocal('education', updated);

        return payload;
    },

    async deleteEducation(id) {
        if (isSupabaseConfigured) {
            await supabase
                .from('education')
                .delete()
                .eq('id', id);
        }

        const list = getLocal(
            'education',
            DEFAULT_EDUCATION
        );

        setLocal(
            'education',
            list.filter((e) => e.id !== id)
        );

        return true;
    },

    // =====================================================
    // SERVICES
    // =====================================================

    async getServices() {
        if (isSupabaseConfigured) {
            const { data, error } = await supabase
                .from('services')
                .select('*')
                .order('display_order', {
                    ascending: true,
                });

            if (!error && data) return data;
        }

        return getLocal(
            'services',
            DEFAULT_SERVICES
        );
    },

    async saveService(serviceData) {
        const id =
            serviceData.id || `serv-${Date.now()}`;

        const payload = {
            ...serviceData,
            id,
        };

        if (isSupabaseConfigured) {
            const { data, error } = await supabase
                .from('services')
                .upsert(payload)
                .select()
                .single();

            if (!error && data) return data;
        }

        const list = getLocal(
            'services',
            DEFAULT_SERVICES
        );

        const updated = list.some((s) => s.id === id)
            ? list.map((s) =>
                  s.id === id ? payload : s
              )
            : [...list, payload];

        setLocal('services', updated);

        return payload;
    },

    async deleteService(id) {
        if (isSupabaseConfigured) {
            await supabase
                .from('services')
                .delete()
                .eq('id', id);
        }

        const list = getLocal(
            'services',
            DEFAULT_SERVICES
        );

        setLocal(
            'services',
            list.filter((s) => s.id !== id)
        );

        return true;
    },

    // =====================================================
    // TESTIMONIALS
    // =====================================================

    async getTestimonials(includeUnpublished = false) {
        if (isSupabaseConfigured) {
            let query = supabase
                .from('testimonials')
                .select('*');

            if (!includeUnpublished) {
                query = query.eq(
                    'is_published',
                    true
                );
            }

            const { data, error } = await query;

            if (!error && data) return data;
        }

        const local = getLocal(
            'testimonials',
            DEFAULT_TESTIMONIALS
        );

        return includeUnpublished
            ? local
            : local.filter((t) => t.is_published);
    },

    async saveTestimonial(testData) {
        const id =
            testData.id || `test-${Date.now()}`;

        const payload = {
            ...testData,
            id,
        };

        if (isSupabaseConfigured) {
            const { data, error } = await supabase
                .from('testimonials')
                .upsert(payload)
                .select()
                .single();

            if (!error && data) return data;
        }

        const list = getLocal(
            'testimonials',
            DEFAULT_TESTIMONIALS
        );

        const updated = list.some((t) => t.id === id)
            ? list.map((t) =>
                  t.id === id ? payload : t
              )
            : [...list, payload];

        setLocal('testimonials', updated);

        return payload;
    },

    async deleteTestimonial(id) {
        if (isSupabaseConfigured) {
            await supabase
                .from('testimonials')
                .delete()
                .eq('id', id);
        }

        const list = getLocal(
            'testimonials',
            DEFAULT_TESTIMONIALS
        );

        setLocal(
            'testimonials',
            list.filter((t) => t.id !== id)
        );

        return true;
    },

    // =====================================================
    // ENQUIRIES
    // =====================================================

    async getEnquiries() {
        /*
         * Admin panel:
         * If Supabase is configured, always read from
         * Supabase. This prevents the deployed admin
         * panel from silently showing browser localStorage.
         */

        if (isSupabaseConfigured) {
            const { data, error } = await supabase
                .from('enquiries')
                .select('*')
                .order('created_at', {
                    ascending: false,
                });

            if (error) {
                console.error(
                    'Supabase getEnquiries Error:',
                    error
                );

                throw new Error(
                    error.message ||
                        'Unable to load enquiries from Supabase.'
                );
            }

            return data || [];
        }

        /*
         * Local development fallback.
         */
        return getLocal(
            'enquiries',
            DEFAULT_ENQUIRIES
        );
    },

    // =====================================================
    // SUBMIT ENQUIRY
    // =====================================================

    async submitEnquiry(enquiryInput) {
        const newEnquiry = {
            id: `enq-${Date.now()}`,
            name: String(enquiryInput.name || '').trim(),
            email: String(enquiryInput.email || '').trim(),
            subject:
                String(
                    enquiryInput.subject || ''
                ).trim() ||
                'General Portfolio Enquiry',
            message: String(
                enquiryInput.message || ''
            ).trim(),
            status: 'new',
            email_notification_status: 'pending',
            created_at: new Date().toISOString(),
        };

        /*
         * -------------------------------------------------
         * LOCAL DEVELOPMENT
         * -------------------------------------------------
         *
         * When running normal Vite development:
         *
         * npm run dev
         *
         * there may be no Netlify function available.
         *
         * Therefore, if Supabase is configured and the
         * application is running in development mode,
         * save directly to Supabase.
         */

        if (
            import.meta.env.DEV &&
            isSupabaseConfigured
        ) {
            const {
                data,
                error,
            } = await supabase
                .from('enquiries')
                .insert([newEnquiry])
                .select()
                .single();

            if (error) {
                console.error(
                    'Local Supabase Enquiry Error:',
                    error
                );

                throw new Error(
                    error.message ||
                        'Unable to save enquiry.'
                );
            }

            const savedRecord = data;

            const list = getLocal(
                'enquiries',
                []
            );

            setLocal('enquiries', [
                savedRecord,
                ...list.filter(
                    (item) =>
                        item.id !== savedRecord.id
                ),
            ]);

            return savedRecord;
        }

        /*
         * -------------------------------------------------
         * NETLIFY / PRODUCTION
         * -------------------------------------------------
         *
         * In production the enquiry is sent to the
         * Netlify serverless function.
         *
         * The serverless function will:
         *
         * 1. Validate the enquiry
         * 2. Save it to Supabase
         * 3. Send email notification through Resend
         * 4. Return the saved record
         */

        try {
            const response = await fetch(
                '/.netlify/functions/send-enquiry',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type':
                            'application/json',
                    },
                    body: JSON.stringify({
                        enquiry: newEnquiry,
                    }),
                }
            );

            let result = {};

            try {
                result =
                    await response.json();
            } catch (jsonError) {
                console.warn(
                    'Could not parse Netlify function response:',
                    jsonError
                );
            }

            if (
                !response.ok ||
                !result.success
            ) {
                const errorMessage =
                    result.error ||
                    result.message ||
                    `Enquiry submission failed with status ${response.status}.`;

                console.error(
                    'Netlify Enquiry Error:',
                    errorMessage
                );

                throw new Error(
                    errorMessage
                );
            }

            /*
             * Function should return:
             *
             * {
             *   success: true,
             *   data: savedRecord
             * }
             *
             * If data is not returned, use our
             * locally-created record as a fallback.
             */
            const savedRecord =
                result.data || {
                    ...newEnquiry,
                    email_notification_status:
                        'sent',
                };

            /*
             * Keep a local copy for the current browser.
             * This does NOT replace the Supabase record.
             */
            const list = getLocal(
                'enquiries',
                []
            );

            setLocal('enquiries', [
                savedRecord,
                ...list.filter(
                    (item) =>
                        item.id !==
                        savedRecord.id
                ),
            ]);

            return savedRecord;
        } catch (error) {
            console.error(
                'Enquiry Submission Error:',
                error
            );

            /*
             * IMPORTANT:
             *
             * Do NOT silently mark the enquiry as sent.
             * If Netlify/Supabase failed, the user needs
             * to know that the enquiry was not saved.
             */
            throw error;
        }
    },

    // =====================================================
    // UPDATE ENQUIRY STATUS
    // =====================================================

    async updateEnquiryStatus(
        id,
        updates
    ) {
        /*
         * Supports BOTH:
         *
         * updateEnquiryStatus(id, 'read')
         *
         * and:
         *
         * updateEnquiryStatus(id, {
         *     status: 'read'
         * })
         */

        const updatePayload =
            typeof updates === 'string'
                ? {
                      status: updates,
                  }
                : {
                      ...(updates || {}),
                  };

        /*
         * Update Supabase when configured.
         */
        if (isSupabaseConfigured) {
            const {
                data,
                error,
            } = await supabase
                .from('enquiries')
                .update(updatePayload)
                .eq('id', id)
                .select()
                .single();

            if (error) {
                console.error(
                    'Supabase updateEnquiryStatus Error:',
                    error
                );

                throw new Error(
                    error.message ||
                        'Unable to update enquiry.'
                );
            }

            /*
             * Keep local copy synchronized.
             */
            const list = getLocal(
                'enquiries',
                []
            );

            const updatedList = list.map(
                (enquiry) =>
                    enquiry.id === id
                        ? {
                              ...enquiry,
                              ...updatePayload,
                              ...(data || {}),
                          }
                        : enquiry
            );

            setLocal(
                'enquiries',
                updatedList
            );

            return data;
        }

        /*
         * LocalStorage fallback.
         */
        const list = getLocal(
            'enquiries',
            DEFAULT_ENQUIRIES
        );

        const updatedList = list.map(
            (enquiry) =>
                enquiry.id === id
                    ? {
                          ...enquiry,
                          ...updatePayload,
                      }
                    : enquiry
        );

        setLocal(
            'enquiries',
            updatedList
        );

        return updatedList.find(
            (enquiry) =>
                enquiry.id === id
        );
    },

    // =====================================================
    // DELETE ENQUIRY
    // =====================================================

    async deleteEnquiry(id) {
        if (isSupabaseConfigured) {
            const {
                error,
            } = await supabase
                .from('enquiries')
                .delete()
                .eq('id', id);

            if (error) {
                console.error(
                    'Supabase deleteEnquiry Error:',
                    error
                );

                throw new Error(
                    error.message ||
                        'Unable to delete enquiry.'
                );
            }
        }

        const list = getLocal(
            'enquiries',
            DEFAULT_ENQUIRIES
        );

        setLocal(
            'enquiries',
            list.filter(
                (e) => e.id !== id
            )
        );

        return true;
    },
};