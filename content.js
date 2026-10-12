/* =====================================================================
   CONTENT — edit only this section.
   ===================================================================== */

const SITE = {
  name: "Soonho Kwon",
  names: "권순호 · 權純湖",
  photo: "profile.webp",
  email: "soonho [at] gatech [dot] edu",
  cv: "/cv/",
  links: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=R15_L1UAAAAJ&hl=en" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/soonhokwon/" }
  ],
  // About page: plain paragraphs. The research-area paragraphs are generated from TOPICS below.
  intro: `I am a Human-Computer Interaction (HCI) and design researcher, currently pursuing a Ph.D. in
    <a href="https://www.cc.gatech.edu/degree-programs/phd-human-centered-computing" target="_blank" rel="noopener">Human-Centered Computing</a>
    at the Georgia Institute of Technology. I am a member of the
    <a href="http://esc-lab.org" target="_blank" rel="noopener">ESC Lab</a>, advised by
    <a href="https://shaowenbardzell.com" target="_blank" rel="noopener">Shaowen Bardzell</a>. My research spans the following areas:`,
  outro: [
    `In conducting my research, I do not approach technology as a means of “solving problems.” My work treats technology
     as a way of allowing people the possibility to carve out authentic ways of being within systems that are difficult to
     escape or transform (be it a social structure, technical systems, etc.), while critically attending to how
     technologies may exacerbate existing issues at times.`,
    `Grounded in critical, feminist, design, and qualitative approaches, my work has been presented and recognized at
     venues such as Ars Electronica, CHI, CSCW, and DIS, and has been supported by NSF-funded research.`
  ]
};

/* Topics.
   - name: shown in the left rail and on the About page
   - short: the keyword shown on each publication's chip
   - blurb: one sentence for the About page
   - narrative: paragraphs at the top of the topic page (HTML allowed, e.g. links to #paper-... or #project-...) */
const TOPICS = [
  {
    id: "korean-queer", name: "Korean Queer Community", short: "Korean Queer", color: "--t2",
    blurb: "I collaborate with Korean LGBTQ+ organizations to explore how queer stakeholders “make do” under hostile socio-technical conditions through and alongside technology, while also envisioning technologies that support such endurance.",
    narrative: [
      `Growing up as a queer person in Korea, I vividly remember how deeply various social technologies shaped my queer identity and my social realities. Yet many of the technologies that shape the lives of queer people in Korea are designed and analyzed in Western contexts.`,
      `My work asks how Korean queer people, and the people connected to them, become entangled with these technologies. I collaborate with Korean LGBTQ+ organizations, including <a href="https://www.pflagkorea.org" target="_blank" rel="noopener">PFLAG Korea</a>, a support group for parents of queer children, and <a href="https://www.ddingdong.kr" target="_blank" rel="noopener">DDing Dong</a>, a support center for LGBTQ+ youth. As a scholar, I see it as my mission to carry the stories that Korean queer people and those around them want to tell the world.`,
      `Through this work, I have asked <a href="#paper-cscw26-parents">how parents of LGBTQ+ children navigate online misinformation</a>; <a href="#project-tethered-beings">how queer youths, tethered to situations they cannot escape, find breathing holes</a>; <a href="#project-rainbow-school">what futures we can imagine when a utopian school, dreamed up with queer youth, is built in a virtual world</a>; and <a href="#project-queer-legacy">what a platform for death and commemoration could look like for queer people who cannot form a “normative” family</a>.`
    ]
  },
  {
    id: "spiritual-ai", name: "Human-AI Relationship through Spirituality", short: "Spiritual AI", color: "--t1",
    blurb: "By situating AI in domains where conventional metrics such as efficiency and accuracy are less central, I critically examine and design for how human agency and authenticity can be sustained in human-AI interaction.",
    narrative: [
      `Have you ever noticed that the way people treat AI agents resembles the way we treat religion or fortunetelling? To make sense of an uncertain present and future, and to find peace, we rely on beings we cannot fully comprehend.`,
      `By juxtaposing human-AI interaction with spiritual practices, I critically ask: what kind of relationship do we form with AI? And what is good AI? Can we really say that fast, accurate, and efficient AI is “better” AI?`,
      `In our <a href="#paper-chi24-spiritual-ai">CHI 2024 poster</a> and <a href="#paper-dis26-prayer">DIS 2026 full paper</a>, we deliberately designed AI that “helps” people pray in provocative, uncomfortable forms, so that people could reflect on <em>why</em> it feels uncomfortable. Through that question, we argue that some experiences are meaningful only when we live them authentically ourselves, rather than having AI live them on our behalf.`,
      `Similarly, <a href="#paper-ai-fortuneteller">AI Fortuneteller</a>, which received an Honorary Mention at Prix Ars Electronica 2024, shows a mudang, a Korean shaman, giving advice while posing as an AI. Whether the source of advice is scientific or not, the agency and responsibility to make the decision remain ours.`
    ]
  },
  {
    id: "beyond-western", name: "Beyond-Western Epistemologies in HCI", short: "Beyond-Western", color: "--t3",
    blurb: "I draw on Korean and other non-Western ways of knowing to question the assumptions built into HCI theory and design.",
    narrative: [
      `When I came to the U.S. and began working in queer HCI, I found queer theory surprisingly hard. It was supposed to be about people who share my identity, yet it felt difficult to grasp and far removed from my own life. That made me wonder: was it because these theories came out of America?`,
      `Thinking this way, I began to notice how many of HCI's defaults run on Western standards that are often rationalist, pragmatic, and binary. To question these defaults critically, I have been <a href="#project-tethered-beings">drawing new queer theory from Korean field sites rather than from Western theory</a>; <a href="#paper-dis26-workshop-mth">revisiting what more-than-human HCI calls the post-human or the relational through Daoist and Indigenous thought</a>; <a href="#paper-ai-fortuneteller">imagining AI through Korean traditional faith</a>; and <a href="#project-daoist-death">redesigning death and commemorative technologies around how Daoism and Buddhism understand death</a>.`,
      `Ultimately, through this work, I hope to add to the growing body of post-colonial and beyond-Western approaches in HCI.`
    ]
  },
  {
    id: "death", name: "Death and Commemoration", short: "Death and Computing", color: "--t4",
    blurb: "I investigate and design for non-normative experiences of death, such as dying young or without family support (e.g., among queer individuals in Korea), focusing on digital legacy and end-of-life preparation.",
    narrative: [
      `I first became interested in death and technology during the COVID-19 pandemic. As funerals moved online, I came across a memorial website that displayed a portrait of the deceased with an interface for dragging and dropping chrysanthemums in front of it. It felt deeply wrong to me, and that made me curious: why did it feel so wrong?`,
      `My <a href="#paper-interact21-instagram">first project, presented at INTERACT 2021</a>, explored this question. Why do we commemorate someone? What is the essence of commemoration, and what would it take to realize that essence online? Building on these questions, we designed what social media might look like as a space for commemoration.`,
      `Along the way, I realized that technologies for death preparation and commemoration tend to assume a single “normative death”: someone with a heteronormative family who dies of old age or illness. In <a href="#paper-chi25-digital-legacy">my CHI 2025 paper</a>, I designed a death-preparation platform for untimely death at a young age. Now I am designing <a href="#project-queer-legacy">a death-preparation platform for Korean LGBTQ+ people who cannot form a heteronormative family</a>, as well as <a href="#project-daoist-death">death-preparation and commemoration platforms grounded in Daoist and Buddhist thought, which treat death as part of life</a>.`
    ]
  },
  {
    id: "policy", name: "Policy and Civic Engagement", short: "Policy and Civic Engagement", color: "--t5",
    blurb: "I examine how people navigate data- and technology-driven policies and civic processes to maintain and protect their ways of being.",
    narrative: [
      `In all honesty, I did not start this line of work myself; these projects began as research assistantships and collaborations. Yet as I worked on them, a theme emerged. I came to feel that, as an HCI researcher, I have a responsibility to understand the realities in which technology is inevitably entangled with policy and civic participation. Along the way, I found myself resisting techno-solutionist narratives and bringing erased realities to the center.`,
      `In <a href="#paper-cscw26-fda">our CSCW 2026 paper</a>, we respected what the FDA hopes to achieve through data-driven governance, while asking who does the data work it requires, whose realities are erased in the process, and what practical limits stand in the way.`,
      `In <a href="#paper-tochi-martial-law">our TOCHI paper on the 2024 martial law crisis in South Korea</a>, we describe how important technology was to civic engagement in resisting martial law, but also that technology was not everything. It worked alongside Korean citizens' everyday digital literacy, their critical engagement with technical infrastructure, and their past experiences of democratization.`
    ]
  }
];

/* Ongoing projects. Shown below publications on the Publications and topic pages. */
const PROJECTS = [
  {
    id: "tethered-beings",
    title: "Tethered Beings in Search of Breathing Holes: Technology as Temporary Havens for Korean LGBTQ+ Youths",
    authors: ["Soonho Kwon", "Catherine Wieczorek", "Seunghee Yoo", "Sylvia Janicki", "Shaowen Bardzell"],
    venue: "In collaboration with DDing Dong, a support center for LGBTQ+ youth in Korea",
    topics: ["korean-queer", "beyond-western"],
    summary: "Korean queer youth live within conditions they cannot easily escape, alter, or contest: schools where queerness is absent or treated as debatable, homes that call for vigilance rather than comfort, and queer communities built around adults. Working with DDing Dong, we gathered 148 stories from queer youth aged 13–24 through story prompts released every two weeks, then held a co-reading and co-design workshop with five young adults.\n\nWe describe these youths as tethered beings: people who live within conditions they cannot readily disentangle from. Within those tethers they carve out breathing holes, temporary spaces, practices, and relationships, often through dating apps and online communities, that make the present more bearable without dissolving it. We argue for designing technologies as breathing holes that respect tethers rather than trying to sever them.",
    links: {}
  },
  {
    id: "rainbow-school",
    title: "Rainbow School: Virtual World-Building as Feminist Utopian Practice with Korean Queer Youth",
    authors: ["Soonho Kwon", "Yuting Peng", "Catherine Wieczorek", "Seunghee Yoo", "Da Hye Yun", "Jieun Song", "Shaowen Bardzell"],
    venue: "In collaboration with DDing Dong, a support center for LGBTQ+ youth in Korea",
    topics: ["korean-queer"],
    image: "rainbow-school.webp",
    caption: "Rainbow School, a virtual school co-designed with Korean queer youth on the Zep platform.",
    summary: "Rainbow School is a virtual school on the metaverse platform Zep, built by DDing Dong together with Korean queer youth during the COVID-19 pandemic. It began as an activity in which young people drew the school they wished to attend, and grew into a space with classrooms, a gym, a nurse's office, and bathrooms, each reimagined to be queer-friendly.\n\nReading Rainbow School as a designed artifact, we draw out three propositions: school infrastructures and cultures can make queerness mundane rather than out of the ordinary; queer resources can be embedded in everyday school infrastructure, with attention to the tensions this brings; and a virtual space can open room for collective action and solidarity through asynchronous communication. We argue that virtual world-building can work as a feminist utopian practice: not presenting a perfect future from the top down, but helping people work together toward better ones.",
    links: {}
  },
  {
    id: "queer-legacy",
    title: "Digital Legacies and Commemoration for Korean LGBTQ+ People",
    authors: ["Soonho Kwon", "Shaowen Bardzell"],
    venue: "",
    topics: ["korean-queer", "death", "beyond-western"],
    award: "Funded by the Lee Chang-guk Queer Research Support Program, Beyond the Rainbow Foundation",
    summary: "Services that help people prepare for death, such as legacy contacts and memorial accounts, mostly assume a spouse or children. In Korea, many platforms let only a pre-designated proxy, or family members who can prove the relationship with official records, manage a deceased user's account. For queer people who cannot legally marry or adopt, and who may be distant from their families of origin, the questions of whom to leave things to, and what to leave, can look very different.\n\nThis project begins with an anonymous survey of Korean LGBTQ+ adults about how they imagine and prepare for their deaths and legacies, including digital ones. From their responses, I will design a death-preparation platform, or a critical design that makes their exclusion visible, and then invite Korean queer people to try it and reflect on it in interviews.",
    links: {}
  },
  {
    id: "daoist-death",
    title: "Death as Transformation: Reimagining Death-Related Technologies through Daoist Understandings of Death",
    authors: ["Soonho Kwon", "Janghee Cho", "Shaowen Bardzell"],
    venue: "Learning with Daoist priests in Singapore",
    topics: ["death", "beyond-western"],
    summary: "HCI's death-related technologies, from digital legacies and memorial accounts to AI-mediated resurrection, tend to treat death as a clear boundary: life and then death, presence and then absence, everyday life, mourning, and a return to everyday life. Daoist thought sees it differently. Life and death are the gathering and dispersing of qi, part of an ongoing transformation that all beings undergo, much as Zhuangzi drummed on a tub and sang when his wife died.\n\nWorking with Daoist priests in Singapore, we attend funerals and memorial rituals and interview priests about the meanings and values behind these practices. From these engagements we draw out qualities of Daoist understandings of death, commemoration, and ritual, and use them to speculate on what memorial accounts, will-writing platforms, commemorative platforms, and AI resurrection might become when life and death are no longer taken as discrete, clearly bounded states.",
    links: {}
  }
];

/* Publications. The page sorts by year (newest first).
   - type: "Conference", "Journal", "Workshop", "Poster", or "Artwork"
   - topics: zero or more topic ids from above
   - image: a file in this repo (e.g. "dis26.webp") or a URL; leave "" for none
   - summary: \n\n starts a new paragraph
   - related: ids of other papers to list under "Related work" on this paper's page (optional)
   - links: paper (full paper page), pdf (direct download), arxiv, video, ars, slides, project */
const ME = "Soonho Kwon";
const PAPERS = [
  {
    id: "dis26-prayer",
    title: "Value-Sensitive AI for Prayer: Balancing the Agencies Between Human and AI Agents in Spiritual Context",
    authors: ["Soonho Kwon", "Dong Whi Yoo", "Shaowen Bardzell", "Younah Kang"],
    venue: "Proceedings of the 2026 ACM Designing Interactive Systems Conference",
    short: "DIS 2026 Full Paper", type: "Conference", year: 2026,
    topics: ["spiritual-ai"],
    image: "https://dl.acm.org/cms/10.1145/3800645.3812920/asset/a9e93288-972e-4d2a-88fc-13b59bdb6969/assets/images/medium/dis26-104-fig1.jpg",
    caption: "Overview of the study process. Figure from the paper (CC BY 4.0).",
    summary: "How could AI enter something as value-laden as prayer? Building on a diary study of prayer practices, we showed participants four speculative AI systems meant to “assist” prayer and used them as provocations for co-reflection.\n\nParticipants cared most about authenticity, a genuine connection to the divine, and often felt that the mere presence of AI diminished it, especially when AI took too much agency in guiding prayer. We argue for AI designs that leave room for users' own agency: interpretive openness, AI's inexplicability as a resource for personal meaning-making, and non-use as a legitimate design choice.",
    related: ["chi24-spiritual-ai"],
    links: { paper: "https://doi.org/10.1145/3800645.3812920", pdf: "https://dl.acm.org/doi/pdf/10.1145/3800645.3812920" }
  },
  {
    id: "cscw26-parents",
    title: "Journeys of Parents with LGBTQ+ Children: How Trauma and Healing Reshape Identity and (Mis)Informating Practices",
    authors: ["Soonho Kwon", "Dong Whi Yoo", "Koustuv Saha", "Shaowen Bardzell", "Younah Kang"],
    venue: "Proceedings of the ACM on Human-Computer Interaction",
    short: "CSCW 2026 Full Paper", type: "Journal", year: 2026,
    topics: ["korean-queer"],
    summary: "When parents in South Korea learn that their child is queer, many experience fear, isolation, and disorientation, and some turn to queer-related misinformation to cope. Through their relationships with their children, they gradually come to understand queer lives, become more critical readers of information, and push back against misinformation to help other parents.\n\nThe paper brings parents into Queer HCI as an under-studied stakeholder, shows how trauma and healing reshape information practices, and argues that misinformation has to be addressed through its relational, cultural, and emotional dimensions, not fact-checking alone.",
    links: { paper: "https://doi.org/10.1145/3816958", pdf: "https://dl.acm.org/doi/pdf/10.1145/3816958" }
  },
  {
    id: "cscw26-fda",
    title: "“The New Era of Tech-Enabled Traceability”: Tensions between the FDA's Data Governance Vision and the Lived Realities of Food Producers",
    authors: ["Soonho Kwon", "Catherine Wieczorek", "Heidi Biggs", "Shellye Suttles", "Tammi Etheridge", "Annabel Rothschild", "Shaowen Bardzell"],
    venue: "Proceedings of the ACM on Human-Computer Interaction",
    short: "CSCW 2026 Full Paper", type: "Journal", year: 2026,
    topics: ["policy"],
    summary: "From January 2026, the U.S. FDA's Food Traceability Rule requires farmers, fishers, and retail workers to keep detailed tracking records. The FDA frames this as a new era of tech-enabled traceability; we argue it turns these stakeholders into unpaid data workers.\n\nDrawing on Data Feminism, we analyzed 1,198 public comments on the proposed Rule and identified three tensions: the labor, financial, and educational burdens of becoming data workers; cases where tracking is infeasible because of infrastructure, culture, or production practices; and cases where the Rule's intended flexibility creates confusion and extra work.",
    links: { paper: "https://doi.org/10.1145/3817012", pdf: "https://dl.acm.org/doi/pdf/10.1145/3817012" }
  },
  {
    id: "tochi-martial-law",
    title: "Leaderless but Connected: Role of ICT During the Unfolding of Martial Law Crisis in South Korea",
    authors: ["Hayoun Noh", "Soonho Kwon", "Max Van Kleek", "Shaowen Bardzell", "Younah Kang"],
    venue: "ACM Transactions on Computer-Human Interaction",
    short: "TOCHI Journal Article", type: "Journal", year: 2026, status: "Accepted",
    topics: ["policy"],
    summary: "This paper examines the role that information and communication technologies played as the martial law crisis unfolded in South Korea, and how people stayed connected and acted together without central leadership.",
    links: {}
  },
  {
    id: "dis26-workshop-mth",
    title: "Relating Otherwise: Pluriversal Pathways for Reworlding More-than-Human Design",
    authors: ["Sylvia Janicki", "Heidi Biggs", "Soonho Kwon", "Kristina Mah", "Cayla Key", "Yu-Ting Cheng", "Catherine Wieczorek", "Moeiini Reilly", "Josiah Hester", "Shaowen Bardzell"],
    venue: "Companion Publication of the 2026 ACM Designing Interactive Systems Conference",
    short: "DIS 2026 Workshop", type: "Workshop", year: 2026,
    topics: ["beyond-western"],
    summary: "More-than-human design has gained traction in HCI as a way to attend to our entanglements with the wider ecological world, but it draws mostly on Western philosophy. This workshop looks beyond Western ontologies, engaging Indigenous Traditional Ecological Knowledge and Eastern philosophies such as Daoism.\n\nParticipants share stories of multispecies entanglement, discuss the ethics of drawing on these knowledge systems in HCI, and imagine how situated understandings can make more-than-human design more pluralistic and culturally grounded.",
    links: { paper: "https://doi.org/10.1145/3802974.3808002", pdf: "https://dl.acm.org/doi/pdf/10.1145/3802974.3808002" }
  },
  {
    id: "chi25-digital-legacy",
    title: "Digital Legacy Systems for Young Adults: Emphasizing Relationship-Oriented Perspectives and Physical Artifacts in Death Preparation",
    authors: ["Soonho Kwon", "Hyunah Jo", "Sohee Ryu", "Jihwan Do", "HwaJung Lee", "Keeheon Lee", "JooHyun Lee", "Younah Kang"],
    venue: "Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems",
    short: "CHI 2025 Full Paper", type: "Conference", year: 2025,
    topics: ["death"],
    image: "https://dl.acm.org/cms/10.1145/3706598.3713764/asset/ca30a75c-e8e5-4f78-b603-afad53df6a36/assets/images/medium/chi25-678-fig1.jpg",
    caption: "Postcards from the cultural probe kit, one mission per day. Figure from the paper (CC BY-NC 4.0).",
    summary: "The death of a young person leaves a profound impact on the bereaved, and their legacies are often digital rather than traditional. This design study envisions digital legacy curation systems for young adults (ages 19–34), using cultural probes, design workbooks, and prototype testing.\n\nYoung adults favored relationship-oriented legacies that ease the emotional burden on the people left behind, and saw value in physical artifacts. We call for recognizing specific user groups in death-related technologies, extend post-userist ideas to “use” after death, and point to the space between physical and digital legacies as worth exploring.",
    links: { paper: "https://doi.org/10.1145/3706598.3713764", pdf: "https://dl.acm.org/doi/pdf/10.1145/3706598.3713764" }
  },
  {
    id: "chi24-spiritual-ai",
    title: "Spiritual AI: Exploring the Possibilities of a Human-AI Interaction Beyond Productive Goals",
    authors: ["Soonho Kwon", "Dong Whi Yoo", "Younah Kang"],
    venue: "Extended Abstracts of the CHI Conference on Human Factors in Computing Systems",
    short: "CHI 2024 Poster", type: "Poster", year: 2024,
    topics: ["spiritual-ai"],
    summary: "HCI has long discussed technologies that go beyond productivity. We extend this to human-AI interaction through prayer, a practice with few productivity goals. A diary study identified the goals and behaviors that make prayer satisfying, and we conceptualized four AI systems that celebrate them, presented as a design workbook.\n\nThe findings point to new roles AI could play in people's lives, such as provoking deep reflection or creating indirect communities.",
    related: ["dis26-prayer"],
    links: { paper: "https://doi.org/10.1145/3613905.3650743", pdf: "https://dl.acm.org/doi/pdf/10.1145/3613905.3650743" }
  },
  {
    id: "ai-fortuneteller",
    title: "AI Fortune-Teller: Juxtaposing Shaman and AI to Reveal Human Agency in the Age of AI",
    authors: ["Soonho Kwon", "Dong Whi Yoo", "Younah Kang"],
    venue: "Prix Ars Electronica 2024, Interactive Art",
    short: "Prix Ars Electronica 2024 · Video Art", type: "Artwork", year: 2024,
    topics: ["spiritual-ai", "beyond-western"],
    award: "Honorary Mention, Prix Ars Electronica 2024",
    image: "https://i.ytimg.com/vi/Y21DGAZQWMU/hqdefault.jpg",
    caption: "Still from AI Fortuneteller (video).",
    summary: "Participants received career advice from what they believed was an AI counseling agent. In fact, the advice came from a mudang, a Korean traditional shaman, through fortunetelling. The video follows how participants see the advice once they learn its true source.\n\nMost kept their original attitudes toward the advice even after the reveal, which raises the question of how much people actually value AI's explainability and accuracy. By juxtaposing scientific and pre-scientific ways of seeking guidance, the work opens a conversation about human agency in the age of AI: however capable AI becomes, people will still navigate their lives in deeply human ways, untidy and uncertain.",
    links: { video: "https://www.youtube.com/watch?v=Y21DGAZQWMU", ars: "https://archive.aec.at/prix/290651/", arxiv: "https://arxiv.org/abs/2603.23811" }
  },
  {
    id: "bit23-speech",
    title: "‘Um, so like, is this how I speak?’: Design Implications for Automated Visual Feedback Systems on Speech",
    authors: ["Soonho Kwon", "Hyojin Lee", "Soojeong Park", "Yerin Heo", "Keeheon Lee", "Younah Kang"],
    venue: "Behaviour & Information Technology, Taylor & Francis",
    short: "BIT Journal Article", type: "Journal", year: 2023,
    topics: [],
    summary: "We built a Wizard-of-Oz prototype that detects filler words while someone speaks and gives real-time feedback through a flickering screen, followed by a report with charts. After 27 participants used it, interviews and thematic analysis produced eight design implications for automated visual feedback on speech, along with links to personal informatics and self-determination theory.",
    links: { paper: "https://doi.org/10.1080/0144929X.2023.2271997", pdf: "papers/bit23-speech.pdf" }
  },
  {
    id: "jhcik23-ai-recsys",
    title: "The Effects of Self-Efficacy and Risk Perception on the User Experience of Artificial Intelligence Recommendation System",
    authors: ["Juho Lee", "Soonho Kwon", "Sehee Shim", "Younah Kang"],
    venue: "Journal of the HCI Society of Korea",
    short: "JHCIK Journal Article", type: "Journal", year: 2023,
    topics: [],
    summary: "This study examines how users' self-efficacy and risk perception shape their experience of AI recommendation systems.",
    links: { paper: "https://scholar.kyobobook.co.kr/article/detail/4040049689415" }
  },
  {
    id: "interact21-instagram",
    title: "What Happens to My Instagram Account After I Die? Re-imagining Social Media as a Commemorative Space for Remembrance and Recovery",
    authors: ["Soonho Kwon", "Eunsol Choi", "Minseok Kim", "Sunah Hwang", "Dongwoo Kim", "Younah Kang"],
    venue: "Human-Computer Interaction – INTERACT 2021",
    short: "INTERACT 2021 Full Paper", type: "Conference", year: 2021,
    topics: ["death"],
    summary: "Social media can be a thanatosensitive technology that supports death preparation and commemoration. Using Value-Sensitive Design, we identified three main stakeholders in online commemoration and ran interviews and observations with nine people about their online and offline commemoration practices.\n\nWe turned the findings into design requirements, a conceptual commemorative system, and a working prototype. In an informal test, six participants saw it as a way to reflect on their own existence, prepare for death, and join a community that remembers the deceased and copes with grief together.",
    links: { paper: "https://doi.org/10.1007/978-3-030-85616-8_26", pdf: "papers/interact21-instagram.pdf" }
  }
];

/* Artwork. `youtube` is the video id (the part after watch?v=); its thumbnail is shown automatically. */
const ARTWORKS = [
  { title: "AI Fortuneteller", medium: "Video Art", year: 2024, award: "Honorary Mention, Prix Ars Electronica 2024", youtube: "Y21DGAZQWMU", page: "paper-ai-fortuneteller" },
  { title: "Existence Effacement Service", medium: "Interactive Art", year: 2023 },
  { title: "The Great Primitive Thinker", medium: "Speculative Novel & Media Installation", year: 2023 },
  { title: "Purple Night", medium: "Short Documentary Film", year: 2020, youtube: "L7FiZeaj5Xc" },
  { title: "The Aristocrats", medium: "Printed Artwork", year: 2019 },
  { title: "Himmel and Blair", medium: "Printed Artwork", year: 2018 },
  { title: "Pinocchio", medium: "Photograph", year: 2017 }
];

/* Google Analytics measurement ID (starts with "G-"). Leave "" to turn analytics off. */
const GA_ID = "G-6J1EXTPBT3";
