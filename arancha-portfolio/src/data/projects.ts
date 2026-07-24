export type Project = {
  slug: string;
  title: string;
  index: string;
  category: 'design' | 'engineering' | 'systems';
  tags: string[];
  year: string;
  course: string;
  type: string;
  team_size?: string;
  role: string;
  accent_color: string;
  tagline: string;
  one_line: string;
  features: string[];
  hero_image: string;      // main card + hero section image
  images: string[];        // carousel slides (in order)
  info: string;
  problem: string;
  solution: string;
  feature_caption: string;
  feature_bold: string;
  feature_tags: string[];
  role_sections: {
    title: string;
    body: string;
    image?: string;
    images?: { src: string; caption: string }[];
  }[];
  soft_skills: string[];
  hard_skills: string[];
  tile_ratio: 'square' | 'portrait' | 'landscape';
  has_video: boolean;
  pdf_url?: string;
};

export type OtherProject = {
  slug: string;
  title: string;
  index: string;
  course: string;
  year: string;
  one_line: string;
  tags: string[];
  hero_image?: string;
  pdf_url?: string;
};

export const projects: Project[] = [

  // ─── 01 ACTIB ──────────────────────────────────────────────────────────
  {
    slug: 'actib',
    title: 'ACTIB',
    index: '01 / 10',
    category: 'design',
    tags: ['Industrial Design', 'UI/UX', 'Prototyping'],
    year: '2025',
    course: 'Advanced Industrial Design',
    type: 'Individual project',
    role: 'End-to-end design lead',
    accent_color: '#A8C4D4',
    tagline: 'Precision you can feel.',
    one_line: 'A volleyball training glove with real-time haptic feedback for setters.',
    features: ['Intelligent Sportswear', 'Performance-Enhancing Glove', 'Haptic Feedback Training', 'Wrist Support', 'Builds Technique'],
    hero_image: '/images/projects/actib/main.png',
    images: [
      '/images/projects/actib/hero.png',
      '/images/projects/actib/angle.png',
      '/images/projects/actib/front.png',
      '/images/projects/actib/side.png',
      '/images/projects/actib/exploded.png',
      '/images/projects/actib/ui.png',
      '/images/projects/actib/sketches.png',
      '/images/projects/actib/lofi.png',
      '/images/projects/actib/analysis.png',
      '/images/projects/actib/box.png',
    ],
    info: 'Developed as part of a university individual project for the Advanced Industrial Design module in 2025. The challenge was to generate and develop a concept and touchpoint for a sports product, embodying the principles of desirability, feasibility and usability, aligning with industry standards.',
    problem: 'Volleyball setters must make split-second decisions and execute precise sets under pressure. Even minor miscalculations in hand positioning or touch can disrupt an entire play. Traditional training relies on video analysis or verbal feedback, delaying corrections and limiting real-time skill improvement. Without instant feedback, athletes struggle to self-correct, slowing their progress.',
    solution: "Actib is a wearable training device that enhances setting accuracy through real-time haptic feedback. By providing instant corrections during drills, it helps setters refine hand positioning, force application, and wrist movement on the spot. Engineered for high-repetition training sessions, Actib's ergonomic design and responsive feedback system enable players to build precision, control, and consistency — ensuring they are game-ready with refined technique and confidence.",
    feature_caption: 'Never forget your things ever again.',
    feature_bold: 'THE MOST **RESPONSIVE** AND INTUITIVE TRAINING DEVICE THAT BUILDS **PRECISION**, CONTROL, AND CONFIDENCE ON THE COURT.',
    feature_tags: ['Technique & Precision Driven', 'Haptic Response', 'Ergonomic Comfort', 'Motion-Sensing', 'Consistency Building', 'Intuitive Case'],
    role_sections: [
      {
        title: 'User Research & Development',
        body: 'I conducted comprehensive user research, including interviews with volleyball players and analysis of live match footage to understand the challenges setters face — such as wrist stability, finger positioning, and lack of real-time feedback. These insights shaped the design requirements and informed a series of user journeys and illustrated training scenarios. \n\nI also explored biomechanical behaviour during drills to inform sensor selection and placement, incorporating motion and strain sensors to accurately track wrist and finger movement. Through low- and mid-fidelity prototyping, I tested vibration placement, wrist supports, and fingertip design, allowing data-driven iteration and refinement of features critical for skill development.',
        images: [
          { src: '/images/projects/actib/analysis.png', caption: 'User research analysis' },
          { src: '/images/projects/actib/sketches.png', caption: 'Early concept sketches' },
          { src: '/images/projects/actib/lofi.png', caption: 'Prototyping and user testing'},
        ],
      },
      {
        title: 'Product & UI/UX Design',
        body: "I designed the glove's ergonomic form using iterative CAD modelling, and materials testing to ensure a balance between performance and comfort. Features like structured support zones, moisture-wicking materials, open fingertip design, and articulation grooves were developed for high-precision training. \n\nThe haptic feedback module was integrated into the glove just above the wrist joint, after testing several placements to ensure it delivered clear, unobtrusive cues. I also developed a customizable vibration system, allowing users to select different feedback intensities through interchangeable modules. \n\nIn parallel, I designed the Actib app UI, which complements the glove by allowing athletes to set preferences, monitor performance, and track precision-based metrics.",
        images: [
          { src: '/images/projects/actib/main.png', caption: 'Actib\'s final design' },
          { src: '/images/projects/actib/exploded.png', caption: 'Exploded view of the glove structure' },
          { src: '/images/projects/actib/ui.png', caption: 'App interface for performance tracking' },
        ],
      },
      {
        title: 'Packaging Design & Rendering',
        body: 'To support portability and hygiene, I developed a modular system with removable electronic components for easy washing. I designed a compact, pentagon-shaped storage case based on user feedback, using tactile form for easy identification in cluttered gym bags. \n\nThe case was rendered with high-fidelity visualizations and detailed CMF strategy, incorporating durable, lightweight materials like recycled ABS and molded EVA foam to enhance usability for athletes on the go.',
        images: [
          { src: '/images/projects/actib/angle.png', caption: 'Acrib\'s final design' },
          { src: '/images/projects/actib/box.png', caption: 'Travel-friendly case' },
          { src: '/images/projects/actib/hero.png', caption: 'Visualisation of actib\'s physical embodiment' },
        ],
      },
    ],
    soft_skills: ['User-centred Research & Design', 'Industrial Design', 'Visual Communication & Storytelling', 'Project Planning & Time Management', 'Presenting'],
    hard_skills: ['Rapid Prototyping (Lo-fi & 3D Printing)', 'CAD & Renders (Fusion360, Keyshot)', 'Packaging Design', 'UI/UX Design', 'CMF Strategy'],
    tile_ratio: 'portrait',
    has_video: false,
    pdf_url: '/reports/actib Report.pdf',
  },

  // ─── 02 ALL-INK ────────────────────────────────────────────────────────
  {
    slug: 'all-ink',
    title: 'ALL-INK',
    index: '02 / 10',
    category: 'design',
    tags: ['Industrial Design', 'Sustainable Design', 'Systems Design', 'UI/UX', 'CAD'],
    year: '2023',
    course: 'Sustainable Design Engineering',
    type: 'Group project',
    role: 'Systems & sustainability co-lead',
    accent_color: '#D8E4D8',
    tagline: 'Effortless integration. Circular convenience.',
    one_line: 'A refillable ink cartridge ecosystem that makes sustainable printing effortless.',
    features: ['Refillable Ink Ecosystem', 'Smart Tracking', 'Effortless Integration', 'Packaging-free Delivery', 'Circular Convenience'],
    hero_image: '/images/projects/all-ink/main image.png',
    images: [
      '/images/projects/all-ink/all ink 2.png',
      '/images/projects/all-ink/system design.png',
      '/images/projects/all-ink/circular.png',
      '/images/projects/all-ink/ui.png',
      '/images/projects/all-ink/box.png',
      '/images/projects/all-ink/main zoomed.png',
      '/images/projects/all-ink/system.png',
      '/images/projects/all-ink/analysis.png',
      '/images/projects/all-ink/zoom clip.png',
      '/images/projects/all-ink/zoom clip 2.png',
    ],
    info: 'Developed as part of a university group project for the Sustainable Design Engineering module in 2023. The brief required teams to identify key sustainability issues in a designated product — in this case, ink cartridges — and propose, prototype, and evaluate a holistic solution addressing the product, its packaging, and surrounding systems.',
    problem: 'Over 350 million ink cartridges are discarded each year, with only 15% being recycled. Existing recycling programs are limited, brand-specific, and often confusing or inconvenient for users. Most cartridges are made from mixed plastics, making disassembly and recycling even harder. Additionally, they are often packaged in excessive, non-recyclable materials, with little to no incentive for consumers to return or reuse them.',
    solution: 'ALL-INK reimagines the ink cartridge as a refillable, user-friendly product. A redesigned cartridge features a removable cap secured by an interlocking system, allowing for easy refilling. Paired with a subscription-based service and a dedicated online platform, users can track usage, schedule refills, and manage returns. Deliveries and returns are facilitated through a reusable outdoor secure delivery box — eliminating excess packaging and enabling convenient, sustainable exchange. ALL-INK offers a circular system that simplifies cartridge reuse and makes sustainable printing effortless.',
    feature_caption: 'Never worry about printing again.',
    feature_bold: 'A SEAMLESS AND **LOW-WASTE** PRINTING SOLUTION THAT MAKES SUSTAINABILITY **EFFORTLESS** FOR EVERY USER.',
    feature_tags: ['Sustainably Engineered', 'Effortless', 'Smart Tracking', 'Refillable & Reusable', 'Circular Convenience', 'Secure Delivery'],
    role_sections: [
      {
        title: 'System redesign',
        body: 'I led early user research, identifying key frustrations such as brand-specific recycling, inconvenient returns, and lack of incentives. These insights informed a closed-loop service model that prioritizes user convenience and circularity. I co-developed a subscription-based system supported by a mobile app and a secure outdoor delivery box for seamless cartridge exchange. The redesigned system removes brand restrictions, simplifies returns, and integrates collection, refill, and delivery into a unified, low-impact process.',
        images: [
          { src: '/images/projects/all-ink/system design.png', caption: 'Systems diagram outlining the key processes involved in our proposal' },
          { src: '/images/projects/all-ink/system.png', caption: 'Closed-loop recycling system' },
        ],
      },
      {
        title: 'CAD & app development',
        body: 'I co-developed CAD models of the redesigned ink cartridge and the interlocking cap system, engineered for easy disassembly and refilling, and the design for the ALL-INK delivery box, integrating protective materials sourced from recycled cartridges. \n\nOn the digital side, I designed the ALL-INK mobile app, which allows users to subscribe, monitor ink levels, schedule deliveries, and track their environmental impact.',
        images: [
          { src: '/images/projects/all-ink/main zoomed.png', caption: 'Exploded view of ink cartridge refill mechanism' },
          { src: '/images/projects/all-ink/box.png', caption: 'Accompanying secure delivery box design' },
          { src: '/images/projects/all-ink/ui.png', caption: 'Complementary app design for ink level tracking and scheduling deliveries' },
        ],
      },
      {
        title: 'Sustainability analysis',
        body: 'I conducted a comprehensive lifecycle and CO₂ footprint analysis using Eco Audit tools to compare the ALL-INK solution with existing market options like Canon and The Recycling Factory. I evaluated the environmental impact of materials, manufacturing processes, transportation emissions, and end-of-life scenarios. This informed key product decisions, including the use of recycled materials, modular cartridge construction, and minimal packaging.',
        images: [
          { src: '/images/projects/all-ink/analysis.png', caption: 'Comparison of energy and CO2 footprint analysis between recycled and refillable ink cartridge' },
          { src: '/images/projects/all-ink/circular.png', caption: 'Material circularity analysis of ALL-INK cartridge' },
        ],
      },
    ],
    soft_skills: ['User-centred Research & Design', 'Sustainable Design', 'Strategic Systems Design', 'Communication & Teamwork', 'Project Planning', 'Ideation & Sketching'],
    hard_skills: ['Lifecycle, Carbon Footprint & Material Analysis (CES Edupack)', 'CAD & Renders (Fusion360, Keyshot)', 'Branding Positioning', 'Packaging Design', 'UI/UX Design'],
    tile_ratio: 'landscape',
    has_video: false,
    pdf_url: '/reports/ALL-INK Report.pdf',
  },

  // ─── 03 HIVE-FU ────────────────────────────────────────────────────────
  {
    slug: 'hive-fu',
    title: 'HIVE-FU',
    index: '03 / 10',
    category: 'design',
    tags: ['Future Design', 'CAD', 'User Research', 'Prototyping', 'Testing'],
    year: '2024–25',
    course: 'Design Engineering Futures',
    type: 'Group project',
    role: 'Tech research & project lead',
    accent_color: '#1C2230',
    tagline: 'Enabling crew autonomy and safeguarding astronaut health.',
    one_line: 'An autonomous medical ultrasound system designed for deep-space missions.',
    features: ['User Operable', 'Flexible Modality', 'Reliable', 'Repair Efficient', 'Lightweight', 'Energy Efficient'],
    hero_image: '/images/projects/hive-fu/main image.png',
    images: [
      '/images/projects/hive-fu/hero.png',
      '/images/projects/hive-fu/device.png',
      '/images/projects/hive-fu/exploded.png',
      '/images/projects/hive-fu/exploded 2.png',
      '/images/projects/hive-fu/zoomed head.png',
      '/images/projects/hive-fu/sketch.png',
      '/images/projects/hive-fu/sketches.png',
      '/images/projects/hive-fu/plan.png',
      '/images/projects/hive-fu/system diagram.png',
      '/images/projects/hive-fu/steepv.png',
      '/images/projects/hive-fu/evaluation.png',
      '/images/projects/hive-fu/expert evaluation.png',
      '/images/projects/hive-fu/folded.png',
    ],
    info: 'Developed as part of a university group project for the Design Engineering Futures module in 2024–25. We were tasked with analysing social, environmental, technological and economic trends to predict a significant global issue in the year 2055, before designing and developing a feasible future solution to this challenge.',
    problem: 'As human exploration pushes further into deep space, traditional telemedicine becomes unreliable, and medical emergencies can no longer depend on resupply or evacuation. Current protocols rely heavily on life support and return vehicles, but offer no autonomous means to treat severe conditions onboard. There is an urgent need for self-sufficient medical solutions that safeguard astronaut health during long-duration missions.',
    solution: 'HIVE-FU is a compact, fully-integrated ultrasound system designed to autonomously diagnose, plan, and treat medical emergencies in space. Powered by high-intensity focused ultrasound (HIFU) technology, it enables non-invasive procedures for common space-related conditions such as kidney stones and blood clots — allowing rapid recovery and return to duty. Enhanced with AI, HIVE-FU offers end-to-end functionality: scanning, identifying, planning, and treating without the need for external input.',
    feature_caption: 'Never need to wait for Earth again.',
    feature_bold: 'THE FIRST **AUTONOMOUS** AND EFFICIENT MEDICAL SYSTEM THAT DELIVERS **TRUSTWORTHY** CARE BEYOND EARTH.',
    feature_tags: ['Non-invasive Surgery', 'Autonomous Treatment', 'AI-assisted Care', 'Compact & Reliable', 'Multi-functional Head'],
    role_sections: [
      {
        title: 'Contextual studies & system design',
        body: 'To ground our concept in plausible futures, we began with foresight methods and an in-depth literature review. We focused on a scenario set in 2055, where long-term deep space expeditions face extreme conditions — communication delays, no evacuation options, and prolonged isolation. I was responsible for researching technological trends and future forecasting in the medical and aerospace sectors. Through this, I identified a likely trajectory toward compact, AI-assisted diagnostic and treatment devices by 2055. This analysis highlighted three key drivers: social acceptance of autonomous care, advances in real-time medical data processing, and the miniaturization of non-invasive surgical tools.',
        image: '/images/projects/hive-fu/steepv.png',
      },
      {
        title: 'User interaction design',
        body: "By engaging with both space medicine professionals and HIFU experts, our system requirements were refined, ultimately contributing to the development of a fully non-invasive surgical device suited to extraterrestrial missions. This helped define the device's core interaction model — ensuring it was intuitive, reliable, and operable under space constraints. Drawing inspiration from the ergonomics of current medical devices, HIVE-FU featured a concave probe head and hexagonal tessellation pattern. This geometry ensured uniform energy distribution, minimized distortion, and enhanced imaging resolution — critical for accurate, non-invasive intervention.",
        image: '/images/projects/hive-fu/expert evaluation.png',
      },
      {
        title: 'CAD, rendering & project management',
        body: 'Using SolidWorks the CAD was developed, translating our conceptual system into a detailed mechanical model. The final design was rendered in KeyShot, allowing us to produce high-fidelity visuals that communicated both functionality and aesthetic — supporting both our final pitch and explainer video. Beyond technical work, I also took on project management responsibilities. I delegated tasks within the team, created a Gantt chart to monitor progress, and ensured milestones were met on time. I also coordinated expert interviews, which were essential for validating the technical feasibility of our speculative solution.',
        image: '/images/projects/hive-fu/exploded.png',
      },
    ],
    soft_skills: ['Human-centred Research & Design', 'Futures Design', 'Communication', 'Expert Interviews', 'Project Planning', 'Presenting'],
    hard_skills: ['CAD & Renders (Fusion360, Keyshot)', 'Engineering Analysis', 'Research Validation'],
    tile_ratio: 'landscape',
    has_video: true,
    pdf_url: '/reports/Team 14 - HIVE-FU.pdf',
  },

  // ─── 04 MARIO'S GARDEN ─────────────────────────────────────────────────
  {
    slug: 'marios-garden',
    title: "Mario's Garden",
    index: '04 / 10',
    category: 'design',
    tags: [ 'Prototyping', 'Programming', 'Industrial Design', 'Testing'],
    year: '2023',
    course: 'Gizmo (Physical Computing)',
    type: 'Group project',
    role: 'Concept & game logic lead',
    accent_color: '#F5E6B8',
    tagline: 'Care for your plant. Learn through play.',
    one_line: 'A sensor-driven plant care game that teaches children empathy for nature.',
    features: ['Gamified Education Game', 'Sensor-driven', 'Physical-digital Interaction', 'Nature through Play'],
    hero_image: '/images/projects/marios-garden/main.png',
    images: [
      '/images/projects/marios-garden/hero.png',
      '/images/projects/marios-garden/assembly.png',
      '/images/projects/marios-garden/growth.png',
      '/images/projects/marios-garden/system design.png',
      '/images/projects/marios-garden/buttons.png',
      '/images/projects/marios-garden/cad.png',
      '/images/projects/marios-garden/code.png',
      '/images/projects/marios-garden/light.png',
      '/images/projects/marios-garden/laser cut.png',
      '/images/projects/marios-garden/sketch.png',
      '/images/projects/marios-garden/connection.png',
      '/images/projects/marios-garden/can.png',
    ],
    info: "Mario's Garden was created as part of my Gizmo (physical computing) module. We were challenged to design, build, and demonstrate an electro-mechanical machine that celebrates mechanisms and engaging physical interaction.",
    problem: "Nature is disappearing from children's lives. With increasing screen time, urbanisation, and reduced outdoor play, kids are growing up more disconnected from the natural world than ever before. A UK study found that only 21% of children today have a strong connection to nature, compared to previous generations.",
    solution: "Mario's Garden bridges the digital and natural worlds by using play as a learning tool. Through simple, engaging game mechanics, children discover how light, water, and nutrients affect plant health. Using interactive electronics and sensors, the game allows children to influence the game through real-world actions. By simulating the needs of real plants, the game responds to how children 'care' for their virtual garden, creating a more immersive and educational experience.",
    feature_caption: 'Learning through play.',
    feature_bold: 'A HIGHLY **ENGAGING** AND EDUCATIONAL PLANT CARE EXPERIENCE THAT FOSTERS **CURIOSITY** AND CONFIDENCE IN NURTURING NATURE.',
    feature_tags: ['Gamified Learning Experience', 'Interactive Mechanism', 'Empathy Building', 'Sensor-based Reaction', 'Adaptive Learning System', 'Smart Screen'],
    role_sections: [
      {
        title: 'Ideation & game algorithm',
        body: "I led the development of the game concept and core logic, framing the experience around simulating real-world plant care. I co-designed the system rules and growth algorithm, defining how plant health would be affected by inputs like light, water, and nutrients. This logic formed the backbone of the game, ensuring that every action the child takes — watering, adjusting light, or applying nutrients — directly influences the virtual plant's growth in a meaningful and educational way.",
        image: '/images/projects/marios-garden/sketch.png',
      },
      {
        title: 'Physical components & assembly',
        body: 'I designed and constructed the interactive interface, including tactile controls (buttons, plant, and blinds) that made the experience physically engaging for young users. I also built key physical components such as modular plant icons with LED feedback and servo-based animations that reflected plant growth or distress. This hands-on assembly process emphasized both ergonomics and durability, creating an inviting, child-friendly form factor.',
        image: '/images/projects/marios-garden/assembly.png',
      },
      {
        title: 'Programming & electronics',
        body: 'During the final phase, we programmed and tested the game logic using Arduino, integrating various sensors (light, moisture, proximity) and outputs (LEDs, servos, speaker cues) to create a responsive and immersive environment. The system reads real-time data from physical inputs and updates the game state accordingly. I ensured smooth communication between hardware and game logic, fine-tuned feedback timing, and implemented visual and audio cues to reinforce in-game events and player decisions.',
        image: '/images/projects/marios-garden/code.png',
      },
    ],
    soft_skills: ['User-centred Research & Design for Educational Engagement', 'Visual Communication & Teamwork', 'Project Planning', 'Presenting'],
    hard_skills: ['Rapid Prototyping (3D Printing)', 'CAD (Fusion360)', 'Physical Mechanism', 'Algorithm Development', 'Programming (Python)', 'Electronics & Circuit Design', 'Video Editing'],
    tile_ratio: 'square',
    has_video: true,
    pdf_url: '/reports/Marios Garden Report.pdf',
  },

  // ─── 05 NEST ASSURED ───────────────────────────────────────────────────
  {
    slug: 'nest-assured',
    title: 'Nest Assured',
    index: '05 / 10',
    category: 'design',
    tags: ['Industrial Design', 'CAD', 'Prototyping', 'Testing', 'Programming'],
    year: '2024',
    course: 'Industrial Design Engineering',
    type: 'Group project',
    role: 'Compliance, packaging & rendering',
    accent_color: '#F0EAD0',
    tagline: "Google's first item tracker.",
    one_line: 'A plug-and-play RFID tracker designed for young adults with ADHD.',
    features: ['Wireless Communication', 'Compact Size', 'Builds Habits', 'Easy Integration'],
    hero_image: '/images/projects/nest-assured/hero.png',
    images: [
      '/images/projects/nest-assured/nest.png',
      '/images/projects/nest-assured/device.png',
      '/images/projects/nest-assured/closeup.png',
      '/images/projects/nest-assured/exploded.png',
      '/images/projects/nest-assured/packaging.png',
      '/images/projects/nest-assured/box.png',
      '/images/projects/nest-assured/UI.png',
      '/images/projects/nest-assured/compliance.png',
      '/images/projects/nest-assured/lofi.png',
      '/images/projects/nest-assured/google env.png',
      '/images/projects/nest-assured/side.png',
      '/images/projects/nest-assured/bottom.png',
      '/images/projects/nest-assured/sketchs.png',
    ],
    info: 'Developed as part of a university group project for the Industrial Design Engineering module in 2024. The challenge was to design and engineer a battery-powered, hand-operated device for home, garden, or educational use — one that appeals to a broad market while addressing the needs of an underserved user group. *Note: Google were not engaged in any consultancy or collaborative capacity with this project; the outcome is in no way endorsed by them.',
    problem: 'ADHD affects over 22 million people worldwide, leading to challenges with attention, organization, and memory. Many individuals struggle with misplaced items, disrupting their daily routines and increasing stress. Existing solutions often rely on complex ecosystems or smartphone apps, which can be overwhelming or ineffective.',
    solution: "Nest Assured is a seamless plug-and-play RFID tracking system designed to integrate effortlessly into fast-paced lifestyles. Using RFID and ESPNOW technology, it ensures compatibility across all devices and items. Tailored for young adults with ADHD — but beneficial for anyone — Nest Assured eliminates the frustration of misplaced belongings without adding digital clutter. It's not just another app lost in a sea of notifications, nor a product locked into a restrictive ecosystem.",
    feature_caption: 'Never forget your things ever again.',
    feature_bold: 'THE MOST INTUITIVE AND **EFFORTLESS** SCANNER THAT **INSPIRES** CONFIDENCE AND RELIABILITY IN ANY SITUATION.',
    feature_tags: ['Ergonomic Concave Dial', 'Seamless', 'Ergonomic Comfort', 'Tactile Feedback', 'Multi-functional Attachment', 'Smart Screen'],
    role_sections: [
      {
        title: 'Prototyping & development',
        body: 'To evaluate feasibility and define performance requirements, multiple working prototypes were constructed and tested. Those used RFID tags and an ESPNOW-based communication system to allow real-time registration of tagged items, without relying on Wi-Fi or Bluetooth ecosystems. Through hands-on iteration, the internal layout was refined to balance functionality with portability, ensuring the reader mechanism remained compact yet effective. Power, load and component specifications were outlined to model and predict mechanical performance under ideal conditions.',
        image: '/images/projects/nest-assured/lofi.png',
      },
      {
        title: 'Compliance & user guidelines',
        body: "If brought to market, Nest Assured would fall under UK consumer electronics regulations. I took responsibility for identifying relevant safety standards and ensuring the product design adhered to UKCA and CE directives. I developed the accompanying safety manual, as well as an accessible user guide styled in line with Google's branding conventions — based on analysis of real-world user documentation from similar products.",
        image: '/images/projects/nest-assured/compliance.png',
      },
      {
        title: 'Packaging design & rendering',
        body: "Given the premium target market, I designed the product packaging to reflect a high-end, sustainable experience consistent with Google's current product line. Using SolidWorks, I modeled a custom-fit packaging solution with protective inserts and minimal plastic. I then rendered the final packaging in KeyShot, producing high-fidelity visuals that communicated both the branding and physical design effectively.",
        image: '/images/projects/nest-assured/packaging.png',
      },
    ],
    soft_skills: ['User-centred Research & Design', 'Communication & Teamwork', 'Project Planning', 'Presenting'],
    hard_skills: ['Rapid Prototyping (Lo-fi & 3D Printing)', 'CAD & Renders (Fusion360, Keyshot)', 'Branding Positioning', 'Packaging Design', 'Industry Compliance', 'Video Editing'],
    tile_ratio: 'square',
    has_video: false,
  },

  // ─── 06 URSA ───────────────────────────────────────────────────────────
  {
    slug: 'ursa',
    title: 'URSA',
    index: '06 / 10',
    category: 'design',
    tags: [ 'UI/UX', 'User Research', 'Prototyping', 'Programming', 'Testing', 'CAD'],
    year: '2021',
    course: 'Human-Centred Design Engineering',
    type: 'Group project',
    role: 'Research, prototyping & concept articulation',
    accent_color: '#D6E2EA',
    tagline: 'No screen. Be seen.',
    one_line: 'A guidance and communication glove that keeps urban cyclists safer.',
    features: ['Haptic Route Guidance', 'Eyes-free Navigation', 'Gesture-based Signalling', 'Easy Integration', 'Cyclists Visibility Aid'],
    hero_image: '/images/projects/ursa/hero.png',
    images: [
      '/images/projects/ursa/hero 2.png',
      '/images/projects/ursa/design.png',
      '/images/projects/ursa/hero zoom.png',
      '/images/projects/ursa/sketches.png',
      '/images/projects/ursa/sketches 2.png',
      '/images/projects/ursa/code.png',
    ],
    info: "Developed as part of a university group project in 2021 for the Human Centred Design Engineering module. The brief was to design an intervention to enhance personal safety in urban areas, with the final outcome manifested as something that works for people, in real-life context.",
    problem: 'Cyclist safety in urban areas is a critical issue, with over 16,000 reported accidents in the UK in 2020, including 4,000 serious injuries. Key risks include cyclists using smartphones for navigation, which diverts attention from the road, and poor communication with other vehicles. Limited visibility and inadequate signalling increase the likelihood of collisions, especially in busy, low-light conditions.',
    solution: "URSA is a guidance and communication glove that enhances cyclist safety by providing haptic feedback for navigation, allowing cyclists to stay focused on the road without the need to glance at their phones. The glove also includes built-in lights that signal hand gestures, improving visibility and ensuring that other vehicles can clearly see and register the cyclist's intentions. Paired with the URSA app, it tracks performance, monitors routes, and offers real-time safety updates, providing a seamless, secure, and intuitive cycling experience.",
    feature_caption: 'Cycling without fear.',
    feature_bold: 'AN INTUITIVE AND **SAFETY-FOCUSED** CYCLING GLOVE, COMBINING INNOVATIVE **GUIDANCE** AND **COMMUNICATION** FEATURES FOR A SECURE COMMUTE.',
    feature_tags: ['Haptic Feedback Guidance', 'Smart Navigation', 'Visibility Enhancing', 'Intuitive Signalling', 'Multi-functional attachment', 'Circuit Comfort'],
    role_sections: [
      {
        title: 'Research & development',
        body: "User research, interviews, and surveys targeting urban cyclists were conducted to identify major safety pain points — including poor visibility, limited communication with other road users, and distraction from phone-based navigation. This research directly shaped the product's core functionality: enabling hands-free navigation through haptic feedback and gesture-based signalling with integrated lights. I also supported market benchmarking and co-design sessions to ensure the glove addressed real-world user concerns and behaviours.",
        image: '/images/projects/ursa/sketches.png',
      },
      {
        title: 'Technical feasibility',
        body: 'I worked on validating the technical feasibility of URSA by helping prototype and test different vibration placements, light positions, and activation mechanisms using Arduino-based systems. I helped assess sensor performance, hand mobility, and battery placement to ensure a balance between functionality and comfort. I also participated in testing the glove in varied lighting and road conditions, gathering feedback that directly shaped the final form factor and component specification.',
        image: '/images/projects/ursa/code.png',
      },
      {
        title: 'Concept articulation & presentation',
        body: "I was responsible for synthesising our team's research and design decisions into a cohesive narrative, ensuring our concept was communicated clearly and persuasively. This included producing the final presentation materials, user scenario illustrations, and written rationale for each design decision. I also developed the URSA app UI concept, mapping out the key screens and user flows that would complement the glove's hardware features.",
        image: '/images/projects/ursa/design.png',
      },
    ],
    soft_skills: ['User-centred Research & Design', 'Communication & Teamwork', 'Concept Articulation', 'Presenting'],
    hard_skills: ['Rapid Prototyping', 'Arduino & Electronics', 'UI/UX Design', 'User Research Methods'],
    tile_ratio: 'portrait',
    has_video: false,
  },

  // ─── 07 DESALINATION ───────────────────────────────────────────────────
  {
    slug: 'desalination',
    title: 'Desalination',
    index: '07 / 10',
    category: 'systems',
    tags: ['Sustainability', 'Systems Design', 'Engineering Analysis', 'Data Analysis', 'Programming', 'Forecasting'],
    year: '2024',
    course: 'Engineering in Context',
    type: 'Group project',
    role: 'Systems analysis & research lead',
    accent_color: '#CFD9DC',
    tagline: 'Making water scarcity solvable.',
    one_line: 'A systems-level analysis of desalination technology as a response to global water stress.',
    features: ['Systems Analysis', 'Economic Modelling', 'Environmental Assessment', 'Policy Framing'],
    hero_image: '/images/projects/desalination/dts_tab1.png',
    images: [
      '/images/projects/desalination/dts_tab1.png',
      '/images/projects/desalination/dts_tab2.png',
      '/images/projects/desalination/dst_tab3.png',
      '/images/projects/desalination/dst_tab4.png',
      '/images/projects/desalination/dst_tab5.png',
    ],
    info: '[PLACEHOLDER — Add project context here]',
    problem: '[PLACEHOLDER — Add problem statement here]',
    solution: '[PLACEHOLDER — Add solution description here]',
    feature_caption: '[PLACEHOLDER — Add feature caption here]',
    feature_bold: '[PLACEHOLDER — Add feature bold statement here]',
    feature_tags: ['[PLACEHOLDER]'],
    role_sections: [
      {
        title: '[PLACEHOLDER — Role section 1 title]',
        body: '[PLACEHOLDER — Role section 1 description]',
        image: '/images/projects/desalination/dts_tab2.png',
      },
      {
        title: '[PLACEHOLDER — Role section 2 title]',
        body: '[PLACEHOLDER — Role section 2 description]',
        image: '/images/projects/desalination/dst_tab3.png',
      },
    ],
    soft_skills: ['[PLACEHOLDER]'],
    hard_skills: ['[PLACEHOLDER]'],
    tile_ratio: 'landscape',
    has_video: false,
    pdf_url: '/reports/A Strategic Engineering Analysis of Modular Desalination Plant Investments under Demand Uncertainty.pdf',
  },

  // ─── 08 HOUSESCOUT ─────────────────────────────────────────────────────
  {
    slug: 'housescout',
    title: 'HouseScout',
    index: '08 / 10',
    category: 'design',
    tags: ['UI/UX', 'User Research', 'Systems Design', 'Prototyping', 'Testing'],
    year: '2023',
    course: '[PLACEHOLDER — Course name]',
    type: 'Group project',
    role: '[PLACEHOLDER — Role]',
    accent_color: '#E8DFD2',
    tagline: '[PLACEHOLDER — Tagline]',
    one_line: '[PLACEHOLDER — One-line description]',
    features: ['[PLACEHOLDER]'],
    hero_image: '/images/projects/housescout/ui 1.png',
    images: [
      '/images/projects/housescout/problem.png',
      '/images/projects/housescout/solution.png',
      '/images/projects/housescout/ui 1.png',
      '/images/projects/housescout/ui 2.png',
      '/images/projects/housescout/ui 3.png',
      '/images/projects/housescout/ui 4.png',
      '/images/projects/housescout/ui 5.png',
      '/images/projects/housescout/ui 6.png',
      '/images/projects/housescout/ads.png',
      '/images/projects/housescout/team.png',
    ],
    info: '[PLACEHOLDER — Add project context here]',
    problem: '[PLACEHOLDER — Add problem statement here]',
    solution: '[PLACEHOLDER — Add solution description here]',
    feature_caption: '[PLACEHOLDER — Feature caption]',
    feature_bold: '[PLACEHOLDER — Feature bold statement]',
    feature_tags: ['[PLACEHOLDER]'],
    role_sections: [
      {
        title: '[PLACEHOLDER — Role section 1 title]',
        body: '[PLACEHOLDER — Role section 1 description]',
        image: '/images/projects/housescout/ui 1.png',
      },
    ],
    soft_skills: ['[PLACEHOLDER]'],
    hard_skills: ['[PLACEHOLDER]'],
    tile_ratio: 'portrait',
    has_video: false,
    pdf_url: '/reports/HouseScout P&L Report.pdf',
  },

  // ─── 09 FOODJI ─────────────────────────────────────────────────────────
  {
    slug: 'foodji',
    title: 'Foodji',
    index: '09 / 10',
    category: 'design',
    tags: ['UI/UX', 'Sustainability', 'User Research', 'Prototyping'],
    year: '2022',
    course: '[PLACEHOLDER — Course name]',
    type: 'Group project',
    role: '[PLACEHOLDER — Role]',
    accent_color: '#D9E2C9',
    tagline: '[PLACEHOLDER — Tagline]',
    one_line: '[PLACEHOLDER — One-line description]',
    features: ['[PLACEHOLDER]'],
    hero_image: '/images/projects/foodji/machine.png',
    images: [
      '/images/projects/foodji/machine.png',
      '/images/projects/foodji/food.png',
    ],
    info: '[PLACEHOLDER — Add project context here]',
    problem: '[PLACEHOLDER — Add problem statement here]',
    solution: '[PLACEHOLDER — Add solution description here]',
    feature_caption: '[PLACEHOLDER — Feature caption]',
    feature_bold: '[PLACEHOLDER — Feature bold statement]',
    feature_tags: ['[PLACEHOLDER]'],
    role_sections: [
      {
        title: '[PLACEHOLDER — Role section 1 title]',
        body: '[PLACEHOLDER — Role section 1 description]',
        image: '/images/projects/foodji/machine.png',
      },
    ],
    soft_skills: ['[PLACEHOLDER]'],
    hard_skills: ['[PLACEHOLDER]'],
    tile_ratio: 'square',
    has_video: false,
    pdf_url: '/reports/Foodji Final Report.pdf',
  },

  // ─── 10 DATA TO PRODUCT ────────────────────────────────────────────────
  {
    slug: 'data-to-product',
    title: 'Data to Product',
    index: '10 / 10',
    category: 'systems',
    tags: ['Data Analysis', 'UI/UX', 'Programming', 'Forecasting'],
    year: '2024',
    course: '[PLACEHOLDER — Course name]',
    type: '[PLACEHOLDER — Individual or group]',
    role: '[PLACEHOLDER — Role]',
    accent_color: '#DCD3E2',
    tagline: '[PLACEHOLDER — Tagline]',
    one_line: '[PLACEHOLDER — One-line description]',
    features: ['[PLACEHOLDER]'],
    hero_image: '',
    images: [],
    info: '[PLACEHOLDER — Add project context here]',
    problem: '[PLACEHOLDER — Add problem statement here]',
    solution: '[PLACEHOLDER — Add solution description here]',
    feature_caption: '[PLACEHOLDER — Feature caption]',
    feature_bold: '[PLACEHOLDER — Feature bold statement]',
    feature_tags: ['[PLACEHOLDER]'],
    role_sections: [
      {
        title: '[PLACEHOLDER — Role section 1 title]',
        body: '[PLACEHOLDER — Role section 1 description]',
        image: '',
      },
    ],
    soft_skills: ['[PLACEHOLDER]'],
    hard_skills: ['[PLACEHOLDER]'],
    tile_ratio: 'landscape',
    has_video: false,
  },
];

export const otherProjects: OtherProject[] = [
  {
    slug: 'drone-delivery',
    title: 'Drone Delivery Systems',
    index: '01 / 03',
    course: 'Economics & Finance for Systems Design',
    year: '2025',
    one_line: 'An economic feasibility analysis of urban drone delivery networks, evaluating cost structures, regulation, and last-mile logistics.',
    tags: ['Systems Design', 'Data Analysis', 'Forecasting', 'Programming'],
    hero_image: '/images/projects/drone-delivery/drone.png',
    pdf_url: '/reports/Assessing the Feasibility of Autonomous Drone Delivery Systems - A Strategic Flexibility Approach.pdf',
  },
  {
    slug: 'rain-prediction',
    title: 'Rain Probability Prediction',
    index: '02 / 03',
    course: 'Data Science',
    year: '2024',
    one_line: 'A machine-learning model for short-range rainfall probability forecasting using historical meteorological datasets.',
    tags: ['Forecasting', 'Programming', 'Data Analysis'],
    hero_image: '/images/projects/rain-prediction/airport.png',
    pdf_url: '/reports/Using existing weather conditions to.pdf',
  },
  {
    slug: 'hip-implant-fea',
    title: 'Hip Implant FEA',
    index: '03 / 03',
    course: 'Biomechanics & Structural Analysis',
    year: '2023',
    one_line: 'Finite element analysis of a hip implant under physiological loading, assessing stress distribution and fatigue risk.',
    tags: ['Engineering Analysis', 'CAD', 'Material Analysis'],
    hero_image: '/images/projects/hip-implant-fea/hip.png',
    pdf_url: '/reports/FEA Hip Implant Report.pdf',
  },
];

export const featuredSlugs = ['actib', 'hive-fu', 'desalination', 'nest-assured'];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const idx = projects.findIndex((p) => p.slug === slug);
  return projects[(idx + 1) % projects.length]!;
}

export function getAllTags(): string[] {
  const all = new Set<string>();
  [...projects, ...otherProjects].forEach((p) => p.tags.forEach((t) => all.add(t)));
  return Array.from(all).sort();
}
