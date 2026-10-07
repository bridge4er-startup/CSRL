// CONTENT EDITOR: Replace sample text and image URLs here. Copy a project,
// news item, or person object to add another entry without changing layouts.
// The *Content fields accept HTML for paragraphs, images, tables, and equations.
// Vite copies these repository images into the production build and returns
// their deployed URLs. Do not use GitHub `/blob/` URLs here: those point to
// GitHub HTML pages rather than to image files.
const teamPhotos = {
  dipesh: new URL('../Contact Photos/Dipesh.png', import.meta.url).href,
  sudeep: new URL('../Contact Photos/Sudeep.jpeg', import.meta.url).href,
  sumi: new URL('../Contact Photos/Sumi.jpeg', import.meta.url).href,
  ashok: new URL('../Contact Photos/Asok.jpeg', import.meta.url).href
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
      details: `
          <p> Practical Learning: Students gained firsthand exposure to concrete testing, material quality assessment, and laboratory procedures used in major infrastructure projects.</p>
          <p>
          A group of MSc in Structural Engineering students from Mid-West University visited the project laboratory as part of their academic and practical learning. The visit provided an opportunity to connect classroom knowledge with real-world engineering practices, including concrete testing, material quality control, laboratory procedures with short site briefing of BBDMP project. The interaction also encouraged valuable discussions on structural engineering, construction quality, and the practical challenges encountered in major infrastructure projects.</p>
        `
    },
    { slug: "kathmandu-university", 
        date: "29 Sept 2026", 
        type: "Publication", 
        title: "Completion of 6 weeks of internship at BBDMP : Kathmandu University (KU) Students", 
        image: "https://github.com/bridge4er-startup/CSRL/blob/main/Activity%20and%20News/Internship.jpeg?raw=true", 
        details:`
          <p>
          The internship was undertaken as part of the undergraduate Civil Engineering program at Kathmandu University, with the main objective of gaining practical exposure to construction practices, quality control procedures, engineering drawings, and project management in a large-scale water resources project. It also aimed to develop an understanding of how theoretical knowledge acquired during academic study is applied under actual site conditions.</p>
          <p>
          During the internship, the initial activities involved site orientation, familiarization with project components, and the study of environmental assessment and engineering drawings. Exposure was then gained to construction planning, scheduling, surveying and setting-out, and the preparation of Bar Bending Schedules (BBS). As the internship progressed, reinforcement and formwork inspections, concrete placement at the barrage piers and settling basin, and related construction activities were observed. Practical learning also included penstock welding, powerhouse raft and anchor block works, hydromechanical activities, grouting, and inspection of the tunnel inlet. Quality control procedures were observed throughout the internship, including slump and concrete temperature measurements, concrete cube compressive strength testing, cement consistency and setting time tests, mortar strength testing, and aggregate gradation, elongation index, and flakiness index tests. Engineering drawings, technical specifications, and numerical analysis were also reviewed to understand their application in actual construction. Furthermore, discussions with project personnel and observations of site operations helped develop an understanding of the roles and responsibilities of the client, consultant, and contractor, particularly in relation to decision-making, supervision, construction execution, quality control, documentation, and coordination.</p>
          <p>
          The internship helped develop a practical understanding of construction methods, structural detailing, material quality assessment, and the importance of complying with engineering drawings and project specifications. Comparing site activities with theoretical concepts improved the ability to interpret technical information and understand construction challenges under field conditions. Overall, the internship successfully connected academic knowledge with practical engineering applications and strengthened technical observation, documentation, communication, teamwork, and professional skills relevant to civil engineering practice.</p>
          <h2>
          Acknowledgement</h2>
          <p> 
          We would like to express our sincere gratitude to the Department of Civil Engineering, Kathmandu University, for providing us with the opportunity to undertake our academic internship at the Bheri Babai Diversion Multipurpose Project (BBDMP) as part of our undergraduate Civil Engineering course. We are especially grateful to our Host Supervisor, Er. Dipesh Tiwari, Engineer at Bheri Babai Diversion Multipurpose Project, Department of Water Resources and Irrigation, for his continuous guidance, support, and encouragement throughout the internship period. We would also like to thank Er. Sudeep Bhusal, the engineers, technical staff, and the entire project team at BBDMP for sharing their knowledge, answering our queries, and providing valuable insights into the various construction and quality control activities carried out at the site. We would like to extend our sincere appreciation to our Home Supervisor, Er. Suman Shrestha, Associate Professor, Department of Civil Engineering, Kathmandu University, for his guidance and suggestions throughout the internship. We are equally thankful to our Internship Coordinator, Asst. Prof. Mahesh Raj Bhatt, and Department In-charge, Asst. Prof. Manish Prakash, for their support, coordination, and follow-up during the internship period. We are also thankful to our fellow interns, colleagues, and the local people of Chiple, Surkhet, for their cooperation and assistance during our stay at the project site. This internship provided us with valuable practical exposure to construction practices, engineering drawings, reinforcement and concrete works, material testing, quality control, and project management. The experience helped us connect the theoretical knowledge gained in the classroom with its practical application in the field. We sincerely appreciate everyone who contributed, directly or indirectly, to making this learning experience meaningful and enriching. </p>
          <p> 
          (From : Rabindra, Anusha, Jeena and Karuna) </p>
        `
      },
    { slug: "internship-lab-works", 
        date: "29 Sep 2026", 
        type: "INTERNSHIP ACTIVITIES", 
        title: "What I did in the LAB ? (Rabindra Shrestha, Intern)", 
        image: "https://github.com/bridge4er-startup/CSRL/blob/main/Activity%20and%20News/Lab%20Works.png?raw=true", 
        details: `
        <p>
        A presentation (TEST FILE, WE'LL UPDATE THIS CONTENT LATER)</p>
        <figure>
          <img src=\"https://github.com/bridge4er-startup/CSRL/blob/main/Activity%20and%20News/Cover%20Page.png?raw=true\" alt=\"Cover Page\" />
          <figcaption> Cover Photo of our work </figcaption>
          </figure>
        <p> Some site photos: </p>
        <figure><img src=\"https://github.com/bridge4er-startup/CSRL/blob/main/Activity%20and%20News/Tasks.png?raw=true\" alt=\"Loading test\" />
        <figcaption>Site and Lab Tasks Performed</figcaption>
        </figure> 
        `
      }
    ],
  projects: [
    { slug: "Rabindra Shrestha", 
       tag: "Concrete and Steel Structures",
       title: "Research Suggestions for Future Undergraduate Interns in Concrete and Steel Structures: Insights from the BBDMP Internship",
       description: "Rabindra Shrestha; Department of Civil Engineering, Kathmandu University, Nepal ; October 2026 ",
      report: [
        { type: "quote", text: "'Many undergraduate laboratory tests are performed because the curriculum lists them, and the results go into a report that few people read again. A site observation can give the same test a purpose. '", attribution: "- Rabindra Shrestha" },

        { type: "section", title: "Abstract", lead: true, content: `<p>Undergraduate research is most useful when it starts from a problem someone has actually seen on site. From 20 August to 1 October 2026, I spent six weeks as an intern at the Bheri Babai Diversion Multipurpose Project (BBDMP) in Surkhet, where I observed concrete placement, reinforcement works, aggregate testing and day-to-day quality control on large hydraulic structures. These weeks showed me how material properties, workmanship and detailing together decide whether a structure turns out as designed. This article turns those observations into a short list of laboratory studies that future undergraduate interns could realistically carry out: the effect of curing conditions and aggregate characteristics on concrete, the effect of stirrup spacing and reinforcement congestion on reinforced concrete members, and the behavior of small bolted and welded steel connections. For each topic I describe the site observation behind it, a workable experimental plan, and what a student could learn from it. The emphasis throughout is on small, controlled experiments with clear questions rather than large programs with many variables.</p>
        <p> Keywords: undergraduate research; concrete; reinforced concrete; steel connections; aggregate; reinforcement detailing; BBDMP </p>`},
        
        { type: "section", title: "Introduction", 
          content: `<p>In most civil engineering programs, theory, laboratory work and construction practice are taught as three separate things. On a real project they are not separate at all. A mix that performs well in the laboratory still has to be transported, placed, compacted and cured in whatever weather the site gives it. A bar bending schedule that looks tidy on a drawing still has to be fixed in place by workers, with enough room left for concrete to get around it. On large infrastructure, where a single pour can be very big and the consequences of poor quality are serious, this link between materials, detailing and workmanship becomes hard to ignore.</p>
          <p> I saw this first-hand during my six-week internship at the Bheri Babai Diversion Multipurpose Project (BBDMP) in Surkhet, from 20 August to 1 October 2026. The project involves major hydraulic and structural works in which concrete and reinforcement play a central role. I spent my time watching reinforcement being fixed, concrete being placed, and aggregates being tested for quality control. Somewhere in the second or third week I began asking a different kind of question. Instead of “how is this test done?”, I started asking “what is this test actually telling us, and what would change if the input changed?” </p>
          <p> That shift is the starting point of this article. Many undergraduate laboratory tests are performed because the curriculum lists them, and the results go into a report that few people read again. A site observation can give the same test a purpose. The sections below set out research topics that grew out of what I saw at BBDMP, written for the students who will do internships after me. They are suggestions, not completed studies, and no experimental results are claimed here. </p> ` },

        { type: "quote", text: "'Depending on what a university can obtain, students could explore partial replacement of conventional constituents using stone dust, recycled aggregate, fly ash, rice husk ash or similar materials. It is easy to design such a study around the single question of whether the strength goes up, and that is the weakest way to do it. A more useful framing is whether the replacement gives an acceptable balance of workability, strength and practicality at replacement levels'"},

        { type: "section", title: "2. How the Topics Were Chosen", 
          content: `<p> 
          Not every interesting site observation makes a good undergraduate experiment. Four practical filters were used to decide which ideas to include. First, the topic should come from something that was actually seen or discussed at site, so that the research question has a real origin. Second, the experiment should change only one or two variables while everything else is held as steady as possible. Third, it should be doable with the kind of equipment a university civil engineering laboratory normally has: moulds, a compression testing machine, sieves, a universal testing machine, and basic instrumentation. Fourth, the result should be comparable with a theoretical prediction or a code provision, so that the student learns something even when the experiment does not behave as expected.          
          </p>` },


        { type: "section", title: "3. Research Opportunities in Concrete", 
          content: `
          <p> 3.1 Curing conditions and strength development </p> 
          <p> Proper curing is repeated like a rule at every construction site, but how much it matters is rarely demonstrated to the people who do it. Site conditions are also not the same as the standard water tank used for test cubes: temperature varies through the day, surfaces dry out at different rates, and some members are hard to keep wet at all. A student could cast cubes from a single batch and divide them into groups cured differently, for example standard water curing, covered-and-sprinkled curing similar to site practice, air curing with no protection, and curing under a sealed film. Compressive strength at 7, 14 and 28 days (with at least three cubes per condition and age) would show not only how much strength is lost under poor curing, but how early the difference appears. Surface hardness or water absorption could be added as a simple indicator of durability. The result is a direct, quantitative answer to the question of why curing is insisted upon. The test program should follow the relevant concrete testing procedure and use standard-cured specimens as the control condition [3]. </p>
          <p> 3.2 Aggregate grading, shape and concrete behavior </p>
          <p> Aggregate testing was a regular part of quality control at BBDMP, including sieve analysis for particle-size distribution and checks on particle shape. In daily practice these tests are pass-or-fail: the material either meets the specified limits or it does not. What I did not see, and what students could investigate, is how much concrete behavior actually changes as aggregate moves toward or beyond those limits. A suitable study would keep the water–cement ratio and cement content fixed and vary only the grading, for instance by changing the proportion of fine to coarse aggregate, or by using aggregate with a higher share of flaky and elongated particles. Slump or compaction factor, fresh density and 28-day compressive strength would then be compared across the mixes. The findings would help explain why limits on grading and shape exist and what is at stake when they are missed [2]. </p>
          <p> 3.3 Locally available and alternative materials </p>
          <p> Depending on what a university can obtain, students could explore partial replacement of conventional constituents using stone dust, recycled aggregate, fly ash, rice husk ash or similar materials. It is easy to design such a study around the single question of whether the strength goes up, and that is the weakest way to do it. A more useful framing is whether the replacement gives an acceptable balance of workability, strength and practicality at replacement levels such as 10, 20 and 30 percent. A mix that gains a little strength but cannot be placed without extra water has not really improved anything. Availability, cost and variability of the material in the local context should be discussed alongside the test results. </p>` }, 
          
        { type: "section", title: "4. Research Opportunities in Reinforced Concrete and Steel Structures", 
          content: `<p> 4.1 Stirrup spacing in small reinforced concrete beams </p>
          <p> Watching reinforcement being cut, bent and fixed made it clear that detailing is more than copying a drawing. Spacing, cover and anchorage all affect cracking, stiffness and the way a member eventually fails. A simple program could cast small beams with identical longitudinal reinforcement and concrete but different stirrup spacings, for example 100, 150 and 200 mm, and test them in two-point bending. First cracking load, crack pattern, mid-span deflection, ultimate load and failure mode (flexural or shear) can all be recorded. The measured shear capacity can then be compared with the value predicted by the design code the student is using, such as IS 456:2000 [1]. Where the two disagree, the discussion of why is often where the learning is.</p>
          <p> 4.2 Reinforcement congestion and concrete placement </p>
          <p> Heavily reinforced regions are common in hydraulic structures, and they raise a practical worry: if the bars are too close, will the concrete flow between them and compact properly? This topic is useful because it sits between structural design and construction, two things usually treated as separate subjects. In the laboratory, a student could build small formwork boxes with different bar spacings, place the same concrete in each, and compare the results. Visual inspection of the surface and of cut sections for honeycombing and voids, together with non-destructive measures such as rebound hammer readings or ultrasonic pulse velocity where available, can indicate how compaction quality changes as spacing gets tighter. Comparing the spacings against the maximum aggregate size is a natural way to connect the result back to the code’s minimum clear spacing requirements [1]. </p>
          <p> 4.3 Bolted and welded steel connections </p>
          <p> Steel is a smaller part of what I observed at BBDMP than concrete, but connections are an ideal topic for undergraduate testing because specimens are small and the failure modes are visible. Students could fabricate simple lap or splice specimens that differ in the number of bolts, the edge distance, or the length of weld, and test them in tension in a universal testing machine. Yielding, bearing, bolt shear, block shear and weld fracture can all be observed, and the measured capacities can be compared with those predicted by a steel design code such as IS 800:2007 [6]. These specimens are far smaller and simpler than connections in a major project, so the point is not to represent them, but to let students see directly how a connection fails and why the code checks what it checks </p>` },
        

        { type: "section", title: "5. Summary of Suggested Studies", 
          content: `
          <p> Table 1 collects the topics discussed above, with the site observation behind each, the variable to be changed and the main measurements.</p>
        <table>
            <thead>
              <tr> <th> Topic </th> <th> Site observation behind it </th> <th> Main variable </th> <th> Key measurements </th> <th> Reference for coomparison </th> </tr>
            </thead>
            <tbody>
              <tr> <td> Curing conditions </td>  <td> Curing is stressed on site but conditions are rarely ideal </td> <td> Curing method (4 conditions) </td> <td> Cube strength at 7, 14, 28 days; absorption</td> <td> Standard-cured control cubes</td>
              </tr> 
              <tr> <td> Aggregate grading and shape </td> <td> Routine sieve and shape tests judged only as pass or fail </td> <td> Grading; share of flaky particles </td> <td>Slump or compaction factor; fresh density; 28-day strength </td> <td> Mix with in-limit aggregate</td>
              </tr> 
              <tr> <td> Alternative materials </td> <td> Interest in locally available materials</td> <td> Replacement level (10, 20, 30%) </td> <td>Workability; strength; cost and availability</td> <td> Conventional mix </td>
              </tr> 
              <tr> <td> Stirrup spacing </td> <td> Detailing affects crack and failure behavior </td> <td> Stirrup spacing (100, 150, 200 mm) </td> <td>First crack; deflection; ultimate load; failure mode </td> <td> Code shear and flexure predictions</td>
              </tr> 
              <tr> <td> Reinforcement congestion </td> <td> Dense bars in hydraulic structures </td> <td> Clear spacing between bars </td> <td>Voids and honeycombing; rebound or UPV readings </td> <td> Code minimum clear spacing </td>
              </tr> 
              <tr> <td> Steel connections </td> <td> Connection behavior seen only in design, not in failure </td> <td> Bolt number, edge distance, weld length </td> <td>Ultimate load; failure mode </td> <td> Code capacity equations </td>
              </tr>
            </tbody> 
          </table>
        ` },

        { type: "section", title: "6. From Site Observation to Research Question", 
          content: `
          <p> The main thing I take from the internship is that a good topic can start with something very ordinary: a sieve analysis result, a congested bar layout, a damp cloth on a column, a drawing that does not quite match what is possible on site. The step that matters is writing the observation down as a question that can be tested. “Curing is important” is an opinion. “How much 28-day strength is lost when cubes are left uncovered for the first week?” is a research question.
          <p> A good undergraduate experiment usually has four features: one clear question, a small number of variables, a testing procedure that can actually be repeated, and an honest analysis of the results. More specimens and more variables do not make a project better. With limited time, equipment and materials, an overloaded program tends to produce scattered data that nobody has time to interpret. Three well-made specimens per condition, properly recorded, are worth more than a dozen poorly controlled ones. Comparing results with theoretical calculations or code provisions adds a lot, because it moves the discussion from what happened to why it differed from what was expected. </p>
          <p> Students should also be realistic about the limits of laboratory work. Laboratory specimens are made under controlled conditions. A construction site has variable materials, different crews, weather, equipment constraints and schedule pressure. A result from a 150 mm cube cannot be applied directly to a dam block, and an experiment should never be presented as if it can. Recognizing this gap is part of developing engineering judgement.</p>
          <p> Two practical points are worth adding. Any material taken from a project site for testing should be collected only with the permission and guidance of the project’s engineers, and without disturbing ongoing work. Laboratory testing, particularly of loaded beams and steel specimens, should be done under the supervision of laboratory staff and a faculty advisor, with proper safety measures. </p> `},


        { type: "section", title: "7. Conclusion", 
          content: `
          <p> My internship at BBDMP showed me that a construction site is a rich source of undergraduate research questions. Curing, aggregate characteristics, alternative materials, stirrup spacing, reinforcement congestion and steel connections can all be studied with manageable laboratory programs, and each can be traced back to something that happens on a real project. </p>
          <p> For future interns, my advice is to move beyond simply performing a test and ask what construction problem or structural behavior the test could help explain. A small, carefully designed experiment, backed by good observation, honest analysis and a comparison with theory, will teach more than a complicated one with unclear objectives. Linking the laboratory to the site makes an internship more than a requirement to be completed. It becomes a way of building practical engineering judgement. </p>" `}, 

         { type: "divider" },
         { type: "content", content: `
          <h2>References</h2>
          <p> [1] Bureau of Indian Standards. IS 456:2000: Plain and Reinforced Concrete - Code of Practice. New Delhi: BIS; 2000. </p>
          <p> [2] Bureau of Indian Standards. IS 383:2016: Coarse and Fine Aggregate for Concrete - Specification. New Delhi: BIS; 2016. </p>
          <p> [3] Bureau of Indian Standards. IS 516 (Part 1/Sec 1):2021: Hardened Concrete - Methods of Tests - Determination of Compressive, Flexural and Split Tensile Strength. New Delhi: BIS; 2021. </p>
          <p> [4] Bureau of Indian Standards. IS 10262:2019: Concrete Mix Proportioning - Guidelines. New Delhi: BIS; 2019. </p>
          <p> [5] Bureau of Indian Standards. IS 1786:2008: High Strength Deformed Steel Bars and Wires for Concrete Reinforcement - Specification. New Delhi: BIS; 2008. </p>
          <p> [6] Bureau of Indian Standards. IS 800:2007: General Construction in Steel - Code of Practice. New Delhi: BIS; 2007. </p>
          <p> [7] Neville AM. Properties of Concrete. Pearson Education. </p>` },
         { type: "divider" }
        ],
        image: "https://github.com/bridge4er-startup/CSRL/blob/main/Activity%20and%20News/Lab%20Works.png?raw=true", 
    },
    { slug: "low-carbon-concrete", 
       tag: "Concrete structures", 
       title: "Ductility and damage control in low-carbon reinforced concrete",
       description: "Quantifying the interaction of low-clinker binders, reinforcement detailing, and cyclic demand in structural components.", 
       abstract: "This project develops design-ready evidence for reinforced concrete systems with reduced embodied carbon.", 
       methodologyContent: `
        <p>
        Material characterization, reinforced-column tests, and digital image correlation are combined to connect mixture design with component-level response.</p>
        <table>
            <thead>
              <tr> <th> Stage </th> <th> Evidence </th>
              </tr>
            </thead>
            <tbody>
              <tr> <td> Materials </td>  <td> Strength, stiffness, and shrinkage </td>
              </tr> 
              <tr>
              <td> Components </td> <td> Drift capacity and damage patterns </td> 
              </tr> 
            </tbody> 
          </table>
        `, 
       objectivesContent: `
       <p> Establish ductility benchmarks and damage-control guidance for reinforced concrete using lower-carbon binders.</p>
       <ul> <li> Compare critical reinforcement details. </li> 
       <li> Measure stiffness and strength retention under cyclic demand.</li> </ul>`, 
       contributionContent: `
       <p>Practical recommendations for material selection and reinforcement detailing in low-carbon structural elements.</p>
       <p class=\"equation\"> Damage index = residual drift / peak drift </p>`, 
       image: "https://github.com/bridge4er-startup/CSRL/blob/main/Project%20Works/From%20Net.png?raw=true" 
    },
    { slug: "rebar-loading", 
        tag: "Steel and rebar", 
        title: "Rebar performance under complex loading histories", 
        description: "Assessing strength, fatigue, bond, and fracture behavior across modern reinforcing steel products.", 
        report: [
        { type: "section", title: "Abstract", lead: true, content: "<p>Short overview of the research.</p>" },
         { type: "section", title: "Testing protocol", content: `<p>Testing details.</p>
          <img src=\"/images/test-rig.jpg\" alt=\"Test rig\" >
          <table><thead><tr><th>Specimen</th><th>Load</th></tr></thead><tbody><tr><td>S1</td><td>250 kN</td></tr></tbody></table>
          <p class=\"equation\">M = F x L </p>` },
        { type: "quote", text: "'A useful research insight.'", attribution: "Optional source" },
         { type: "content", content: "<h2>Any HTML heading</h2><p>Additional material can appear anywhere.</p>" },
         { type: "divider" }
        ]
    },
    { slug: "hybrid-optimization", 
        tag: "Optimization",
        title: "Optimization of hybrid structural systems",
        description: "Using performance-based modelling to reduce material use while preserving safety, constructability, and service life.", 
        abstract: "Parametric design methods for efficient composite steel and concrete systems.", 
        methodologyContent: `
        <p>Finite element modelling, reliability analysis, and life-cycle assessment are used to test feasible hybrid system configurations.</p>`, 
        objectivesContent: `
        <p>Identify hybrid system configurations that reduce material intensity without compromising structural performance.</p>`, 
        contributionContent: `
        <p>Design workflows that reveal lower-carbon, buildable options early in the engineering process.</p>`, 
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85" },
    { slug: "circular-aggregates", 
        tag: "Sustainable materials", 
        title: "Circular aggregates for resilient infrastructure", 
        description: "Evaluating recycled aggregates and industrial by-products in durable, locally appropriate concrete mixtures.", 
        abstract: "Practical pathways for circular mineral resources in infrastructure construction.", 
        methodologyContent: `
        <p>Mix design, durability testing, and environmental assessment examine the practical use of circular mineral resources.</p>`, 
        objectivesContent: `
        <p>Measure how circular mineral resources affect concrete strength, durability, and life-cycle impacts.</p>`, 
        contributionContent: `
        <p>Locally relevant mix-design guidance for durable concrete with reduced virgin material demand.</p>`, 
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
        profile: "Perform Lab Tests, Management and Maintenance Works" }
  ],
  contact: { email: "bridge4er@gmail.com" }
};
