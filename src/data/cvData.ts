/**
 * Complete academic dataset extracted and structured directly from Dr. HyeJin Hwang's CV (October 2026)
 */

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number | string;
  journal: string;
  volume?: string;
  pages?: string;
  doi?: string;
  doiUrl?: string;
  type: 'journal' | 'book_chapter' | 'in_press' | 'under_review';
  topic: 'knowledge_comprehension' | 'edtech_inferencing' | 'multilingual_ell' | 'cognition_methods';
  featured?: boolean;
  awards?: string[];
  mediaCoverage?: {
    outlet: string;
    url: string;
    title?: string;
  }[];
  policyCitations?: {
    organization: string;
    url: string;
  }[];
  abstract?: string;
  bibtex: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  acronym?: string;
  role: 'Principal Investigator' | 'Co-Principal Investigator' | 'Co-Investigator';
  funder: string;
  amount?: string;
  period: string;
  description: string;
  methodology: string[];
  impact: string;
  status: 'active' | 'completed';
  tags: string[];
}

export interface Award {
  year: string;
  title: string;
  organization: string;
  category: 'national' | 'fellowship' | 'paper_award' | 'scholarship';
  description?: string;
}

export interface AcademicPosition {
  period: string;
  title: string;
  institution: string;
  department: string;
  location: string;
  highlight?: string;
}

export const personalInfo = {
  name: "HyeJin Hwang, Ph.D.",
  preferredName: "Dr. HyeJin Hwang",
  title: "Assistant Professor",
  department: "Department of Educational Psychology",
  college: "College of Education and Human Development (CEHD)",
  institution: "University of Minnesota, Twin Cities",
  office: "56 East River Rd, 164 Education Sciences Building, Minneapolis, MN 55455",
  phone: "(612) 624-3580",
  email: "hjhwang1120@gmail.com",
  cvPath: "/assets/aistudio/Hwang_CV_1102.2026_for_the_website_activity_3f64c1ab.pdf",
  googleScholarUrl: "https://scholar.google.com/citations?view_op=search_authors&mauthors=HyeJin+Hwang+Minnesota",
  orcidId: "0000-0002-3112-920X",
  orcidUrl: "https://orcid.org/0000-0002-3112-920X",
  umnProfileUrl: "https://cehd.umn.edu/edpsych",
  bioSummary: "Dr. HyeJin Hwang is an Assistant Professor of Educational Psychology at the University of Minnesota. Her research investigates the cognitive and linguistic mechanisms underlying reading comprehension, with particular emphasis on how content-area domain knowledge (science, social studies) and vocabulary dynamically interact to bolster reading development in elementary students, multilingual learners, and children experiencing early reading difficulties. As Co-PI and PI on federal grants totaling over $4.5 million from the Institute of Education Sciences (IES) and Office of Special Education Programs (OSEP), she co-develops evidence-based educational technologies including Inference Galaxy and ELCII to empower young readers through individualized, technology-scaffolded learning.",
  researchMission: "Bridging the bidirectional relationship between conceptual knowledge and literacy development, engineering computerized comprehension interventions, and refining psychometric measures of cognitive coherence.",
  stats: [
    { label: "Active Grant Funding", value: "$4.5M+", subtext: "IES, OSEP & University Grants" },
    { label: "Refereed Publications", value: "25+", subtext: "Articles, Chapters & Preprints" },
    { label: "Podcast Downloads", value: "20,000+", subtext: "Science of Reading Feature" },
    { label: "National Recognitions", value: "5", subtext: "APA & ILA Honors / Awards" }
  ]
};

export const academicPositions: AcademicPosition[] = [
  {
    period: "2023 - Present",
    title: "Assistant Professor",
    institution: "University of Minnesota, Minneapolis",
    department: "Department of Educational Psychology",
    location: "Minneapolis, MN",
    highlight: "Leading research on cognitive processes in text comprehension and AI/EdTech literacy integration."
  },
  {
    period: "2021 - 2023",
    title: "President's Postdoctoral Fellow",
    institution: "University of Minnesota, Minneapolis",
    department: "Department of Educational Psychology",
    location: "Minneapolis, MN",
    highlight: "Investigated longitudinal directional relations between domain knowledge, working memory, and reading."
  },
  {
    period: "2018 - 2021",
    title: "Postdoctoral Scholar",
    institution: "Florida State University",
    department: "Florida Center for Reading Research (FCRR)",
    location: "Tallahassee, FL",
    highlight: "Conducted large-scale randomized controlled trials and meta-analyses on integrated content-area literacy."
  }
];

export const educationHistory = [
  {
    degree: "Ph.D. in Educational Studies",
    year: "2018",
    institution: "University of Michigan, Ann Arbor, MI, USA",
    school: "School of Education",
    concentration: "Literacy, Language, and Culture",
    committee: "Nell K. Duke, Gina N. Cervetti, Kai S. Cortina, Nick Ellis",
    dissertation: "Do Knowledge and Motivation Matter? The Role of General Knowledge and Reading Motivation in Reading Achievement in the Elementary Years"
  },
  {
    degree: "Graduate Studies (M.A.)",
    year: "2011",
    institution: "Korea University Graduate School",
    school: "Department of English Language and Literature / Applied Linguistics",
    concentration: "Applied Linguistics & Second Language Reading",
    honors: "General Scholarship for Graduate Study (2010, 2011)"
  },
  {
    degree: "B.A.",
    year: "2008",
    institution: "Korea University",
    school: "Seoul, Republic of Korea",
    concentration: "English Language & Education",
    honors: "Honor for Undergraduate Study (2005, 2008)"
  }
];

export const honorsAndAwards: Award[] = [
  {
    year: "2025",
    title: "Joy Zabala Memorial Technology in Action Article of the Year Award",
    organization: "Council for Exceptional Children / Journal of Special Education Technology",
    category: "paper_award",
    description: "For Hwang, Kendeou, & McMaster (2024) on fostering inference-making through video-based technology in young children with reading difficulties."
  },
  {
    year: "2025",
    title: "APA Editor's Choice Award",
    organization: "American Psychological Association / Journal of Educational Psychology",
    category: "paper_award",
    description: "For Cabell, Kim, White, Gale, Edwards, Hwang, Petscher, & Raines (2024) on content-rich literacy curricula impacts."
  },
  {
    year: "2024",
    title: "Nominated for Early Career Award",
    organization: "American Psychological Association (APA)",
    category: "national",
    description: "Nominated in recognition of distinguished scholarly contributions to educational psychology and early literacy science."
  },
  {
    year: "2024",
    title: "Nominated for Early Career Award",
    organization: "Literacy Research Association (LRA)",
    category: "national",
    description: "Recognizing outstanding early career publication record and methodological innovation in reading research."
  },
  {
    year: "2023",
    title: "Top Download Paper Recognition",
    organization: "Reading Research Quarterly / International Literacy Association",
    category: "paper_award",
    description: "For Hwang, McMaster, & Kendeou (2023) longitudinal study on directional relations between domain knowledge and reading."
  },
  {
    year: "2021",
    title: "President's Postdoctoral Fellowship",
    organization: "University of Minnesota",
    category: "fellowship",
    description: "Prestigious fellowship supporting exceptional scholars with high promise for tenured academic careers."
  },
  {
    year: "2019",
    title: "Finalist, Timothy & Cynthia Shanahan Outstanding Dissertation Award",
    organization: "International Literacy Association (ILA)",
    category: "national",
    description: "International competition recognizing top doctoral dissertations in literacy research."
  },
  {
    year: "2017",
    title: "Rackham One Term Dissertation Fellowship",
    organization: "University of Michigan",
    category: "fellowship"
  },
  {
    year: "2017",
    title: "Institute for Social Research-Rackham Summer Training Award",
    organization: "University of Michigan",
    category: "fellowship"
  },
  {
    year: "2013 - 2016",
    title: "School of Education Scholar Award",
    organization: "University of Michigan",
    category: "scholarship"
  }
];

export const researchProjects: ResearchProject[] = [
  {
    id: "elcii",
    acronym: "ELCII",
    title: "Efficacy of Early Language Comprehension Individualized Instruction",
    role: "Co-Principal Investigator",
    funder: "Institute of Education Sciences (IES), U.S. Department of Education",
    amount: "$3,799,419",
    period: "2022 - Present",
    status: "active",
    description: "A large-scale multi-site randomized controlled trial evaluating the efficacy of an individualized, computerized language comprehension instructional system (ELCII) for kindergarten students at high risk for subsequent reading disabilities. Investigates cognitive mediators including vocabulary acquisition, inference generation, and executive functioning.",
    methodology: ["Randomized Controlled Trial (RCT)", "Multilevel Growth Modeling", "Adaptive Computerized Instruction", "Child-Level Cognitive Assessment"],
    impact: "Provides personalized, data-driven reading comprehension interventions reaching hundreds of primary-grade classrooms across urban and suburban districts.",
    tags: ["Reading Comprehension", "Early Intervention", "Cognitive Assessment", "IES Grant"]
  },
  {
    id: "universal-inference-galaxy",
    acronym: "UIG",
    title: "Universal Inference Galaxy: Expanding Access to Evidence-Based Early Language Comprehension Instructional Technology",
    role: "Co-Investigator",
    funder: "Office of Special Education Programs (OSEP), U.S. Department of Education",
    amount: "$700,000",
    period: "2025 - Present",
    status: "active",
    description: "Extends the game-based Inference Galaxy instructional technology into universally accessible classroom environments for young learners with diverse sensory, motor, and linguistic profiles. Leverages animated narrative and expository videos to prompt higher-order inferencing without the decode hurdle.",
    methodology: ["Universal Design for Learning (UDL)", "Software Telemetry & Drift-Diffusion Modeling", "Video-Based Inference Paradigms", "Accessibility Standards"],
    impact: "Recipient of the 2025 Joy Zabala Memorial Technology in Action Article of the Year Award; deployed in emerging literacy and special education settings.",
    tags: ["Educational Technology", "Inference Making", "Accessibility", "OSEP Grant"]
  },
  {
    id: "clap-project",
    acronym: "CLAP",
    title: "Developing and Testing Content-Area Literacy and AI-Literacy Through Project-Based Learning",
    role: "Principal Investigator",
    funder: "Grant-In-Aid of Research, Artistry, and Scholarship, University of Minnesota",
    amount: "$51,000",
    period: "2026 - 2027",
    status: "active",
    description: "Investigates how elementary students cultivate both disciplinary literacy (science & social studies) and artificial intelligence literacy through guided project-based learning. Explores children's critical evaluation of AI-generated explanatory texts and digital inquiry workflows.",
    methodology: ["Project-Based Learning (PBL)", "Mixed-Methods Assessment", "Digital Literacy Evaluation", "Curricular Intervention"],
    impact: "Pioneering early elementary curriculum design uniting foundational reading comprehension with AI literacy and critical source verification.",
    tags: ["AI-Literacy", "Content-Area Reading", "Elementary STEM", "UMN GIA"]
  },
  {
    id: "rosco",
    acronym: "ROSCO",
    title: "Developing a Novel Measure for Readers' Orientation Toward Standards of Coherence",
    role: "Principal Investigator",
    funder: "Department of Educational Psychology, University of Minnesota (ICRG)",
    amount: "$3,000",
    period: "2022 - 2023",
    status: "completed",
    description: "Designed and psychometrically validated the ROSCO assessment, a self-report and scenario-based instrument measuring how readers monitor, detect, and restore conceptual coherence across informational and narrative texts.",
    methodology: ["Psychometric Scale Validation", "Confirmatory Factor Analysis (CFA)", "Structural Equation Modeling", "Standards of Coherence Theory"],
    impact: "Presented at Psychonomics and Society of Text & Discourse (ST&D) to international acclaim as a key cognitive diagnostic tool.",
    tags: ["Standards of Coherence", "Psychometrics", "Cognitive Psychology"]
  },
  {
    id: "raise-learning",
    acronym: "RAISE",
    title: "Read-Aloud Instruction for SciencE Learning (RAISE Learning) & Refutational Texts",
    role: "Principal Investigator",
    funder: "APA Division 15 & Department of Educational Psychology (ICRG)",
    amount: "$7,446 total",
    period: "2022 - 2024",
    status: "completed",
    description: "Examined the transformative impact of refutational read-aloud texts paired with visual aids to actively overturn entrenched naive science misconceptions (e.g., day/night cycles, seasonal change) in kindergarten and 1st-grade classrooms.",
    methodology: ["Experimental Classroom Pre-Post Design", "Knowledge Revision Scoring", "Discourse Analysis", "Refutational Text Engineering"],
    impact: "Demonstrated that refutational read-alouds significantly stimulate cognitive restructuring in children as young as age 5.",
    tags: ["Science Literacy", "Conceptual Change", "Refutation Texts", "APA Div 15"]
  },
  {
    id: "lateral-reading",
    acronym: "LATERAL",
    title: "Supporting Elementary Students' Evaluation of Online Sources Through Lateral Reading",
    role: "Principal Investigator",
    funder: "Department of Educational Psychology Indirect Cost Recovery Grant",
    amount: "$3,000",
    period: "2025 - Present",
    status: "active",
    description: "Investigating how 4th and 5th-grade students can be instructed in professional fact-checking strategies ('lateral reading') to evaluate online digital credibility and detect misinformation on scientific topics.",
    methodology: ["Screen-Recording & Eye-Tracking Protocol", "Credibility Rubric Validation", "Digital Reading Process Tracing"],
    impact: "Translating digital literacy theory into concrete pedagogical heuristics for primary-school media education.",
    tags: ["Digital Literacy", "Lateral Reading", "Online Credibility", "Misinformation"]
  }
];

export const publications: Publication[] = [
  {
    id: "pub-2026-ye",
    title: "Profiles of working memory and language skills in multilingual students",
    authors: ["Ye, S.", "Hwang, H."],
    year: "in press",
    journal: "Journal of Speech, Language, and Hearing Research",
    type: "in_press",
    topic: "multilingual_ell",
    abstract: "Investigates cognitive profiles of working memory components and oral language competencies among multilingual elementary school students, identifying distinct sub-profiles and their divergent pathways to reading achievement.",
    bibtex: `@article{yeProfilesWorkingMemory,
  author = {Ye, S. and Hwang, HyeJin},
  title = {Profiles of working memory and language skills in multilingual students},
  journal = {Journal of Speech, Language, and Hearing Research},
  year = {in press}
}`
  },
  {
    id: "pub-2026-choi",
    title: "Understanding individual and media differences in kindergarteners' video-based inference-making",
    authors: ["Choi, S.", "McMaster, K. L.", "Hwang, H.", "Kim, N.", "Reno, E. A.", "Fulsher, A.", "An, J.", "Guha, M.", "Slater, S.", "Mergen, R.", "Pizzigallo, E.", "Kendeou, P."],
    year: "in press",
    journal: "Learning and Individual Differences",
    type: "in_press",
    topic: "edtech_inferencing",
    abstract: "Explores how narrative media formats (video animation vs audio vs illustrated text) interact with kindergarten children's individual cognitive differences in working memory and vocabulary to support higher-order inference generation.",
    bibtex: `@article{choi2026inference,
  author = {Choi, S. and McMaster, K. L. and Hwang, H. and Kim, N. and Reno, E. A. and Fulsher, A. and An, J. and Guha, M. and Slater, S. and Mergen, R. and Pizzigallo, E. and Kendeou, P.},
  title = {Understanding individual and media differences in kindergarteners' video-based inference-making},
  journal = {Learning and Individual Differences},
  year = {in press}
}`
  },
  {
    id: "pub-2026-hwang-refutation",
    title: "The Effect of a Refutational Text on K-1 Students' Knowledge Revision on a Science Topic",
    authors: ["Hwang, H.", "Burger, K.", "Kim, J."],
    year: 2026,
    journal: "Discourse Processes (Submitted)",
    type: "under_review",
    topic: "knowledge_comprehension",
    abstract: "Reports empirical experimental evidence on how specifically structured refutational texts—which explicitly state common misconceptions before introducing scientific causal explanations—facilitate significant conceptual knowledge revision in kindergarten and first-grade students.",
    bibtex: `@article{hwang2026refutation,
  author = {Hwang, HyeJin and Burger, K. and Kim, J.},
  title = {The Effect of a Refutational Text on K-1 Students' Knowledge Revision on a Science Topic},
  journal = {Discourse Processes},
  year = {2026}
}`
  },
  {
    id: "pub-2025-hwang-bidirectional",
    title: "Bidirectional relations of reading with social studies and science domain knowledge among Korean students",
    authors: ["Hwang, H.", "Son, Y.", "Relyea, J. E.", "Jeon, H."],
    year: 2025,
    journal: "Reading and Writing: Interdisciplinary Journal",
    doi: "10.1007/s11145-025-10670-8",
    doiUrl: "https://doi.org/10.1007/s11145-025-10670-8",
    type: "journal",
    topic: "knowledge_comprehension",
    featured: true,
    abstract: "Using autoregressive cross-lagged modeling over elementary grade cohorts in South Korea, this paper demonstrates robust bidirectional transactional relations between domain knowledge in both social studies and science and reading comprehension ability.",
    bibtex: `@article{hwang2025bidirectional,
  author = {Hwang, HyeJin and Son, Y. and Relyea, J. E. and Jeon, H.},
  title = {Bidirectional relations of reading with social studies and science domain knowledge among Korean students},
  journal = {Reading and Writing},
  year = {2025},
  doi = {10.1007/s11145-025-10670-8}
}`
  },
  {
    id: "pub-2025-lee-digital",
    title: "The relations among teaching presence, social presence, and digital literacy in elementary students' online learning experience",
    authors: ["Lee, S.", "Hwang, H.", "Shin, Y.", "Kendeou, P."],
    year: 2025,
    journal: "British Journal of Educational Technology",
    doi: "10.1111/bjet.70004",
    doiUrl: "https://doi.org/10.1111/bjet.70004",
    type: "journal",
    topic: "edtech_inferencing",
    abstract: "Examines the structural interplay between pedagogical community-of-inquiry dimensions (teaching presence, social presence) and elementary children's self-regulated digital literacy competencies in virtual learning environments.",
    bibtex: `@article{lee2025presence,
  author = {Lee, S. and Hwang, HyeJin and Shin, Y. and Kendeou, P.},
  title = {The relations among teaching presence, social presence, and digital literacy in elementary students' online learning experience},
  journal = {British Journal of Educational Technology},
  year = {2025},
  doi = {10.1111/bjet.70004}
}`
  },
  {
    id: "pub-2025-relyea-transactional",
    title: "Transactional development of science and mathematics domain-specific knowledge and reading ability for elementary grades",
    authors: ["Relyea, J. E.", "Hwang, H."],
    year: 2025,
    journal: "Developmental Psychology",
    doi: "10.1037/dev0001858",
    doiUrl: "https://doi.org/10.1037/dev0001858",
    type: "journal",
    topic: "knowledge_comprehension",
    featured: true,
    abstract: "Tracks the reciprocal longitudinal pathways through which STEM domain knowledge and reading ability co-develop across elementary school, underscoring that content knowledge is both an engine and an outcome of reading growth.",
    bibtex: `@article{relyea2025developmental,
  author = {Relyea, J. E. and Hwang, HyeJin},
  title = {Transactional development of science and mathematics domain-specific knowledge and reading ability for elementary grades},
  journal = {Developmental Psychology},
  year = {2025},
  doi = {10.1037/dev0001858}
}`
  },
  {
    id: "pub-2024-cabell-contentrich",
    title: "Impact of a content-rich literacy curriculum on kindergarteners' vocabulary, listening comprehension, and content knowledge",
    authors: ["Cabell, S. Q.", "Kim, J.", "White, T. G.", "Gale, C.", "Edwards, A. A.", "Hwang, H.", "Petscher, Y.", "Raines, R. M."],
    year: 2024,
    journal: "Journal of Educational Psychology",
    type: "journal",
    topic: "knowledge_comprehension",
    featured: true,
    awards: ["Awarded APA Editor's Choice (2025)"],
    abstract: "In a cluster randomized trial across kindergarten classrooms, this study demonstrated that implementing a content-rich English language arts curriculum yielded statistically significant gains in academic vocabulary, listening comprehension, and deep science/social studies knowledge.",
    bibtex: `@article{cabell2024contentrich,
  author = {Cabell, S. Q. and Kim, J. and White, T. G. and Gale, C. and Edwards, A. A. and Hwang, HyeJin and Petscher, Y. and Raines, R. M.},
  title = {Impact of a content-rich literacy curriculum on kindergarteners' vocabulary, listening comprehension, and content knowledge},
  journal = {Journal of Educational Psychology},
  year = {2024},
  note = {Awarded APA Editor's Choice (2025)}
}`
  },
  {
    id: "pub-2024-hwang-zabala",
    title: "Fostering inference-making through video-based technology in young children with early reading difficulties",
    authors: ["Hwang, H.", "Kendeou, P.", "McMaster, K. L."],
    year: 2024,
    journal: "Journal of Special Education Technology",
    type: "journal",
    topic: "edtech_inferencing",
    featured: true,
    awards: ["Joy Zabala Memorial Technology in Action Article of the Year Award (2025)"],
    mediaCoverage: [
      {
        outlet: "The Informed SLP",
        url: "https://www.theinformedslp.com/review/Video-based-inferencing-instruction",
        title: "Clinical review: Video-based inferencing instruction for young readers"
      }
    ],
    abstract: "Investigates how computerized video-based inferencing tasks bypass the visual decoding barrier to scaffold causal inference-making and narrative comprehension in young children identified as at-risk for reading disabilities.",
    bibtex: `@article{hwang2024zabala,
  author = {Hwang, HyeJin and Kendeou, Panayiota and McMaster, Kristen L.},
  title = {Fostering inference-making through video-based technology in young children with early reading difficulties},
  journal = {Journal of Special Education Technology},
  year = {2024},
  note = {Awarded Joy Zabala Memorial Technology in Action Article of the Year (2025)}
}`
  },
  {
    id: "pub-2024-hwang-executive",
    title: "Indirect and direct contributions of executive functions to reading comprehension",
    authors: ["Hwang, H.", "Choi, S.", "Guha, M.", "Harsch, R.", "McMaster, K. L.", "Kendeou, P."],
    year: 2024,
    journal: "Journal of Experimental Child Psychology",
    type: "journal",
    topic: "cognition_methods",
    abstract: "Examines structural equation models isolating working memory, inhibitory control, and cognitive flexibility to delineate how executive functions contribute directly and indirectly through oral language to reading comprehension.",
    bibtex: `@article{hwang2024executive,
  author = {Hwang, HyeJin and Choi, S. and Guha, M. and Harsch, R. and McMaster, K. L. and Kendeou, P.},
  title = {Indirect and direct contributions of executive functions to reading comprehension},
  journal = {Journal of Experimental Child Psychology},
  year = {2024}
}`
  },
  {
    id: "pub-2023-hwang-readalouds",
    title: "Making the most of read-alouds to support primary-grade students' inference-making",
    authors: ["Hwang, H.", "Orcutt, E.", "Reno, E.", "Kim, J.", "Harsch, R.", "McMaster, K.", "Kendeou, P.", "Slater, S."],
    year: 2023,
    journal: "Reading Teacher",
    volume: "77(2)",
    pages: "146-155",
    doi: "10.1002/trtr.2226",
    doiUrl: "https://doi.org/10.1002/trtr.2226",
    type: "journal",
    topic: "knowledge_comprehension",
    abstract: "Translates cognitive science principles of inferencing into practical classroom instructional routines for interactive read-alouds in K-2 classrooms.",
    bibtex: `@article{hwang2023readalouds,
  author = {Hwang, HyeJin and Orcutt, E. and Reno, E. and Kim, J. and Harsch, R. and McMaster, K. and Kendeou, P. and Slater, S.},
  title = {Making the most of read-alouds to support primary-grade students' inference-making},
  journal = {The Reading Teacher},
  volume = {77},
  number = {2},
  pages = {146--155},
  year = {2023},
  doi = {10.1002/trtr.2226}
}`
  },
  {
    id: "pub-2023-kim-covid",
    title: "Supporting inference-making during COVID-19 through individualized instruction",
    authors: ["Kim, J.", "Burey, J.", "Hwang, H.", "Kendeou, P.", "McMaster, K."],
    year: 2023,
    journal: "Reading and Writing: Interdisciplinary Journal",
    volume: "36",
    pages: "467-490",
    doi: "10.1007/s11145-022-10391-2",
    doiUrl: "https://doi.org/10.1007/s11145-022-10391-2",
    type: "journal",
    topic: "edtech_inferencing",
    abstract: "Evaluates the efficacy and resilience of adaptive computerized inference instruction delivered during remote learning emergency conditions.",
    bibtex: `@article{kim2023covid,
  author = {Kim, J. and Burey, J. and Hwang, HyeJin and Kendeou, P. and McMaster, K.},
  title = {Supporting inference-making during COVID-19 through individualized instruction},
  journal = {Reading and Writing},
  volume = {36},
  pages = {467--490},
  year = {2023},
  doi = {10.1007/s11145-022-10391-2}
}`
  },
  {
    id: "pub-2023-hwang-sysreview",
    title: "Does cultivating knowledge in literacy instruction support comprehension and vocabulary development in the elementary years? A systematic review",
    authors: ["Hwang, H.", "Cabell, S. Q.", "Joyner, R."],
    year: 2023,
    journal: "Reading Psychology",
    volume: "44(2)",
    pages: "145-174",
    doi: "10.1080/02702711.2022.2141397",
    doiUrl: "https://doi.org/10.1080/02702711.2022.2141397",
    type: "journal",
    topic: "knowledge_comprehension",
    mediaCoverage: [
      {
        outlet: "Education Week",
        url: "https://www.edweek.org/teaching-learning/reading-comprehension-hinges-on-building-knowledge-new-curricula-aim-to-help/2024/01",
        title: "Reading comprehension hinges on building knowledge: New curricula aim to help"
      }
    ],
    abstract: "Synthesizes comprehensive empirical studies examining whether content-knowledge-building literacy programs generate measurable transfer to general standardized reading comprehension and vocabulary growth in grades K-5.",
    bibtex: `@article{hwang2023systematic,
  author = {Hwang, HyeJin and Cabell, Sonia Q. and Joyner, R.},
  title = {Does cultivating knowledge in literacy instruction support comprehension and vocabulary development in the elementary years? A systematic review},
  journal = {Reading Psychology},
  volume = {44},
  number = {2},
  pages = {145--174},
  year = {2023},
  doi = {10.1080/02702711.2022.2141397}
}`
  },
  {
    id: "pub-2023-hwang-rrq-longitudinal",
    title: "A longitudinal investigation of directional relations between domain knowledge and reading in the elementary years",
    authors: ["Hwang, H.", "McMaster, K.", "Kendeou, P."],
    year: 2023,
    journal: "Reading Research Quarterly",
    volume: "58(1)",
    pages: "59-77",
    doi: "10.1002/rrq.481",
    doiUrl: "https://doi.org/10.1002/rrq.481",
    type: "journal",
    topic: "knowledge_comprehension",
    featured: true,
    awards: ["Received Top Download Paper recognition in Reading Research Quarterly"],
    mediaCoverage: [
      {
        outlet: "To The Classroom Podcast (Episode 11)",
        url: "https://podcasts.apple.com/us/podcast/ep-11-dr-hyejin-hwang/id1671184358?i=1000611256879",
        title: "Guest speaker: Bidirectional Relationship of Knowledge and Comprehension"
      }
    ],
    abstract: "This landmark longitudinal study investigated whether science and social studies domain knowledge predicts subsequent reading comprehension, and vice versa. Findings confirmed robust reciprocal directional effects from early elementary through upper elementary grades.",
    bibtex: `@article{hwang2023rrq,
  author = {Hwang, HyeJin and McMaster, Kristen and Kendeou, Panayiota},
  title = {A longitudinal investigation of directional relations between domain knowledge and reading in the elementary years},
  journal = {Reading Research Quarterly},
  volume = {58},
  number = {1},
  pages = {59--77},
  year = {2023},
  doi = {10.1002/rrq.481}
}`
  },
  {
    id: "pub-2023-hadley-practices",
    title: "Purposes, places, and participants: A systematic review of teacher language practices and child oral language outcomes in early childhood classrooms",
    authors: ["Hadley, E. B.", "Barnes, E. M.", "Hwang, H."],
    year: 2023,
    journal: "Early Education and Development",
    volume: "34(4)",
    pages: "862-884",
    doi: "10.1080/10409289.2022.2074203",
    doiUrl: "https://doi.org/10.1080/10409289.2022.2074203",
    type: "journal",
    topic: "multilingual_ell",
    abstract: "Critically reviews preschool teacher communicative routines and discursive turns, identifying specific linguistic inputs that reliably accelerate child receptive and expressive language growth.",
    bibtex: `@article{hadley2023practices,
  author = {Hadley, E. B. and Barnes, E. M. and Hwang, HyeJin},
  title = {Purposes, places, and participants: A systematic review of teacher language practices and child oral language outcomes in early childhood classrooms},
  journal = {Early Education and Development},
  volume = {34},
  number = {4},
  pages = {862--884},
  year = {2023},
  doi = {10.1080/10409289.2022.2074203}
}`
  },
  {
    id: "pub-2022-hwang-ssr-meta",
    title: "Effects of integrated literacy and content-area instruction on comprehension and vocabulary in the elementary years: A meta-analysis",
    authors: ["Hwang, H.", "Cabell, S. Q.", "Joyner, R."],
    year: 2022,
    journal: "Scientific Studies of Reading",
    doi: "10.1080/10888438.2021.1954005",
    doiUrl: "https://doi.org/10.1080/10888438.2021.1954005",
    type: "journal",
    topic: "knowledge_comprehension",
    featured: true,
    mediaCoverage: [
      {
        outlet: "Forbes (Natalie Wexler)",
        url: "https://www.forbes.com/sites/nataliewexler/2021/09/08/new-data-shows-building-knowledge-can-boost-reading-comprehension/?sh=fc6db487dd9c",
        title: "New data shows building knowledge can boost reading comprehension"
      },
      {
        outlet: "Education Week",
        url: "https://www.edweek.org/teaching-learning/what-is-background-knowledge-and-how-does-it-fit-into-the-science-of-reading/2023/01",
        title: "What is background knowledge and how does it fit into the science of reading?"
      },
      {
        outlet: "Language Magazine",
        url: "https://www.languagemagazine.com/2023/02/27/fostering-language-and-literacy-development/",
        title: "Fostering language and literacy development"
      },
      {
        outlet: "ASCD",
        url: "https://www.ascd.org/el/articles/developing-knowledgeable-readers",
        title: "Developing knowledgeable readers"
      }
    ],
    policyCitations: [
      {
        organization: "National Council for Curriculum and Assessment (NCCA, Ireland)",
        url: "https://ncca.ie/media/6371/weaving-the-literature-on-integration-pedagogy-and-assessment.pdf"
      }
    ],
    abstract: "A landmark meta-analysis showing that integrating literacy instruction with content-area learning (such as science and social studies) produces statistically significant positive effects on both reading comprehension and vocabulary in elementary school children.",
    bibtex: `@article{hwang2022ssr,
  author = {Hwang, HyeJin and Cabell, Sonia Q. and Joyner, R.},
  title = {Effects of integrated literacy and content-area instruction on comprehension and vocabulary in the elementary years: A meta-analysis},
  journal = {Scientific Studies of Reading},
  year = {2022},
  doi = {10.1080/10888438.2021.1954005}
}`
  },
  {
    id: "pub-2022-cabell-growth",
    title: "Rate of growth of preschool-age children's oral language and decoding skills predicts beginning writing ability",
    authors: ["Cabell, S. Q.", "Gerde, H.", "Hwang, H.", "Bowles, R.", "Skibbe, L.", "Piasta, S.", "Justice, L. M."],
    year: 2022,
    journal: "Early Education and Development",
    doi: "10.1080/10409289.2021.1952390",
    doiUrl: "https://doi.org/10.1080/10409289.2021.1952390",
    type: "journal",
    topic: "multilingual_ell",
    bibtex: `@article{cabell2022writing,
  author = {Cabell, S. Q. and Gerde, H. and Hwang, HyeJin and Bowles, R. and Skibbe, L. and Piasta, S. and Justice, L. M.},
  title = {Rate of growth of preschool-age children's oral language and decoding skills predicts beginning writing ability},
  journal = {Early Education and Development},
  year = {2022},
  doi = {10.1080/10409289.2021.1952390}
}`
  },
  {
    id: "pub-2021-hwang-latentprofiles",
    title: "Latent profiles of vocabulary and domain knowledge and their relation to listening comprehension in kindergarten",
    authors: ["Hwang, H.", "Cabell, S. Q."],
    year: 2021,
    journal: "Journal of Research in Reading",
    volume: "44",
    pages: "636-653",
    type: "journal",
    topic: "cognition_methods",
    abstract: "Uses Latent Profile Analysis (LPA) to identify distinct sub-groups of kindergarteners based on their general vocabulary and domain-specific knowledge, demonstrating differing configurations of risk for listening comprehension difficulties.",
    bibtex: `@article{hwang2021latent,
  author = {Hwang, HyeJin and Cabell, Sonia Q.},
  title = {Latent profiles of vocabulary and domain knowledge and their relation to listening comprehension in kindergarten},
  journal = {Journal of Research in Reading},
  volume = {44},
  pages = {636--653},
  year = {2021}
}`
  },
  {
    id: "pub-2021-cho-epirls",
    title: "Predicting fourth grade digital reading comprehension: A secondary data analysis of (e)PIRLS 2016",
    authors: ["Cho, B.", "Hwang, H.", "Jang, B."],
    year: 2021,
    journal: "International Journal of Educational Research",
    doi: "10.1016/j.ijer.2020.101696",
    doiUrl: "https://doi.org/10.1016/j.ijer.2020.101696",
    type: "journal",
    topic: "edtech_inferencing",
    abstract: "Analyzed international (e)PIRLS assessment data to model how online informational reading navigation patterns and school digital resources predict fourth-grade digital reading comprehension.",
    bibtex: `@article{cho2021epirls,
  author = {Cho, B. and Hwang, HyeJin and Jang, B.},
  title = {Predicting fourth grade digital reading comprehension: A secondary data analysis of (e)PIRLS 2016},
  journal = {International Journal of Educational Research},
  year = {2021},
  doi = {10.1016/j.ijer.2020.101696}
}`
  },
  {
    id: "pub-2020-cabell-rrq-content",
    title: "Building content knowledge to boost comprehension in the primary grades",
    authors: ["Cabell, S. Q.", "Hwang, H."],
    year: 2020,
    journal: "Reading Research Quarterly",
    volume: "55(S1)",
    pages: "S99-S107",
    type: "journal",
    topic: "knowledge_comprehension",
    featured: true,
    awards: ["Selected by National Council on Teacher Quality (NCTQ) as 1 of 352 exemplary reading resources"],
    mediaCoverage: [
      {
        outlet: "Forbes (Natalie Wexler)",
        url: "https://www.forbes.com/sites/nataliewexler/2021/04/01/yes-there-is-evidence-that-building-knowledge-boosts-reading-comprehension/?sh=4297a400a412",
        title: "Yes, there is evidence that building knowledge boosts reading comprehension"
      }
    ],
    bibtex: `@article{cabell2020building,
  author = {Cabell, Sonia Q. and Hwang, HyeJin},
  title = {Building content knowledge to boost comprehension in the primary grades},
  journal = {Reading Research Quarterly},
  volume = {55},
  number = {S1},
  pages = {S99--S107},
  year = {2020}
}`
  },
  {
    id: "pub-2020-hwang-esj-growth",
    title: "Early general knowledge predicts reading growth in first and second language throughout the elementary years",
    authors: ["Hwang, H."],
    year: 2020,
    journal: "Elementary School Journal",
    volume: "121(1)",
    pages: "154-178",
    type: "journal",
    topic: "multilingual_ell",
    abstract: "Using the Early Childhood Longitudinal Study (ECLS-K), this study modeled the long-term predictive power of kindergarten general science and social studies knowledge on reading growth across six years for both English monolingual and English learner students.",
    bibtex: `@article{hwang2020esj,
  author = {Hwang, HyeJin},
  title = {Early general knowledge predicts reading growth in first and second language throughout the elementary years},
  journal = {The Elementary School Journal},
  volume = {121},
  number = {1},
  pages = {154--178},
  year = {2020}
}`
  },
  {
    id: "pub-2020-hwang-duke-aeraopen",
    title: "Content counts and motivation matters: Reading comprehension in third-grade students who are English learners",
    authors: ["Hwang, H.", "Duke, N. K."],
    year: 2020,
    journal: "AERA Open",
    volume: "6(1)",
    pages: "1-17",
    type: "journal",
    topic: "multilingual_ell",
    awards: ["Selected by National Council on Teacher Quality (NCTQ) as 1 of 352 exemplary reading resources"],
    abstract: "Examines how prior topic knowledge and reading motivation interact with word-reading fluency to explain reading comprehension performance among third-grade English learners.",
    bibtex: `@article{hwang2020aeraopen,
  author = {Hwang, HyeJin and Duke, Nell K.},
  title = {Content counts and motivation matters: Reading comprehension in third-grade students who are English learners},
  journal = {AERA Open},
  volume = {6},
  number = {1},
  pages = {1--17},
  year = {2020}
}`
  },
  {
    id: "pub-2019-hwang-sciencedomain",
    title: "The role of science domain knowledge and reading motivation in predicting informational and narrative reading comprehension in L1 and L2: An international study",
    authors: ["Hwang, H."],
    year: 2019,
    journal: "Learning and Individual Differences",
    volume: "76",
    pages: "1-11",
    type: "journal",
    topic: "knowledge_comprehension",
    bibtex: `@article{hwang2019learning,
  author = {Hwang, HyeJin},
  title = {The role of science domain knowledge and reading motivation in predicting informational and narrative reading comprehension in L1 and L2: An international study},
  journal = {Learning and Individual Differences},
  volume = {76},
  pages = {1--11},
  year = {2019}
}`
  },
  {
    id: "pub-2016-cervetti-conceptual",
    title: "Conceptual coherence, comprehension, and vocabulary acquisition: A knowledge effect?",
    authors: ["Cervetti, G. N.", "Wright, T. S.", "Hwang, H."],
    year: 2016,
    journal: "Reading and Writing: Interdisciplinary Journal",
    volume: "29(1)",
    pages: "1-19",
    type: "journal",
    topic: "knowledge_comprehension",
    mediaCoverage: [
      {
        outlet: "American Federation of Teachers (AFT)",
        url: "https://www.aft.org/ae/summer2020/wexler",
        title: "How building knowledge boosts reading: AFT American Educator"
      }
    ],
    policyCitations: [
      {
        organization: "Analysis & Policy Observatory (APO Australia)",
        url: "https://apo.org.au/sites/default/files/resource-files/2023-03/apo-nid322029.pdf"
      }
    ],
    bibtex: `@article{cervetti2016coherence,
  author = {Cervetti, Gina N. and Wright, Tanya S. and Hwang, HyeJin},
  title = {Conceptual coherence, comprehension, and vocabulary acquisition: A knowledge effect?},
  journal = {Reading and Writing},
  volume = {29},
  number = {1},
  pages = {1--19},
  year = {2016}
}`
  },
  {
    id: "pub-chapter-cabell-guilford",
    title: "Leveraging content-rich English Language Arts instruction in the early grades to improve children's language comprehension",
    authors: ["Cabell, S. Q.", "Hwang, H."],
    year: 2023,
    journal: "Handbook of Early Literacy Research (1st ed., pp. 175-185)",
    volume: "Guilford Press",
    type: "book_chapter",
    topic: "knowledge_comprehension",
    bibtex: `@incollection{cabell2023handbook,
  author = {Cabell, Sonia Q. and Hwang, HyeJin},
  title = {Leveraging content-rich English Language Arts instruction in the early grades to improve children's language comprehension},
  booktitle = {Handbook of Early Literacy Research},
  editor = {Cabell, S. Q. and Neuman, S. B. and Terry, N. P.},
  pages = {175--185},
  publisher = {Guilford Press},
  year = {2023}
}`
  },
  {
    id: "pub-chapter-wright-comprehension",
    title: "Supporting text comprehension: The importance of oral language and knowledge development for young children",
    authors: ["Wright, T.", "Cabell, S. Q.", "Hwang, H."],
    year: "in press",
    journal: "Handbook of Research on Reading Comprehension (3rd ed.)",
    type: "book_chapter",
    topic: "knowledge_comprehension",
    bibtex: `@incollection{wrightReadingComprehension3rd,
  author = {Wright, Tanya and Cabell, Sonia Q. and Hwang, HyeJin},
  title = {Supporting text comprehension: The importance of oral language and knowledge development for young children},
  booktitle = {Handbook of Research on Reading Comprehension (3rd edition)},
  year = {in press}
}`
  }
];

export const podcastEpisodes = [
  {
    title: "Knowledge Building Can't Wait",
    show: "Science of Reading: The Podcast (Amplify)",
    host: "Susan Lambert",
    season: "Season 8, Episode 9",
    downloads: "20,000+ Downloads",
    description: "Dr. HyeJin Hwang discusses groundbreaking meta-analyses and longitudinal evidence showing that waiting until 3rd grade to build content knowledge is a missed window. She details how kindergarten and 1st-grade children thrive when science and social studies are integrated into the literacy block.",
    url: "https://podcasts.apple.com/us/podcast/s8-e9-knowledge-building-cant-wait-with-hyejin-hwang/id1483513974?i=1000643627361"
  },
  {
    title: "Bidirectional Relationship of Knowledge and Comprehension in Mono and Multilingual Learners",
    show: "To The Classroom Podcast",
    host: "Jennifer Serravallo",
    season: "Episode 11",
    description: "Dr. Hwang breaks down her Reading Research Quarterly longitudinal study, explaining how domain knowledge fuels reading comprehension, which in turn unlocks broader knowledge acquisition—and how this virtuous cycle functions for dual-language and multilingual learners.",
    url: "https://podcasts.apple.com/us/podcast/ep-11-dr-hyejin-hwang/id1671184358?i=1000611256879"
  }
];

export const skillsAndMethods = [
  {
    category: "Substantive Research Expertise",
    items: [
      { name: "Reading Comprehension Processes", detail: "Investigating lower- and higher-level cognitive components under construction-integration and landscape models." },
      { name: "Content-Area & Domain Knowledge", detail: "Bidirectional relations of science and social studies schemas with decoding and vocabulary." },
      { name: "Early Childhood Inferencing", detail: "Scaffolding causal, elaborative, and predictive inference generation in emerging and at-risk readers." },
      { name: "Refutational Text Design", detail: "Structuring informational text to foster cognitive conflict and science knowledge revision in K-1." },
      { name: "Multilingual & English Learners (EL)", detail: "Cross-linguistic transfer, lexical quality, and reading motivation in linguistically diverse populations." },
      { name: "Executive Functions & Literacy", detail: "Delineating unique contributions of working memory, inhibitory control, and cognitive flexibility." }
    ]
  },
  {
    category: "Advanced Quantitative Methodologies",
    items: [
      { name: "Meta-Analytic Modeling", detail: "Synthesizing effect sizes across complex curricular and instructional literacy interventions." },
      { name: "Structural Equation Modeling (SEM)", detail: "Latent variable growth curves, autoregressive cross-lagged panel models, and mediation analysis." },
      { name: "Latent Profile Analysis (LPA)", detail: "Person-centered classification of reader subtypes, vocabulary depth, and domain knowledge profiles." },
      { name: "Item-Level Causal Modeling", detail: "Examining fine-grained curriculum impact across item difficulty gradients and psychometric strata." },
      { name: "Drift-Diffusion Modeling (DDM)", detail: "Mathematical modeling of inference decision efficiency and cognitive processing dynamics." },
      { name: "Secondary National Data Analysis", detail: "Analyzing large-scale longitudinal datasets including ECLS-K, (e)PIRLS 2016, and NAEP." }
    ]
  },
  {
    category: "Intervention Technology & Measurement",
    items: [
      { name: "Adaptive Computerized Systems (ELCII)", detail: "Algorithmically tailoring reading comprehension scaffolds to real-time student response data." },
      { name: "Video-Based Inference Galaxy", detail: "Developing gamified, animated narrative interfaces that circumvent decoding limitations." },
      { name: "ROSCO Assessment Instrument", detail: "Validated diagnostic tool for measuring readers' internal standards of coherence." },
      { name: "Classroom Read-Aloud Paradigms", detail: "Designing teacher conversational turn protocols and interactive question taxonomies." }
    ]
  }
];

export const teachingCourses = [
  {
    code: "EPSY 8116",
    title: "Reading for Meaning: Cognitive Processes in the Comprehension of Texts",
    level: "Graduate / Doctoral Seminar",
    institution: "University of Minnesota",
    schedule: "Spring 2028",
    description: "Advanced doctoral seminar examining contemporary cognitive, developmental, and psycholinguistic theories of reading comprehension, standards of coherence, and technological affordances."
  },
  {
    code: "EPSY 5001",
    title: "Learning, Cognition, and Assessment (for Preservice Teachers)",
    level: "Graduate / Teacher Preparation",
    institution: "University of Minnesota",
    schedule: "Spring 2025, Fall 2025 - Spring 2026, Spring 2027",
    format: "Online & In-Person cohorts",
    description: "Foundational course grounding future educators in cognitive principles of student learning, memory architecture, formative assessment design, and culturally sustaining literacy pedagogy."
  },
  {
    code: "EPSY 5216",
    title: "Introduction to Research in Educational Psychology and Human Development",
    level: "Graduate",
    institution: "University of Minnesota",
    schedule: "Fall 2023, Fall 2025",
    role: "Syllabus Developer & Instructor",
    description: "Comprehensive introduction to quantitative, qualitative, and mixed-methods research designs, statistical reasoning, and empirical critique in educational sciences."
  }
];

export const advisingAndMentoring = {
  postdocs: [
    { name: "Dr. Seohyeon Choi", focus: "Inference-making in digital video media, lexical quality in bilingual students" },
    { name: "Dr. Jechun An", focus: "Drift-diffusion modeling of reading efficiency, cognitive processes in early comprehension" },
    { name: "Dr. Heeryung Choi", focus: "Educational technology integration, learning analytics in early reading" }
  ],
  doctoralAdvisees: [
    { name: "YooJeong Son", focus: "Lateral reading in digital environments, refutational text read-alouds" },
    { name: "Yulu Sun", focus: "Working memory profiles and cognitive interventions in elementary grades" }
  ],
  mastersAdvisees: [
    { name: "Jianjian Wu", focus: "Content-area literacy and project-based learning" },
    { name: "Che Thao", focus: "Early language comprehension and reading diagnostics" }
  ],
  alumniAndMentees: [
    { name: "Dr. Jasmine Kim", placement: "Permanent Researcher at the OECD (Organization for Economic Co-operation and Development)" },
    { name: "Dr. Hyangeun Ji", placement: "Assistant Professor at University of North Texas" },
    { name: "Elsie Liu", placement: "Doctoral Student at Michigan State University" },
    { name: "Kristin Burger", placement: "Doctoral Thesis: Analyzing Read-Aloud of Refutational Text (2024)" },
    { name: "Bess Casey Wilke", placement: "Doctoral Thesis: Kindergarten Reading Profiles and Comprehension Instruction (2024)" }
  ]
};

export const editorialAndService = [
  {
    role: "Editorial Board Member",
    journals: [
      "Learning and Individual Differences (2026 - Present)",
      "Journal of Educational Psychology (2021 - 2026)"
    ]
  },
  {
    role: "Ad-Hoc Guest Reviewer",
    journals: [
      "Reading Research Quarterly",
      "Scientific Studies of Reading",
      "American Educational Research Journal (AERJ)",
      "Journal of Experimental Child Psychology",
      "British Journal of Educational Technology",
      "Discourse Processes",
      "The Reading Teacher",
      "Journal of Literacy Research",
      "Reading and Writing: Interdisciplinary Journal",
      "Cognitive Development"
    ]
  },
  {
    role: "Conference Reviewer & Association Service",
    organizations: [
      "Literacy Research Association (LRA) Annual Meeting Reviewer",
      "Society for Research on Educational Effectiveness (SREE) Reviewer",
      "Korean Edutech/Learning Sciences Researcher Network (KELS) Faculty Team Mentor (16+ early-career researchers)"
    ]
  }
];
