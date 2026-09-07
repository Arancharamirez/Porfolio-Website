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
  pdf_url?: string | string[];
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

    // ─── 01 HOUSESCOUT ─────────────────────────────────────────────────────
  {
    slug: 'housescout',
    title: 'HouseScout',
    index: '01 / 12',
    category: 'design',
    tags: ['UI/UX', 'App Design','User Research', 'Systems Design', 'Prototyping', 'Testing'],
    year: '2026',
    course: 'Venture Creation',
    type: 'Group project',
    role: 'CIO — UI/UX & product design lead',
    accent_color: '#E8DFD2',
    tagline: "Don't rent blind.",
    one_line: 'An independent scouting service that gives renters unfiltered, in-person eyes on a property before they sign.',
    features: ['In-Person Scouts', 'Unfiltered HD Media', 'AI-Flagged Warnings', 'Live Job Tracking', 'Independent & Unbiased', 'Database & API Licensing'],
    hero_image: '/images/projects/housescout/Homepage mid.png',
    images: [
      '/images/projects/housescout/fence.png',
      '/images/projects/housescout/computer.png',
      '/images/projects/housescout/ui env.png',
    ],
    info: "Founded by a team of six as a real operating startup for a university venture-creation module, complete with our own scout network, paid user acquisition, and a funding plan pitched against live financial modelling.",
    problem: "Renting from a distance is a gamble. International students and relocating professionals routinely sign leases sight-unseen, relying on filtered listing photos and a rushed video call with an agent who represents the landlord, not them. Damp, mould and misrepresented rooms are discovered only after moving in — when it's too late to negotiate or walk away.",
    solution: "HouseScout sends an independent local Scout to physically attend a viewing on the renter's behalf, capturing unedited HD photo and video and flagging issues like hidden mould directly in the report. Renters track every job — Request, Match, Viewing, Report — in real time through the app, while the same property database and API can be licensed to relocation agencies and referral partners.",
    feature_caption: 'Never rent blind again.',
    feature_bold: "THE FIRST **INDEPENDENT** SCOUTING SERVICE THAT GIVES RENTERS **UNBIASED**, UNFILTERED EYES ON A PROPERTY BEFORE THEY SIGN.",
    feature_tags: ['Unfiltered HD Media', 'In-Person Advocacy', 'AI-Flagged Warnings', 'Live Job Tracking', 'Independent & Unbiased', 'Database & API Licensing'],
    role_sections: [
      {
        title: 'Product & UI/UX design',
        body: "As CIO I owned the UI/UX of both sides of the platform — the renter-facing job tracker (Request → Match → Viewing → Report) and the Scout app that local scouts use to accept jobs, follow guided shot-lists, and submit reports from the property. Getting the trust signals right was central: unedited video, AI-flagged warnings like hidden mould, and a visible chain of custody from request to report.",
        images: [
          { src: '/images/projects/housescout/ui 1.png', caption: 'Request a viewing' },
          { src: '/images/projects/housescout/ui 2.png', caption: 'Match with a Scout' },
          { src: '/images/projects/housescout/ui 3.png', caption: 'Report detail and media review' },
        ],
      },
      {
        title: 'Validating the problem',
        body: "Before building, we grounded the concept in real renter pain points — unfiltered images, in-person representation, and total advocacy — validated through desk research on internal migration and international relocation trends. That research shaped both the product's three pillars and the honest, unfiltered brand voice: Don't just hope for the best. Ensure it.",
        images: [
          { src: '/images/projects/housescout/street interview.png', caption: 'User interviews' },
          { src: '/images/projects/housescout/user testing.png', caption: 'User testing' },
        ],
      },
      {
        title: 'Growth, funding & the pitch',
        body: "I helped run our organic Instagram campaign (@get_housescout) to validate demand ahead of fundraising — reaching over 115K views in 30 days with zero ad spend. That traction fed directly into the funding plan and P&L model I contributed to: a phased raise from FFF equity through to a £500K Series A, targeting break-even in month 26 and a 40% gross margin by Year 3.",
        images: [
          { src: '/images/projects/housescout/stand.png', caption: 'Brand stand at university' },
          { src: '/images/projects/housescout/ads.png', caption: 'Organic Instagram growth campaign' },
        ],
      },
    ],
    soft_skills: ['User-centred Research & Design', 'Stakeholder & Investor Communication', 'Startup Strategy & Team Leadership', 'Brand Storytelling', 'Presenting'],
    hard_skills: ['UI/UX Design (Figma)', 'Financial Modelling & P&L Forecasting', 'No-code Web (Framer)', 'Growth Marketing & Social Analytics'],
    tile_ratio: 'portrait',
    has_video: false,
    pdf_url: [
      '/reports/HouseScout P&L Report.pdf',
      '/reports/HouseScout Pitch.pdf',
    ],
  },

  // ─── 02 NEST ASSURED ───────────────────────────────────────────────────
  {
    slug: 'nest-assured',
    title: 'Nest Assured',
    index: '02 / 12',
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
    hero_image: '/images/projects/nest-assured/hero anne.png',
    images: [
      '/images/projects/nest-assured/nest.png',
      '/images/projects/nest-assured/hero josh.png',
      '/images/projects/nest-assured/device.png',
      '/images/projects/nest-assured/exploded.png'
    ],
    info: 'Developed as part of a university group project for the Industrial Design Engineering module. The challenge was to design and engineer a battery-powered, hand-operated device for home, garden, or educational use — one that appeals to a broad market while addressing the needs of an underserved user group. *Note: Google were not engaged in any consultancy or collaborative capacity with this project; the outcome is in no way endorsed by them.',
    problem: 'ADHD affects over 22 million people worldwide, leading to challenges with attention, organization, and memory. Many individuals struggle with misplaced items, disrupting their daily routines and increasing stress. Existing solutions often rely on complex ecosystems or smartphone apps, which can be overwhelming or ineffective.',
    solution: "Nest Assured is a seamless plug-and-play RFID tracking system designed to integrate effortlessly into fast-paced lifestyles. Using RFID and ESPNOW technology, it ensures compatibility across all devices and items. Tailored for young adults with ADHD — but beneficial for anyone — Nest Assured eliminates the frustration of misplaced belongings without adding digital clutter. It's not just another app lost in a sea of notifications, nor a product locked into a restrictive ecosystem.",
    feature_caption: 'Never forget your things ever again.',
    feature_bold: 'THE MOST INTUITIVE AND **EFFORTLESS** SCANNER THAT **INSPIRES** CONFIDENCE AND RELIABILITY IN ANY SITUATION.',
    feature_tags: ['Ergonomic Concave Dial', 'Seamless', 'Ergonomic Comfort', 'Tactile Feedback', 'Multi-functional Attachment', 'Smart Screen'],
    role_sections: [
      {
        title: 'Prototyping & development',
        body: 'To evaluate feasibility and define performance requirements, multiple working prototypes were constructed and tested. Those used RFID tags and an ESPNOW-based communication system to allow real-time registration of tagged items, without relying on Wi-Fi or Bluetooth ecosystems. Through hands-on iteration, the internal layout was refined to balance functionality with portability, ensuring the reader mechanism remained compact yet effective. Power, load and component specifications were outlined to model and predict mechanical performance under ideal conditions.',
        images: [
          { src: '/images/projects/nest-assured/sketchs.png', caption: 'Ideation & Sketching' },
          { src: '/images/projects/nest-assured/lofi.png', caption: 'Low-Fidelity Prototyping' },
          { src: '/images/projects/nest-assured/exploded.png', caption: 'Exploded View' },
        ],
      },
      {
        title: 'Compliance & user guidelines',
        body: "If brought to market, Nest Assured would fall under UK consumer electronics regulations. I took responsibility for identifying relevant safety standards and ensuring the product design adhered to UKCA and CE directives. I developed the accompanying safety manual, as well as an accessible user guide styled in line with Google's branding conventions — based on analysis of real-world user documentation from similar products.",
        images: [
          { src: '/images/projects/nest-assured/compliance.png', caption: 'Compliance & User Guidelines' },
          { src: '/images/projects/nest-assured/instructions.png', caption: 'Nest Assured instructions' },
          { src: '/images/projects/nest-assured/packaging layout.png', caption: 'Packaging Design' },
        ],
      },
      {
        title: 'Packaging design & rendering',
        body: "Given the premium target market, I designed the product packaging to reflect a high-end, sustainable experience consistent with Google's current product line. Using SolidWorks, I modeled a custom-fit packaging solution with protective inserts and minimal plastic. I then rendered the final packaging in KeyShot, producing high-fidelity visuals that communicated both the branding and physical design effectively.",
        images: [
          { src: '/images/projects/nest-assured/boxing.png', caption: 'Sustainable Packaging' },
          { src: '/images/projects/nest-assured/google.png', caption: 'Alignment with Google Brand Identity' },
          { src: '/images/projects/nest-assured/google env.png', caption: 'Product positioning within Google environment' },
          { src: '/images/projects/nest-assured/hero.png', caption: 'Working product' },
        ],
      },
    ],
    soft_skills: ['User-centred Research & Design', 'Communication & Teamwork', 'Project Planning', 'Presenting'],
    hard_skills: ['Rapid Prototyping (Lo-fi & 3D Printing)', 'CAD & Renders (Fusion360, Keyshot)', 'Branding Positioning', 'Packaging Design', 'Industry Compliance', 'Video Editing'],
    tile_ratio: 'square',
    has_video: false,
    report : [
      '/reports/Nest Assured Report.pdf',
      '/reports/Nest Assured Pitch.pdf',
    ]
  },

    // ─── 03 DESALINATION ───────────────────────────────────────────────────
  {
    slug: 'desalination',
    title: 'SWRO Decision Tool',
    index: '03 / 12',
    category: 'systems',
    tags: ['Sustainability', 'Systems Design', 'Engineering Analysis', 'Data Analysis', 'Programming', 'Forecasting'],
    year: '2026',
    course: 'Masters Project',
    type: 'Individual project',
    role: 'Independent research, modelling & software development',
    accent_color: '#CFD9DC',
    tagline: 'Design for the demand you don’t know yet.',
    one_line: 'An interactive decision-support tool that values the flexibility to expand desalination capacity in stages — quantifying an expected €118M advantage over committing to a fixed design upfront.',
    features: ['Real Options Analysis', 'Monte Carlo Simulation', 'Multi-Criteria Decision Analysis', 'Interactive Web Tool', 'Usability-Tested'],
    hero_image: '/images/projects/desalination/hero slim.png',
    images: [
      '/images/projects/desalination/hero.png',
      '/images/projects/desalination/excel 1.png',
    ],
    info: 'An MSc individual thesis for the Dyson School of Engineering at Imperial College London, developing and applying an integrated framework — combining real-options valuation, robustness assessment, and multi-criteria decision analysis — to the question of whether desalination capacity should be built as one fixed commitment or expanded flexibly in stages. The framework is applied to a real, live expansion decision at the Torrevieja SWRO plant in southeastern Spain, and delivered through an interactive Decision-Support Tool validated with ten usability-test participants and a practising water-utility engineer.',
    problem: 'Large desalination plants are typically sized against a single demand forecast and built as one fixed commitment — a “predict and provide” approach that fails in two ways: over-investment if demand grows slower than expected, or expensive emergency expansion if it grows faster. Conventional NPV analysis treats these investments as static, systematically undervaluing the option to defer, expand or abandon capacity as real demand and energy prices reveal themselves over a project’s multi-decade life.',
    solution: 'I built a four-phase framework — stochastic demand and energy-price simulation, real-options valuation, robustness assessment, and multi-criteria decision analysis — and applied it to Torrevieja’s planned 40hm³/yr expansion, comparing a single rigid build against a modular design that adds capacity in 5,000m³/day increments only when a utilisation trigger fires. Across 2,000 paired Monte Carlo trials, the modular design wins in 81% of simulated futures, delivering an Expected Value of Flexibility of €118M. I exposed the full framework through an interactive Decision-Support Tool — deployed to the web, requiring no installation — that lets specialist and non-specialist users alike adjust assumptions and see the recommendation update in real time.',
    feature_caption: 'Quantifying the value of not committing too soon.',
    feature_bold: "AN INTERACTIVE DECISION-SUPPORT TOOL THAT QUANTIFIES **€118 MILLION** OF FLEXIBILITY VALUE IN A REAL DESALINATION EXPANSION, WINNING IN **81%** OF 2,000 SIMULATED FUTURES.",
    feature_tags: ['Real Options Analysis', 'Monte Carlo Simulation', 'Multi-Criteria Decision Analysis', 'Usability-Tested Tool', 'Deployed Web App'],
    role_sections: [
      {
        title: 'Techno-economic modelling & Monte Carlo simulation',
        body: 'I built the full techno-economic model from the ground up: stochastic demand and electricity-price processes calibrated against 2003–2025 Spanish coastal water-demand records and OMIE wholesale price data, a 15-year discounted cash-flow model for both a rigid and a modular expansion design, and a rule-based trigger governing when the modular design commits to a new 5,000m³/day capacity module. Running the model across 2,000 paired Monte Carlo trials — using common random numbers so both designs face identical simulated futures — produced an Expected Value of Flexibility of €118M, with the modular design outperforming the rigid one in 81% of trials.',
        image: '/images/projects/desalination/excel 1.png',
      },
      {
        title: 'Decision-Support Tool design & development',
        body: 'I designed and built the interactive Decision-Support Tool from scratch in Python and deployed it to the web, translating the underlying simulation into a five-tab interface — About, Worked Example, Inputs, Uncertainty, and Decision — structured so analytical complexity increases as the user moves through it. Adjustable parameter sliders trigger a full 2,000-trial re-simulation on demand, and a plain-language recommendation banner, hoverable tooltips, and an MCDA radar chart make the underlying real-options and robustness analysis legible to non-specialist stakeholders as well as technical reviewers. I validated the interface through a structured usability study with ten participants across two user groups, plus a semi-structured interview with a practising water-utility engineer.',
        images: [
          { src: '/images/projects/desalination/dst_tab1.png', caption: 'About tab' },
          { src: '/images/projects/desalination/dst_tab2.png', caption: 'Worked example' },
          { src: '/images/projects/desalination/dst_tab3.png', caption: 'Inputs tab' },
          { src: '/images/projects/desalination/dst_tab4.png', caption: 'Uncertainty tab' },
          { src: '/images/projects/desalination/dst_tab5.png', caption: 'Decision tab' },
        ],
      },
    ],
    soft_skills: ['Independent Research & Thesis Writing', 'Technical Communication', 'Usability Testing & Evaluation', 'Presenting'],
    hard_skills: ['Real Options Analysis', 'Monte Carlo Simulation (Python)', 'Multi-Criteria Decision Analysis', 'Techno-economic & Financial Modelling', 'Web App Development & Deployment'],
    tile_ratio: 'landscape',
    has_video: false,
    pdf_url: '/reports/A Strategic Engineering Analysis of Modular Desalination Plant Investments under Demand Uncertainty.pdf',
  },

  // ─── 04 OLIVE ──────────────────────────────────────────────────────────
  {
    slug: 'olive',
    title: 'Olive',
    index: '04 / 12',
    category: 'systems',
    tags: ['Sustainability', 'Systems Design', 'Data Analysis', 'Stakeholder Strategy', 'Product Design'],
    year: '2026',
    course: 'Project Management',
    type: 'Group project',
    role: 'Stakeholder strategy & individual analytical report',
    accent_color: '#B9C99B',
    tagline: 'Powering smarter energy decisions.',
    one_line: 'A demand-side response system that turns curtailed Orkney wind power into affordable heat for fuel-poor households.',
    features: ['Smart Plug Control', 'Boiler Integration', 'Curtailment-Synced Scheduling', 'Community Value Dividend', 'Stakeholder Value-Exchange Model'],
    hero_image: '/images/projects/olive/plug.png',
    images: [
    ],
    info: 'Developed for the Project Management module in 2026, in a six-person team, alongside an individual analytical report applying Value-Focused Thinking and stakeholder analysis to the same problem. The brief: propose an intervention for the Orkney Isles, where 23 wind turbines routinely generate more clean energy than the local grid can absorb.',
    problem: "Orkney's wind fleet regularly produces enough electricity to cover 115% of local demand, yet subsea transmission limits force the grid to curtail — discard — around 25 GWh of that power every year, worth an estimated £2.5M in lost revenue. Meanwhile 63% of Orkney households live in fuel poverty, unable to afford the heat they need, a rate far above the Scottish average.",
    solution: "Olive is a smart plug and boiler-control system that automatically shifts household heating and appliance use into windows of peak wind generation, converting energy that would otherwise be thrown away into affordable heat. A stakeholder value-exchange model — in which network operators, suppliers and government each fund a share of installation and platform costs in return for grid stability and revenue — funds free installation for households, with 20% of the shifted value returned to a community fund.",
    feature_caption: 'Powering smarter energy decisions.',
    feature_bold: "A DEMAND-SIDE RESPONSE SYSTEM THAT TURNS **CURTAILED WIND POWER** INTO **AFFORDABLE HEAT** FOR FUEL-POOR HOUSEHOLDS.",
    feature_tags: ['Smart Plug & Boiler Control', 'Curtailment-Synced Scheduling', 'Stakeholder Value-Exchange', 'Community Dividend', 'Zero Upfront Cost'],
    role_sections: [
      {
        title: 'Decision framing & stakeholder analysis',
        body: "I led the individual analytical strand of the project, applying a Value-Focused Thinking approach to reframe the brief from 'how do we reduce curtailment' to 'how do we maximise the local value of renewable wealth for every stakeholder'. Using a 5Ws+1H framework, I mapped the conflicting priorities of households, energy suppliers, Kaluza and government, identifying Community Trusts as the key gatekeepers of trust and adoption.",
        images:  [
          { src:  '/images/projects/olive/analysis 1.png', caption: 'Stakeholder behaviour' },
          { src:  '/images/projects/olive/analysis 2.png', caption: 'Seasonality analysis' },
        ]
      },
      {
        title: 'Curtailment modelling & the business case',
        body: "I built a conservative curtailment model from raw turbine output data — filtering out low-wind and maintenance downtime to isolate energy that was genuinely available but rejected by the grid — then scaled a single 900kW turbine's data to Orkney's 23-turbine fleet to quantify a baseline of 25.6 GWh, worth £2.56M, in annually wasted generation. This modelling underpinned the commercial case presented to stakeholders.",
        images:  [
          { src:  '/images/projects/olive/money.png', caption: 'Pricing strategy' },
          { src:  '/images/projects/olive/price.png', caption: 'Pricing strategy' },
        ]
      },
      {
        title: 'Pricing strategy & value-exchange design',
        body: "Recognising that manual behavioural change and seasonality were the real bottlenecks to adoption, I helped shift the team's thinking from incentivising behaviour directly to incentivising permission — designing a value-exchange model where network operators and suppliers fund installation and platform costs in return for grid stability and revenue, while households receive free installation and lower bills, with a 20% community dividend to sustain long-term trust.",
        images:  [
          { src:  '/images/projects/olive/price.png', caption: 'Pricing strategy' },
          { src:  '/images/projects/olive/positive.png', caption: 'Stakeholder advantages' },
        ]
      },
    ],
    soft_skills: ['Stakeholder Analysis & Value-Focused Thinking', 'Decision Framing', 'Financial & Commercial Modelling', 'Cross-functional Collaboration', 'Written & Visual Communication'],
    hard_skills: ['Data Analysis & Curtailment Modelling', 'Systems & Stakeholder Mapping', 'Pricing & Incentive Design', 'Project Management Frameworks'],
    tile_ratio: 'portrait',
    has_video: false,
    pdf_url: [
      '/reports/Olive Report.pdf',
      '/reports/Strategic Evaluation of Demand-Side Response Integration for the Orkney Isles.pdf',
    ]
  },

    // ─── 05 FOODJI ─────────────────────────────────────────────────────────
  {
    slug: 'foodji',
    title: 'Foodji',
    index: '05 / 12',
    category: 'systems',
    tags: ['Sustainability', 'Systems Design', 'Stakeholder Strategy', 'Data Analysis', 'Behavioural Design'],
    year: '2026',
    course: 'Sustainable Design & Strategy',
    type: 'Group project',
    role: 'Strategy, stakeholder analysis & financial modelling',
    accent_color: '#D9E2C9',
    tagline: 'See the carbon. Choose better.',
    one_line: 'A CO₂e transparency and rewards strategy for Foodji’s smart vending network, nudging 100,000 monthly consumers toward lower-carbon meals without restricting choice.',
    features: ['CO₂e Meal Labelling', 'Digital Loyalty Rewards', 'Nudge-Based Behaviour Change', 'Stakeholder & SDG Mapping', 'Financial Impact Modelling', 'Systems-Level Strategy'],
    hero_image: '/images/projects/foodji/machine.png',
    images: [
    ],
    info: 'Developed for the Sustainable Design & Strategy module in a three-person team, analysing Foodji — a Munich-based smart vending company serving over 100,000 meals a month across Germany. The brief was to apply value-focused and systems thinking to design a behavioural sustainability intervention grounded in a real company’s stakeholder ecosystem, competitive landscape and regulatory context.',
    problem: 'Foodji’s AI-driven demand forecasting already cuts food waste by 70% against the industry average, yet its 95%-app-adopting customers still buy on convenience and price rather than carbon impact. No CO₂e data is surfaced at the point of purchase, and with Germany’s food sector responsible for over 20% of the country’s emissions, the gap between sustainable intent and actual purchasing behaviour remains wide open.',
    solution: 'We designed a Consumer Transparency & Incentivisation strategy: A–E colour-coded CO₂e labels shown on packaging and in the app at the point of meal selection, paired with a monthly digital loyalty card that rewards six low-carbon purchases with discounts, free meals or supplier vouchers. Grounded in nudge theory and operant conditioning, and built entirely on Foodji’s existing app infrastructure, the intervention targets a 20% reduction in meal-related CO₂e by 2028 — saving an estimated 576 tonnes of CO₂e a year — with reward costs capped at 2% of revenue.',
    feature_caption: 'Make the sustainable choice the easy choice.',
    feature_bold: "A DATA-DRIVEN TRANSPARENCY AND REWARDS STRATEGY THAT NUDGES CONSUMERS TOWARD **LOWER-CARBON** MEALS.",
    feature_tags: ['CO₂e Transparency Labels', 'Digital Loyalty Card', 'Nudge Theory', 'Operant Conditioning', 'SDG 12 Alignment', 'Impact Forecasting'],
    role_sections: [
      {
        title: 'Ecosystem, stakeholder & landscape analysis',
        body: 'I mapped Foodji’s full stakeholder ecosystem — from meal suppliers and vending-machine technicians to regulatory bodies and waste contractors — and analysed how the company embeds the UN SDGs across its operations and supply chain. This fed into a value-mapping exercise across customer, network, society and environment lenses, alongside a study of Germany’s political and regulatory landscape, including the Waste Framework Directive and incoming carbon-tax proposals, which grounded our strategic focus on SDG 12 and the consumer intention-behaviour gap.',
        images: [
          { src: '/images/projects/foodji/stakeholder map.png', caption: 'Foodji stakeholder ecosystem map' },
        ],
      },
      {
        title: 'Intervention design, evaluation & selection',
        body: 'Building on our Theory of Change, I helped develop and evaluate three candidate interventions — CO₂e transparency and rewards, dynamic pricing on near-expiry meals, and a gamified sustainability leaderboard — scoring each against an IDEO-based decision matrix for desirability, feasibility, viability and sustainability. I contributed to the case for our final direction: A–E colour-coded CO₂e labelling paired with a digital loyalty card, selected for building entirely on Foodji’s existing app infrastructure at minimal implementation cost.',
        images: [
          { src: '/images/projects/foodji/feature.png', caption: 'Design intervention' },
          { src: '/images/projects/foodji/evaluation.png', caption: 'Intervention evaluation matrix' },
        ],
      },
      {
        title: 'Financial modelling, impact case & delivery roadmap',
        body: 'I contributed to the quantitative case behind the final intervention — calculating meal-level CO₂e using an LCA-based methodology, modelling a shift in Foodji’s purchasing mix projected to save 576 tonnes of CO₂e a year, and costing the loyalty rewards programme against a 2%-of-revenue cap. I also helped structure the four-phase implementation roadmap and risk mitigation plan, benchmarking our approach against comparable interventions from HelloFresh, Too Good To Go and Germany’s Pfand deposit scheme.',
        images: [
          { src: '/images/projects/foodji/machine.png', caption: 'Foodji smart vending machine' },
        ],
      },
    ],
    soft_skills: ['Stakeholder Analysis & Systems Mapping', 'Behavioural & Nudge Theory Application', 'Cross-functional Collaboration', 'Written & Visual Communication', 'Presenting'],
    hard_skills: ['Financial & Impact Modelling', 'LCA-based CO₂e Data Analysis', 'Decision Matrix Evaluation (IDEO Framework)', 'Theory of Change Frameworks'],
    tile_ratio: 'square',
    has_video: false,
    pdf_url: '/reports/Foodji Final Report.pdf',
  },

  // ─── 06 DATA TO PRODUCT ────────────────────────────────────────────────
  {
    slug: 'data-to-product',
    title: 'Waste Trade',
    index: '06 / 12',
    category: 'systems',
    tags: ['Data Analysis', 'UI/UX', 'Programming', 'Forecasting', 'Sustainability'],
    year: '2025',
    course: 'Data to Product',
    type: 'Group project',
    role: 'Data science, modelling & product design',
    accent_color: '#DCD3E2',
    tagline: 'Waste doesn’t disappear. It trades.',
    one_line: 'An interactive data product that treats plastic waste as a form of currency, revealing which countries build real economic value from processing the world’s waste — and which remain dependent on others to do it for them.',
    features: ['Global Trade Data', 'Self-Sufficiency Index', 'Local Industry Value', 'ARIMA Forecasting', 'Interactive Heat Map'],
    hero_image: '/images/projects/data-to-product/hero.jpeg',
    images: [
      '/images/projects/data-to-product/ui.png',
    ],
    info: 'Developed for the Data to Product module in a two-person team with Zoe Hall, combining OECD waste-management data and UN Comtrade trade records into an interactive tool for exploring the global plastic waste trade. Built end-to-end from data sourcing through to a deployed web interface, and grounded in real-world validation against events like China’s 2018 import ban.',
    problem: 'Plastic waste is routinely exported from high-income countries to lower-income ones with less processing capacity and fewer environmental protections, but this global trade is poorly understood: there’s no clear, accessible way to see which countries actually process their own waste, which depend on others, and where processing already generates real economic value.',
    solution: 'We built a data product that treats plastic waste as a form of currency — combining OECD and UN Comtrade records into two original indicators, Self-Sufficiency (how much of a country’s own waste it processes domestically) and Local Industry Value (the economic value a country derives from processing waste, domestic and imported). The interface moves from descriptive history through prescriptive metrics to ARIMA-based forecasting, all built around an interactive world heat map so policymakers, researchers and investors can compare countries and explore how waste-processing roles might evolve.',
    feature_caption: 'See who profits from the world’s waste.',
    feature_bold: "AN INTERACTIVE DATA PRODUCT THAT TREATS PLASTIC WASTE AS A **CURRENCY**, REVEALING WHICH COUNTRIES BUILD **REAL ECONOMIC VALUE** FROM PROCESSING THE WORLD'S WASTE.",
    feature_tags: ['Self-Sufficiency Index', 'Local Industry Value', 'ARIMA Forecasting', 'World Heat Map', 'OECD & UN Comtrade Data'],
    role_sections: [
      {
        title: 'Data sourcing, imputation & modelling',
        body: 'I worked across the full data pipeline: sourcing and curating OECD waste-management records and raw UN Comtrade trade data, and helping design the imputation method that filled gaps in reported trade quantities using country-specific, smoothed unit prices rather than a single global rate — validated by cross-checking against real events like China’s 2018 import ban. I also contributed to defining and testing the two prescriptive indicators at the core of the product, Self-Sufficiency and Local Industry Value, and to comparing ARIMA against ETS forecasting models, where ARIMA with bootstrap-sampled errors and price smoothing proved most reliable.',
        image: '/images/projects/data-to-product/hero.jpeg',
      },
      {
        title: 'Interface design & development',
        body: 'I helped design and build the three-tab interface — Descriptive, Prescriptive and Forecasting — structured around an interactive world heat map so users can compare countries and drill into a given country’s history, current performance and projected trajectory. The interface went through multiple rounds of iteration, converging on a single-page layout with a consistent sidebar-and-map structure across all three tabs so switching between historical, prescriptive and forecasted views felt like one coherent product rather than three separate tools.',
        images: [
          { src: '/images/projects/data-to-product/ui.png', caption: 'Raw data Visualisation' },
          { src: '/images/projects/data-to-product/ui.png', caption: 'Forecasting' },
          { src: '/images/projects/data-to-product/ui.png', caption: 'Prescriptive Analysis' },
        ],
      },
    ],
    soft_skills: ['Cross-functional Collaboration', 'Research & Data Validation', 'Written & Visual Communication', 'Presenting'],
    hard_skills: ['Data Sourcing, Cleaning & Imputation', 'Time-Series Forecasting (ARIMA, ETS)', 'Statistical Modelling & Validation', 'Interactive Data Visualisation'],
    tile_ratio: 'landscape',
    has_video: false,
    pdf_url: '/reports/The Impact of Waste as a Currency Report.pdf',
  },

  // ─── 07 ACTIB ──────────────────────────────────────────────────────────
  {
    slug: 'actib',
    title: 'ACTIB',
    index: '07 / 12',
    category: 'design',
    tags: ['Industrial Design', 'UI/UX', 'App Design' , 'Prototyping'],
    year: '2025',
    course: 'Advanced Industrial Design',
    type: 'Individual project',
    role: 'End-to-end design lead',
    accent_color: '#A8C4D4',
    tagline: 'Precision you can feel.',
    one_line: 'A volleyball training glove with real-time haptic feedback for setters.',
    features: ['Intelligent Sportswear', 'Performance-Enhancing Glove', 'Haptic Feedback Training', 'Wrist Support', 'Builds Technique'],
    hero_image: '/images/projects/actib/actib hero.png',
    images: [
      '/images/projects/actib/hero.png',
      '/images/projects/actib/exploded.png',
    ],
    info: 'Developed as part of a university individual project for the Advanced Industrial Design module, the challenge was to generate and develop a concept and touchpoint for a sports product, embodying the principles of desirability, feasibility and usability, aligning with industry standards.',
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

  // ─── 08 TWO STEP ───────────────────────────────────────────────────────
  {
    slug: 'two-step',
    title: 'Two Step',
    index: '08 / 12',
    category: 'design',
    tags: ['UI/UX', 'App Design', 'Market Research', 'Business Strategy', 'Prototyping'],
    year: '2024',
    course: 'Venture Creation',
    type: 'Group project',
    role: 'UX research & concept design',
    accent_color: '#C7D2F0',
    tagline: 'Your journey, two steps at a time.',
    one_line: 'A navigation app that plots scenic, exploration-first walking routes instead of the fastest ones.',
    features: ['Scenic Route Generation', 'Local POI Discovery', 'Gamified Exploration', 'Partner Business Promotion', 'Save & Share Routes'],
    hero_image: '/images/projects/two step/two step.png',
    images: [
      '/images/projects/two step/two step.png',
    ],
    info: 'Developed for a university venture-creation module in 2025, in a five-person team ("Wayfinding in the City"). The brief was to identify a commercially viable digital product opportunity and take it from problem framing through to a fully costed business case and go-to-market plan.',
    problem: "Digital life has flattened the experience of getting from A to B. Mapping apps optimise purely for speed or cost, and constant information overload has left people too overwhelmed to seek out anywhere unfamiliar — a trend the pandemic accelerated. The result is a generation that walks past hidden cafes, parks and independent shops every day without ever noticing them.",
    solution: "Two Step is an alternative navigation app that plots routes prioritising discovery over efficiency, surfacing cafes, parks, pubs and hidden gems along the way. A mascot-led gamification layer of weekly challenges rewards exploration, while local businesses pay to be featured as waypoints — turning a walk into a source of serendipity rather than just a route to a destination.",
    feature_caption: 'Your journey, two steps at a time.',
    feature_bold: "AN ALTERNATIVE **NAVIGATION** APP THAT TRADES SPEED FOR **DISCOVERY**, TURNING EVERY WALK INTO A CHANCE TO EXPLORE.",
    feature_tags: ['Scenic Routing', 'Local Discovery', 'Gamified Walks', 'Partner Promotions', 'Save & Share'],
    role_sections: [
      {
        title: 'User research & personas',
        body: "I contributed to the initial survey and interview research that shaped our design specification, and to developing our two core personas — Enthusiastic Erica, a spontaneous walker who wants scenic routes without the planning effort, and Curious Carlos, a tourist who wants local recommendations without researching a new city. These personas kept the concept anchored in real user needs through three rounds of concept evaluation.",
        image: '/images/projects/two step/two step.png',
      },
      {
        title: 'Concept design & prototyping',
        body: "Of three concepts we evaluated against our design specification — a safety-first router, a customised discovery router, and a screen-free vibration-guided router — I helped build and test the customised navigation prototype that scored highest, iterating the UI through park interviews with 12 potential users before arriving at the final route-generation and gamification flow.",
        image: '/images/projects/two step/two step.png',
      },
      {
        title: 'Market sizing & business model',
        body: "I worked on sizing the opportunity through top-down, bottom-up and value-theory approaches, arriving at a 5-year serviceable obtainable market of £9.13M, and on structuring the four-stream revenue model — business partnerships, PPC ads, subscriptions and business exposure — that underpins the £582K funding case and 54-month break-even projection.",
        image: '/images/projects/two step/two step.png',
      },
    ],
    soft_skills: ['User Research & Persona Development', 'Concept Ideation & Evaluation', 'Market Sizing & Business Modelling', 'Stakeholder Interviews', 'Presenting'],
    hard_skills: ['UI/UX Prototyping', 'Google Maps & Navigation APIs', 'Financial Modelling (P&L, SOM)', 'Marketing Channel Strategy'],
    tile_ratio: 'landscape',
    has_video: false,
    pdf_url: '/reports/Two Step Report.pdf',
  },

  // ─── 09 HIVE-FU ────────────────────────────────────────────────────────
  {
    slug: 'hive-fu',
    title: 'HIVE-FU',
    index: '09 / 12',
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
    info: 'Developed as part of a university group project for the Design Engineering Futures module. We were tasked with analysing social, environmental, technological and economic trends to predict a significant global issue in the year 2055, before designing and developing a feasible future solution to this challenge.',
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
    pdf_url: '/reports/HIVE-FU.pdf',
  },

    // ─── 10 ALL-INK ────────────────────────────────────────────────────────
  {
    slug: 'all-ink',
    title: 'ALL-INK',
    index: '10 / 12',
    category: 'design',
    tags: ['Industrial Design', 'Sustainable Design', 'Systems Design', 'UI/UX', 'App Design', 'CAD'],
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
    info: 'Developed as part of a university group project for the Sustainable Design Engineering module. The brief required teams to identify key sustainability issues in a designated product — in this case, ink cartridges — and propose, prototype, and evaluate a holistic solution addressing the product, its packaging, and surrounding systems.',
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

  // ─── 11 MARIO'S GARDEN ─────────────────────────────────────────────────
  {
    slug: 'marios-garden',
    title: "Mario's Garden",
    index: '11 / 12',
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

  // ─── 12 URSA ───────────────────────────────────────────────────────────
  {
    slug: 'ursa',
    title: 'URSA',
    index: '12 / 12',
    category: 'design',
    tags: [ 'UI/UX', 'App Design', 'User Research', 'Prototyping', 'Programming', 'Testing', 'CAD'],
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
    info: "Developed as part of a university group project for the Human Centred Design Engineering module. The brief was to design an intervention to enhance personal safety in urban areas, with the final outcome manifested as something that works for people, in real-life context.",
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
