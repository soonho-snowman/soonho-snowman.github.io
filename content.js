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
  // About page: plain paragraphs, followed by one card per topic (generated from TOPICS below).
  intro: `I am a Human-Computer Interaction (HCI) and design researcher, currently pursuing a Ph.D. in
    <a href="https://www.cc.gatech.edu/degree-programs/phd-human-centered-computing" target="_blank" rel="noopener">Human-Centered Computing</a>
    at the Georgia Institute of Technology. I am a member of the
    <a href="http://esc-lab.org" target="_blank" rel="noopener">ESC Lab</a>, advised by
    <a href="https://shaowenbardzell.com" target="_blank" rel="noopener">Shaowen Bardzell</a>.`,
  outro: [
    `In conducting my research, I do not approach technology as a means of “solving problems.” My work treats technology
     as a means for people to carve out authentic ways of being within systems that are difficult to
     escape or transform (be they social structures or technical systems), while critically attending to how
     technologies may, at times, exacerbate existing issues.`,
    `Grounded in critical, feminist, design, and queer approaches, my work has been presented at
     venues such as ACM CHI, CSCW, and DIS, recognized at Prix Ars Electronica, and supported by the NSF and the Beyond the Rainbow Foundation.`
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
      `When I came to the U.S. and began working in queer HCI, I found queer theory surprisingly hard. It was supposed to be about people who share my identity, yet it felt difficult to grasp and far removed from my own life. That made me wonder: was it because these theories came out of the U.S.?`,
      `Thinking this way, I began to notice how many of HCI's defaults run on Western standards that are often rationalist, pragmatic, and binary. To question these defaults critically, I have been <a href="#project-tethered-beings">drawing new queer theory from Korean field sites rather than from Western theory</a>; <a href="#paper-dis26-workshop-mth">revisiting what more-than-human HCI calls the post-human or the relational through Daoist and Indigenous thought</a>; <a href="#paper-ai-fortuneteller">imagining AI through Korean traditional faith</a>; and <a href="#project-daoist-death">redesigning death and commemorative technologies around how Daoist thought understands death</a>.`,
      `Ultimately, through this work, I hope to add to the growing body of post-colonial and beyond-Western approaches in HCI.`
    ]
  },
  {
    id: "death", name: "Death and Commemoration", short: "Death and Computing", color: "--t4",
    blurb: "I investigate and design for non-normative experiences of death, such as dying young or without family support (e.g., among queer individuals in Korea), focusing on digital legacy and end-of-life preparation.",
    narrative: [
      `I first became interested in death and technology during the COVID-19 pandemic. As funerals moved online, I came across a memorial website that displayed a portrait of the deceased with an interface for dragging and dropping chrysanthemums in front of it. It felt deeply wrong to me, and that made me curious: why did it feel so wrong?`,
      `My <a href="#paper-interact21-instagram">first project, presented at INTERACT 2021</a>, explored this question. Why do we commemorate someone? What is the essence of commemoration, and what would it take to realize that essence online? Building on these questions, we designed what social media might look like as a space for commemoration.`,
      `Along the way, I realized that technologies for death preparation and commemoration tend to assume a single “normative death”: someone with a heteronormative family who dies of old age or illness. In <a href="#paper-chi25-digital-legacy">my CHI 2025 paper</a>, I designed death-preparation tools for young adults facing the possibility of an untimely death. Now I am designing <a href="#project-queer-legacy">a death-preparation platform for Korean LGBTQ+ people who cannot form a heteronormative family</a>, as well as <a href="#project-daoist-death">death-preparation and commemoration platforms grounded in Daoist thought, which treats death as part of life</a>.`
    ]
  },
  {
    id: "policy", name: "Policy and Civic Engagement", short: "Policy and Civic Engagement", color: "--t5",
    blurb: "I examine how people navigate data- and technology-driven policies and civic processes to maintain and protect their ways of being.",
    narrative: [
      `In all honesty, I did not start this line of work myself; these projects began as research assistantships and collaborations. Yet as I worked on them, a theme emerged. I came to feel that, as an HCI researcher, I have a responsibility to understand the realities in which technology is inevitably entangled with policy and civic participation. Along the way, I found myself resisting techno-solutionist narratives and bringing erased realities to the center.`,
      `In <a href="#paper-cscw26-fda">our CSCW 2026 paper</a>, we acknowledged what the FDA hopes to achieve through data-driven governance, while asking who does the data work it requires, whose realities are erased in the process, and what practical limits stand in the way.`,
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
    images: ["figures/tethered-prompts.webp", "figures/tethered-workshop.webp"],
    caption: "A story prompt sent to queer youth, and the co-design workshop board.",
    summary: "Korean queer youth live within conditions they cannot easily escape, alter, or contest: schools where queerness is absent or treated as debatable, homes that call for vigilance rather than comfort, and queer communities built around adults. Working with DDing Dong, we gathered 148 stories from queer youth aged 13–24 through story prompts released every two weeks, then held a co-reading and co-design workshop with five young adults.\n\nWe describe these youths as tethered beings: people who live within conditions they cannot readily disentangle from. Within those tethers they carve out breathing holes, temporary spaces, practices, and relationships, often through dating apps and online communities, that make the present more bearable without dissolving it. We argue for designing technologies as breathing holes that respect tethers rather than trying to sever them.",
    links: {}
  },
  {
    id: "rainbow-school",
    title: "Rainbow School: Virtual World-Building as Feminist Utopian Practice with Korean Queer Youth",
    authors: ["Soonho Kwon", "Yuting Peng", "Catherine Wieczorek", "Seunghee Yoo", "Da Hye Yun", "Jieun Song", "Shaowen Bardzell"],
    venue: "In collaboration with DDing Dong, a support center for LGBTQ+ youth in Korea",
    topics: ["korean-queer"],
    images: ["figures/rainbow-school-map.webp"],
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
    id: "tochi-martial-law",
    title: "Leaderless but Connected: Role of ICT During the Unfolding of Martial Law Crisis in South Korea",
    authors: ["Hayoun Noh", "Soonho Kwon", "Max Van Kleek", "Shaowen Bardzell", "Younah Kang"],
    venue: "ACM Transactions on Computer-Human Interaction",
    short: "TOCHI Journal Article", type: "Journal", year: 2026, status: "Forthcoming",
    topics: ["policy"],
    summary: "This paper examined how South Korean citizens navigated the 2024 martial law crisis through everyday digital tools. Our findings show how ICTs functioned as an improvised civic infrastructure, supporting rapid sensemaking and civic response. Yet we emphasize how such leaderless movements were also grounded in intergenerational memory, digital fluency, and cultural practices of Korean citizens, offering HCI a valuable case for understanding how digital technologies become meaningful in crises through their entanglement with social, historical, and cultural conditions.\n\nWe end with a personal remark from the first and second authors, for whom this was also a crisis lived through firsthand. Like many of our participants, perhaps more acutely as members of the Korean diaspora, we turned to familiar messaging apps, feeds, and livestreams to understand what was happening, remain connected to loved ones, and follow rapidly unfolding events from far away. The technologies at the center of this paper are not new, spectacular, or especially sophisticated. They are ordinary systems — often basic, taken for granted, and even boring — that have become deeply embedded in the routines of everyday life. Yet this very ordinariness was part of what made them matter in a moment of uncertainty. In a time when political instability and conflict continue to unfold in many parts of the world, we hope this study offers one reason to keep asking how these everyday technologies might better support people not only in moments of crisis, but also in the longer work of resilience, solidarity, collective memory, and civic life.",
    links: {}
  },
  {
    id: "cscw26-fda",
    title: "“The New Era of Tech-Enabled Traceability”: Tensions between the FDA's Data Governance Vision and the Lived Realities of Food Producers",
    authors: ["Soonho Kwon", "Catherine Wieczorek", "Heidi Biggs", "Shellye Suttles", "Tammi Etheridge", "Annabel Rothschild", "Shaowen Bardzell"],
    venue: "Proceedings of the ACM on Human-Computer Interaction",
    short: "CSCW 2026 Full Paper", type: "Journal", year: 2026,
    topics: ["policy"],
    video: { id: "XgWoYbYbYko" },
    summary: "The U.S. Food and Drug Administration (FDA)’s Food Traceability Rule, promulgated as part of the Food Safety Modernization Act (FSMA), requires agri-food supply chain stakeholders (stakeholders)—including farmers, fishers, retail workers, and others—to maintain detailed tracking records beginning in January 2026. Through this Rule, the FDA envisions a “New Era of Tech-Enabled Traceability,” in which standardized, harmonized tracking data serve as a foundational public health infrastructure, enabling more rapid identification and removal of potentially contaminated food and ultimately reducing the risk of foodborne illness.\n\nDespite this promising vision, we observe that the Rule reconfigures agri-food stakeholders into data laborers by mandating stringent data-collection, formatting, and reporting requirements. In this paper, we examine the tensions and burdens that arise from such reconfiguration. Leveraging Data Feminism as an orientation to attend to how data-driven policy implementation disproportionately burdens smaller, under-resourced stakeholders who lack the infrastructural and financial capacity to comply, we analyze 1,198 public comments submitted to Regulations.gov in response to the proposed Rule. Our qualitative document analysis reveals three key tensions: (1) the individual labor, financial, and educational burdens stakeholders experience as they are reconfigured into data workers; (2) moments where data tracking becomes infeasible due to infrastructural limitations, cultural contexts, and situated production practices; and (3) instances where the Rule’s intended flexibility instead introduces confusion and burden due to its ambiguity.\n\nThis work contributes to CSCW by providing an empirical account of how data-driven policy reconfigures stakeholders as data producers. We demonstrate that those reconfigured as data workers under data-driven governance must be recognized as meaningful policy partners rather than merely as actors subjected to compliance obligations. We further suggest that CSCW can play a critical role in uncovering their yet invisible burdens, supporting their capacity to voice concerns through participatory democratic mechanisms, and aiding their ability to “make-do” under imposed data works.",
    links: { paper: "https://doi.org/10.1145/3817012", pdf: "https://dl.acm.org/doi/pdf/10.1145/3817012" }
  },
  {
    id: "cscw26-parents",
    title: "Journeys of Parents with LGBTQ+ Children: How Trauma and Healing Reshape Identity and (Mis)Informating Practices",
    authors: ["Soonho Kwon", "Dong Whi Yoo", "Koustuv Saha", "Shaowen Bardzell", "Younah Kang"],
    venue: "Proceedings of the ACM on Human-Computer Interaction",
    short: "CSCW 2026 Full Paper", type: "Journal", year: 2026,
    topics: ["korean-queer"],
    video: { id: "eAyzh0PUArU" },
    summary: "This study examines how parents of LGBTQ+ individuals in South Korea navigate the emotional rupture fueled by fear, isolation, and disorientation after learning their children’s queer identity, encounter queer-related (mis)information as a way of coping with this emotional toll, and come to listen to queer realities relationally. Through this process, we highlight how parents reconstruct their identities as supportive parents, which reshapes their informating practices, making them more critical in assessing queer-related (mis)information, developing strategies to protect themselves from harmful narratives, and actively challenging misinformation to support others navigating similar experiences.\n\nThis work contributes to CSCW by (1) foregrounding parents of LGBTQ+ individuals, an underrepresented yet critical stakeholder group in Queer HCI; (2) demonstrating how identity reconfiguration following a trauma-healing process could transform informating practices; and (3) arguing that addressing misinformation requires attention beyond individual fact-based discerning to account for its relational, cultural, and emotional dimensions. Further, we invite CSCW scholars to reconsider the balance between abstracting and humanizing information, explore future design possibilities for parents of LGBTQ+ children, and reflect on the role of researchers as participants in collective research communities fueled by care.",
    links: { paper: "https://doi.org/10.1145/3816958", pdf: "https://dl.acm.org/doi/pdf/10.1145/3816958" }
  },
  {
    id: "dis26-prayer",
    title: "Value-Sensitive AI for Prayer: Balancing the Agencies Between Human and AI Agents in Spiritual Context",
    authors: ["Soonho Kwon", "Dong Whi Yoo", "Shaowen Bardzell", "Younah Kang"],
    venue: "Proceedings of the 2026 ACM Designing Interactive Systems Conference",
    short: "DIS 2026 Full Paper", type: "Conference", year: 2026,
    topics: ["spiritual-ai"],
    images: ["figures/spiritual-ai-1.webp", "figures/spiritual-ai-2.webp", "figures/spiritual-ai-3.webp", "figures/spiritual-ai-4.webp"],
    caption: "Storyboards of the four speculative AI systems for prayer.",
    video: { id: "SDtiHNyOHKE", start: 493 },
    summary: "How could AI enter a deeply value-laden realm of human lives? Drawing on key values and practices associated with praying identified through a diary study, we presented our participants with four speculative, conceptual value-sensitive AI systems to “assist” prayer practices. The conceptual designs served as provocations to co-reflect on how AI interventions might shape their praying experiences. Our findings suggest that a sense of authenticity (or a genuine connection to the divine) is a crucial value, while the mere presence of AI was often perceived as diminishing this authenticity, particularly when AI assumed too much agency in guiding prayer practices. Based on our findings, we argue for the importance of AI agent designs that recognize users’ agency in shaping their interaction with AI. We further explore how this may be possible by leveraging interpretive openness, perhaps through AI’s inexplicability as a resource for personal meaning-making, and by recognizing non-use of AI as a legitimate design choice.",
    related: ["chi24-spiritual-ai"],
    links: { paper: "https://doi.org/10.1145/3800645.3812920", pdf: "https://dl.acm.org/doi/pdf/10.1145/3800645.3812920" }
  },
  {
    id: "dis26-workshop-mth",
    title: "Relating Otherwise: Pluriversal Pathways for Reworlding More-than-Human Design",
    authors: ["Sylvia Janicki", "Heidi Biggs", "Soonho Kwon", "Kristina Mah", "Cayla Key", "Yu-Ting Cheng", "Catherine Wieczorek", "Moeiini Reilly", "Josiah Hester", "Shaowen Bardzell"],
    venue: "Companion Publication of the 2026 ACM Designing Interactive Systems Conference",
    short: "DIS 2026 Workshop", type: "Workshop", year: 2026,
    topics: ["beyond-western"],
    summary: "Amid growing environmental concerns, more-than-human (MtH) design has gained traction in HCI as a means of attending to relational entanglements between humans and the wider ecological world. This work is vitally important, but draws largely on (and is perhaps limited by) Western philosophical traditions. In this workshop, we seek to explore beyond Western ontologies in MtH design by engaging with longstanding practices and epistemologies such as Indigenous Traditional Ecological Knowledge and Eastern philosophies like Daoism. These non-Western knowledge traditions have long embodied relational worldviews grounded in lived, place-based practices of interdependence with the more-than-human world. We aim to share stories and philosophies of multispecies entanglements, discuss the ethics of drawing from these knowledge systems in HCI, and imagine new ways these situated understandings can inform design. In doing so, we seek to expand the ethical, epistemological, and design imaginaries of MtH work toward more pluralistic, culturally grounded forms of interactivity.",
    links: { paper: "https://doi.org/10.1145/3802974.3808002", pdf: "https://dl.acm.org/doi/pdf/10.1145/3802974.3808002" }
  },
  {
    id: "chi25-digital-legacy",
    title: "Digital Legacy Systems for Young Adults: Emphasizing Relationship-Oriented Perspectives and Physical Artifacts in Death Preparation",
    authors: ["Soonho Kwon", "Hyunah Jo", "Sohee Ryu", "Jihwan Do", "HwaJung Lee", "Keeheon Lee", "JooHyun Lee", "Younah Kang"],
    venue: "Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems",
    short: "CHI 2025 Full Paper", type: "Conference", year: 2025,
    topics: ["death"],
    video: { id: "OJDGo4T_noI", start: 55 },
    images: ["figures/chi25-app.webp", "figures/chi25-probes.webp"],
    caption: "Screens of the digital legacy curation app (a–f) and the five-day cultural probe sheets.",
    summary: "The death of a young person is particularly tragic, leaving a profound emotional impact on the bereaved. Moreover, their legacies often diverge from traditional ones, incorporating a range of digital artifacts. This design study investigates age-specific approaches to death-related technologies by envisioning digital legacy curation systems tailored for young adults (age 19–34). Using cultural probes, design workbooks, and prototype testing, we examine the values and preferences of young adults in preparing for an untimely death. Our findings highlight relationship-oriented legacies that focus on minimizing the emotional burden of the bereaved and the potential benefits of physical artifacts. Through this study, we: (1) underscore recognizing specific user groups in death-related technologies, (2) explore death as an existential and disorienting grounds within HCI, (3) extend post-userist concepts to consider the notion of “use” after death, and (4) identify the liminal space between physical and digital legacies as a meaningful realm to explore.",
    links: { paper: "https://doi.org/10.1145/3706598.3713764", pdf: "https://dl.acm.org/doi/pdf/10.1145/3706598.3713764", news: "https://www.techsquareatl.com/tech-square-news/how-we-can-connect-with-loved-ones-now-and-later-with-digital-legacies" }
  },
  {
    id: "chi24-spiritual-ai",
    title: "Spiritual AI: Exploring the Possibilities of a Human-AI Interaction Beyond Productive Goals",
    authors: ["Soonho Kwon", "Dong Whi Yoo", "Younah Kang"],
    venue: "Extended Abstracts of the CHI Conference on Human Factors in Computing Systems",
    short: "CHI 2024 Late-Breaking Work", type: "Poster", year: 2024,
    topics: ["spiritual-ai"],
    images: ["figures/chi24-poster.webp"],
    caption: "Late-Breaking Work poster, CHI 2024.",
    summary: "The Human-Computer Interaction community has long endeavored to discuss technologies that go beyond productivity goals. We extend this perspective to the realm of Human-AI interaction to explore how AI could consider diverse user values, particularly in users’ prayer experiences where minimal productivity goals exist. Through diary study, our research identified user goals and behaviors that contribute to satisfying prayer experiences. Then, we conceptualized four distinct AI systems designed to celebrate the identified goals and behaviors of the users. We presented these conceptualized systems in the format of a design workbook and engaged users in evaluating them. Based on our findings, we discuss the potential of novel roles that AI could play in human lives, such as provoking deep reflections or creating indirect communities.",
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
    video: { id: "Y21DGAZQWMU" },
    summary: "This speculative video piece showcases participants interacting with a career counseling AI agent, unaware that the responses were actually derived from the fortunetelling of a mudang (a Korean traditional shaman). Our work captures this deception and documents participants' reactions, showcasing shifts in their initial perceptions of the agent's advice following the reveal. Notably, even after learning that the advice came from a mudang rather than an AI, participants did not change their initial attitudes toward the advice they received. This raises questions about the perceived importance of AI's explainability and accuracy. By juxtaposing scientific and pre-scientific approaches, we aim to provoke discussions on human agency in the age of AI. We argue that, regardless of AI's advancements, we continue to navigate life in fundamentally human ways -- wonderfully messy and uncertain.",
    links: { video: "https://www.youtube.com/watch?v=Y21DGAZQWMU", ars: "https://archive.aec.at/prix/290651/", arxiv: "https://arxiv.org/abs/2603.23811" }
  },
  {
    id: "bit23-speech",
    title: "‘Um, so like, is this how I speak?’: Design Implications for Automated Visual Feedback Systems on Speech",
    authors: ["Soonho Kwon", "Hyojin Lee", "Soojeong Park", "Yerin Heo", "Keeheon Lee", "Younah Kang"],
    venue: "Behaviour & Information Technology, Taylor & Francis",
    short: "BIT Journal Article", type: "Journal", year: 2023,
    topics: [],
    summary: "At a time when diverse forms of automated visual feedback systems on speech are introduced to the Human–Computer Interaction (HCI) community, our research investigates the possible design spaces and design implications to consider when creating them. We utilised a Wizard of Oz prototype that recognises fillers during speech and sends out real-time feedback in the form of a flickering screen and a post-report with graphic charts. We let 27 participants use this prototype and interviewed them about their general experience of using such systems. Based on thematic analysis, we propose eight design implications to consider when designing an automated visual feedback system on speech. Additionally, we discuss the possible future for automated visual feedback systems on speech where they collaborate with fields such as personal informatics (quantified self), self-determination theory (SDT) and motivation, and other socio-ethnic areas.",
    links: { paper: "https://doi.org/10.1080/0144929X.2023.2271997", pdf: "papers/bit23-speech.pdf" }
  },
  {
    id: "jhcik23-ai-recsys",
    title: "The Effects of Self-Efficacy and Risk Perception on the User Experience of Artificial Intelligence Recommendation System",
    authors: ["Juho Lee", "Soonho Kwon", "Sehee Shim", "Younah Kang"],
    venue: "Journal of the HCI Society of Korea",
    short: "JHCIK Journal Article", type: "Journal", year: 2023,
    topics: [],
    summary: "This research investigated how the self-efficacy of the users affects the user experience of an artificial intelligence (AI) recommendation system, focusing on the usability and the role of an AI-based recommendation system. We divided the role of self-efficacy into multiple dimensions and researched its effects by manipulating the level of risk perception following the decision-making. We experimented (N=46) through a quiz interface where an AI agent recommends a single answer. Each quiz question was provided with a varying amount of reward money which acted as an element that affects the risk perception of the participants. A pre-survey was conducted before each experiment to check each participant’s self-efficacy level. All participants were given 12 questions in total and were asked to evaluate the usability and satisfaction of the AI’s recommendation. After all experiments, a post-interview was conducted to deepen the understanding of the AI recommendation system’s role for the users. It was discovered that when risk perception increases, the satisfaction with AI recommendations decreases. Second, the perceived usability of the AI recommendation system differs according to the level of self-efficacy. Finally, users perceive the role of the AI recommendation system during a decision-making process differently according to the level of self-efficacy and risk perception. The research provides insights into the design of an AI recommendation system that considers various aspects of users' characteristics.",
    links: { paper: "https://scholar.kyobobook.co.kr/article/detail/4040049689415" }
  },
  {
    id: "interact21-instagram",
    title: "What Happens to My Instagram Account After I Die? Re-imagining Social Media as a Commemorative Space for Remembrance and Recovery",
    authors: ["Soonho Kwon", "Eunsol Choi", "Minseok Kim", "Sunah Hwang", "Dongwoo Kim", "Younah Kang"],
    venue: "Human-Computer Interaction – INTERACT 2021",
    short: "INTERACT 2021 Full Paper", type: "Conference", year: 2021,
    topics: ["death"],
    summary: "This research explores the relationship between social media and mortality, focusing on social media as a thanatosensitive technology that promotes death preparation and commemoration. Employing concepts from the Value-Sensitive Design approach, our research identifies three main stakeholders surrounding the online commemoration experience. As an exploratory study, we conducted in-depth interviews and observations (n = 9) to better understand key stakeholders’ experiences in online and offline commemorations. After analyzing the qualitative data, we extracted design requirements that were used to create a conceptual commemorative system and a functioning prototype. An informal user testing (n = 6) yielded positive feedbacks on the new system for it offers the unique opportunity to reflect existence, prepare for death, and create a community of commemoration that helps memorialize the deceased and recover from grief. The study suggests that commemoration via social media aids in maintaining user volition, induces active and interactive participation, and allows for a continuation of the digital legacy. Such findings may help deepen the understanding of humans’ perception of death and commemoration within the context of social media.",
    links: { paper: "https://doi.org/10.1007/978-3-030-85616-8_26", pdf: "papers/interact21-instagram.pdf" }
  }
];

/* Artwork.
   - thumb: tile image; youtube: one id or a list of ids (the part after watch?v=)
   - page: link the tile to another page instead (e.g. "paper-ai-fortuneteller")
   - summary (\n\n = new paragraph), images, sections [{heading, text, images}], links, credits [[label, value]]
     give an artwork its own page at #art-<id>; without a summary the tile links to its video */
const ARTWORKS = [
  {
    id: "ai-fortuneteller", title: "AI Fortuneteller", medium: "Video Art", year: 2024,
    award: "Honorary Mention, Prix Ars Electronica 2024", thumb: "art/ai-fortuneteller/thumb.webp", page: "paper-ai-fortuneteller"
  },
  {
    id: "existence-effacement", title: "Posthumous Existence Effacement Service", medium: "Interactive Art Installation", year: 2023,
    subtitle: "Exploring the Motivation Behind Data Management After Death",
    thumb: "art/existence-effacement/thumb.webp",
    summary: "“Existence Effacement Service” is an interactive art installation that prompts audiences to reflect on their inclination toward the lasting digital footprint they will leave behind after death.\n\nUpon entering the room, participants are greeted by a receptionist who informs them that they stand at the entrance to the afterlife. The receptionist then explains the existence effacement service: before transitioning to the afterlife, individuals are offered the choice to erase the traces of their existence on Earth. These traces include not only physical remnants but also intangible ones, such as memories and digital footprints. Participants complete a form expressing their choices and briefly explaining their decisions. The completed forms are submitted to the receptionist, who confirms the choices and displays them on a wall as a reference for subsequent participants.\n\nIn a world saturated with messengers, social media posts, and photos stored on our phones, we continuously leave digital footprints. Yet we seldom consider how this data will persist after our death. The installation gives participants an opportunity to ponder what should happen to their remaining digital data: erase it entirely for privacy, leave it behind to perpetuate their existence, or preserve it as a legacy that loved ones can revisit for emotional comfort.\n\nAs a participatory installation, “Existence Effacement Service” turns audiences into co-creators of the piece. They contribute by sharing their responses and are provoked by reading the responses of others. The installation is meant to serve as a medium for discussing our diverse attitudes toward posthumous digital data.",
    images: ["art/existence-effacement/01.webp", "art/existence-effacement/02.webp", "art/existence-effacement/03.webp", "art/existence-effacement/04.webp"],
    credits: [["A project by", "Soonho Kwon"], ["Advised by", "Younah Kang, Krys Lee"],
      ["Exhibited", "Senior Graduation Exhibition 2023, Information and Interaction Design, Yonsei University; UIC3620 Genre Studies"]]
  },
  {
    id: "great-primitive-thinker", title: "The Great Primitive Thinker", medium: "Critical Design Fiction & Media Installation", year: 2023,
    subtitle: "Critical Design Fiction on the Relationship Between Religion, AI, and Humankind",
    thumb: "art/great-primitive-thinker/thumb.webp",
    youtube: ["vOf2_5A8Jbs", "TKAsI2yNhVg", "gFSZ_rX3ZQU", "zYMtMC4dC5Q"],
    summary: "A bright circular light resembling a machine-god oddly exists in the middle of the most everyday place in our lives. The light, in a voice that sounds both human and mechanical, slowly reads out the note. As you read or listen to this story, what have you felt? Is that emotion provoked by the author? Or god? Or an AI? Or all of them? Or none of them?\n\nAs a critical design fiction, the work questions the current and desirable future forms of the human-AI relationship through the story of how the relationship between humankind, god, and AI changes over the course of history.",
    links: { "Full text (PDF)": "https://fd10f4d9-3180-4dd3-b62b-3aa53dd4ad66.filesusr.com/ugd/0e9f2f_61eac5c5951346fa98fd3f6de49d0f57.pdf" },
    credits: [["A project by", "Soonho Kwon"], ["Advised by", "Younah Kang, Krys Lee"],
      ["Exhibited", "Senior Graduation Exhibition 2023, Information and Interaction Design, Yonsei University; UIC3620 Genre Studies"]]
  },
  {
    id: "seacrets", title: "Seacrets", medium: "Speculative Design", year: 2020,
    subtitle: "Speculative Design Project on the User Experience of Secret Sharing",
    thumb: "art/seacrets/thumb.webp",
    summary: "Seacrets is a speculative design project that provokes thought about the extension of anonymity and the experience of sharing secrets.\n\nSeacrets is a secret-sharing platform. Here, users write their deepest secrets anonymously and let them flow into a bigger ocean. The ocean, a huge screen in a public space such as a subway station, randomly surfaces bottles that contain these self-disclosures. Anyone passing by can touch a bottle, open it, and read it. You never know what kind of secret you will encounter: someone coming out of the closet, someone confessing an experience of domestic abuse, or even someone confessing a crime. The project aims to provoke discussion about the nature of anonymous online spaces and the potential benefits and problems that could arise from such communities, highlighting the act of self-disclosure.\n\nExisting research shows that sharing secrets can be cathartic, lightening emotional burdens and bringing various physical and emotional health benefits. But to what extent? Are we eager to share our deepest secrets just for catharsis?\n\nWe may also shift our focus to the viewers. Why do we want to read these stories so much? What will viewers feel as they read these secrets? Solidarity in similar secrets? Or repulsion and horror, much like watching a horror or thriller film? Will this platform become a place of healing where victims of abuse can share their experiences? A queer community where people can come out in secret? Or a dark space where criminals boast of their wicked stories? Would you put your secret into a bottle and let it float in the Seacrets? Why?",
    images: ["art/seacrets/01.webp"],
    credits: [["A project by", "Soonho Kwon, Minkyung Kang, Yeonsu Noh, Jihong Shin, Eugene Kim"],
      ["Context", "UXIM, Yonsei University UX/HCI Academia, Fall 2020"]]
  },
  { id: "purple-night", title: "Purple Night", medium: "Short Documentary Film", year: 2020, youtube: "L7FiZeaj5Xc" },
  {
    id: "aristocrats", title: "The Aristocrats", medium: "Printed Calendar", year: 2020,
    subtitle: "A 12-Page Calendar of Freaks",
    award: "1st Place, Gilbert Font Design Competition", thumb: "art/aristocrats/thumb.webp",
    summary: "Awarded first place at the Gilbert Font Design Competition, and successfully crowdfunded to be printed and sold.\n\nThroughout history, people who were different have often been treated as freaks and monsters. We must not forget how easy it is to monsterize someone; Asians, for instance, were exhibited in human zoos for looking strange to Western eyes. The models for this project were people who were “exhibited” for their otherness, some by choice but often with no choice at all. They were called freaks or monsters and given names designed to draw attention.\n\nSuch monsterization still takes place today. We stare at people who do not look like us and treat them differently. This project remembers those who passed away after living the life of a freak, and reminds all of us that we are only humans who can be represented through lines, dots, and colors. I chose a vivid color palette to celebrate the beauty of difference, then distorted the colors in Photoshop to create unexpected beauty, much like the models represented in this project.\n\nGilbert is a typeface named after Gilbert Baker, the creator of the iconic Rainbow Flag of the queer community. I found it fitting for this project, not only because it celebrates diversity but also for its vivid colors. Each month can be identified by the shapes used in the background: February uses lines, which connect two dots, and October uses overlapping pentagons, which together have ten angles.",
    images: Array.from({ length: 12 }, (_, i) => `art/aristocrats/${String(i + 1).padStart(2, "0")}.webp`),
    credits: [["A project by", "Soonho Kwon"], ["Advised by", "Hyoshin Park, Katheryne Hoffmann"],
      ["Context", "IID3008 Visual Systems, Yonsei University (Fall 2020); LLEA270 Freaks and Monsters, University of Hawaiʻi at Mānoa"]]
  },
  {
    id: "himmel-and-blair", title: "Himmel and Blair", medium: "Photo Essay", year: 2018,
    subtitle: "A Photo Essay on the Extraordinarily Ordinary Lives of Korean Queers",
    thumb: "art/himmel-and-blair/thumb.webp",
    summary: "In loving memory of Blair.\n\nSexual identity is one of many aspects that can define a person. By capturing queer people in their most comfortable, everyday situations, I wanted to break stereotypes about queer people while still showing the unique concerns and styles of the models.",
    sections: [
      { heading: "Mask, Blair", text: "A photo becomes permanent evidence of your queer identity. Taking pictures while holding hands with a same-sex partner, or while attending pride events, is a fear for all queers in the digital age. For this reason, the Seoul Pride Festival did not allow photography during the event at the time.", images: ["art/himmel-and-blair/01.webp", "art/himmel-and-blair/02.webp"] },
      { heading: "Mask, Himmel", text: "Itaewon is one of the few places where queer people can openly show themselves. Here, in one of the gay clubs, is where Himmel first gladly accepted his queer identity. He no longer had to hide who he was.", images: ["art/himmel-and-blair/03.webp", "art/himmel-and-blair/04.webp"] },
      { heading: "God", text: "Many religions doubt our existence in the name of love; yet people of faith around me tell me their god taught them to love everyone and help those in need.\n\n“I know that there is a reason why God created me gay. If I had been born a straight man, I never would have understood what it means to be a minority. Because God made me gay, I had the chance to be more sympathetic and perhaps change people's hatred to love. For that, I thank God.”", images: ["art/himmel-and-blair/05.webp", "art/himmel-and-blair/06.webp"] },
      { heading: "Solidarity", text: "Queer friendship is something else. While I was blessed with friends and family who love me for who I am, there is something non-queer folks cannot understand. The life of a queer person is not something you can express through words; you have to live it. Talking about discrimination or teenage years in the closet is merely a story to someone who is not queer.\n\nTo have someone who shares that experience, someone I can rely on through this journey, warms my heart.", images: ["art/himmel-and-blair/07.webp", "art/himmel-and-blair/08.webp"] },
      { heading: "Home", text: "She wanted to start an online fashion store. She was the kind of person who would dye her hair Harley Quinn–style simply because she wanted to. Her house, much like her, was a treasure box. You never knew what you would find there, from 8-inch zebra-striped heels to a Cruella de Vil–like vegan fur shawl, or even a smoking pipe.", images: ["art/himmel-and-blair/09.webp", "art/himmel-and-blair/10.webp"] },
      { heading: "Life", text: "The life of a queer person is ordinary. Special, but ordinary.\n\nNot all queer people dress flamboyantly, nor do we spray glitter everywhere we go. We have breakfast, we drink shots, we smoke, we go to Taco Bell, we use coupons to get discounts, we gossip about our exes, we talk about that date last night.\n\nOur lives are special, but not just because we are queer. Just as each of our lives is special in its own way, queer people, too, have extraordinary stories within the most ordinary lives.", images: ["art/himmel-and-blair/11.webp", "art/himmel-and-blair/12.webp"] }
    ],
    credits: [["A project by", "Soonho Kwon"], ["Advised by", "Kiho Park"],
      ["Context", "IID2002 Photography Workshop (Fall 2017) and IID4003 Photo and Book (Spring 2018), Yonsei University"]]
  },
  {
    id: "pinocchio", title: "Pinocchio", medium: "Photographic Storytelling", year: 2017,
    thumb: "art/pinocchio/thumb.webp",
    summary: "Pinocchio is a photographic storytelling project that illustrates the internal pain of being unable to disclose one's true identity despite wanting to. Through various objects, I sought to show the frustration of living as a queer person in Korean society. The quotes, taken from the classic fairy tale Pinocchio, offer an ironic point of reference, since the story is about the importance of telling the truth. For queer people, lying about one's identity may be a matter of survival. An unprepared coming out could lead to catastrophic results, especially in a conservative society and without economic independence.\n\nLying about your own identity slowly kills you. You are living, but not as your true self. You become a wooden puppet played by society, not a living, breathing person.\n\nBut then again, what choice do we have, right?",
    images: Array.from({ length: 12 }, (_, i) => `art/pinocchio/${String(i + 1).padStart(2, "0")}.webp`),
    layout: "stack",
    credits: [["A project by", "Soonho Kwon"], ["Advised by", "Kiho Park"],
      ["Context", "IID2002 Photography Workshop, Yonsei University (Fall 2017)"]]
  }
];

/* News, newest first. `date` is "YYYY-MM". HTML links are allowed in `text`.
   The home page shows the latest four under the photo; the News tab shows everything. */
const NEWS = [
  { date: "2026-10", text: `At CSCW 2026 in Salt Lake City, presenting two papers: one on <a href="#paper-cscw26-parents">parents of LGBTQ+ children</a> and one on <a href="#paper-cscw26-fda">the FDA's Food Traceability Rule</a>.` },
  { date: "2026-09", text: `Named a finalist for the GVU Foley Scholar Award at Georgia Tech.` },
  { date: "2026-08", text: `Selected for the Lee Chang-guk Queer Research Support Program by the Beyond the Rainbow Foundation.` },
  { date: "2026-08", text: `Gave invited talks, "Remaining Human in the Age of AI: Juxtaposing Spiritual Experience and AI Interaction," at Seoul National University (HCI+d Lab), Keio University (Graduate School of Media Design), and Georgia Tech (OMSCS).` },
  { date: "2026-07", text: `Gave an invited talk, "Reframing Problem Spaces in Design," at Yonsei University.` },
  { date: "2026-07", text: `Gave an invited talk, "Researcher's Worldview in HCI," for the Methods of Innovation Research course at Yonsei University's Graduate School of Innovation.` },
  { date: "2026-07", text: `Gave an invited talk, "Evaluating Your Design: Evaluation Beyond Your Expectation," and served as a guest critic for the Interaction Design course at Yonsei University.` },
  { date: "2026-07", text: `Gave an invited talk, "What Kind of a Designer Will You Be?," and served as a guest critic for the Senior Project course at Yonsei University.` },
  { date: "2026-07", text: `Served as a guest critic for the Tech for Impact course at Yonsei University.` },
  { date: "2026-06", text: `Presented <a href="#paper-dis26-prayer">Value-Sensitive AI for Prayer</a> at DIS 2026 in Singapore.` },
  { date: "2026-06", text: `Received a Special Recognition for Outstanding Review for GROUP.` },
  { date: "2026-04", text: `Attended CHI 2026 in Barcelona.` },
  { date: "2026-04", text: `Passed my doctoral qualifying exam!` },
  { date: "2026-04", text: `Invited as a speaker for the GT × Emory × UGA Korean Graduate Student Symposium.` },
  { date: "2026-03", text: `<a href="#paper-dis26-workshop-mth">A workshop I co-authored</a> was accepted for DIS 2026. My first DIS workshop!` },
  { date: "2026-03", text: `<a href="#paper-dis26-prayer">A first-author paper</a> was conditionally accepted for DIS 2026. My first DIS paper!` },
  { date: "2026-03", text: `Two first-author papers (<a href="#paper-cscw26-parents">1</a>, <a href="#paper-cscw26-fda">2</a>) were conditionally accepted for CSCW 2026. My first CSCW papers!` },
  { date: "2026-02", text: `Received two Special Recognitions for Outstanding Reviews for DIS 2026 and one for CHI 2026 Posters.` },
  { date: "2025-11", text: `Received two Special Recognitions for Outstanding Reviews for CHI 2026 and one for CSCW 2026.` },
  { date: "2025-07", text: `Invited as a panelist on trans-disciplinary queer methods and methodologies at the Korean Association for LGBTQ+ and Queer Studies Conference 2025.` },
  { date: "2025-07", text: `Presented research on how parents of LGBTQ+ children navigate misinformation at the Korean Association for LGBTQ+ and Queer Studies Conference 2025.` },
  { date: "2025-05", text: `Invited as a speaker and guest lecturer for the <a href="https://youtu.be/Nq3WsMzqW94" target="_blank" rel="noopener">Tech for Impact</a>, <a href="https://youtu.be/3kbBQ7Ogu4U" target="_blank" rel="noopener">Interaction Design</a>, and <a href="https://youtu.be/8AW5nPfgQmY" target="_blank" rel="noopener">Senior Project</a> courses at Yonsei University.` },
  { date: "2025-05", text: `Invited as a distinguished alumni panelist for Yonsei University's Information and Interaction Design major.` },
  { date: "2025-05", text: `Presented <a href="#paper-chi25-digital-legacy">Digital Legacy Systems for Young Adults</a> at CHI 2025. [<a href="https://youtu.be/OJDGo4T_noI" target="_blank" rel="noopener">Video</a>] [<a href="https://www.cc.gatech.edu/news/commemoration-platform-lets-you-determine-how-youre-remembered-online" target="_blank" rel="noopener">Article</a>]` },
  { date: "2025-02", text: `Joined the steering committee for the Korean Association for LGBTQ+ and Queer Studies Conference 2025.` },
  { date: "2025-02", text: `<a href="#paper-chi25-digital-legacy">Digital Legacy Systems for Young Adults</a> was accepted for CHI 2025. My first CHI paper!` },
  { date: "2025-02", text: `Received a Special Recognition for Outstanding Review for DIS 2025.` },
  { date: "2024-11", text: `Received two Special Recognitions for Outstanding Reviews for CHI 2025.` },
  { date: "2024-09", text: `<a href="https://calls.ars.electronica.art/2024/prix/winners/10750/" target="_blank" rel="noopener">AI Fortune-Teller</a> received an Honorary Mention in the <a href="https://ars.electronica.art/prix/en/winners/#interactiveart" target="_blank" rel="noopener">Interactive Art+</a> category of the 2024 Prix Ars Electronica (58 awarded out of 2,950 submissions).` },
  { date: "2024-08", text: `Started my Ph.D. in Human-Centered Computing at Georgia Tech.` }
];

/* The hidden a cappella page (#acapella), linked from the bottom of the Artwork tab. */
const ACAPELLA = {
  playlist: "https://www.youtube.com/playlist?list=PL5FL6N9wNenPc9hRKReFwUmUzUcqKgy9V",
  videos: [
    { id: "XerHcm_muL0", title: "Happy New Year (Sweet Sorrow)" },
    { id: "PYuH6Gr-umo", title: "Our Christmas Wish for You (Antenna Music)" },
    { id: "GxXT_UV6kk0", title: "God Only Knows" },
    { id: "Z33TRapBYt0", title: "Korea Univ. × Yonsei Univ. Cheering Song Medley" },
    { id: "8oTSRc36bXs", title: "Yonsei Cheering Songs, a cappella ver." },
    { id: "_04ICN97E_8", title: "우리 모두 재즈클럽에서 시작되었지 (Korean Jazz Guard)" },
    { id: "DgsccChS7uE", title: "I See the Light (from Tangled)" },
    { id: "h2eT0m9yxf0", title: "그땐 그랬지" },
    { id: "KAsH8ahaNjw", title: "ルージュの伝言 (Hamonepu 2023 finals, unreleased song)" }
  ]
};

/* Google Analytics measurement ID (starts with "G-"). Leave "" to turn analytics off. */
const GA_ID = "G-6J1EXTPBT3";
