export interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  author: string;
  authorBio: string;
  authorAvatar: string;
  publishedAt: string;
  imageUrl: string;
  tags: string[];
  readTime: number;
  isFeatured: boolean;
}

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "founders", label: "Founders" },
  { id: "products", label: "Products" },
  { id: "services", label: "Services" },
  { id: "global-markets", label: "Global Markets" },
  { id: "innovation", label: "Innovation" },
  { id: "companies", label: "Companies" },
];

export const articles: Article[] = [
  {
    id: "1",
    title:
      "The Quiet Builder: How Priya Sharma Turned a Supply Chain Problem Into a $500M Startup",
    slug: "priya-sharma-supply-chain-startup",
    summary:
      "A founder who spotted inefficiencies in India's cold-chain logistics built a global platform now serving 40 countries. Her story is one of patience, precision, and refusing to pitch until the product was truly ready.",
    content: `<p>Priya Sharma spent three years working at a logistics firm before she noticed something that nobody wanted to talk about: a third of fresh produce was being lost in transit across South Asia. The problem wasn't lack of technology — it was fragmentation. Dozens of vendors, no unified data layer, and cold-chain gaps nobody was incentivized to solve.</p>

<p>"I didn't want to raise money first," she tells us from her Mumbai office, which is intentionally sparse. "I wanted to understand the problem so deeply that any investor would have been lucky to give us capital." That philosophy took her two years of bootstrapping, living off consulting work while building the first version of ChainSync with two engineers she'd known from university.</p>

<p>The early product was embarrassingly simple. A shared dashboard for cold-storage operators, transporters, and retailers — nothing proprietary, just a common language. "We weren't trying to be clever. We were trying to be useful," she says. That restraint paid off. Within six months, three major food distributors in Maharashtra were piloting the system. Within a year, they were paying for it.</p>

<p>The $500M valuation came after the company expanded to Southeast Asia and partnered with European grocery chains looking for supply-chain transparency post-Brexit. Today, ChainSync operates in 40 countries. But Sharma is characteristically unmoved by the number. "Valuation is a lagging indicator," she says. "It tells you what you already built. It doesn't tell you what comes next."</p>

<p>What comes next, she hints, is a predictive engine that can help smaller farms — particularly in Sub-Saharan Africa and Central America — reduce waste before it happens rather than optimizing around it afterward. She's already quietly partnering with agricultural universities in Kenya and Colombia.</p>

<p>For other founders in logistics and supply chain, her advice is pointed: "Don't romanticize the disruption narrative. Supply chains are infrastructure. Your job is to make them invisible — to remove friction, not to replace the whole system just so you can put your logo on it."</p>`,
    category: "founders",
    author: "James Okafor",
    authorBio:
      "James covers founder stories and emerging markets for Lexie Innovate. He previously wrote for Quartz Africa and The Ken.",
    authorAvatar: "https://i.pravatar.cc/80?img=11",
    publishedAt: "2026-03-18",
    imageUrl: "https://picsum.photos/seed/priya-sharma/800/450",
    tags: ["logistics", "supply-chain", "founder", "india", "global"],
    readTime: 7,
    isFeatured: true,
  },
  {
    id: "2",
    title:
      "Why the Next Wave of SaaS Is Being Built in Jakarta, Not San Francisco",
    slug: "saas-wave-jakarta",
    summary:
      "Southeast Asia's developer talent pool has matured. Venture capital is following. The question now isn't whether great SaaS can come from Jakarta — it's why it took this long.",
    content: `<p>The conventional wisdom was that enterprise software had to be built where the enterprise buyers were. That meant San Francisco, or at most, London and Singapore. Jakarta was for low-cost outsourcing. That assumption is being dismantled methodically, quarter by quarter.</p>

<p>Three Jakarta-based SaaS companies crossed the $100M ARR mark in 2025. None of them were primarily selling into Indonesia. All three had built their initial products for Southeast Asian SMBs — businesses too small for Salesforce, too sophisticated for spreadsheets — and used that foothold to expand into India, the Middle East, and increasingly, Southern Europe.</p>

<p>The talent story is the foundation. Indonesia now produces roughly 180,000 engineering graduates per year. A new cohort of those graduates spent 2020-2023 working remotely for US and European companies, absorbing product cultures, development practices, and, critically, what enterprise buyers actually care about. They came back — or never left — and are applying that knowledge locally.</p>

<p>"The product sensibility has changed enormously," says Dian Wulandari, a partner at a Jakarta-based venture fund that backs B2B software exclusively. "Five years ago, the companies here were building features. Now they're building workflows. The distinction matters enormously to enterprise buyers."</p>

<p>Infrastructure has caught up too. AWS, Google Cloud, and Azure all have data centers in Indonesia. Payment rails for SaaS billing are functional. The legal scaffolding for software companies — IP protection, data residency compliance, B2B contracting — has been updated. The excuses for not building here are running out.</p>`,
    category: "global-markets",
    author: "Sena Mensah",
    authorBio:
      "Sena writes about global technology markets and venture capital trends. Based between Accra and Singapore.",
    authorAvatar: "https://i.pravatar.cc/80?img=23",
    publishedAt: "2026-03-15",
    imageUrl: "https://picsum.photos/seed/jakarta-saas/800/450",
    tags: [
      "saas",
      "southeast-asia",
      "indonesia",
      "venture-capital",
      "enterprise",
    ],
    readTime: 6,
    isFeatured: true,
  },
  {
    id: "3",
    title: "Modular Hardware Is Finally Having Its Moment",
    slug: "modular-hardware-moment",
    summary:
      "After years of failed consumer attempts, modular hardware is finding its product-market fit in industrial and prosumer markets. Three companies are leading a quiet revolution.",
    content: `<p>The dream of modular consumer hardware — phones you could upgrade piece by piece, laptops where you swapped the CPU like a cartridge — died several deaths in public. Project Ara was cancelled. Fairphone found a niche but not a market. The consensus hardened: modularity is too expensive, too complicated, and consumers don't actually want it.</p>

<p>That consensus may have been right about consumers. It was wrong about the market. The real growth in modular hardware is happening two levels up the value chain, in industrial equipment and prosumer creative tools, where the economics work and the users are sophisticated enough to value repairability over aesthetics.</p>

<p>Forma Systems, a Berlin-based company, makes modular sensor arrays for industrial quality control. Their system ships as a base unit with swappable sensor modules — thermal, visual, acoustic, chemical — that manufacturing clients can reconfigure as their production lines change. The addressable market is narrow but the margins are exceptional, and the lock-in is real: once a factory is built around Forma's base units, switching costs are enormous.</p>

<p>In the prosumer space, a small Utah company called Bloc Audio has become a cult product among audio engineers with a modular effects processing unit. Each module does one thing — compression, EQ, reverb — and the units snap together magnetically with a proprietary data bus that maintains sample-accurate sync. The waiting list is currently eight months.</p>

<p>"We're not trying to be consumer electronics," Bloc's founder told us. "We're trying to be the best tool for the 50,000 people in the world who do what our customers do. That's a different product brief entirely."</p>`,
    category: "products",
    author: "Anya Petrova",
    authorBio:
      "Anya covers hardware, deep tech, and industrial innovation. She holds a degree in mechanical engineering from ETH Zurich.",
    authorAvatar: "https://i.pravatar.cc/80?img=47",
    publishedAt: "2026-03-12",
    imageUrl: "https://picsum.photos/seed/modular-hardware/800/450",
    tags: ["hardware", "modular", "industrial", "prosumer", "innovation"],
    readTime: 5,
    isFeatured: false,
  },
  {
    id: "4",
    title:
      "The Compliance Services Boom: Why Boring Became the Best Business Model",
    slug: "compliance-services-boom",
    summary:
      "As regulatory complexity grows globally, a new class of service companies is building durable, high-margin businesses by making compliance manageable for mid-market firms.",
    content: `<p>Nobody builds a startup to do compliance. Nobody raises venture money with a deck that leads with "we help companies avoid regulatory fines." And yet, compliance services is quietly one of the most durable and scalable business models in B2B services right now.</p>

<p>The macro driver is clear: regulatory complexity has increased in almost every major market simultaneously. ESG reporting mandates, data privacy frameworks (GDPR, CCPA, PDPA, LGPD), supply chain due diligence laws, AI governance regulations — every new framework creates a new category of compliance work that companies need to do but rarely want to build in-house.</p>

<p>Into this gap have stepped a new generation of compliance services companies that combine legal expertise with software tooling and — critically — recurring revenue models. Rather than charging hourly consulting fees, they charge annual subscriptions for ongoing compliance monitoring, gap assessments, and remediation support.</p>

<p>Compliant Co., a UK-based firm focused on data privacy, reached £40M ARR in four years without a single institutional investor. "We kept hearing that compliance was a features problem, that someone would build software to replace us," says co-founder Marcus Webb. "What we kept seeing was the opposite. The more sophisticated the software got, the more clients needed someone to interpret it for them."</p>

<p>The model works because compliance is inherently high-stakes and advice-dependent. Clients will pay for certainty. The subscription model works because regulatory obligations are perpetual — once you need to comply with something, you need to keep complying. The unit economics are excellent: low churn, high expansion revenue, minimal marginal cost per additional client.</p>`,
    category: "services",
    author: "Rohan Pillai",
    authorBio:
      "Rohan covers B2B services and professional services innovation. Former management consultant.",
    authorAvatar: "https://i.pravatar.cc/80?img=33",
    publishedAt: "2026-03-10",
    imageUrl: "https://picsum.photos/seed/compliance-services/800/450",
    tags: ["compliance", "services", "b2b", "regulation", "recurring-revenue"],
    readTime: 6,
    isFeatured: false,
  },
  {
    id: "5",
    title: "Ambient AI: The Interface Shift Nobody Is Talking About",
    slug: "ambient-ai-interface-shift",
    summary:
      "The next major computing interface won't be a chatbot. It will be a layer of intelligence that runs quietly in the background of every app, every workflow, every decision. Some companies are already building it.",
    content: `<p>We've spent two years talking about AI as a chat interface. Ask the AI a question. Get an answer. The paradigm has been so dominant that it has shaped how most companies think about AI product strategy. But the most interesting AI work happening right now isn't about making chatbots better. It's about making AI invisible.</p>

<p>Ambient AI refers to intelligence that operates continuously in the background — monitoring, summarizing, flagging, and acting without being explicitly invoked. Think of the difference between asking a calculator a question and having a financial advisor who already knows your situation when you pick up the phone. Ambient AI aims to be the latter.</p>

<p>Notion's AI features have moved firmly in this direction. Rather than requiring users to prompt the AI, recent updates have the system proactively surfacing relevant context, suggesting connections between notes, and pre-populating fields based on past behavior. Users report that the AI becomes more useful the less they think about it — a counterintuitive design principle that represents a genuine break from the chatbot paradigm.</p>

<p>A startup called Sidekick (not the defunct HTC device) is building ambient AI specifically for sales teams. The system runs during customer calls, surfaces relevant CRM data in real time, flags commitment signals in conversation, and drafts follow-up emails before the call even ends. The salesperson never explicitly interacts with the AI; they simply notice that the right information is always available at the right moment.</p>

<p>The design challenge for ambient AI is significant: how do you make intelligence present without making it intrusive? The companies getting this right are investing heavily in signal design — learning when to surface information and when to stay quiet. That judgment, more than the underlying model, may be the real competitive advantage.</p>`,
    category: "innovation",
    author: "Clara Müller",
    authorBio:
      "Clara writes about the future of interfaces, AI product design, and human-computer interaction.",
    authorAvatar: "https://i.pravatar.cc/80?img=56",
    publishedAt: "2026-03-08",
    imageUrl: "https://picsum.photos/seed/ambient-ai/800/450",
    tags: ["ai", "interface", "product-design", "ambient", "future"],
    readTime: 7,
    isFeatured: true,
  },
  {
    id: "6",
    title: "How Bolt Became the Template for European Deep Tech Exits",
    slug: "bolt-european-deeptech-exits",
    summary:
      "The Estonian mobility company's path from Tallinn startup to $14B public company rewrote assumptions about where deep tech companies need to be headquartered to achieve global scale.",
    content: `<p>When Bolt filed for its IPO in late 2025, the conversation in European tech circles wasn't about whether it would succeed — that was already settled — but about what it meant. A company founded in Tallinn, Estonia (population 440,000), had built a global mobility platform across 50 countries and was listing on a major exchange at a $14 billion valuation without ever moving its headquarters to Silicon Valley, London, or even Berlin.</p>

<p>The template matters because it directly challenges the geography-of-ambition narrative that has quietly constrained European founders for decades. The argument was never explicit, but it was pervasive: if you want to build something truly large, you need to eventually transplant yourself to where the talent, capital, and acquirers are. Bolt's existence as a counterexample is inconvenient for that narrative.</p>

<p>The company's path was not without European detours. An early funding round came from London-based Superangel. The executive team expanded across Europe. But the operational center remained Baltic, and the cultural identity of the company — pragmatic, engineering-led, with a strong dislike of American hype cycles — stayed distinctly Estonian.</p>

<p>"We never wanted to be a San Francisco company that happened to be from Estonia," CEO Markus Villig has said. "We wanted to be an Estonian company that operated globally." That distinction, which can sound like founder mythology, turns out to have had structural implications for how Bolt made product decisions, hired, and managed capital efficiency.</p>`,
    category: "companies",
    author: "Elena Vasquez",
    authorBio:
      "Elena covers European tech, venture capital, and global startup ecosystems.",
    authorAvatar: "https://i.pravatar.cc/80?img=29",
    publishedAt: "2026-03-05",
    imageUrl: "https://picsum.photos/seed/bolt-europe/800/450",
    tags: ["europe", "ipo", "mobility", "deep-tech", "estonia"],
    readTime: 5,
    isFeatured: false,
  },
  {
    id: "7",
    title: "The Founder Who Refused to Hire a PR Team Until Year Five",
    slug: "founder-no-pr-team",
    summary:
      "David Osei built a B2B logistics software company to $30M ARR without a single press release. His theory of founder communications is unconventional — and increasingly being copied.",
    content: `<p>David Osei has never sent a press release. His company, FreightBase, has $30M in ARR, 200 customers across West and East Africa, and no media coverage beyond a handful of industry trade publications. This is not an oversight. It's a philosophy.</p>

<p>"PR is a form of premature optimization," he says during a call from Accra. "If you're spending time and money managing your narrative before you have a strong narrative to manage, you're using a resource you don't have on a problem you haven't earned."</p>

<p>The approach has costs. FreightBase has been slower to attract certain types of talent — people who want to work at a company they've heard of. It may have missed acquisition conversations that start with brand recognition rather than customer referrals. Osei acknowledges these trade-offs without apology.</p>

<p>But the benefits, he argues, have been structural. The company has been obsessively product-focused because there was no external narrative to maintain. When features were delayed, nobody outside the company knew. When the product had problems, they were fixed without public scrutiny. "The market doesn't care about your press release. Your customers do," he says. "I'd rather have ten more customer calls than one journalist call."</p>`,
    category: "founders",
    author: "James Okafor",
    authorBio:
      "James covers founder stories and emerging markets for Lexie Innovate.",
    authorAvatar: "https://i.pravatar.cc/80?img=11",
    publishedAt: "2026-03-02",
    imageUrl: "https://picsum.photos/seed/founder-no-pr/800/450",
    tags: ["founder", "communications", "b2b", "africa", "growth"],
    readTime: 5,
    isFeatured: false,
  },
  {
    id: "8",
    title:
      "Africa's Creator Economy Is Building Infrastructure the West Never Had",
    slug: "africa-creator-economy",
    summary:
      "Across Nigeria, Kenya, and Ghana, a generation of creators is building audiences, products, and payment rails simultaneously — and in doing so, creating a creator economy with entirely different architecture.",
    content: `<p>The Western creator economy was built on top of existing payment infrastructure. PayPal, Stripe, credit cards, bank transfers — the money movement layer was already there when YouTube Partner Program launched, when Patreon arrived, when Substack launched. Creators in the US and Europe didn't have to think about how money would move. They just thought about content.</p>

<p>Creators in Nigeria, Kenya, and Ghana don't have that luxury. They've had to build the payments layer and the content layer simultaneously, and in doing so, they've created something more vertically integrated and more resilient than the Western model.</p>

<p>Paystack, acquired by Stripe for $200M in 2020, was partly built on the needs of creator businesses that needed to accept payments online and couldn't. Flutterwave followed. Today, there's an entire payments ecosystem that was purpose-built for the African digital economy, and creators were among the early catalysts.</p>

<p>The creator infrastructure companies now emerging from Lagos and Nairobi are building for local constraints: intermittent connectivity, mobile-first consumption, SMS-based fan engagement, local currency pricing, and community models that look more like co-ops than individual brand businesses. Some of these innovations are being licensed back to Western platforms trying to serve diaspora audiences and emerging market users.</p>`,
    category: "global-markets",
    author: "Sena Mensah",
    authorBio:
      "Sena writes about global technology markets and venture capital trends.",
    authorAvatar: "https://i.pravatar.cc/80?img=23",
    publishedAt: "2026-02-28",
    imageUrl: "https://picsum.photos/seed/africa-creator/800/450",
    tags: ["africa", "creator-economy", "payments", "nigeria", "kenya"],
    readTime: 6,
    isFeatured: false,
  },
  {
    id: "9",
    title:
      "The Vertical SaaS Playbook: How Niche Software Companies Escape Commoditization",
    slug: "vertical-saas-playbook",
    summary:
      "Horizontal SaaS is a race to the bottom on pricing. Vertical SaaS — software built for a specific industry — is how founders are building durable, defensible businesses in 2026.",
    content: `<p>The Salesforce model — general-purpose CRM that works for any industry — made sense when enterprise software was scarce. Today, almost every horizontal software category is overcrowded and margins are compressing. The companies winning in SaaS right now are not building for everyone. They are building for someone specific, and building deep.</p>

<p>Vertical SaaS means building software designed around the specific workflows, regulatory requirements, data models, and integration needs of a single industry. Think dental practice management software, or project management for architecture firms, or compliance tooling for pharmaceutical manufacturers. The software is too specialized to be built by a general-purpose vendor, and too valuable to be replaced by a spreadsheet.</p>

<p>The defensibility comes from depth. A vertical SaaS company that has encoded ten years of industry-specific workflow knowledge into its product cannot be copied by a horizontal player in a product sprint. The moats are regulatory (often deeply embedded in compliance workflows), network-based (industry-specific data benchmarks and peer comparisons), and switching-cost-driven (data migration from a specialized system is genuinely painful).</p>

<p>The best vertical SaaS playbooks start narrow and go adjacent slowly. Serve one segment perfectly. Build the data layer. Expand into adjacent workflows once the core is defensible. The founders who fail in vertical SaaS typically make one of two mistakes: they go too broad too early, losing the depth advantage, or they stay too narrow too long, capping their addressable market unnecessarily.</p>`,
    category: "products",
    author: "Rohan Pillai",
    authorBio:
      "Rohan covers B2B services and professional services innovation.",
    authorAvatar: "https://i.pravatar.cc/80?img=33",
    publishedAt: "2026-02-25",
    imageUrl: "https://picsum.photos/seed/vertical-saas/800/450",
    tags: ["saas", "vertical", "b2b", "product-strategy", "defensibility"],
    readTime: 6,
    isFeatured: false,
  },
  {
    id: "10",
    title:
      "Climate Tech's Next Chapter: From Hardware Moonshots to Software Infrastructure",
    slug: "climate-tech-software-infrastructure",
    summary:
      "The first wave of climate tech was about physical breakthroughs. The next wave is about making climate action programmable — turning decarbonization into a software problem.",
    content: `<p>The climate tech investment narrative of the early 2020s was dominated by physical technologies: direct air capture, green hydrogen, solid-state batteries, advanced nuclear. All important. All necessary. All extremely capital-intensive, slow to deploy, and vulnerable to the same hardware scaling economics that made cleantech 1.0 so difficult to invest in.</p>

<p>What's emerging alongside these hardware bets is quieter and faster-moving: climate software infrastructure. Carbon accounting platforms. Grid optimization software. Procurement tools for renewable energy. Scope 3 emissions tracking across supply chains. Building energy management systems. None of these are physically impressive. All of them are essential to actually deploying decarbonization at scale.</p>

<p>Electricity Maps, a Danish company, provides real-time data on the carbon intensity of electricity grids in 50+ countries. Their API is embedded in everything from data center scheduling software to EV charging optimization. They don't build hardware. They don't capture carbon. They provide the data layer that makes intelligent carbon decisions possible for companies that do.</p>

<p>"Decarbonization is a coordination problem as much as a technology problem," says Olivier Corradi, Electricity Maps' founder. "Software is how you coordinate at scale. We're building the data infrastructure that the energy transition needs to be able to make real-time decisions."</p>`,
    category: "innovation",
    author: "Clara Müller",
    authorBio:
      "Clara writes about the future of interfaces, AI product design, and human-computer interaction.",
    authorAvatar: "https://i.pravatar.cc/80?img=56",
    publishedAt: "2026-02-22",
    imageUrl: "https://picsum.photos/seed/climate-tech/800/450",
    tags: ["climate", "software", "infrastructure", "sustainability", "energy"],
    readTime: 7,
    isFeatured: false,
  },
  {
    id: "11",
    title:
      "Why Bootstrapped Companies Are Outperforming VC-Backed Peers in B2B",
    slug: "bootstrapped-b2b-outperformance",
    summary:
      "New data shows bootstrapped B2B software companies achieve profitability faster and retain customers longer. The discipline enforced by not having external capital may be the product advantage itself.",
    content: `<p>The venture capital model has an implicit theory of product development: that more resources, deployed faster, produce better products. Hire the best engineers, move fast, iterate aggressively, accept losses to build market share. It's a coherent theory. There's growing evidence it's wrong for a significant category of B2B software.</p>

<p>A 2025 study of 500 B2B software companies found that bootstrapped companies in the $5M–$50M ARR range had median net revenue retention of 118%, compared to 106% for VC-backed peers. They reached profitability 24 months faster on average. And their customer acquisition costs were 40% lower, driven primarily by more disciplined targeting and longer sales cycles that resulted in better-fit customers.</p>

<p>The mechanism, practitioners argue, is constraint. When you can't afford to acquire the wrong customer, you spend more time identifying the right one. When you can't afford to build features for everyone, you build deeper features for someone. The discipline enforced by resource constraint produces product decisions that turn out to have competitive value.</p>

<p>"I've never had a choice about being efficient," says the founder of a bootstrapped HR software company in Portugal that crossed €20M ARR last year. "That sounds like a disadvantage. It turns out it's the most important product principle we have."</p>`,
    category: "companies",
    author: "Elena Vasquez",
    authorBio:
      "Elena covers European tech, venture capital, and global startup ecosystems.",
    authorAvatar: "https://i.pravatar.cc/80?img=29",
    publishedAt: "2026-02-18",
    imageUrl: "https://picsum.photos/seed/bootstrapped-b2b/800/450",
    tags: ["bootstrapping", "b2b", "saas", "venture-capital", "profitability"],
    readTime: 6,
    isFeatured: false,
  },
  {
    id: "12",
    title: "The Latin American Fintech Surge Is Just Getting Started",
    slug: "latam-fintech-surge",
    summary:
      "Despite headwinds from currency volatility and political uncertainty, fintech companies across Brazil, Mexico, and Colombia are building products that are becoming infrastructure for the region.",
    content: `<p>Latin American fintech had a difficult 2023. Valuations compressed, some high-profile companies reduced headcount dramatically, and the narrative shifted from "the next frontier" to "a cautionary tale about emerging market exuberance." That narrative missed what was actually happening on the ground.</p>

<p>While public valuations contracted, product adoption accelerated. Nubank reached 100 million customers in 2024 — a milestone that makes it the largest digital bank outside of China by customer count. Mercado Pago processed more payment volume than any bank in Argentina. Clip became the default card acceptance solution for Mexican small businesses. These are not experiments. They are infrastructure.</p>

<p>The second generation of Latin American fintech is less interested in serving individuals and more interested in serving businesses. B2B payments infrastructure, embedded finance for SMBs, trade finance for cross-border commerce, payroll and benefits platforms for gig workers — the gap between what businesses need and what traditional banks offer is enormous, and the fintech companies building into that gap are finding sustainable unit economics that their consumer-focused predecessors sometimes struggled with.</p>

<p>"Consumer fintech in Latin America has proven the market," says a São Paulo-based investor. "The next cycle is about building the B2B infrastructure layer. That's where the durable businesses are being built right now."</p>`,
    category: "global-markets",
    author: "Sena Mensah",
    authorBio:
      "Sena writes about global technology markets and venture capital trends.",
    authorAvatar: "https://i.pravatar.cc/80?img=23",
    publishedAt: "2026-02-15",
    imageUrl: "https://picsum.photos/seed/latam-fintech/800/450",
    tags: ["fintech", "latin-america", "brazil", "mexico", "payments"],
    readTime: 6,
    isFeatured: false,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  if (category === "all") return articles;
  return articles.filter((a) => a.category === category);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.isFeatured);
}

export function getRelatedArticles(slug: string, category: string): Article[] {
  return articles
    .filter((a) => a.slug !== slug && a.category === category)
    .slice(0, 3);
}
