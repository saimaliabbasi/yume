/**
 * ============================================================================
 * YUME (夢) — THE PERSONAL BLOG OF SAIM ALI ABBASI
 * Science, Philosophy & Poetry
 * ============================================================================
 * Zero-dependency vanilla ES6+ architecture for GitHub Pages deployment.
 * Everything can be edited in SITE_DATA below.
 */

'use strict';

/* ============================================================================
   01. EDITABLE DATA OBJECT (SITE_DATA)
   Modify this central data store to add blog posts, poems, or update info.
   ============================================================================ */
const SITE_DATA = {
  // --------------------------------------------------------------------------
  // A. Author Profile & Identity
  // --------------------------------------------------------------------------
  author: {
    name: "Saim Ali Abbasi",
    title: "Engineering Student, Scientific Explorer & Poet",
    tagline: "Where dreams meet the hardest problems.",
    signaturePhilosophy: "I dream in equations. I question in poetry. I build somewhere between the two.",
    currentlyThinkingAbout: "Non-equilibrium thermodynamics in biological networks & topological quantum states",
    bio: "I am Saim Ali Abbasi. I am drawn to the places where science meets uncertainty, where mathematics gives shape to invisible ideas, and where engineering turns imagination into something real. I write because some questions refuse to stay inside equations. I explore because the unknown still has something to teach me. And I build because I believe that an idea becomes more meaningful when it can make a difference beyond its creator. YUME is my growing collection of discoveries, unfinished thoughts, poetry, experiments, and questions I have not yet learned to answer.",
    interests: [
      "Applied Physics",
      "Applied Mathematics",
      "Quantum Computing",
      "Electrical Engineering",
      "Algorithms & Complexity",
      "Poetic Form & Consciousness",
      "Scientific Software"
    ],
    email: "contact@saimaliabbasi.me",
    github: "saimaliabbasi",
    linkedin: "saimaliabbasi",
    xTwitter: "saimaliabbasi",
    scholar: "https://scholar.google.com",
    siteUrl: "https://saim-ali-abbasi.github.io/yume"
  },

  // --------------------------------------------------------------------------
  // B. Blog Categories
  // --------------------------------------------------------------------------
  categories: [
    "All",
    "Physics",
    "Mathematics",
    "Quantum Computing",
    "Engineering",
    "Philosophy",
    "Poetry",
    "Personal Reflections",
    "Science & Technology"
  ],

  // ID of the article displayed in the prominent featured slot
  featuredArticleId: "art-09",

  // --------------------------------------------------------------------------
  // C. The Journal Articles (Editable Sample Dispatches)
  // --------------------------------------------------------------------------
  articles: [
    {
      id: "art-09",
      slug: "quantum-computing-in-medicine",
      title: "Quantum Computing in Medicine: From Molecules to Medicines",
      subtitle: "How superposition, entanglement, and hybrid quantum-classical algorithms are reshaping drug discovery and personalized clinical care.",
      category: "Quantum Computing",
      date: "October 23, 2026",
      updated: null,
      excerpt: "For decades, doctors and scientists have relied on faster classical computers. But molecular biology is quantum chemistry at its core. Here is how quantum computing could transform drug discovery, genomics, and clinical medicine.",
      featured: true,
      tags: ["Quantum Computing", "Medicine", "Molecular Simulation", "Genomics", "Healthcare"],
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
      updated: null,
      excerpt: "We often treat physical laws as objective rules waiting in an empty room. But every measurement is an interaction, every equation a dialogue between matter and the mind that observes it.",
      featured: false,
      tags: ["Cosmology", "Measurement", "Epistemology"],
      content: `
        <p>In classical physics, the universe was imagined as a clockwork mechanism — an intricate array of gears spinning predictably across absolute space and time. In this picture, the observer was merely a detached spectator peering through a glass window.</p>
        
        <h3>The Collapse of Detached Observation</h3>
        <p>The twentieth century shattered that comfortable detachment. In quantum mechanics, the act of measurement cannot be disentangled from the state of the system being observed. To extract information is to participate. Werner Heisenberg noted that what we observe is not nature itself, but nature exposed to our method of questioning.</p>
        
        <blockquote>“The frontier of physics is no longer just about discovering new particles; it is about confronting the limits of what a mind embedded within the universe can determine about the whole.”</blockquote>

        <p>When we look through our telescopes or compute spectral lines on supercomputers, we are not outside spectators. We are matter that has become conscious, looking back upon the cosmic sequence that forged its own elements. The universe is not an answer waiting to be memorized; it is an open question waiting for better formulation.</p>
      `
    },
    {
      id: "art-02",
      slug: "quantum-mechanics-uncertainty",
      title: "What Quantum Mechanics Teaches Us About Uncertainty",
      subtitle: "Moving beyond the popular myth of 'being in two places at once' toward geometric humility.",
      category: "Quantum Computing",
      date: "October 2026",
      updated: null,
      excerpt: "Uncertainty is not a defect of our instruments. It is a fundamental property of non-commuting observables in Hilbert space — and an invitation to embrace human limits.",
      featured: false,
      tags: ["Quantum", "Hilbert Space", "Heisenberg"],
      content: `
        <p>Popular science frequently characterizes quantum uncertainty as a mechanical limitation: if only our laser sensors were gentler, we could pinpoint both position and momentum without disturbance. But Heisenberg’s principle is not an instrument flaw; it is an inherent mathematical theorem governing Fourier pairs.</p>
        
        <h3>The Geometry of Superposition</h3>
        <p>A qubit in state $|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle$ is not confused about its identity. It occupies a precise point on the surface of the Bloch sphere. The quantum magic lies not in fuzziness, but in relative phase: the mathematical sign and angle between complex amplitudes that allow constructive and destructive interference.</p>
        
        <p>This carries a profound philosophical resonance for an engineering student: certainty is not the only metric of rigor. Working inside quantum information teaches us how to compute within probabilities, shaping interference patterns where classical certainty cannot tread.</p>
      `
    },
    {
      id: "art-03",
      slug: "engineering-making-imagination-real",
      title: "Engineering Is the Art of Making Imagination Real",
      subtitle: "Why Tony Stark's archetype matters: the bridge between abstract equations and physical devices.",
      category: "Engineering",
      date: "September 2026",
      updated: null,
      excerpt: "Mathematics gives ideas form; engineering gives them consequence. How building imperfect prototypes grounds theoretical daydreams in the physical world.",
      featured: false,
      tags: ["Invention", "Prototyping", "Design"],
      content: `
        <p>There is an old divide between the pure theorist and the practical builder. The theorist seeks elegance; the engineer demands that the circuit doesn’t overheat and the bridge doesn’t resonate to destruction.</p>
        
        <h3>The Crucible of Prototyping</h3>
        <p>Growing up fascinated by the inventive spirit of Tony Stark, I came to realize that the true thrill of engineering is not shiny gadgets, but the relentless willingness to iterate through failure. You simulate, you solder, you calculate impedances, and reality immediately corrects your arrogance.</p>
        
        <blockquote>“Engineering is where theoretical daydreams meet the unyielding laws of thermodynamics. It is the hardest, most honest conversation you can have with reality.”</blockquote>
        
        <p>Building something real — whether a piece of open-source scientific software, an analog amplifier, or an experimental algorithm — is the ultimate bridge between imagination and utility.</p>
      `
    },
    {
      id: "art-04",
      slug: "mathematics-hidden-everyday-life",
      title: "The Mathematics Hidden in Everyday Life",
      subtitle: "From Fourier transforms in cathedral echoes to differential equations in morning coffee.",
      category: "Mathematics",
      date: "September 2026",
      updated: null,
      excerpt: "Mathematics is not an arbitrary set of exam questions; it is the hidden grammar beneath the physical world.",
      featured: false,
      tags: ["Harmonics", "Fourier", "Patterns"],
      content: `
        <p>When Jean-Baptiste Fourier asserted that any periodic waveform could be synthesized from a sum of pure sine and cosine waves, mathematicians resisted. It seemed impossible that jagged, abrupt shapes could emerge from smooth circular rotations.</p>
        
        <p>Yet today, Fourier analysis is the silent pulse of our civilization. It compresses the images on our phones, enables MRI scans to peer inside living tissue, and decomposes the roar of a jet engine into distinct acoustic frequencies. When you listen to rain on a window, you are experiencing nature performing real-time harmonic integration.</p>
      `
    },
    {
      id: "art-05",
      slug: "knowledge-and-responsibility",
      title: "With Great Knowledge Comes Great Responsibility",
      subtitle: "The Peter Parker principle in modern research, artificial intelligence, and applied science.",
      category: "Personal Reflections",
      date: "August 2026",
      updated: null,
      excerpt: "As students and engineers, we are handed tools of unprecedented computational and physical power. How do we ensure our inventions serve human dignity?",
      featured: false,
      tags: ["Ethics", "Responsibility", "Humanity"],
      content: `
        <p>Peter Parker’s journey has always resonated with me not because of acrobatics or spider powers, but because of his central vulnerability: he is a bright student who made a mistake of inaction and had to live with the gravity of consequences.</p>
        
        <h3>The Dual Edge of Technical Capability</h3>
        <p>Science gives us power; it does not automatically give us wisdom. An algorithm designed for computational optimization can be repurposed for surveillance. High-speed electrical engineering can build medical monitors or guided missiles. As young researchers and builders, we must never hide behind technical neutrality.</p>
        
        <blockquote>“Before asking whether a system can be built, we must ask who it will protect, who it might harm, and whether it honors the human spirit.”</blockquote>
      `
    },
    {
      id: "art-06",
      slug: "why-believe-impossible-ideas",
      title: "Why I Still Believe in Impossible Ideas",
      subtitle: "A student’s defense of audacious curiosity against cynicism and premature practicality.",
      category: "Science & Technology",
      date: "August 2026",
      updated: null,
      excerpt: "Every technology we take for granted — flight, microprocessors, MRI scanners — was once categorized as impossible by sensible people.",
      featured: false,
      tags: ["Curiosity", "Innovation", "Frontiers"],
      content: `
        <p>There is a peculiar brand of sophistication that mistakes cynicism for intelligence. It is always safer to explain why an idea cannot work than to commit oneself to the grueling work of making it work.</p>
        
        <p>Every major breakthrough in physical science began as an absurdity. When James Clerk Maxwell united electricity and magnetism into four differential equations predicting invisible electromagnetic waves traveling at the speed of light, his contemporaries were baffled. Daring to explore what is unproven is not naivety; it is the foundational requirement for discovery.</p>
      `
    },
    {
      id: "art-07",
      slug: "things-equations-cannot-tell-us",
      title: "The Things Equations Cannot Tell Us",
      subtitle: "Why the physicist must also write verses when mathematical formalism reaches its boundary.",
      category: "Poetry",
      date: "July 2026",
      updated: null,
      excerpt: "An equation tells you the trajectory of a falling star, but not why an observer’s heart aches while watching it streak across the night sky.",
      featured: false,
      tags: ["Poetry", "Consciousness", "Meaning"],
      content: `
        <p>Mathematical formalism is the most precise language humanity has ever developed. But its precision is achieved by deliberately filtering out subjective experience. Thermodynamics can tell you the exact rate of entropy increase in a dying campfire; it cannot record what it felt like to sit beside it in silence with someone you loved.</p>
        
        <p>Poetry is not the enemy of science; it is its quiet companion. Where physics charts the external coordinates of reality, poetry records the interior resonance of living inside that reality.</p>
      `
    },
    {
      id: "art-08",
      slug: "journey-through-science-and-self-doubt",
      title: "A Student's Journey Through Science and Self-Doubt",
      subtitle: "Honest field notes on being an engineering student, failing tests, and learning to persist.",
      category: "Personal Reflections",
      date: "July 2026",
      updated: null,
      excerpt: "Science textbooks present finished results as if they were born effortlessly. Real learning is full of confusion, self-doubt, and the quiet dignity of trying again.",
      featured: false,
      tags: ["Student Life", "Failure", "Perseverance"],
      content: `
        <p>Textbooks are written in reverse. They start with the clean axiom, march through tidy lemmas, and conclude with Q.E.D. They hide the late-night dead ends, the wasted sheets of calculations, and the stomach-knotting dread of an equation that refuses to balance.</p>
        
        <p>Admitting that a concept is difficult does not make you unfit for science. The greatest researchers in history were frequently bewildered. Self-doubt is not a sign that you should leave the laboratory; it is proof that you respect the magnitude of the problem.</p>
      `
    }
  ],

  // --------------------------------------------------------------------------
  // D. Dream Verses (Poetry & Literary Inquiries)
  // --------------------------------------------------------------------------
  poems: [
    {
      id: "poem-01",
      title: "The Architecture of a Dream",
      date: "2026",
      theme: "Creation & Imagination",
      excerpt: "Before the scaffold meets the stone,\nbefore the iron learns to hold the heat,\na thought stands in the dark alone...",
      fullText: `Before the scaffold meets the stone,
before the iron learns to hold the heat,
a thought stands in the dark alone.

It has no hands, it has no feet,
yet measures horizons miles away,
where theorem and intuition meet.

We sketch the arch in pale grey,
hoping the numbers do not lie,
waiting for morning to display

the bridge we drafted in the sky.
And if it falls against the ground,
we sweep the ash, and ask it why.`
    },
    {
      id: "poem-02",
      title: "Between the Equation and the Abyss",
      date: "2026",
      theme: "Cosmology & Silence",
      excerpt: "The differential operator tracks the wave,\nacross the vacuum where no voices speak,\nthe quietest geometry we gave...",
      fullText: `The differential operator tracks the wave,
across the vacuum where no voices speak,
the quietest geometry we gave

to explain why certainty grows weak.
You stand upon the edge of what is known,
watching the interference break.

A single photon walks alone
through two slits carved in matter's bone,
as if a thousand ghosts had paved the stone.

Is it our gaze that keeps alive
the world that would dissolve unseen?
We ask the dark, and let it dream.`
    },
    {
      id: "poem-03",
      title: "A Universe Inside a Human Heart",
      date: "2026",
      theme: "Humanity & Wonder",
      excerpt: "Ten thousand billion atoms arranged in line,\nto beat in cadence sixty times each minute,\nignoring how the galaxies align...",
      fullText: `Ten thousand billion atoms arranged in line,
to beat in cadence sixty times each minute,
ignoring how the galaxies align.

And yet the universe is carried in it:
the memory of exploding stars,
the iron in the blood, the quiet limit

where human sorrow meets the scar
of time that moves in one direction only.
We look into the telescope so far,

forgetting that the dark is lonely
without an eye to witness what was wrought.
The stars are grand, but cannot think a thought.`
    },
    {
      id: "poem-04",
      title: "The Weight of Unanswered Questions",
      date: "2026",
      theme: "Perseverance & Mystery",
      excerpt: "Some questions are not doors to open wide,\nthey are the walls that give the room its form,\nthe quiet place where seekers hide...",
      fullText: `Some questions are not doors to open wide,
they are the walls that give the room its form,
the quiet place where seekers hide

away from certainty and storm.
You carry them through winter nights,
keeping the intellect alert and warm.

They do not dazzle like electric lights,
but guide like stars across a sea:
invitations to climb unfamiliar heights.`
    },
    {
      id: "poem-05",
      title: "A Letter to the Unknown",
      date: "2026",
      theme: "Frontiers & Discovery",
      excerpt: "To all the truths that sleep beneath the soil,\nto all the theorems unproven still,\nto every dream preserved in student toil...",
      fullText: `To all the truths that sleep beneath the soil,
to all the theorems unproven still,
to every dream preserved in student toil:

We do not conquer you with will,
nor claim you with a scientist’s name.
We approach with reverence up the hill,

content to hold a fragile flame,
glad that the cosmos still conceals
wonders that put our pride to shame.`
    }
  ],

  // --------------------------------------------------------------------------
  // E. Philosophy Quotations & Axioms
  // --------------------------------------------------------------------------
  philosophyQuotes: [
    {
      id: "phil-01",
      quote: "“Tony Stark reminds me of the ambition to build what seems impossible. Peter Parker reminds me that what we build matters less if we forget the people it is meant to help.”",
      theme: "Responsibility & Ambition"
    },
    {
      id: "phil-02",
      quote: "“Knowledge gives us new powers. Responsibility gives those powers direction.”",
      theme: "Ethics in Engineering"
    },
    {
      id: "phil-03",
      quote: "“Perhaps the universe is not impossible to understand. Perhaps we have only begun learning how to ask.”",
      theme: "Scientific Humility"
    },
    {
      id: "phil-04",
      quote: "“We build machines to extend our abilities, yet the most difficult machine to understand may still be the human mind.”",
      theme: "Consciousness & Computation"
    },
    {
      id: "phil-05",
      quote: "“An equation can describe a motion. A poem can ask what it means to watch something move and know that we, too, are passing through time.”",
      theme: "Science & Human Meaning"
    }
  ],

  // --------------------------------------------------------------------------
  // F. The Inventor's Notebook (Engineering & Ideas Under Construction)
  // --------------------------------------------------------------------------
  inventorNotebook: [
    {
      id: "note-01",
      title: "Quantum Computing Exploration",
      question: "Can topological phase gates reduce decoherence in 2-level systems?",
      status: "IN PROGRESS",
      statusClass: "in-progress",
      explanation: "Investigating non-Abelian anyon braiding matrices and unitary state transformations mapped on the Bloch sphere.",
      tags: ["Quantum Info", "Unitary Gates", "Topology"]
    },
    {
      id: "note-02",
      title: "Plasma Physics Idea",
      question: "How do non-linear magnetic fields stabilize high-beta confinement?",
      status: "EXPLORING",
      statusClass: "exploring",
      explanation: "Formulating Grad-Shafranov equilibrium conditions with generalized toroidal boundary current profiles.",
      tags: ["Plasma", "MHD", "Equilibrium"]
    },
    {
      id: "note-03",
      title: "Hardware Acceleration Experiment",
      question: "What is the optimal systolic array architecture for matrix exponentials?",
      status: "LEARNING",
      statusClass: "learning",
      explanation: "Synthesizing fixed-point tensor arithmetic units on FPGA to minimize latency in continuous physical simulations.",
      tags: ["FPGA", "Hardware", "Systolic Arrays"]
    },
    {
      id: "note-04",
      title: "Scientific Software Project",
      question: "Can browser-based numerical integrators maintain symplectic energy conservation?",
      status: "COMPLETED",
      statusClass: "completed",
      explanation: "Building zero-dependency WebAssembly numerical solvers that bring real-time physical simulation to students worldwide.",
      tags: ["Software", "Numerics", "WebAssembly"]
    }
  ]
};

/* ============================================================================
   02. DOM READY & APPLICATION CONTROLLER
   ============================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Author profile hydration
  hydrateAuthorData();

  // 2. Navigation & Sticky header
  initNavigation();

  // 3. Theme controller (Default light, toggle to dark)
  initTheme();

  // 4. Hero canvas particle & reactor animation
  initHeroCanvas();

  // 5. Hero role typing animation
  initHeroTyping();

  // 6. Journal: Categories, search, sorting & grid rendering
  initJournal();

  // 7. Dream Verses poetry section
  initPoetry();

  // 8. Philosophy axiom deck
  initPhilosophyDeck();

  // 9. The Inventor's Notebook & Wave Laboratory
  initInventorNotebook();
  initWaveLab();

  // 10. Contact form validation & static mailto dispatch
  initContactForm();

  // 11. Search modal overlay
  initSearchModal();

  // 12. Easter egg HUD overlay
  initEasterEgg();

  // 13. Ambient cursor glow
  initCursorGlow();
});

/* ============================================================================
   03. AUTHOR DATA HYDRATION
   ============================================================================ */
function hydrateAuthorData() {
  const a = SITE_DATA.author;
  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setTxt('hero-thinking-text', a.currentlyThinkingAbout);

  // Contact links
  const setLink = (id, text, href) => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = text;
      el.href = href;
    }
  };

  setLink('contact-email', a.email, `mailto:${a.email}`);
  const cleanHandle = (val, domain) => val.replace(new RegExp(`^(https?:\\/\\/)?(${domain}\\/)?`, 'i'), '');
  const gh = cleanHandle(a.github, 'github.com');
  const li = cleanHandle(a.linkedin, 'linkedin.com\\/in');
  const x = cleanHandle(a.xTwitter, 'x.com');

  setLink('contact-github', `github.com/${gh}`, `https://github.com/${gh}`);
  setLink('contact-linkedin', `linkedin.com/in/${li}`, `https://linkedin.com/in/${li}`);
  setLink('contact-x', `x.com/${x}`, `https://x.com/${x}`);
  
  const scholarEl = document.getElementById('contact-scholar');
  if (scholarEl) scholarEl.href = a.scholar;

  // Areas of interest tags
  const interestsContainer = document.getElementById('about-interests-list');
  if (interestsContainer) {
    interestsContainer.innerHTML = a.interests
      .map(item => `<span class="interest-tag">${escapeHtml(item)}</span>`)
      .join('');
  }
}

/* ============================================================================
   04. NAVIGATION & ACTIVE SECTION OBSERVER
   ============================================================================ */
function initNavigation() {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const nav = document.getElementById('site-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active section tracking via IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, { rootMargin: '-20% 0px -65% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
  }
}

/* ============================================================================
   05. THEME CONTROLLER (Default Light / Toggle Dark)
   ============================================================================ */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Default theme is explicitly 'light'
  const saved = safeGetStorage(localStorage, 'yume_blog_theme') || 'light';
  applyTheme(saved);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      applyTheme(next);
      safeSetStorage(localStorage, 'yume_blog_theme', next);
    });
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
  }
}

/* ============================================================================
   06. HERO CANVAS: SUBTLE REACTOR PARTICLES & MATHEMATICAL GRID
   ============================================================================ */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  const particleCount = 36;
  const particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: 1 + Math.random() * 2,
      opacity: 0.2 + Math.random() * 0.5
    });
  }

  let lastTime = performance.now();
  let animId;
  let isVisible = true;

  const heroSec = document.getElementById('hero');
  if ('IntersectionObserver' in window && heroSec) {
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
      if (isVisible) {
        lastTime = performance.now();
        loop();
      } else {
        cancelAnimationFrame(animId);
      }
    }, { threshold: 0.05 });
    observer.observe(heroSec);
  }

  function loop() {
    if (!isVisible) return;
    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const pColor = isDark ? 'rgba(224, 43, 43, ' : 'rgba(216, 32, 32, ';
    const lineColor = isDark ? 'rgba(201, 205, 211, 0.04)' : 'rgba(138, 144, 153, 0.08)';

    // Update & draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${pColor}${p.opacity})`;
      ctx.fill();

      // Connect near neighbors with delicate Spider-Man web-like linework
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    animId = requestAnimationFrame(loop);
  }

  loop();
}

/* ============================================================================
   07. HERO TYPING ANIMATION
   ============================================================================ */
function initHeroTyping() {
  const target = document.getElementById('typing-text');
  if (!target) return;

  const roles = [
    "Engineering student.",
    "Scientific explorer.",
    "Quantum computing enthusiast.",
    "Poet.",
    "Philosopher.",
    "Builder of ideas."
  ];

  let rIdx = 0;
  let cIdx = 0;
  let isBackspacing = false;
  const typeSpeed = 85;
  const backSpeed = 40;
  const pauseTime = 1900;

  function step() {
    const word = roles[rIdx];

    if (isBackspacing) {
      cIdx--;
      target.textContent = word.substring(0, cIdx);
    } else {
      cIdx++;
      target.textContent = word.substring(0, cIdx);
    }

    let delay = isBackspacing ? backSpeed : typeSpeed;

    if (!isBackspacing && cIdx === word.length) {
      delay = pauseTime;
      isBackspacing = true;
    } else if (isBackspacing && cIdx === 0) {
      isBackspacing = false;
      rIdx = (rIdx + 1) % roles.length;
      delay = 350;
    }

    setTimeout(step, delay);
  }

  step();
}

/* ============================================================================
   08. THE JOURNAL (EDITORIAL FEATURE, FILTERS, SEARCH & MODAL READER)
   ============================================================================ */
function initJournal() {
  const featContainer = document.getElementById('featured-article-container');
  const catContainer = document.getElementById('category-filters');
  const gridContainer = document.getElementById('articles-grid');
  const searchInput = document.getElementById('journal-search-input');
  const searchClear = document.getElementById('search-clear-btn');
  const sortSelect = document.getElementById('journal-sort-select');
  const resultsFeedback = document.getElementById('journal-results-count');

  if (!featContainer || !gridContainer) return;

  let activeCategory = "All";
  let searchQuery = "";
  let currentSort = "newest";

  // Render Category Filter Buttons
  if (catContainer) {
    catContainer.innerHTML = SITE_DATA.categories.map(cat => `
      <button type="button" class="category-btn ${cat === 'All' ? 'active' : ''}" data-cat="${escapeHtml(cat)}">
        ${escapeHtml(cat)}
      </button>
    `).join('');

    catContainer.querySelectorAll('.category-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        catContainer.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-cat') || 'All';
        renderArticles();
      });
    });
  }

  // Search Input Listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      if (searchClear) searchClear.hidden = searchQuery.length === 0;
      renderArticles();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      searchClear.hidden = true;
      renderArticles();
      searchInput?.focus();
    });
  }

  // Sort Select Listener
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderArticles();
    });
  }

  function calculateReadingTime(text) {
    const words = text.replace(/<[^>]*>/g, '').split(/\s+/).length;
    return `${Math.max(1, Math.ceil(words / 190))} min read`;
  }

  function renderArticles() {
    gridContainer.innerHTML = '';

    // Filter by Category
    let filtered = SITE_DATA.articles.filter(art => {
      const matchCat = activeCategory === 'All' || art.category.toLowerCase() === activeCategory.toLowerCase();
      if (!matchCat) return false;

      // Filter by Search Query
      if (searchQuery) {
        const titleMatch = art.title.toLowerCase().includes(searchQuery);
        const subMatch = (art.subtitle || '').toLowerCase().includes(searchQuery);
        const excerptMatch = art.excerpt.toLowerCase().includes(searchQuery);
        const contentMatch = art.content.toLowerCase().includes(searchQuery);
        const tagMatch = art.tags.some(t => t.toLowerCase().includes(searchQuery));
        return titleMatch || subMatch || excerptMatch || contentMatch || tagMatch;
      }
      return true;
    });

    // Sort Results
    if (currentSort === 'oldest') {
      filtered.reverse();
    } else if (currentSort === 'featured') {
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    // Results feedback counter
    if (resultsFeedback) {
      if (searchQuery || activeCategory !== 'All') {
        resultsFeedback.textContent = `Showing ${filtered.length} dispatch${filtered.length === 1 ? '' : 'es'} ${searchQuery ? `matching "${searchQuery}"` : ''} in ${activeCategory}.`;
      } else {
        resultsFeedback.textContent = '';
      }
    }

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="empty-state-notice" style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem;">
          <p style="font-family: var(--font-mono); color: var(--color-steel);">No dispatches found matching your search criteria.</p>
          <button type="button" class="btn btn-secondary btn-sm" id="reset-filter-btn" style="margin-top: 1rem;">Reset Filters</button>
        </div>
      `;
      document.getElementById('reset-filter-btn')?.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        searchQuery = '';
        activeCategory = 'All';
        catContainer?.querySelectorAll('.category-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-cat') === 'All');
        });
        renderArticles();
      });
      return;
    }

    // Render Grid Cards
    filtered.forEach(art => {
      const card = document.createElement('article');
      card.className = 'journal-article-card';
      card.innerHTML = `
        <div>
          <div class="card-top-meta">
            <span class="cat-pill">${escapeHtml(art.category)}</span>
            <span class="gold-date-badge">${escapeHtml(art.date)}</span>
          </div>
          <h3 class="card-title">
            <a href="blog/${encodeURIComponent(art.slug)}.html" class="article-title-link">${escapeHtml(art.title)}</a>
          </h3>
          <p class="card-excerpt">${escapeHtml(art.excerpt)}</p>
        </div>
        <div class="card-footer-meta">
          <span>${calculateReadingTime(art.content)}</span>
          <a href="blog/${encodeURIComponent(art.slug)}.html" class="btn-read-card">Read Article &rarr;</a>
        </div>
      `;
      gridContainer.appendChild(card);
    });
  }

  // Render Editorial Featured Article Hero
  const featArticle = SITE_DATA.articles.find(a => a.id === SITE_DATA.featuredArticleId) || SITE_DATA.articles[0];
  if (featArticle) {
    featContainer.innerHTML = `
      <article class="featured-editorial-card">
        <div class="featured-top-badge">&diams; FEATURED DISPATCH // ${escapeHtml(featArticle.category.toUpperCase())}</div>
        <h3 class="featured-article-title">
          <a href="blog/${encodeURIComponent(featArticle.slug)}.html" class="featured-title-link">${escapeHtml(featArticle.title)}</a>
        </h3>
        <p class="featured-excerpt">${escapeHtml(featArticle.excerpt)}</p>
        <div class="featured-meta-row">
          <span class="gold-date-badge">${escapeHtml(featArticle.date)}</span>
          <span class="cat-pill">${escapeHtml(featArticle.category)}</span>
          <span>&bull;</span>
          <span>${calculateReadingTime(featArticle.content)}</span>
          <a href="blog/${encodeURIComponent(featArticle.slug)}.html" class="btn-read-featured">Read Full Dispatch &rarr;</a>
        </div>
      </article>
    `;
  }

  renderArticles();
}

/* ============================================================================
   09. ACCESSIBLE ARTICLE MODAL READER
   ============================================================================ */
function openArticleModal(article) {
  const modal = document.getElementById('article-modal');
  const title = document.getElementById('modal-article-title');
  const subtitle = document.getElementById('modal-article-subtitle');
  const category = document.getElementById('modal-article-cat');
  const date = document.getElementById('modal-article-date');
  const readTime = document.getElementById('modal-article-time');
  const content = document.getElementById('modal-article-content');
  const scrollPane = document.getElementById('article-scroll-pane');
  const progressBar = document.getElementById('article-reading-progress');
  const closeBtn = document.getElementById('close-article-modal');
  const returnBtn = document.getElementById('modal-return-btn');
  const prevBtn = document.getElementById('article-prev-btn');
  const nextBtn = document.getElementById('article-next-btn');
  const prevTitle = document.getElementById('prev-article-name');
  const nextTitle = document.getElementById('next-article-name');
  const relatedGrid = document.getElementById('modal-related-grid');
  const copyBtn = document.getElementById('copy-article-link-btn');
  const copyTip = document.getElementById('copy-link-tip');

  if (!modal) return;

  function calculateReadingTime(text) {
    const words = text.replace(/<[^>]*>/g, '').split(/\s+/).length;
    return `${Math.max(1, Math.ceil(words / 190))} min read`;
  }

  title.textContent = article.title;
  subtitle.textContent = article.subtitle || article.excerpt;
  category.textContent = article.category;
  date.textContent = article.date;
  readTime.textContent = calculateReadingTime(article.content);
  content.innerHTML = article.content;

  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  if (scrollPane) scrollPane.scrollTop = 0;
  if (progressBar) progressBar.style.width = '0%';

  // Reading progress tracker
  if (scrollPane && progressBar) {
    scrollPane.onscroll = () => {
      const maxScroll = scrollPane.scrollHeight - scrollPane.clientHeight;
      const pct = maxScroll > 0 ? (scrollPane.scrollTop / maxScroll) * 100 : 0;
      progressBar.style.width = `${pct}%`;
    };
  }

  // Previous & Next navigation
  const currentIndex = SITE_DATA.articles.findIndex(a => a.id === article.id);
  const prevArticle = currentIndex > 0 ? SITE_DATA.articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < SITE_DATA.articles.length - 1 ? SITE_DATA.articles[currentIndex + 1] : null;

  if (prevBtn && prevTitle) {
    if (prevArticle) {
      prevBtn.style.visibility = 'visible';
      prevTitle.textContent = prevArticle.title;
      prevBtn.onclick = () => openArticleModal(prevArticle);
    } else {
      prevBtn.style.visibility = 'hidden';
    }
  }

  if (nextBtn && nextTitle) {
    if (nextArticle) {
      nextBtn.style.visibility = 'visible';
      nextTitle.textContent = nextArticle.title;
      nextBtn.onclick = () => openArticleModal(nextArticle);
    } else {
      nextBtn.style.visibility = 'hidden';
    }
  }

  // Related articles (matching category)
  if (relatedGrid) {
    const related = SITE_DATA.articles.filter(a => a.id !== article.id && a.category === article.category).slice(0, 2);
    if (related.length > 0) {
      relatedGrid.innerHTML = related.map(rel => `
        <div class="related-mini-card" data-rel-id="${rel.id}">
          <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--color-gold);">${escapeHtml(rel.category)}</span>
          <h4 style="font-family: var(--font-serif); font-size: 1.1rem; margin-top: 0.25rem;">${escapeHtml(rel.title)}</h4>
        </div>
      `).join('');
      relatedGrid.querySelectorAll('.related-mini-card').forEach((card, idx) => {
        card.addEventListener('click', () => openArticleModal(related[idx]));
      });
    } else {
      relatedGrid.innerHTML = `<p style="font-size: 0.85rem; color: var(--color-steel);">No other dispatches currently filed under ${escapeHtml(article.category)}.</p>`;
    }
  }

  // Copy link tool
  if (copyBtn) {
    copyBtn.onclick = () => {
      const shareUrl = `${window.location.origin}${window.location.pathname}#${article.slug}`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          if (copyTip) copyTip.textContent = "Copied!";
          setTimeout(() => { if (copyTip) copyTip.textContent = "Copy link"; }, 2000);
        });
      }
    };
  }

  const closeModal = () => {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  };

  closeBtn.onclick = closeModal;
  if (returnBtn) returnBtn.onclick = closeModal;
  modal.onclick = (e) => { if (e.target === modal) closeModal(); };

  window.onkeydown = (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  };

  closeBtn.focus();
}

/* ============================================================================
   10. DREAM VERSES — POETRY SECTION & MODAL
   ============================================================================ */
function initPoetry() {
  const grid = document.getElementById('poems-grid');
  const modal = document.getElementById('poem-modal');
  const title = document.getElementById('modal-poem-title');
  const date = document.getElementById('modal-poem-date');
  const theme = document.getElementById('modal-poem-theme');
  const body = document.getElementById('modal-poem-body');
  const closeBtn = document.getElementById('close-poem-modal');
  const bottomClose = document.getElementById('modal-close-poem-bottom');

  if (!grid || !modal) return;

  grid.innerHTML = SITE_DATA.poems.map(p => `
    <article class="poem-item-card">
      <div>
        <span class="poem-card-date">${escapeHtml(p.date)}</span>
        <h3 class="poem-card-title">${escapeHtml(p.title)}</h3>
        <p class="poem-card-excerpt">${escapeHtml(p.excerpt)}</p>
        <span class="poem-card-theme">${escapeHtml(p.theme)}</span>
      </div>
      <button type="button" class="btn-read-poem" data-poem-id="${p.id}">
        <span>READ FULL POEM</span>
        <span>&rarr;</span>
      </button>
    </article>
  `).join('');

  grid.querySelectorAll('.btn-read-poem').forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      const poem = SITE_DATA.poems[idx];
      title.textContent = poem.title;
      date.textContent = poem.date;
      theme.textContent = poem.theme;
      body.textContent = poem.fullText;
      modal.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
      closeBtn?.focus();
    });
  });

  const closePoem = () => {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', closePoem);
  bottomClose?.addEventListener('click', closePoem);
  modal.addEventListener('click', (e) => { if (e.target === modal) closePoem(); });
}

/* ============================================================================
   11. PHILOSOPHY AXIOMS DECK
   ============================================================================ */
function initPhilosophyDeck() {
  const quoteBody = document.getElementById('deck-quote-body');
  const quoteNum = document.getElementById('deck-quote-num');
  const quoteTheme = document.getElementById('deck-quote-theme');
  const prevBtn = document.getElementById('quote-prev-btn');
  const nextBtn = document.getElementById('quote-next-btn');
  const dotsContainer = document.getElementById('quote-dots');

  if (!quoteBody) return;

  let index = 0;
  const quotes = SITE_DATA.philosophyQuotes;

  function renderQuote() {
    const q = quotes[index];
    quoteBody.textContent = q.quote;
    if (quoteNum) quoteNum.textContent = `AXIOM 0${index + 1} / 0${quotes.length}`;
    if (quoteTheme) quoteTheme.textContent = q.theme;

    if (dotsContainer) {
      dotsContainer.innerHTML = quotes.map((_, i) => `
        <span class="deck-dot ${i === index ? 'active' : ''}"></span>
      `).join('');
    }
  }

  prevBtn?.addEventListener('click', () => {
    index = (index - 1 + quotes.length) % quotes.length;
    renderQuote();
  });

  nextBtn?.addEventListener('click', () => {
    index = (index + 1) % quotes.length;
    renderQuote();
  });

  renderQuote();
}

/* ============================================================================
   12. THE INVENTOR'S NOTEBOOK
   ============================================================================ */
function initInventorNotebook() {
  const grid = document.getElementById('notebook-grid');
  if (!grid) return;

  grid.innerHTML = SITE_DATA.inventorNotebook.map(item => `
    <article class="notebook-entry-card">
      <div>
        <span class="entry-status-badge ${item.statusClass}">${escapeHtml(item.status)}</span>
        <h3 class="entry-title">${escapeHtml(item.title)}</h3>
        <p class="entry-question">“${escapeHtml(item.question)}”</p>
        <p class="entry-desc">${escapeHtml(item.explanation)}</p>
      </div>
      <div class="entry-tags">
        ${item.tags.map(t => `<span class="entry-tag">${escapeHtml(t)}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

/* ============================================================================
   13. THE WAVE LABORATORY (INTERACTIVE CANVAS EXPERIMENT)
   ============================================================================ */
function initWaveLab() {
  const canvas = document.getElementById('wave-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const fSlider = document.getElementById('wave-freq-slider');
  const aSlider = document.getElementById('wave-amp-slider');
  const pSlider = document.getElementById('wave-phase-slider');
  const fNum = document.getElementById('wave-freq-num');
  const aNum = document.getElementById('wave-amp-num');
  const pNum = document.getElementById('wave-phase-num');
  const phaseTelemetry = document.getElementById('wave-phase-val');
  const stateTelemetry = document.getElementById('wave-state-val');
  const toggleBtn = document.getElementById('wave-toggle-btn');
  const resetBtn = document.getElementById('wave-reset-btn');

  let isPlaying = true;
  let time = 0;
  let lastTime = performance.now();

  function updateReadouts() {
    const f = parseFloat(fSlider?.value || '1.0');
    const a = parseFloat(aSlider?.value || '1.0');
    const p = parseFloat(pSlider?.value || '0.0');

    if (fNum) fNum.textContent = f.toFixed(1);
    if (aNum) aNum.textContent = a.toFixed(1);
    if (pNum) pNum.textContent = p.toFixed(2);
    if (phaseTelemetry) phaseTelemetry.textContent = `${p.toFixed(2)} rad`;

    if (stateTelemetry) {
      const modPhase = p % (Math.PI * 2);
      if (modPhase < 0.35 || modPhase > 5.93) {
        stateTelemetry.textContent = "Fully Constructive";
        stateTelemetry.className = "text-red";
      } else if (Math.abs(modPhase - Math.PI) < 0.35) {
        stateTelemetry.textContent = "Destructive (Cancellation)";
        stateTelemetry.className = "text-steel";
      } else {
        stateTelemetry.textContent = "Partial Superposition";
        stateTelemetry.className = "text-steel";
      }
    }
  }

  [fSlider, aSlider, pSlider].forEach(input => {
    input?.addEventListener('input', updateReadouts);
  });

  toggleBtn?.addEventListener('click', () => {
    isPlaying = !isPlaying;
    toggleBtn.textContent = isPlaying ? "Pause Wave" : "Resume Wave";
  });

  resetBtn?.addEventListener('click', () => {
    if (fSlider) fSlider.value = "1.0";
    if (aSlider) aSlider.value = "1.0";
    if (pSlider) pSlider.value = "0.0";
    time = 0;
    updateReadouts();
  });

  function renderWave() {
    const now = performance.now();
    const dt = (now - lastTime) / 1000;
    lastTime = now;

    if (isPlaying) time += dt;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const midY = h / 2;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    // Baseline grid
    ctx.strokeStyle = isDark ? 'rgba(201, 205, 211, 0.08)' : 'rgba(13, 15, 18, 0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, midY);
    ctx.lineTo(w, midY);
    ctx.stroke();

    const f = parseFloat(fSlider?.value || '1.0');
    const a = parseFloat(aSlider?.value || '1.0') * 45;
    const p = parseFloat(pSlider?.value || '0.0');

    const k = 0.02 * f;
    const omega = 2.4 * f;

    // Component wave 1 (faint reference)
    ctx.beginPath();
    for (let x = 0; x < w; x++) {
      const y = midY - Math.sin(k * x - omega * time) * (a * 0.5);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = isDark ? 'rgba(201, 205, 211, 0.25)' : 'rgba(138, 144, 153, 0.4)';
    ctx.lineWidth = 1.2;
    ctx.setLineDash([3, 3]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Superposition wave (bold red)
    ctx.beginPath();
    for (let x = 0; x < w; x++) {
      const y1 = Math.sin(k * x - omega * time) * (a * 0.5);
      const y2 = Math.sin(k * x - omega * time + p) * (a * 0.5);
      const y = midY - (y1 + y2);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = '#E02B2B';
    ctx.lineWidth = 2.4;
    ctx.stroke();

    requestAnimationFrame(renderWave);
  }

  updateReadouts();
  renderWave();
}

/* ============================================================================
   14. CONTACT FORM (STATIC-FRIENDLY PROTOCOL)
   ============================================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['name']?.value.trim();
    const email = form.elements['email']?.value.trim();
    const subject = form.elements['subject']?.value.trim();
    const message = form.elements['message']?.value.trim();

    ['name-err', 'email-err', 'subject-err', 'message-err'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '';
    });

    let hasError = false;

    if (!name) {
      document.getElementById('name-err').textContent = 'Please enter your name.';
      hasError = true;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('email-err').textContent = 'Please provide a valid email.';
      hasError = true;
    }

    if (!subject) {
      document.getElementById('subject-err').textContent = 'Please enter a subject.';
      hasError = true;
    }

    if (!message || message.length < 8) {
      document.getElementById('message-err').textContent = 'Please enter a message with at least 8 characters.';
      hasError = true;
    }

    if (hasError) return;

    // Launch mailto transmission
    const targetEmail = SITE_DATA.author.email;
    const mailtoSubject = encodeURIComponent(`[YUME Inbound] ${subject}`);
    const mailtoBody = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}\n\n---\nTransmitted via YUME Blog`);
    const mailtoUri = `mailto:${targetEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

    window.location.href = mailtoUri;

    feedback.className = 'form-feedback-box success';
    feedback.removeAttribute('hidden');
    feedback.innerHTML = `
      <strong>Email Prepared:</strong> Your default email client was opened. If it didn't open automatically, send directly to: <code>${escapeHtml(targetEmail)}</code>.
    `;
  });
}

/* ============================================================================
   15. SEARCH MODAL OVERLAY
   ============================================================================ */
function initSearchModal() {
  const triggerBtn = document.getElementById('quick-search-btn');
  const modal = document.getElementById('search-modal');
  const closeBtn = document.getElementById('close-search-modal');
  const searchField = document.getElementById('modal-search-field');
  const resultsContainer = document.getElementById('modal-search-results');

  if (!triggerBtn || !modal) return;

  const openSearch = () => {
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    if (searchField) {
      searchField.value = '';
      searchField.focus();
    }
    if (resultsContainer) {
      resultsContainer.innerHTML = '<p class="search-initial-hint">Type above to search across all published writing and categories.</p>';
    }
  };

  const closeSearch = () => {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  };

  triggerBtn.addEventListener('click', openSearch);
  closeBtn?.addEventListener('click', closeSearch);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeSearch(); });

  searchField?.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!resultsContainer) return;

    if (!q) {
      resultsContainer.innerHTML = '<p class="search-initial-hint">Type above to search across all published writing and categories.</p>';
      return;
    }

    const matches = SITE_DATA.articles.filter(art => {
      return art.title.toLowerCase().includes(q) ||
             art.category.toLowerCase().includes(q) ||
             art.excerpt.toLowerCase().includes(q) ||
             art.content.toLowerCase().includes(q);
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `<p style="font-size: 0.9rem; color: var(--color-steel); text-align: center; margin: 2rem 0;">No articles found matching "${escapeHtml(q)}".</p>`;
      return;
    }

    resultsContainer.innerHTML = matches.map(art => `
      <a href="blog/${encodeURIComponent(art.slug)}.html" class="search-result-item" style="text-decoration: none; display: block;">
        <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--color-gold);">${escapeHtml(art.category)}</span>
        <h4 style="font-family: var(--font-serif); font-size: 1.15rem; margin: 0.2rem 0; color: var(--color-text-primary);">${escapeHtml(art.title)}</h4>
        <p style="font-size: 0.82rem; color: var(--color-text-secondary); margin: 0;">${escapeHtml(art.excerpt.substring(0, 110))}...</p>
      </a>
    `).join('');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
      closeSearch();
    }
  });
}

/* ============================================================================
   16. EASTER EGG OVERLAY (THE MEANING OF 夢)
   ============================================================================ */
function initEasterEgg() {
  const sealBtn = document.getElementById('brand-seal-btn');
  const modal = document.getElementById('easter-egg-modal');
  const closeBtn = document.getElementById('close-easter-egg');

  if (!sealBtn || !modal) return;

  const openEgg = (e) => {
    e.preventDefault();
    e.stopPropagation();
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  };

  const closeEgg = () => {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  };

  sealBtn.addEventListener('click', openEgg);
  sealBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') openEgg(e);
  });

  closeBtn?.addEventListener('click', closeEgg);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeEgg(); });
}

/* ============================================================================
   17. AMBIENT CURSOR GLOW
   ============================================================================ */
function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let curX = mouseX;
  let curY = mouseY;
  let active = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!active) {
      glow.style.opacity = '1';
      active = true;
    }
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
    active = false;
  });

  function tick() {
    curX += (mouseX - curX) * 0.12;
    curY += (mouseY - curY) * 0.12;
    glow.style.left = `${curX}px`;
    glow.style.top = `${curY}px`;
    requestAnimationFrame(tick);
  }
  tick();
}

/* ============================================================================
   18. UTILITIES
   ============================================================================ */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function safeGetStorage(storage, key) {
  try {
    return storage.getItem(key);
  } catch (e) {
    return null;
  }
}

function safeSetStorage(storage, key, val) {
  try {
    storage.setItem(key, val);
  } catch (e) {}
}
