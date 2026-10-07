// CONTENT EDITOR: Replace sample text and image URLs here. Copy a project,
// news item, or person object to add another entry without changing layouts.
// Rich-content fields accept HTML for paragraphs, images, tables, and equations.
// A project's `report` is an ordered list of free-form blocks. Add `section`,
// `content`, `quote`, and `divider` blocks in any sequence; see README.md.
// Vite copies these repository images into the production build and returns
// their deployed URLs. Do not use GitHub `/blob/` URLs here: those point to
// GitHub HTML pages rather than to image files.
const teamPhotos = {
  dipesh: new URL('../Contact Photos/Dipesh.png', import.meta.url).href,
  sudeep: new URL('../Contact Photos/Sudeep.jpeg', import.meta.url).href,
  sumi: new URL('../Contact Photos/Sumi.jpeg', import.meta.url).href,
  ashok: new URL('../Contact Photos/Asok.jpeg', import.meta.url).href,
  sumesh: new URL('../Contact Photos/Sumesh.jpeg', import.meta.url).href
};

export const siteContent = {
  about: {
    title: "In coordination with Bheri Babai Diversion Multipurpose Project (BBDMP)",
    copy: "Primary research focus on safety, efficiency, and environmental performance of the construction industry. Our lab works are focused on material behavior, concrete technology and steel structures, sustainable infrastructures and circular economy."
  },
  news: [
    { slug: "mid-west-university", 
      date: "01 Oct 2026", 
      type: "Field notes", 
      title: "Lab Visit by Mid-West University : MSc in Structural Engineering students", 
      image: "https://github.com/bridge4er-startup/CSRL/blob/main/Activity%20and%20News/MidWEST%20UNIVERSITY.jpeg?raw=true", 
      details: "<p>Practical Learning: Students gained firsthand exposure to concrete testing, material quality assessment, and laboratory procedures used in major infrastructure projects.</p><p>A group of MSc in Structural Engineering students from Mid-West University visited the project laboratory as part of their academic and practical learning. The visit provided an opportunity to connect classroom knowledge with real-world engineering practices, including concrete testing, material quality control, laboratory procedures with short site briefing of BBDMP project. The interaction also encouraged valuable discussions on structural engineering, construction quality, and the practical challenges encountered in major infrastructure projects.</p>" 
    },
    { slug: "kathmandu-university", 
        date: "29 Sept 2026", 
        type: "Publication", 
        title: "Completion of 6 weeks of internship at BBDMP : Kathmandu University (KU) Students", 
        image: "https://github.com/bridge4er-startup/CSRL/blob/main/Activity%20and%20News/Internship.jpeg?raw=true", 
        details:"<p>The internship was undertaken as part of the undergraduate Civil Engineering program at Kathmandu University, with the main objective of gaining practical exposure to construction practices, quality control procedures, engineering drawings, and project management in a large-scale water resources project. It also aimed to develop an understanding of how theoretical knowledge acquired during academic study is applied under actual site conditions.</p><p>During the internship, the initial activities involved site orientation, familiarization with project components, and the study of environmental assessment and engineering drawings. Exposure was then gained to construction planning, scheduling, surveying and setting-out, and the preparation of Bar Bending Schedules (BBS). As the internship progressed, reinforcement and formwork inspections, concrete placement at the barrage piers and settling basin, and related construction activities were observed. Practical learning also included penstock welding, powerhouse raft and anchor block works, hydromechanical activities, grouting, and inspection of the tunnel inlet. Quality control procedures were observed throughout the internship, including slump and concrete temperature measurements, concrete cube compressive strength testing, cement consistency and setting time tests, mortar strength testing, and aggregate gradation, elongation index, and flakiness index tests. Engineering drawings, technical specifications, and numerical analysis were also reviewed to understand their application in actual construction. Furthermore, discussions with project personnel and observations of site operations helped develop an understanding of the roles and responsibilities of the client, consultant, and contractor, particularly in relation to decision-making, supervision, construction execution, quality control, documentation, and coordination.</p><p>The internship helped develop a practical understanding of construction methods, structural detailing, material quality assessment, and the importance of complying with engineering drawings and project specifications. Comparing site activities with theoretical concepts improved the ability to interpret technical information and understand construction challenges under field conditions. Overall, the internship successfully connected academic knowledge with practical engineering applications and strengthened technical observation, documentation, communication, teamwork, and professional skills relevant to civil engineering practice.</p><h2>Acknowledgement</h2><p> We would like to express our sincere gratitude to the Department of Civil Engineering, Kathmandu University, for providing us with the opportunity to undertake our academic internship at the Bheri Babai Diversion Multipurpose Project (BBDMP) as part of our undergraduate Civil Engineering course. We are especially grateful to our Host Supervisor, Er. Dipesh Tiwari, Engineer at Bheri Babai Diversion Multipurpose Project, Department of Water Resources and Irrigation, for his continuous guidance, support, and encouragement throughout the internship period. We would also like to thank Er. Sudeep Bhusal, the engineers, technical staff, and the entire project team at BBDMP for sharing their knowledge, answering our queries, and providing valuable insights into the various construction and quality control activities carried out at the site. We would like to extend our sincere appreciation to our Home Supervisor, Er. Suman Shrestha, Associate Professor, Department of Civil Engineering, Kathmandu University, for his guidance and suggestions throughout the internship. We are equally thankful to our Internship Coordinator, Asst. Prof. Mahesh Raj Bhatt, and Department In-charge, Asst. Prof. Manish Prakash, for their support, coordination, and follow-up during the internship period. We are also thankful to our fellow interns, colleagues, and the local people of Chiple, Surkhet, for their cooperation and assistance during our stay at the project site. This internship provided us with valuable practical exposure to construction practices, engineering drawings, reinforcement and concrete works, material testing, quality control, and project management. The experience helped us connect the theoretical knowledge gained in the classroom with its practical application in the field. We sincerely appreciate everyone who contributed, directly or indirectly, to making this learning experience meaningful and enriching. </p><p> (From : Rabindra, Anusha, Jeena and Karuna) </p>"
      },
    { slug: "internship-lab-works", 
        date: "29 Sep 2026", 
        type: "INTERNSHIP ACTIVITIES", 
        title: "What I did in the LAB ? (Rabindra Shrestha, Intern)", 
        image: "https://github.com/bridge4er-startup/CSRL/blob/main/Activity%20and%20News/Lab%20Works.png?raw=true", 
        details: "<p>A presentation (TEST FILE, WE'LL UPDATE THIS CONTENT LATER)</p><figure><img src=\"https://github.com/bridge4er-startup/CSRL/blob/main/Activity%20and%20News/Cover%20Page.png?raw=true\" alt=\"Cover Page\" /><figcaption>Cover Photo of our work</figcaption></figure><p>Some site photos: </p><figure><img src=\"https://github.com/bridge4er-startup/CSRL/blob/main/Activity%20and%20News/Tasks.png?raw=true\" alt=\"Loading test\" /><figcaption>Site and Lab Tasks Performed</figcaption></figure> "
      }
    ],
  projects: [
    { slug: "low-carbon-concrete", 
       tag: "Concrete structures", 
       title: "Ductility and damage control in low-carbon reinforced concrete",
       description: "Quantifying the interaction of low-clinker binders, reinforcement detailing, and cyclic demand in structural components.", 
       report: [
         { type: "section", title: "Abstract", lead: true, content: "<p>This project develops design-ready evidence for reinforced concrete systems with reduced embodied carbon.</p>" },
         { type: "section", title: "Research objectives", content: "<p>Establish ductility benchmarks and damage-control guidance for reinforced concrete using lower-carbon binders.</p><ul><li>Compare critical reinforcement details.</li><li>Measure stiffness and strength retention under cyclic demand.</li></ul>" },
         { type: "quote", text: "Lower-carbon construction must be measured not only by its footprint, but by the confidence it gives engineers at every drift level.", attribution: "Research principle" },
         { type: "section", title: "Methodology", content: "<p>Material characterization, reinforced-column tests, and digital image correlation are combined to connect mixture design with component-level response.</p><table><thead><tr><th>Stage</th><th>Evidence</th></tr></thead><tbody><tr><td>Materials</td><td>Strength, stiffness, and shrinkage</td></tr><tr><td>Components</td><td>Drift capacity and damage patterns</td></tr></tbody></table>" },
         { type: "section", title: "Expected contributions", content: "<p>Practical recommendations for material selection and reinforcement detailing in low-carbon structural elements.</p><p class=\"equation\">Damage index = residual drift / peak drift</p>" }
       ],
       image: "https://github.com/bridge4er-startup/CSRL/blob/main/Project%20Works/From%20Net.png?raw=true" 
    },
    { slug: "rebar-loading", 
        tag: "Steel and rebar", 
        title: "Rebar performance under complex loading histories", 
        description: "Assessing strength, fatigue, bond, and fracture behavior across modern reinforcing steel products.", 
        report: [
          { type: "section", title: "Project overview", lead: true, content: "<p>A test programme linking mill properties to the performance of reinforced concrete assemblies.</p>" },
          { type: "section", title: "Loading questions", content: "<p>Characterize the effects of repeated and reversing loads on reinforcement and its connection with surrounding concrete.</p>" },
          { type: "section", title: "Test programme", content: "<p>Tensile testing, bond tests, and low-cycle fatigue establish a clear chain from mill properties to reinforcement response in concrete assemblies.</p>" },
          { type: "quote", text: "Good reinforcement detailing starts with knowing how steel behaves when loading refuses to be simple." },
          { type: "section", title: "Outcome", content: "<p>A more reliable basis for selecting and detailing reinforcing steel in seismic and fatigue-critical structures.</p>" }
        ],
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85" },
    { slug: "hybrid-optimization", 
        tag: "Optimization",
        title: "Optimization of hybrid structural systems",
        description: "Using performance-based modelling to reduce material use while preserving safety, constructability, and service life.", 
        report: [
          { type: "section", title: "A design space for better systems", lead: true, content: "<p>Parametric design methods for efficient composite steel and concrete systems.</p>" },
          { type: "section", title: "Research aim", content: "<p>Identify hybrid system configurations that reduce material intensity without compromising structural performance.</p>" },
          { type: "divider" },
          { type: "section", title: "How we investigate", content: "<p>Finite element modelling, reliability analysis, and life-cycle assessment are used to test feasible hybrid system configurations.</p>" },
          { type: "section", title: "Design value", content: "<p>Design workflows that reveal lower-carbon, buildable options early in the engineering process.</p>" }
        ],
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85" },
    { slug: "circular-aggregates", 
        tag: "Sustainable materials", 
        title: "Circular aggregates for resilient infrastructure", 
        description: "Evaluating recycled aggregates and industrial by-products in durable, locally appropriate concrete mixtures.", 
        report: [
          { type: "section", title: "Why circular aggregates", lead: true, content: "<p>Practical pathways for circular mineral resources in infrastructure construction.</p>" },
          { type: "section", title: "What we measure", content: "<p>Measure how circular mineral resources affect concrete strength, durability, and life-cycle impacts.</p>" },
          { type: "quote", text: "The next durable concrete may begin with a material that has already served a purpose." },
          { type: "section", title: "Method and evidence", content: "<p>Mix design, durability testing, and environmental assessment examine the practical use of circular mineral resources.</p>" },
          { type: "section", title: "Practical contribution", content: "<p>Locally relevant mix-design guidance for durable concrete with reduced virgin material demand.</p>" }
        ],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85" }
  ],
  people: [
    { initials: "DT", 
        name: "Er. Dipesh Tiwari", 
        role: "Lab Director | Research Engineer | Concrete and Steel Structures | FEM | Construction Technology ", 
        email: "dipesh.bbdmp2025@gmail.com", 
        photo: teamPhotos.dipesh, 
        profile: "M.Sc. in Structural Engineering, Lead experimental and analytical research on reinforced concrete and prestressed structures, Structural Health Monitoring, Resilient Infrastructure, Finite Element Analysis and design guidance." },
    { initials: "SB", 
        name: "Er. Sudeep Bhusal ", 
        role: "Research Engineer | Concrete and Steel Structures | Construction Technology ", 
        email: "sudeepbhusal@gmail.com", 
        photo: teamPhotos.sudeep, 
        profile: "Coordinate structural testing programmes, instrumentation, and data quality across steel and reinforced-concrete projects." },
    { initials: "SD", 
        name: "Er. Sumi Dhakal", 
        role: "Research Engineer | Concrete and Steel Structures | Construction Technology", 
        email: "msumidhakal@gmail.com", 
        photo: teamPhotos.sumi, 
        profile: "Coordinate all laboratory works, develop research programs related with optimization and reliability methods for sustainable construction techniques." },
      { initials: "AC", 
        name: "Ashok Chaudhary", 
        role: "BBDMP Lab Technician | Materials", 
        email: "+977 9823097170", 
        photo: teamPhotos.ashok, 
        profile: "Perform Lab Tests, Management and Maintenance Works" },
      { initials: "SKY", 
        name: "Er. Sumesh Kumar Yadav", 
        role: "BBDMP Lab Technician | Materials | Concrete Technology", 
        email: "+977 980-7784728 ", 
        photo: teamPhotos.sumesh, 
        profile: "Perform Lab Tests, Site Activities related to Quality Control" }
  ],
  contact: { email: "bridge4er@gmail.com" }
};
