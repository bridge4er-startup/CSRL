// CONTENT EDITOR: Replace the sample text and image URLs in this file. Copy an
// existing object to add another news item, project, team member, or method.
export const siteContent = {
  about: {
    title: "We investigate the structures that hold our communities together.",
    copy: "Civil Structures Research Lab advances the safety, efficiency, and environmental performance of the built environment. Our work moves fluidly from microscopic material behavior to infrastructure-scale structural systems."
  },
  featuredProject: {
    number: "Project 01 / 2025-2027",
    title: "Low-carbon concrete under real structural demands.",
    description: "A multi-scale study of supplementary cementitious materials, confinement, and long-term durability in reinforced concrete elements."
  },
  news: [
    { date: "12 Sep 2025", type: "Lab update", title: "New cyclic loading frame commissioned for large-scale component testing.", image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85" },
    { date: "28 Aug 2025", type: "Publication", title: "Team publishes framework for optimization of hybrid steel-concrete members.", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85" },
    { date: "03 Jul 2025", type: "Field notes", title: "From lab to bridge deck: monitoring materials in demanding conditions.", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85" }
  ],
  projects: [
    { tag: "Concrete structures", title: "Ductility and damage control in low-carbon reinforced concrete", description: "Quantifying the interaction of low-clinker binders, reinforcement detailing, and cyclic demand in structural components.", abstract: "This project develops design-ready evidence for reinforced concrete systems with reduced embodied carbon.", method: "Material testing · Column tests · Digital image correlation", image: "https://images.unsplash.com/photo-1562259949-a4c55b73f8e0?auto=format&fit=crop&w=1200&q=85" },
    { tag: "Steel & rebar", title: "Rebar performance under complex loading histories", description: "Assessing strength, fatigue, bond, and fracture behavior across modern reinforcing steel products.", abstract: "A test programme linking mill properties to the performance of reinforced concrete assemblies.", method: "Tensile testing · Bond tests · Low-cycle fatigue", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85" },
    { tag: "Optimization", title: "Optimization of hybrid structural systems", description: "Using performance-based modelling to reduce material use while preserving safety, constructability, and service life.", abstract: "Parametric design methods for efficient composite steel and concrete systems.", method: "Finite element modelling · Reliability analysis · Life-cycle assessment", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85" },
    { tag: "Sustainable materials", title: "Circular aggregates for resilient infrastructure", description: "Evaluating recycled aggregates and industrial by-products in durable, locally appropriate concrete mixtures.", abstract: "Practical pathways for circular mineral resources in infrastructure construction.", method: "Mix design · Durability tests · Environmental assessment", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85" }
  ],
  methods: [
    { number: "01", title: "Observe", copy: "Measure material and structural behavior with calibrated, transparent experimental practice." },
    { number: "02", title: "Model", copy: "Translate observation into robust numerical and analytical models." },
    { number: "03", title: "Optimize", copy: "Balance safety, economy, constructability, and environmental responsibility." },
    { number: "04", title: "Apply", copy: "Share findings in forms that support decisions beyond the laboratory." }
  ],
  people: [
    { initials: "AK", name: "Dr. Anisha Koirala", role: "Lab Director · Concrete Structures", email: "anisha.koirala@example.edu" },
    { initials: "RM", name: "Rohan Maharjan", role: "Research Engineer · Steel & Testing", email: "rohan.maharjan@example.edu" },
    { initials: "SP", name: "Sanjay Patel", role: "Doctoral Researcher · Optimization", email: "sanjay.patel@example.edu" },
    { initials: "NB", name: "Nisha Bista", role: "Research Associate · Materials", email: "nisha.bista@example.edu" }
  ],
  contact: { email: "research@civilstructureslab.org" }
};
