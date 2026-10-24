const fs = require('fs');
const path = require('path');

// Target directory
const blogDir = path.join(__dirname, 'blog');
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}

// Author information
const author = {
  name: "Saim Ali Abbasi",
  title: "Engineering Student, Scientific Explorer & Poet",
  tagline: "Where dreams meet the hardest problems.",
  signaturePhilosophy: "I dream in equations. I question in poetry. I build somewhere between the two.",
  siteUrl: "https://saim-ali-abbasi.github.io/yume"
};

// 8 Articles Data
const articles = [
  {
    id: "art-09",
    slug: "quantum-computing-in-medicine",
    title: "Quantum Computing in Medicine: From Molecules to Medicines",
    subtitle: "How superposition, entanglement, and hybrid quantum-classical algorithms are reshaping drug discovery and personalized clinical care.",
    category: "Quantum Computing",
    date: "October 23, 2026",
    tags: ["Quantum Computing", "Medicine", "Molecular Simulation", "Genomics", "Healthcare"],
    excerpt: "For decades, doctors and scientists have relied on faster classical computers. But molecular biology is quantum chemistry at its core. Here is how quantum computing could transform drug discovery, genomics, and clinical medicine.",
    content: `
      <figure class="article-hero-figure">
        <img src="assets/quantum-computing-in-medicine.jpg" alt="Quantum Computing in Medicine: Molecular Simulation, Drug Discovery, and Qubit Bloch Spheres" loading="lazy">
        <figcaption>Figure 1.0 // Mapping quantum superposition and entanglement to molecular dynamics and target protein-ligand interactions.</figcaption>
      </figure>

      <p>For decades, doctors and scientists have relied on faster and faster classical computers to read scans, sequence genomes and design drugs. But some medical problems are so complex that even the world's biggest supercomputers struggle with them. Enter quantum computing, a technology that processes information in a fundamentally different way, and one that healthcare is starting to take seriously.</p>

      <h3>What Is Quantum Computing, in Plain Words?</h3>
      <p>A classical computer stores information as bits, each either 0 or 1. A quantum computer uses qubits, which can exist in a blend of states at once (superposition) and can be linked to one another (entanglement). For certain kinds of problems, especially simulating nature at the molecular level, this lets a quantum machine explore possibilities in ways a classical computer cannot efficiently match.</p>
      <p>This matters for medicine because the human body is, at its core, chemistry. Proteins, enzymes and drugs all interact according to the rules of quantum mechanics.</p>

      <blockquote>“The human body is, at its core, chemistry. Simulating nature at the atomic level requires computational architectures that speak the native language of quantum mechanics.”</blockquote>

      <h3>Where Quantum Computing Could Help Medicine</h3>

      <h4>1. Drug Discovery and Molecular Simulation</h4>
      <p>Finding a new drug means searching an almost endless space of possible molecules for ones that bind to a disease target and cause little harm. Today this takes years and billions of dollars. Quantum computers are naturally suited to simulating how molecules behave and interact, which could make early-stage drug design faster and more accurate.</p>
      <p>This is already moving from theory to practice. The World Economic Forum's list of top emerging technologies for 2026 includes quantum simulation for drug discovery, citing work by IBM and Moderna on modelling mRNA structure and protein-folding problems. Pharmaceutical companies are building quantum-ready teams and testing hybrid quantum-classical algorithms on cloud-based quantum hardware.</p>

      <h4>2. Genomics and Personalized Medicine</h4>
      <p>A single human genome holds billions of data points, and understanding how genes, lifestyle and medicine interact is a huge computational challenge. Quantum algorithms may eventually help analyse genomic data faster and match patients with the treatments most likely to work for them, which is the promise of precision medicine.</p>

      <h4>3. Medical Imaging and Diagnostics</h4>
      <p>Quantum techniques could improve both how images are captured and how they are analysed. Researchers are exploring quantum machine learning for tasks like medical image classification and early disease detection, including cancer. Most progress so far involves hybrid models, where a small quantum component is plugged into a classical AI pipeline.</p>
      <p>Quantum sensing is also worth watching. Unlike quantum computing itself, it is closer to real-world use and may be the first way quantum technology enters hospitals, for example through highly sensitive tools for early diagnostics.</p>

      <h4>4. Treatment Planning and Hospital Optimization</h4>
      <p>Many healthcare decisions are optimization problems: how to plan radiotherapy so it hits a tumour and spares healthy tissue, how to schedule operating rooms, or how to route resources across a hospital network. Quantum optimization algorithms are being studied for exactly these tasks.</p>

      <h4>5. Data Security</h4>
      <p>Quantum computing is a double-edged sword for healthcare. Powerful future quantum computers could break today's encryption, putting sensitive patient records at risk. At the same time, quantum-safe cryptography and quantum communication can help protect that data. Hospitals will need to plan for post-quantum security well before the threat arrives.</p>

      <h3>The Money and Momentum</h3>
      <p>Governments and funders are paying attention. The UK government announced a further commitment in March 2026 of £1 billion for large-scale quantum computers, plus over £500 million to help companies develop applications in areas including pharmaceuticals. The Wellcome Trust's Quantum for Bio programme has a $50 million portfolio focused on healthcare uses. Market research firms estimate the quantum healthcare market at roughly $470 million in 2026, though estimates vary by source and should be treated cautiously.</p>

      <h3>The Reality Check</h3>
      <p>It is important to stay honest about where things stand. Experts broadly agree that clear, practical quantum advantage in drug development is still in the future. The main hurdles are:</p>
      <ul>
        <li><strong>Hardware limits:</strong> Today's machines are noisy and error-prone. Reliable medical use needs fault-tolerant quantum computers with strong error correction.</li>
        <li><strong>Skills gap:</strong> Very few teams combine expertise in quantum algorithms, computational chemistry and drug design.</li>
        <li><strong>Regulation:</strong> Existing frameworks such as FDA and CE medical-device rules were not built to assess quantum-enhanced tools.</li>
        <li><strong>Evidence:</strong> Most medical applications are still at the research or prototype stage, and clinical studies are limited.</li>
      </ul>
      <p>Quantum computing is not about replacing classical computers or AI. It is about helping with specific bottlenecks, such as molecular simulation, multi-omics analysis and optimization, where classical methods hit a wall.</p>

      <h3>Why Hybrid Computing Is the Bridge</h3>
      <p>Because fully fault-tolerant quantum computers do not exist yet, most real work today uses a hybrid approach. A classical computer handles the bulk of the job, such as data preparation and machine learning, and passes only the hardest sub-problem, like calculating the energy of a tricky molecule, to a quantum processor. The result then flows back into the classical pipeline.</p>
      <p>This matters because it lets researchers learn how to use quantum tools now. Teams are building the algorithms, software and skills today, so that when better hardware arrives they can switch it on rather than start from zero. Cloud access has also lowered the barrier: a university lab or biotech start-up no longer needs to own a quantum machine to experiment with one.</p>

      <h3>What This Could Mean for Patients</h3>
      <p>It helps to picture the end result rather than the physics. In a quantum-assisted future, a patient with a hard-to-treat cancer might have their tumour genome analysed alongside millions of other cases, with the system suggesting which existing drugs are most likely to work. A rare-disease drug that would once have been abandoned as too costly to develop might become viable because simulations cut years from the early research. Radiotherapy plans might be tuned to the individual with far greater precision, and screening tools might catch disease signals long before symptoms appear.</p>
      <p>None of this is available in clinics today, and it will arrive gradually, if at all in some cases. But these are the kinds of improvements researchers are aiming for.</p>

      <h3>Ethics, Access and Trust</h3>
      <p>New medical technology brings new responsibilities. Quantum-enhanced tools will depend on large amounts of sensitive patient data, so privacy and consent must be built in from the start. There is also a fairness question: if quantum-designed drugs and diagnostics are expensive, wealthy countries and hospitals may benefit first, widening existing health gaps. Regulators, doctors and technologists will need to agree on how such tools are tested, explained to patients and held accountable when they get things wrong.</p>
      <p>There is also the risk of hype. Overpromising can erode public trust, waste research funding and push hospitals toward costly purchases they do not yet need. A realistic, evidence-first attitude serves patients better than excitement alone.</p>

      <h3>What Comes Next</h3>
      <p>In the near term, expect hybrid quantum-classical workflows, quantum sensing in diagnostics, and growing partnerships between hospitals, pharma companies and technology firms. Over the longer term, fault-tolerant machines could change how we discover drugs and personalize care.</p>
      <p>For healthcare professionals, researchers and students, the best move today is to build awareness: follow the field, learn the basics, and prepare for both the opportunities and the security implications.</p>

      <h3>Conclusion</h3>
      <p>Quantum computing will not cure diseases overnight. But by letting us simulate the molecular world more faithfully, it could shorten the road from a promising idea to a real medicine. The technology is early, the hype is real, and so is the potential. Healthcare is right to start preparing now.</p>

      <hr style="border: none; border-top: 1px solid var(--color-border); margin: 2rem 0;">
      <p style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--color-steel);">
        <strong>Sources:</strong> World Economic Forum Top 10 Emerging Technologies 2026 (via Meticulous Research); PHG Foundation on quantum computing in UK healthcare; Simmons &amp; Simmons, June 2026; Frontiers in Medicine review on quantum computing in clinical care; BioSpectrum Asia on quantum diagnostics; Research and Markets healthcare quantum forecast, September 2026.
      </p>
    `
  },
  {
    id: "art-01",
    slug: "universe-as-a-question",
    title: "The Universe as a Question",
    subtitle: "Why understanding the cosmos is fundamentally an inquiry into the nature of the observer.",
    category: "Philosophy",
    date: "October 2026",
    tags: ["Cosmology", "Measurement", "Epistemology"],
    excerpt: "We often treat physical laws as objective rules waiting in an empty room. But every measurement is an interaction, every equation a dialogue between matter and the mind that observes it.",
    content: `
      <p>In classical physics, the universe was imagined as a clockwork mechanism — an intricate array of gears spinning predictably across absolute space and time. In this picture, the observer was merely a detached spectator peering through a glass window.</p>
      
      <h3>The Collapse of Detached Observation</h3>
      <p>The twentieth century shattered that comfortable detachment. In quantum mechanics, the act of measurement cannot be disentangled from the state of the system being observed. To extract information is to participate. Werner Heisenberg noted that what we observe is not nature itself, but nature exposed to our method of questioning.</p>
      
      <blockquote>“The frontier of physics is no longer just about discovering new particles; it is about confronting the limits of what a mind embedded within the universe can determine about the whole.”</blockquote>

      <p>When we look through our telescopes or compute spectral lines on supercomputers, we are not outside spectators. We are matter that has become conscious, looking back upon the cosmic sequence that forged its own elements. The universe is not an answer waiting to be memorized; it is an open question waiting for better formulation.</p>
      
      <h3>Consequences for the Scientific Method</h3>
      <p>Recognizing the observer’s inescapable presence does not mean physics descends into mere subjectivity. Rather, it demands a higher rigor: an accounting not only of the system under study, but of the boundary conditions imposed by our experimental apparatus and sensory apparatus. As students and researchers, whenever we set up an experiment, we are not merely measuring an external object; we are asking the cosmos a question in our own mathematical tongue.</p>
    `
  },
  {
    id: "art-02",
    slug: "quantum-mechanics-uncertainty",
    title: "What Quantum Mechanics Teaches Us About Uncertainty",
    subtitle: "Moving beyond the popular myth of 'being in two places at once' toward geometric humility.",
    category: "Quantum Computing",
    date: "October 2026",
    tags: ["Quantum", "Hilbert Space", "Heisenberg"],
    excerpt: "Uncertainty is not a defect of our instruments. It is a fundamental property of non-commuting observables in Hilbert space — and an invitation to embrace human limits.",
    content: `
      <p>Popular science frequently characterizes quantum uncertainty as a mechanical limitation: if only our laser sensors were gentler, we could pinpoint both position and momentum without disturbance. But Heisenberg’s principle is not an instrument flaw; it is an inherent mathematical theorem governing Fourier pairs.</p>
      
      <h3>The Geometry of Superposition</h3>
      <p>A qubit in state $|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle$ is not confused about its identity. It occupies a precise point on the surface of the Bloch sphere. The quantum magic lies not in fuzziness, but in relative phase: the mathematical sign and angle between complex amplitudes that allow constructive and destructive interference.</p>
      
      <p>This carries a profound philosophical resonance for an engineering student: certainty is not the only metric of rigor. Working inside quantum information teaches us how to compute within probabilities, shaping interference patterns where classical certainty cannot tread.</p>
      
      <h3>Why Uncertainty Cultivates Humility</h3>
      <p>When you spend hours analyzing quantum operators that do not commute ($[\\hat{A}, \\hat{B}] \\neq 0$), you start to appreciate that the order of interactions changes reality. In life as in quantum mechanics, you cannot extract every piece of data simultaneously without modifying the trajectory. Uncertainty is not ignorance; it is the structural canvas upon which the cosmos breathes.</p>
    `
  },
  {
    id: "art-03",
    slug: "engineering-making-imagination-real",
    title: "Engineering Is the Art of Making Imagination Real",
    subtitle: "Why Tony Stark's archetype matters: the bridge between abstract equations and physical devices.",
    category: "Engineering",
    date: "October 2026",
    tags: ["Invention", "Prototyping", "Design"],
    excerpt: "Mathematics gives ideas form; engineering gives them consequence. How building imperfect prototypes grounds theoretical daydreams in the physical world.",
    content: `
      <p>There is an old divide between the pure theorist and the practical builder. The theorist seeks elegance; the engineer demands that the circuit doesn’t overheat and the bridge doesn’t resonate to destruction.</p>
      
      <h3>The Crucible of Prototyping</h3>
      <p>Growing up fascinated by the inventive spirit of Tony Stark, I came to realize that the true thrill of engineering is not shiny gadgets, but the relentless willingness to iterate through failure. You simulate, you solder, you calculate impedances, and reality immediately corrects your arrogance.</p>
      
      <blockquote>“Engineering is where theoretical daydreams meet the unyielding laws of thermodynamics. It is the hardest, most honest conversation you can have with reality.”</blockquote>
      
      <p>Building something real — whether a piece of open-source scientific software, an analog amplifier, or an experimental algorithm — is the ultimate bridge between imagination and utility. When code executes or current flows through traces you laid down by hand, you realize you haven't just studied physical laws; you have cooperated with them to bring something new into the world.</p>
    `
  },
  {
    id: "art-04",
    slug: "mathematics-hidden-everyday-life",
    title: "The Mathematics Hidden in Everyday Life",
    subtitle: "From Fourier transforms in cathedral echoes to differential equations in morning coffee.",
    category: "Mathematics",
    date: "October 2026",
    tags: ["Harmonics", "Fourier", "Patterns"],
    excerpt: "Mathematics is not an arbitrary set of exam questions; it is the hidden grammar beneath the physical world.",
    content: `
      <p>When Jean-Baptiste Fourier asserted that any periodic waveform could be synthesized from a sum of pure sine and cosine waves, mathematicians resisted. It seemed impossible that jagged, abrupt shapes could emerge from smooth circular rotations.</p>
      
      <h3>The Music of Harmonics</h3>
      <p>Yet today, Fourier analysis is the silent pulse of our civilization. It compresses the images on our phones, enables MRI scans to peer inside living tissue, and decomposes the roar of a jet engine into distinct acoustic frequencies. When you listen to rain on a window, you are experiencing nature performing real-time harmonic integration.</p>
      
      <p>Every time hot water diffuses through ground beans, heat equations (Fick’s laws of diffusion and the heat conduction equation) dictate the velocity of the aroma. To look at everyday reality through the lens of mathematics is to discover that nothing is ordinary. Everything is singing an exact, reproducible song.</p>
    `
  },
  {
    id: "art-05",
    slug: "knowledge-and-responsibility",
    title: "With Great Knowledge Comes Great Responsibility",
    subtitle: "The Peter Parker principle in modern research, artificial intelligence, and applied science.",
    category: "Personal Reflections",
    date: "October 2026",
    tags: ["Ethics", "Responsibility", "Humanity"],
    excerpt: "As students and engineers, we are handed tools of unprecedented computational and physical power. How do we ensure our inventions serve human dignity?",
    content: `
      <p>Peter Parker’s journey has always resonated with me not because of acrobatics or spider powers, but because of his central vulnerability: he is a bright student who made a mistake of inaction and had to live with the gravity of consequences.</p>
      
      <h3>The Dual Edge of Technical Capability</h3>
      <p>Science gives us power; it does not automatically give us wisdom. An algorithm designed for computational optimization can be repurposed for surveillance. High-speed electrical engineering can build medical monitors or guided missiles. As young researchers and builders, we must never hide behind technical neutrality.</p>
      
      <blockquote>“Before asking whether a system can be built, we must ask who it will protect, who it might harm, and whether it honors the human spirit.”</blockquote>
      
      <p>In our code, in our equations, in the architectures we draft late into the night, ethics is not a secondary elective. It is the primary design specification.</p>
    `
  },
  {
    id: "art-06",
    slug: "why-believe-impossible-ideas",
    title: "Why I Still Believe in Impossible Ideas",
    subtitle: "A student’s defense of audacious curiosity against cynicism and premature practicality.",
    category: "Science & Technology",
    date: "October 2026",
    tags: ["Curiosity", "Innovation", "Frontiers"],
    excerpt: "Every technology we take for granted — flight, microprocessors, MRI scanners — was once categorized as impossible by sensible people.",
    content: `
      <p>There is a peculiar brand of sophistication that mistakes cynicism for intelligence. It is always safer to explain why an idea cannot work than to commit oneself to the grueling work of making it work.</p>
      
      <h3>The Anatomy of Historical Impossibilities</h3>
      <p>Every major breakthrough in physical science began as an absurdity. When James Clerk Maxwell united electricity and magnetism into four differential equations predicting invisible electromagnetic waves traveling at the speed of light, his contemporaries were baffled. Daring to explore what is unproven is not naivety; it is the foundational requirement for discovery.</p>
      
      <p>If we only work on problems where success is guaranteed, we are merely doing routine administrative maintenance on existing knowledge. Breakthroughs belong to those who are willing to be considered foolish for six months or six years until the proof crystallizes.</p>
    `
  },
  {
    id: "art-07",
    slug: "things-equations-cannot-tell-us",
    title: "The Things Equations Cannot Tell Us",
    subtitle: "Why the physicist must also write verses when mathematical formalism reaches its boundary.",
    category: "Poetry",
    date: "October 2026",
    tags: ["Poetry", "Consciousness", "Meaning"],
    excerpt: "An equation tells you the trajectory of a falling star, but not why an observer’s heart aches while watching it streak across the night sky.",
    content: `
      <p>Mathematical formalism is the most precise language humanity has ever developed. But its precision is achieved by deliberately filtering out subjective experience. Thermodynamics can tell you the exact rate of entropy increase in a dying campfire; it cannot record what it felt like to sit beside it in silence with someone you loved.</p>
      
      <h3>The Complementarity of Verse and Calculation</h3>
      <p>Poetry is not the enemy of science; it is its quiet companion. Where physics charts the external coordinates of reality, poetry records the interior resonance of living inside that reality. We do not cease being humans when we step into a laboratory; if anything, understanding how vast and ancient the universe is should make our fleeting moments of love, sadness, and awe all the more precious.</p>
    `
  },
  {
    id: "art-08",
    slug: "journey-through-science-and-self-doubt",
    title: "A Student's Journey Through Science and Self-Doubt",
    subtitle: "Honest field notes on being an engineering student, failing tests, and learning to persist.",
    category: "Personal Reflections",
    date: "October 2026",
    tags: ["Student Life", "Failure", "Perseverance"],
    excerpt: "Science textbooks present finished results as if they were born effortlessly. Real learning is full of confusion, self-doubt, and the quiet dignity of trying again.",
    content: `
      <p>Textbooks are written in reverse. They start with the clean axiom, march through tidy lemmas, and conclude with Q.E.D. They hide the late-night dead ends, the wasted sheets of calculations, and the stomach-knotting dread of an equation that refuses to balance.</p>
      
      <h3>The Dignity of the Second Attempt</h3>
      <p>Admitting that a concept is difficult does not make you unfit for science. The greatest researchers in history were frequently bewildered. Self-doubt is not a sign that you should leave the laboratory; it is proof that you respect the magnitude of the problem.</p>
      
      <blockquote>“The only real failure in scientific pursuit is mistaking temporary confusion for permanent incapacity. Keep your notebook open.”</blockquote>
      
      <p>When you fail an exam or spend three weeks chasing a bug in your simulation, remember: the universe does not yield its secrets to speed. It yields them to patience.</p>
    `
  }
];

function calculateReadingTime(html) {
  const words = html.replace(/<[^>]*>/g, '').trim().split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 190))} min read`;
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function generateArticlePage(art, index) {
  const readTime = calculateReadingTime(art.content);
  const prev = index > 0 ? articles[index - 1] : null;
  const next = index < articles.length - 1 ? articles[index + 1] : null;
  const related = articles.filter(a => a.id !== art.id && (a.category === art.category || Math.random() > 0.5)).slice(0, 2);

  const cleanTitle = art.title;

  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(cleanTitle)} — YUME | Saim Ali Abbasi</title>
  <meta name="description" content="${escapeHtml(art.excerpt)}">
  <meta name="author" content="${author.name}">
  
  <!-- Canonical and Open Graph Meta -->
  <link rel="canonical" href="${author.siteUrl}/blog/${art.slug}.html">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtml(cleanTitle)} — YUME">
  <meta property="og:description" content="${escapeHtml(art.excerpt)}">
  <meta property="og:url" content="${author.siteUrl}/blog/${art.slug}.html">
  <meta property="og:site_name" content="YUME (夢)">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(cleanTitle)} — YUME">
  <meta name="twitter:description" content="${escapeHtml(art.excerpt)}">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23B3121F'/><text x='50' y='68' font-size='55' font-family='serif' fill='%23FFFFFF' text-anchor='middle'>夢</text></svg>">

  <!-- Typography: Space Grotesk, Inter, Cormorant Garamond, JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Stylesheet -->
  <link rel="stylesheet" href="../style.css">
</head>
<body class="theme-light article-page">

  <!-- STICKY TOP READING PROGRESS INDICATOR -->
  <div class="reading-progress-fixed" aria-hidden="true">
    <div id="reading-progress-bar" class="reading-progress-fixed-bar"></div>
  </div>

  <!-- SKIP TO MAIN LINK -->
  <a href="#article-main-content" class="skip-to-content">Skip to article content</a>

  <!-- SITE HEADER / NAVIGATION -->
  <header class="site-header scrolled" id="site-header">
    <div class="header-inner">
      <a href="../index.html" class="header-logo" aria-label="YUME Homepage">
        <span class="logo-text">YUME</span>
        <span class="logo-kanji-seal">夢</span>
      </a>

      <nav class="site-nav" id="site-nav" aria-label="Primary Navigation">
        <ul class="nav-list">
          <li><a href="../index.html" class="nav-link">Home</a></li>
          <li><a href="../index.html#journal" class="nav-link active">Journal</a></li>
          <li><a href="../index.html#verses" class="nav-link">Dream Verses</a></li>
          <li><a href="../index.html#about" class="nav-link">About</a></li>
          <li><a href="../index.html#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <div class="header-actions">
        <!-- Theme Toggle -->
        <button type="button" class="theme-toggle-btn" id="theme-toggle" aria-label="Toggle Light and Dark Mode">
          <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>

        <!-- Mobile Menu Toggle -->
        <button type="button" class="mobile-toggle-btn" id="mobile-menu-toggle" aria-label="Toggle Navigation Menu" aria-expanded="false">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>
  </header>

  <!-- MAIN ARTICLE CONTAINER -->
  <main id="article-main-content" class="article-page-main">
    <div class="article-container-narrow">
      
      <!-- BREADCRUMB NAVIGATION -->
      <nav class="article-breadcrumb-nav" aria-label="Breadcrumb">
        <a href="../index.html">Home</a>
        <span class="breadcrumb-sep">/</span>
        <a href="../index.html#journal">Journal</a>
        <span class="breadcrumb-sep">/</span>
        <span aria-current="page">${escapeHtml(art.category)}</span>
      </nav>

      <!-- ARTICLE META & HEADER -->
      <header class="article-meta-header">
        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.85rem; flex-wrap: wrap;">
          <span class="article-cat-badge">${escapeHtml(art.category)}</span>
          <span class="gold-date-badge">${escapeHtml(art.date)}</span>
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--color-steel);">&bull; ${readTime}</span>
        </div>

        <h1 class="article-standalone-title">${escapeHtml(art.title)}</h1>
        <p class="article-standalone-excerpt">${escapeHtml(art.subtitle || art.excerpt)}</p>

        <div class="article-byline-bar">
          <div class="byline-author">
            By <strong>${author.name}</strong> &mdash; <span>Engineering Student & Researcher</span>
          </div>
          
          <div class="article-actions-group">
            <button type="button" class="article-copy-btn" id="copy-btn" title="Copy article link to clipboard">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span id="copy-btn-text">Share / Copy Link</span>
            </button>
          </div>
        </div>

        <!-- Tags Row -->
        <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-top: 1rem;">
          ${art.tags.map(t => `<span class="entry-tag">#${escapeHtml(t)}</span>`).join('')}
        </div>
      </header>

      <!-- ARTICLE FULL CONTENT BODY -->
      <article class="article-content-body">
        ${art.content}
      </article>

      <!-- BOTTOM NAVIGATION: PREV & NEXT ARTICLES -->
      <nav class="article-bottom-navigation" aria-label="Article pagination">
        <div class="article-nav-cards-grid">
          ${prev ? `
            <a href="${prev.slug}.html" class="nav-card-item nav-card-prev">
              <span class="nav-card-label">&larr; PREVIOUS DISPATCH</span>
              <span class="nav-card-title">${escapeHtml(prev.title)}</span>
            </a>
          ` : `
            <div class="nav-card-item" style="opacity: 0.4; cursor: default;">
              <span class="nav-card-label">&larr; START OF JOURNAL</span>
              <span class="nav-card-title" style="font-size: 0.95rem;">First dispatch in archive</span>
            </div>
          `}

          ${next ? `
            <a href="${next.slug}.html" class="nav-card-item nav-card-next" style="text-align: right;">
              <span class="nav-card-label">NEXT DISPATCH &rarr;</span>
              <span class="nav-card-title">${escapeHtml(next.title)}</span>
            </a>
          ` : `
            <div class="nav-card-item" style="text-align: right; opacity: 0.4; cursor: default;">
              <span class="nav-card-label">LATEST DISPATCH &rarr;</span>
              <span class="nav-card-title" style="font-size: 0.95rem;">Most recent writing</span>
            </div>
          `}
        </div>

        <div class="back-to-journal-row">
          <a href="../index.html#journal" class="btn-back-journal">
            &larr; Back to YUME Journal Archive
          </a>
        </div>
      </nav>

      <!-- RELATED ARTICLES -->
      <section class="related-section" aria-labelledby="related-heading">
        <h3 id="related-heading" class="related-section-title">// RELATED DISPATCHES IN SCIENCE & PHILOSOPHY</h3>
        <div class="related-articles-grid">
          ${related.map(rel => `
            <a href="${rel.slug}.html" class="related-article-card">
              <div>
                <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--color-gold); font-weight: 600;">${escapeHtml(rel.category)}</span>
                <h4 style="font-family: var(--font-serif); font-size: 1.15rem; margin: 0.4rem 0 0.5rem; color: var(--color-text-primary);">${escapeHtml(rel.title)}</h4>
                <p style="font-size: 0.85rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">${escapeHtml(rel.excerpt.slice(0, 110))}...</p>
              </div>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--color-reactor-red); margin-top: 1rem; display: block;">Read Article &rarr;</span>
            </a>
          `).join('')}
        </div>
      </section>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top-row">
        <div class="footer-brand">
          <div class="footer-logo">
            <span class="logo-text">YUME</span>
            <span class="logo-kanji-seal">夢</span>
          </div>
          <p class="footer-tagline">“Every theorem started as a dream.”</p>
        </div>
        <div class="footer-links-col">
          <span class="footer-col-title">NAVIGATION</span>
          <ul class="footer-links-list">
            <li><a href="../index.html">Home</a></li>
            <li><a href="../index.html#journal">Journal</a></li>
            <li><a href="../index.html#verses">Dream Verses</a></li>
            <li><a href="../index.html#about">About</a></li>
            <li><a href="../index.html#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-links-col">
          <span class="footer-col-title">CONNECT</span>
          <ul class="footer-links-list">
            <li><a href="mailto:${author.email}">Email</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a></li>
            <li><a href="https://x.com" target="_blank" rel="noopener">X / Twitter</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom-row">
        <p class="footer-copy">&copy; 2026 ${author.name}. All rights reserved.</p>
        <p class="footer-built">Engineered with HTML5, CSS3 &amp; Vanilla JavaScript &bull; Hosted on GitHub Pages</p>
      </div>
    </div>
  </footer>

  <!-- STANDALONE ARTICLE SCRIPT -->
  <script>
    // Theme Management
    (function() {
      const root = document.documentElement;
      const toggle = document.getElementById('theme-toggle');
      const savedTheme = localStorage.getItem('yume_blog_theme') || 'light';
      
      function setTheme(t) {
        root.setAttribute('data-theme', t);
        document.body.className = 'article-page theme-' + t;
        localStorage.setItem('yume_blog_theme', t);
      }
      
      setTheme(savedTheme);
      
      if (toggle) {
        toggle.addEventListener('click', function() {
          const current = root.getAttribute('data-theme') || 'light';
          setTheme(current === 'light' ? 'dark' : 'light');
        });
      }

      // Mobile Menu Toggle
      const mobileBtn = document.getElementById('mobile-menu-toggle');
      const nav = document.getElementById('site-nav');
      if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', function() {
          const open = nav.classList.toggle('open');
          mobileBtn.setAttribute('aria-expanded', String(open));
        });
      }

      // Reading Progress Bar
      const progressBar = document.getElementById('reading-progress-bar');
      window.addEventListener('scroll', function() {
        const docElem = document.documentElement;
        const totalHeight = docElem.scrollHeight - docElem.clientHeight;
        const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        if (progressBar) progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
      }, { passive: true });

      // Share / Copy Link
      const copyBtn = document.getElementById('copy-btn');
      const copyText = document.getElementById('copy-btn-text');
      if (copyBtn) {
        copyBtn.addEventListener('click', function() {
          const url = window.location.href;
          if (navigator.clipboard) {
            navigator.clipboard.writeText(url).then(function() {
              copyText.textContent = "Link Copied!";
              setTimeout(function() { copyText.textContent = "Share / Copy Link"; }, 2200);
            }).catch(function() {
              fallbackCopy(url);
            });
          } else {
            fallbackCopy(url);
          }
        });
      }

      function fallbackCopy(text) {
        const input = document.createElement('input');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        try {
          document.execCommand('copy');
          copyText.textContent = "Link Copied!";
          setTimeout(function() { copyText.textContent = "Share / Copy Link"; }, 2200);
        } catch (e) {
          copyText.textContent = "Press Ctrl+C to copy";
        }
        document.body.removeChild(input);
      }
    })();
  </script>
</body>
</html>`;
}

// Generate each article page
articles.forEach((art, idx) => {
  const filePath = path.join(blogDir, `${art.slug}.html`);
  fs.writeFileSync(filePath, generateArticlePage(art, idx), 'utf8');
  console.log(`Generated blog/${art.slug}.html`);
});

// Generate blog/index.html (Archive view / Redirect to #journal)
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=../index.html#journal">
  <title>YUME Journal Archive — Saim Ali Abbasi</title>
  <script>window.location.replace('../index.html#journal');</script>
</head>
<body style="font-family: sans-serif; text-align: center; padding: 4rem;">
  <h2>Redirecting to YUME Journal...</h2>
  <p><a href="../index.html#journal">Click here if not redirected automatically</a></p>
</body>
</html>`;
fs.writeFileSync(path.join(blogDir, 'index.html'), indexHtml, 'utf8');
console.log('Generated blog/index.html');

// Generate blog/404.html (Article Not Found)
const notFoundHtml = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dispatch Not Found — YUME | Saim Ali Abbasi</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body class="theme-light">
  <div style="min-height: 80vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem;">
    <div style="font-family: var(--font-mono); color: var(--color-reactor-red); font-size: 0.85rem; letter-spacing: 0.15em; margin-bottom: 1rem;">// 404 &bull; QUANTUM STATE COLLAPSED</div>
    <h1 style="font-family: var(--font-serif); font-size: 3rem; margin-bottom: 1rem; color: var(--color-text-primary);">Dispatch Not Found</h1>
    <p style="color: var(--color-text-secondary); max-width: 500px; line-height: 1.6; margin-bottom: 2rem;">The article or experiment you are looking for has either evolved or shifted to an unobserved coordinate.</p>
    <a href="../index.html#journal" class="btn btn-primary">&larr; Return to YUME Journal</a>
  </div>
</body>
</html>`;
fs.writeFileSync(path.join(blogDir, '404.html'), notFoundHtml, 'utf8');
console.log('Generated blog/404.html');

console.log('All 8 individual article pages successfully generated in /blog directory.');
