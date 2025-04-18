// lib/services.js
const serviceData = [
    {
      id: "generator-sales-installation",
      title: "Generator Sales & Installation",
      slug: "generator-sales-installation",
      metaDescription: "Professional generator sales and installation services in Ghana. High-quality generators with expert installation, maintenance, and 24/7 support for homes and businesses.",
      ogImage: "/images/services/generator-installation.jpg",
      icon: "Power",
      shortDescription: "High-quality generators for homes and businesses with professional installation and maintenance services.",
      fullDescription: "Our generator sales and installation service provides reliable power solutions for Ghana's homes and businesses. We offer a wide range of generators from trusted brands, with expert installation, regular maintenance options, and emergency support to ensure your backup power is always available when you need it.",
      features: [
        "Wide selection of residential and commercial generators",
        "Professional installation by certified technicians",
        "Automatic transfer switch installation",
        "Sound-reducing enclosures and weatherproofing",
        "Maintenance plans and warranty service",
        "Fuel efficiency analysis and optimization"
      ],
      benefits: [
        "Reliable backup power during outages",
        "Protection for sensitive electronics and appliances",
        "Seamless power transition with automatic systems",
        "Increased property value",
        "Peace of mind during power fluctuations"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Cape Coast", "Tamale", "Ghana Nationwide"],
      faq: [
        {
          question: "What size generator do I need for my home or business?",
          answer: "Generator sizing depends on your specific power needs. We conduct a comprehensive load analysis to determine the appropriate capacity, considering essential appliances, peak demand, and future expansion. Most homes require 5-20kW generators, while businesses may need 20-500kW or larger systems."
        },
        {
          question: "How long does generator installation take?",
          answer: "A standard residential generator installation typically takes 1-2 days. Commercial installations may take 2-5 days depending on complexity, size, and site requirements. We provide a specific timeline during our initial assessment."
        },
        {
          question: "Do you offer maintenance plans for installed generators?",
          answer: "Yes, we provide comprehensive maintenance plans including regular servicing, priority emergency response, parts replacement, and system optimization to ensure your generator remains reliable and operates at peak efficiency."
        }
      ],
      relatedServices: ["solar-sales-installation", "electrical-inspections", "emergency-services"],
      processSteps: [
        {
          title: "Consultation & Assessment",
          description: "We evaluate your power requirements, analyze your electrical load needs, and discuss options that fit your budget and requirements."
        },
        {
          title: "System Selection",
          description: "Based on your needs, we help you select the appropriate generator type, capacity, and features from our quality range."
        },
        {
          title: "Site Preparation",
          description: "Our team prepares the installation site, including concrete pad construction and electrical connection points."
        },
        {
          title: "Professional Installation",
          description: "Certified technicians install your generator, transfer switch, and all necessary connections according to manufacturer specifications."
        },
        {
          title: "System Testing",
          description: "We thoroughly test the installation, including automatic transfer capabilities and load testing under various conditions."
        },
        {
          title: "Handover & Training",
          description: "We provide complete operator training and documentation, ensuring you understand how to use and maintain your generator system."
        }
      ]
    },
    {
      id: "solar-sales-installation",
      title: "Solar System Sales & Installation",
      slug: "solar-sales-installation",
      metaDescription: "Complete solar power solutions for Ghana. High-efficiency solar panels, inverters, and battery systems professionally installed for homes and businesses with government rebate assistance.",
      ogImage: "/images/services/solar-installation.jpg",
      icon: "Sun",
      shortDescription: "Comprehensive solar power systems for reliable, renewable energy, professionally designed and installed for Ghana's climate.",
      fullDescription: "Our solar sales and installation service delivers end-to-end renewable energy solutions tailored to Ghana's unique conditions. We provide high-efficiency solar panels, inverters, and battery storage systems designed to maximize energy independence and reduce your electricity costs while contributing to a cleaner environment.",
      features: [
        "Custom solar system design and engineering",
        "High-efficiency mono and polycrystalline panels",
        "Inverter selection and installation",
        "Battery storage solutions",
        "Grid-tied and off-grid system options",
        "Remote monitoring systems",
        "Expert installation by certified technicians"
      ],
      benefits: [
        "Significant reduction in electricity bills",
        "Energy independence and blackout protection",
        "Clean, renewable energy production",
        "Low maintenance costs",
        "Increased property value",
        "Protection against rising electricity costs"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Cape Coast", "Tamale", "Ghana Nationwide"],
      faq: [
        {
          question: "How much can I save with solar power in Ghana?",
          answer: "Most customers save 50-80% on their electricity bills after installing solar. Your specific savings depend on your current consumption, system size, and local sunshine conditions. Our assessment provides personalized savings projections based on your actual usage patterns."
        },
        {
          question: "How long do solar panels last?",
          answer: "Quality solar panels typically last 25-30 years, with manufacturers' warranties usually covering 25 years of power production. Inverters generally last 10-15 years and batteries 5-15 years depending on the technology and usage patterns."
        },
        {
          question: "Will solar work during power outages?",
          answer: "Standard grid-tied systems without batteries will shut down during outages for safety reasons. However, systems with battery storage or specific inverters with backup capability will continue providing power during grid outages, offering excellent protection against Ghana's frequent power fluctuations."
        }
      ],
      relatedServices: ["generator-sales-installation", "ev-charging-installation", "new-installations"],
      processSteps: [
        {
          title: "Initial Consultation",
          description: "We discuss your energy goals, analyze your electricity usage, and assess your property's solar potential."
        },
        {
          title: "Custom System Design",
          description: "Our engineers design a solar system optimized for your energy needs, roof characteristics, and budget."
        },
        {
          title: "Detailed Proposal",
          description: "You'll receive a comprehensive proposal including system specifications, energy production estimates, financial analysis, and financing options."
        },
        {
          title: "Permitting & Approvals",
          description: "We handle all necessary permits, utility applications, and regulatory requirements for your installation."
        },
        {
          title: "Professional Installation",
          description: "Our certified technicians install your complete solar system, adhering to the highest quality and safety standards."
        },
        {
          title: "System Commissioning",
          description: "We test all components, verify proper operation, and connect monitoring systems for performance tracking."
        },
        {
          title: "Customer Training & Handover",
          description: "We provide thorough training on system operation, monitoring tools, and maintenance requirements."
        }
      ]
    },
    {
      id: "ev-charging-installation",
      title: "EV Charging Station Installation",
      slug: "ev-charging-installation",
      metaDescription: "Expert installation of EV charging stations for homes and businesses across Ghana. Level 1, 2, and DC fast chargers with full electrical service and smart charging capabilities.",
      ogImage: "/images/services/ev-charging.jpg",
      icon: "Battery",
      shortDescription: "Professional installation of electric vehicle charging stations for homes and businesses, supporting Ghana's transition to clean transportation.",
      fullDescription: "Our EV charging station installation service provides complete solutions for electric vehicle owners and businesses looking to offer charging facilities. From simple home installations to commercial charging networks, we deliver reliable, future-proof charging infrastructure tailored to your specific requirements.",
      features: [
        "Level 1, Level 2, and DC fast charging options",
        "Residential and commercial installations",
        "Smart chargers with remote management",
        "Load balancing and power management",
        "Weather-resistant outdoor installations",
        "Integration with solar power systems",
        "Compliance with all electrical codes and standards"
      ],
      benefits: [
        "Convenient home charging for EV owners",
        "Attraction of EV-driving customers to businesses",
        "Enhanced property value",
        "Support for fleet electrification",
        "Contribution to sustainable transportation",
        "Future-proof infrastructure investment"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Cape Coast", "Tamale", "Ghana Nationwide"],
      faq: [
        {
          question: "What types of EV chargers do you install?",
          answer: "We install all major types: Level 1 (standard outlet, 120V), Level 2 (240V dedicated circuit offering 6-12 times faster charging than Level 1), and DC Fast Chargers for commercial applications. We help you select the right option based on your vehicle, charging needs, and property characteristics."
        },
        {
          question: "How long does EV charger installation take?",
          answer: "Basic residential Level 2 charger installations typically take 4-6 hours. More complex installations requiring new electrical service or extensive wiring may take 1-2 days. Commercial multi-charger installations generally require 2-5 days depending on scope and complexity."
        },
        {
          question: "Can I integrate my EV charger with my solar system?",
          answer: "Yes, we specialize in integrating EV charging with solar power systems for truly sustainable transportation. Our smart charging solutions can prioritize solar energy for charging and optimize charging times to maximize renewable energy usage."
        }
      ],
      relatedServices: ["solar-sales-installation", "new-installations", "electrical-inspections"],
      processSteps: [
        {
          title: "Needs Assessment",
          description: "We evaluate your EV charging requirements, including vehicle specifications, daily charging needs, and future expansion plans."
        },
        {
          title: "Site Evaluation",
          description: "Our technicians assess your electrical capacity, potential installation locations, and any infrastructure upgrades needed."
        },
        {
          title: "Charger Selection",
          description: "Based on your needs, we recommend appropriate charging equipment from leading manufacturers."
        },
        {
          title: "Installation Planning",
          description: "We create a detailed installation plan including electrical requirements, mounting locations, and any necessary service upgrades."
        },
        {
          title: "Professional Installation",
          description: "Our certified electricians install your charging equipment, ensuring proper wiring, circuit protection, and system testing."
        },
        {
          title: "Testing & Commissioning",
          description: "We thoroughly test the charging system to verify proper operation, safety features, and communication capabilities."
        },
        {
          title: "User Training & Support",
          description: "We provide comprehensive training on charger operation, maintenance, and troubleshooting, plus ongoing technical support."
        }
      ]
    },
    {
      id: "fuse-board-upgrades",
      title: "Fuse Board Upgrades & Replacements",
      slug: "fuse-board-upgrades",
      metaDescription: "Professional fuse board and consumer unit upgrades by certified electricians. Modern, safe replacements for outdated fuse boxes with RCBO protection and safety certification.",
      ogImage: "/images/services/fuse-board-upgrade.jpg",
      icon: "Zap",
      shortDescription: "Modern, safe consumer units to replace outdated fuse boxes, ensuring compliance with the latest regulations.",
      fullDescription: "Our fuse board upgrade service provides complete replacement of outdated and potentially dangerous consumer units with modern, regulation-compliant alternatives. All installations include RCBO protection for individual circuits and comprehensive safety testing.",
      features: [
        "Complete fuse board/consumer unit replacements",
        "Upgrades to meet current regulations",
        "RCBO protection for individual circuits",
        "Full safety testing and certification",
        "Professional installation by qualified electricians"
      ],
      benefits: [
        "Enhanced electrical safety",
        "Reduced risk of electrical fires",
        "Better circuit protection",
        "Peace of mind with compliant installation",
        "Modern safety features"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Cape Coast", "Tamale", "Ghana Nationwide"],
      faq: [
        {
          question: "How long does a fuse board upgrade take?",
          answer: "A standard fuse board upgrade typically takes 4-6 hours to complete, depending on the complexity of your electrical system and the number of circuits."
        },
        {
          question: "Why should I upgrade my fuse board?",
          answer: "Older fuse boards often lack modern safety features like RCD protection and may not comply with current regulations. Upgrading reduces fire risks and improves overall electrical safety."
        }
      ],
      relatedServices: ["electrical-inspections", "rewiring", "fault-finding"],
      processSteps: [
        {
          title: "Initial Assessment",
          description: "Our certified electrician will assess your current fuse board setup, discuss your requirements, and recommend the most suitable replacement options."
        },
        {
          title: "Detailed Quotation",
          description: "We provide a comprehensive quotation outlining the work required, materials, timescales, and costs with no hidden charges."
        },
        {
          title: "Scheduled Installation",
          description: "On the agreed date, we'll install your new consumer unit with minimal disruption, ensuring all circuits are properly protected."
        },
        {
          title: "Safety Testing",
          description: "After installation, we conduct thorough testing of all circuits to verify the system is working correctly and safely."
        },
        {
          title: "Certification & Documentation",
          description: "You'll receive full electrical certification and user guidance on your new consumer unit's operation and safety features."
        }
      ]
    },
    {
      id: "electrical-inspections",
      title: "Electrical Inspections & Testing",
      slug: "electrical-inspections",
      metaDescription: "Thorough electrical inspections and EICR testing by certified electricians. Ensure your property meets safety standards with our detailed electrical safety certificates and reports.",
      ogImage: "/images/services/electrical-inspection.jpg",
      icon: "ShieldCheck",
      shortDescription: "Thorough assessment of your electrical systems to identify potential hazards and ensure compliance with current safety standards.",
      fullDescription: "Our comprehensive electrical inspection services provide detailed assessment of your entire electrical system, identifying potential hazards before they become dangerous. We deliver full documentation and certification to prove compliance with all current regulations.",
      features: [
        "EICR (Electrical Installation Condition Reports)",
        "Landlord electrical safety certificates",
        "Pre-purchase property inspections",
        "Commercial electrical safety compliance",
        "Detailed reports with recommendations"
      ],
      benefits: [
        "Legal compliance for landlords and businesses",
        "Identification of potential hazards",
        "Comprehensive documentation",
        "Peace of mind for property owners",
        "Insurance requirement fulfillment"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Cape Coast", "Tamale", "Ghana Nationwide"],
      faq: [
        {
          question: "How often should I get an electrical inspection?",
          answer: "Residential properties should typically have an electrical inspection every 10 years, while rental properties require inspection every 5 years. Commercial properties often need more frequent inspections depending on the type of business."
        },
        {
          question: "What's included in an EICR?",
          answer: "An Electrical Installation Condition Report (EICR) includes a thorough check of your electrical systems, testing of circuits, identification of any potential fire hazards or electric shock risks, and verification that earthing and bonding are adequate."
        }
      ],
      relatedServices: ["fuse-board-upgrades", "fault-finding", "rewiring"],
      processSteps: [
        {
          title: "Booking & Preparation",
          description: "Schedule your inspection at a convenient time. We'll advise on what access will be needed and how to prepare for minimal disruption."
        },
        {
          title: "Visual Inspection",
          description: "Our electrician conducts a thorough visual assessment of all accessible electrical installations and wiring."
        },
        {
          title: "Technical Testing",
          description: "Using specialized equipment, we test circuits, RCDs, and protective devices to verify their operation and safety."
        },
        {
          title: "Report Compilation",
          description: "All findings are documented in a comprehensive report, highlighting any defects categorized by their severity."
        },
        {
          title: "Recommendations & Certification",
          description: "You'll receive the completed certificate with clear explanations and prioritized recommendations for any remedial work required."
        }
      ]
    },
    {
      id: "new-installations",
      title: "New Electrical Installations",
      slug: "new-installations",
      metaDescription: "Complete electrical installations for new builds, renovations and extensions. Our certified electricians design and implement systems that meet all regulations and your specific requirements.",
      ogImage: "/images/services/new-installation.jpg",
      icon: "Settings",
      shortDescription: "Complete electrical installations for new builds, renovations, and extensions, designed to meet your specific requirements.",
      fullDescription: "Our new installation service covers everything from initial design to final certification, ensuring your electrical systems are safe, efficient, and perfectly tailored to your needs. Whether it's a new build, extension, or complete renovation, our certified team delivers excellence.",
      features: [
        "Full property wiring for new builds",
        "Extensions and renovation electrical work",
        "Smart home electrical systems",
        "Commercial property installations",
        "Design and implementation services"
      ],
      benefits: [
        "Customized electrical solutions",
        "Energy-efficient designs",
        "Future-proof installations",
        "Complete safety compliance",
        "Professional documentation and certification"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Cape Coast", "Tamale", "Ghana Nationwide"],
      faq: [
        {
          question: "Can you integrate smart home systems into new installations?",
          answer: "Yes, we specialize in integrating modern smart home systems into new electrical installations, including lighting control, heating management, and security systems."
        },
        {
          question: "What certifications do I receive with a new installation?",
          answer: "All our new installations come with full electrical certification including Installation Certificates that confirm compliance with BS 7671 wiring regulations and building regulations Part P documentation where applicable."
        }
      ],
      relatedServices: ["generator-sales-installation", "solar-sales-installation", "fuse-board-upgrades"],
      processSteps: [
        {
          title: "Consultation & Design",
          description: "We discuss your requirements in detail and create a tailored electrical design plan that meets your needs and complies with regulations."
        },
        {
          title: "Detailed Proposal",
          description: "You'll receive a comprehensive proposal including designs, specifications, timelines, and transparent pricing."
        },
        {
          title: "Planning & Coordination",
          description: "We coordinate with other contractors and arrange all necessary permits and notifications required for the electrical installation."
        },
        {
          title: "Professional Installation",
          description: "Our qualified electricians complete all wiring, fixture installation, and system configuration according to the agreed plan."
        },
        {
          title: "Testing & Certification",
          description: "Every installation undergoes rigorous testing and is certified to meet all current electrical regulations and standards."
        },
        {
          title: "Handover & Support",
          description: "We provide a complete walkthrough of your new electrical systems and offer ongoing support as you settle in."
        }
      ]
    },
    {
      id: "fault-finding",
      title: "Electrical Fault Finding & Repairs",
      slug: "fault-finding",
      metaDescription: "Expert electrical fault finding and repair services with advanced diagnostic equipment. Quick identification and resolution of electrical problems from tripping circuits to power issues.",
      ogImage: "/images/services/fault-finding.jpg",
      icon: "HelpCircle",
      shortDescription: "Expert diagnostic services to quickly identify and resolve electrical faults and restore your systems to safe operation.",
      fullDescription: "Our fault finding service uses advanced diagnostics to pinpoint electrical issues quickly and accurately. From tripping circuits to intermittent power problems, we locate and resolve faults efficiently, minimizing disruption to your home or business.",
      features: [
        "Rapid response troubleshooting",
        "Advanced diagnostic equipment",
        "Circuit tracing and testing",
        "Intermittent fault resolution",
        "Comprehensive electrical system checks"
      ],
      benefits: [
        "Quick resolution of electrical problems",
        "Clear explanation of issues found",
        "Prevention of future failures",
        "Minimized disruption to property",
        "Safe and compliant repairs"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Cape Coast", "Tamale", "Ghana Nationwide"],
      faq: [
        {
          question: "How quickly can you respond to electrical faults?",
          answer: "We offer same-day service for most electrical faults, and emergency response within 2-4 hours for urgent safety issues."
        },
        {
          question: "What types of electrical faults can you diagnose?",
          answer: "We can diagnose and repair all types of electrical faults including circuit breaker tripping, power loss, flickering lights, burning smells, buzzing sounds, and intermittent power issues."
        }
      ],
      relatedServices: ["electrical-inspections", "emergency-services", "rewiring"],
      processSteps: [
        {
          title: "Initial Contact",
          description: "Contact us with details of your electrical issue. We'll ask key questions to help us prepare for the visit."
        },
        {
          title: "On-site Assessment",
          description: "Our electrician will arrive with specialized diagnostic equipment to evaluate the problem and its potential causes."
        },
        {
          title: "Diagnostic Testing",
          description: "We perform comprehensive testing to identify the exact nature and location of the fault in your electrical system."
        },
        {
          title: "Solution Proposal",
          description: "Once identified, we'll explain the issue clearly and provide options for repair with transparent pricing."
        },
        {
          title: "Professional Repair",
          description: "With your approval, we'll complete the necessary repairs efficiently, using quality parts and materials."
        },
        {
          title: "Verification Testing",
          description: "After repairs, we test thoroughly to ensure the fault is fully resolved and no new issues have been created."
        }
      ]
    },
    {
      id: "garden-lighting",
      title: "Garden & Outdoor Lighting",
      slug: "garden-lighting",
      metaDescription: "Professional garden lighting installation services to enhance your outdoor spaces. Weather-resistant, energy-efficient garden lighting solutions with timer and sensor controls.",
      ogImage: "/images/services/garden-lighting.jpg",
      icon: "Sun",
      shortDescription: "Enhance your outdoor spaces with professionally installed garden lighting solutions that are both beautiful and energy-efficient.",
      fullDescription: "Transform your garden and outdoor areas with our professional lighting installation services. We create beautiful, practical lighting schemes that enhance security, highlight landscape features, and create the perfect ambiance for outdoor entertaining.",
      features: [
        "Outdoor lighting design services",
        "Weather-resistant installations",
        "LED and energy-efficient options",
        "Security lighting solutions",
        "Timer and sensor controls"
      ],
      benefits: [
        "Enhanced property appearance",
        "Improved outdoor safety",
        "Extended use of garden spaces",
        "Energy-efficient solutions",
        "Added property value"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Cape Coast", "Tamale", "Ghana Nationwide"],
      faq: [
        {
          question: "Are outdoor lights weatherproof?",
          answer: "Yes, all our outdoor lighting installations use IP-rated weatherproof fixtures appropriate for the Ghanaian climate. We select lighting with suitable ingress protection ratings based on their specific location and exposure."
        },
        {
          question: "Can garden lights be controlled remotely?",
          answer: "Yes, we offer a range of control options including smartphone apps, timers, motion sensors, and integration with existing smart home systems to give you complete control over your garden lighting."
        }
      ],
      relatedServices: ["new-installations", "fault-finding", "emergency-services"],
      processSteps: [
        {
          title: "Design Consultation",
          description: "We'll discuss your vision for your outdoor space and create a lighting design that enhances your garden's best features."
        },
        {
          title: "Site Survey",
          description: "Our electrician will assess your outdoor areas, considering power sources, cable routes, and optimal fixture placement."
        },
        {
          title: "Detailed Proposal",
          description: "You'll receive a comprehensive proposal including lighting plans, fixture recommendations, and clear pricing."
        },
        {
          title: "Professional Installation",
          description: "Our team installs all lighting fixtures, cabling, and control systems with minimal disruption to your garden."
        },
        {
          title: "System Configuration",
          description: "We set up and configure all lighting controls, timers, and smart features to your preferences."
        },
        {
          title: "Evening Demonstration",
          description: "Once complete, we'll demonstrate your new lighting system at dusk and make any final adjustments to perfect the effect."
        }
      ]
    },
    {
      id: "ev-charger-sales",
      title: "EV Charger Sales and Installation",
      slug: "ev-charger-sales",
      metaDescription: "Professional electric vehicle charging station sales and installation services across Ghana. Expert solutions for home, business, and commercial locations with full compliance to safety standards.",
      ogImage: "/images/services/ev-charger.jpg",
      icon: "Battery",
      shortDescription: "Complete electric vehicle charging solutions for homes and businesses, with sales and installation of high-quality chargers.",
      fullDescription: "As electric vehicles become more prevalent across Ghana, we provide comprehensive EV charging solutions for both residential and commercial clients. Our service includes consultation, sales of leading EV charger brands, professional installation, and ongoing maintenance to ensure reliable charging facilities for your electric vehicles.",
      features: [
        "Wide range of EV chargers for all vehicle types",
        "Level 1, Level 2, and DC fast charging options",
        "Residential and commercial installation",
        "Smart charging systems with monitoring apps",
        "Weatherproof outdoor installations"
      ],
      benefits: [
        "Future-proof your property with EV infrastructure",
        "Increase property value with modern amenities",
        "Attract eco-conscious customers to your business",
        "Reduced charging times with optimized systems",
        "Compliant with international safety standards"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Cape Coast", "Tema", "Ghana Nationwide"],
      faq: [
        {
          question: "What types of EV chargers do you offer?",
          answer: "We offer a variety of chargers including Level 1 (standard outlet charging), Level 2 (240V faster charging), and select DC fast chargers for commercial applications. Our range includes both tethered and untethered units from reputable manufacturers."
        },
        {
          question: "How long does installation take?",
          answer: "Typical residential installations can be completed in 1-2 days, while commercial installations may take 2-5 days depending on complexity and required electrical upgrades. We'll provide a specific timeframe after our initial assessment."
        }
      ],
      relatedServices: ["electrical-installation", "commercial-projects", "electrical-maintenance"],
      processSteps: [
        {
          title: "Consultation",
          description: "We assess your vehicle type, charging needs, property electrical capacity, and usage patterns to recommend optimal charging solutions."
        },
        {
          title: "Site Survey",
          description: "Our technicians visit your property to examine electrical infrastructure and determine the best location and required upgrades."
        },
        {
          title: "Proposal",
          description: "We provide a detailed quote including equipment options, installation costs, and any necessary electrical upgrades."
        },
        {
          title: "Equipment Selection",
          description: "Based on our consultation, you'll select from our range of chargers that best suit your needs and budget."
        },
        {
          title: "Installation",
          description: "Our certified electricians complete the installation with minimal disruption, ensuring all safety standards are met."
        },
        {
          title: "Commissioning",
          description: "We test the system thoroughly, provide operational training, and ensure everything functions perfectly before handover."
        }
      ]
    },
    {
      id: "rewiring",
      title: "House Rewiring Services",
      slug: "rewiring",
      metaDescription: "Complete and partial house rewiring services by certified electricians. Update outdated electrical systems for improved safety and functionality with minimal disruption.",
      ogImage: "/images/services/rewiring.jpg",
      icon: "ScrollText",
      shortDescription: "Complete or partial rewiring services to update outdated or unsafe electrical systems throughout your property.",
      fullDescription: "Our rewiring service provides a comprehensive solution for properties with aging or inadequate electrical systems. We handle everything from partial upgrades to complete house rewiring, ensuring all work meets current regulations while minimizing disruption to your property.",
      features: [
        "Full house rewiring services",
        "Partial rewiring solutions",
        "Minimal disruption approaches",
        "Upgrade to modern standards",
        "Detailed planning and implementation"
      ],
      benefits: [
        "Enhanced electrical safety",
        "Increased capacity for modern appliances",
        "Elimination of outdated wiring hazards",
        "Improved property value",
        "Peace of mind with warranty-backed work"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Cape Coast", "Tamale", "Ghana Nationwide"],
      faq: [
        {
          question: "How long does rewiring a house take?",
          answer: "Rewiring an average 3-bedroom house typically takes 5-10 days depending on the property's size, accessibility, and whether the property is occupied during works. We create a detailed timeline during the assessment phase."
        },
        {
          question: "How disruptive is house rewiring?",
          answer: "Rewiring does involve accessing walls and floors, but we use minimally invasive techniques where possible. For occupied properties, we typically work room by room to reduce impact, and always clean thoroughly after each day's work."
        }
      ],
      relatedServices: ["fuse-board-upgrades", "electrical-inspections", "new-installations"],
      processSteps: [
        {
          title: "Initial Consultation",
          description: "We assess your property and current wiring, discuss your requirements, and determine the extent of rewiring needed."
        },
        {
          title: "Detailed Quotation",
          description: "You'll receive a comprehensive quotation outlining the work required, materials, timescales, and costs."
        },
        {
          title: "Planning & Preparation",
          description: "We create a detailed plan to minimize disruption and prepare the property by securing furniture and valuables."
        },
        {
          title: "First Fix",
          description: "Our electricians install new cables, back boxes, and circuit layouts before any plastering work is completed."
        },
        {
          title: "Second Fix",
          description: "After any building work is finished, we install all switches, sockets, and fixtures to complete the system."
        },
        {
          title: "Testing & Certification",
          description: "Your new electrical installation undergoes comprehensive testing and receives full certification to current standards."
        },
        {
          title: "Final Inspection",
          description: "We conduct a thorough walkthrough with you to ensure complete satisfaction with all aspects of the installation."
        }
      ]
    },
    {
      id: "emergency-services",
      title: "24/7 Emergency Electrical Services",
      slug: "emergency-services",
      metaDescription: "Round-the-clock emergency electrical services with rapid response times. Immediate assistance for urgent electrical issues to restore safety and functionality to your property.",
      ogImage: "/images/services/emergency-service.jpg",
      icon: "Clock",
      shortDescription: "24/7 emergency electrical services providing rapid response to urgent electrical issues to restore safety.",
      fullDescription: "Our emergency electrical service operates 24 hours a day, 7 days a week, providing rapid response when you need it most. From power outages to dangerous electrical faults, our teams are equipped to make your property safe and restore functionality quickly.",
      features: [
        "24-hour emergency call-outs",
        "Rapid response team",
        "Immediate safety measures",
        "Temporary and permanent solutions",
        "Post-emergency safety checks"
      ],
      benefits: [
        "Fast resolution of dangerous situations",
        "Available nights, weekends and holidays",
        "Fully equipped emergency vehicles",
        "Prevention of further damage",
        "Peace of mind during electrical emergencies"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Cape Coast", "Tamale", "Ghana Nationwide"],
      faq: [
        {
          question: "What is your emergency response time?",
          answer: "Our emergency response teams aim to reach most locations within 1-2 hours in urban areas and 2-4 hours in rural locations. For life-threatening emergencies, we prioritize immediate dispatch."
        },
        {
          question: "What qualifies as an electrical emergency?",
          answer: "Electrical emergencies include: burning smells from outlets or fuse boards, exposed wiring, water damage to electrical systems, complete power loss, smoke from electrical devices, and continuous circuit breaker tripping that can't be reset."
        }
      ],
      relatedServices: ["fault-finding", "electrical-inspections", "generator-sales-installation"],
      processSteps: [
        {
          title: "Emergency Call",
          description: "Contact our 24/7 emergency line. Our team will ask crucial questions to assess the situation and prioritize your call."
        },
        {
          title: "Immediate Safety Advice",
          description: "We provide critical safety instructions while our electrician is en route to your property."
        },
        {
          title: "Rapid Response",
          description: "Our electrician arrives equipped with tools and parts to address common emergency scenarios."
        },
        {
          title: "Safety Assessment",
          description: "The immediate area is secured and the electrical issue is assessed to determine appropriate action."
        },
        {
          title: "Emergency Resolution",
          description: "We implement immediate solutions to make your property safe and restore essential electrical functions."
        },
        {
          title: "Follow-up Plan",
          description: "If permanent repairs are needed, we'll provide options and schedule follow-up work as required."
        }
      ]
    },
    {
      id: "commercial-ev-solutions",
      title: "Commercial EV Charging Solutions",
      slug: "commercial-ev-solutions",
      metaDescription: "Comprehensive commercial EV charging infrastructure solutions for businesses, municipalities, and fleet operators across Ghana. Custom designed systems with management software, multiple charging points, and scalable architecture.",
      ogImage: "/images/services/commercial-ev.jpg",
      icon: "Building",
      shortDescription: "Complete commercial-grade electric vehicle charging infrastructure for businesses, parking facilities, and fleet operations.",
      fullDescription: "We design and implement comprehensive EV charging infrastructure for commercial applications, including multi-unit workplace charging, fleet depots, public parking facilities, and retail locations. Our solutions combine hardware, software, and electrical expertise to create reliable, scalable charging systems that meet the growing demands of electric mobility in the commercial sector.",
      features: [
        "Multi-point charging installations",
        "Load management systems for optimal power distribution",
        "Fleet management integration",
        "Payment and authentication systems",
        "Remote monitoring and diagnostics",
        "Scalable infrastructure for future expansion"
      ],
      benefits: [
        "Attract and retain EV-driving customers and employees",
        "Generate new revenue streams through charging fees",
        "Demonstrate environmental leadership",
        "Prepare for fleet electrification",
        "Qualify for green business certifications and incentives"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Tema", "Tamale", "Ghana Nationwide"],
      faq: [
        {
          question: "How many charging stations would my business need?",
          answer: "The number depends on several factors including your facility size, customer/employee dwell time, expected EV adoption rate, and available electrical capacity. Our consultants will analyze your specific needs and traffic patterns to recommend an optimal configuration, with options for phased implementation."
        },
        {
          question: "Can you integrate charging stations with our existing building management systems?",
          answer: "Yes, our commercial solutions include integration options with building management systems, energy management software, and business operational platforms. This allows for coordinated load management, usage reporting, and centralized control of your charging infrastructure."
        }
      ],
      relatedServices: ["ev-charger-sales", "commercial-projects", "electrical-installation"],
      processSteps: [
        {
          title: "Needs Assessment",
          description: "We evaluate your business requirements, site characteristics, and growth projections to understand the scope of your commercial EV charging needs."
        },
        {
          title: "Infrastructure Planning",
          description: "Our engineers assess your electrical capacity, network requirements, and physical space to develop a comprehensive charging infrastructure plan."
        },
        {
          title: "Solution Design",
          description: "We create detailed technical specifications for hardware, software, and electrical upgrades, with considerations for traffic flow, accessibility, and future expansion."
        },
        {
          title: "Project Proposal",
          description: "You'll receive a comprehensive proposal including equipment selection, installation timeline, costs, and potential return on investment calculations."
        },
        {
          title: "Implementation",
          description: "Our specialized teams handle electrical upgrades, charging equipment installation, networking setup, and commissioning with minimal disruption to your operations."
        },
        {
          title: "System Integration",
          description: "We integrate the charging infrastructure with relevant management systems, payment platforms, and monitoring tools."
        },
        {
          title: "Staff Training",
          description: "We provide comprehensive training for your team on system operation, basic troubleshooting, and management software."
        },
        {
          title: "Ongoing Support",
          description: "Our service plans include regular maintenance, software updates, remote monitoring, and technical support to ensure reliable operation."
        }
      ]
    },
    {
      id: "ev-maintenance",
      title: "EV Charging Station Maintenance",
      slug: "ev-maintenance",
      metaDescription: "Professional maintenance services for electric vehicle charging stations across Ghana. Regular servicing, troubleshooting, and repairs to ensure reliable operation of your EV charging infrastructure.",
      ogImage: "/images/services/ev-maintenance.jpg",
      icon: "Tool",
      shortDescription: "Comprehensive maintenance services for residential and commercial EV charging stations to ensure optimal performance and longevity.",
      fullDescription: "Keep your EV charging equipment in peak condition with our professional maintenance services. We provide routine inspections, preventative maintenance, firmware updates, and repairs for all types of charging stations. Our certified technicians identify potential issues before they cause downtime, extend the lifespan of your equipment, and ensure safety compliance throughout your charging infrastructure's lifecycle.",
      features: [
        "Comprehensive inspection protocols",
        "Preventative maintenance programs",
        "Firmware and software updates",
        "Cable and connector maintenance",
        "Communication system testing",
        "Safety compliance verification"
      ],
      benefits: [
        "Maximum uptime for your charging stations",
        "Extended equipment lifespan",
        "Reduced risk of electrical hazards",
        "Maintained manufacturer warranty compliance",
        "Lower total cost of ownership"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Tema", "Ghana Nationwide"],
      faq: [
        {
          question: "How often should EV charging stations be maintained?",
          answer: "We recommend quarterly visual inspections and annual comprehensive maintenance for residential charging stations. For commercial stations with higher usage, we suggest monthly visual inspections and quarterly comprehensive maintenance to ensure reliability and safety."
        },
        {
          question: "What does a maintenance visit include?",
          answer: "Our maintenance visits include inspection of cables, connectors, and mounting hardware; testing of safety circuits and communication systems; cleaning of components; checking electrical connections; verifying proper grounding; updating firmware where applicable; and testing full charging cycle functionality."
        }
      ],
      relatedServices: ["ev-charger-installation", "ev-charger-sales", "electrical-maintenance"],
      processSteps: [
        {
          title: "Maintenance Scheduling",
          description: "Book a convenient time for our technicians to service your charging equipment."
        },
        {
          title: "Initial Assessment",
          description: "We perform a visual inspection and diagnostic check of your charging station."
        },
        {
          title: "Hardware Inspection",
          description: "Thorough examination of cables, connectors, and physical components for signs of wear or damage."
        },
        {
          title: "Electrical Testing",
          description: "Verification of electrical connections, safety circuits, and power delivery capabilities."
        },
        {
          title: "Software Updates",
          description: "Application of latest firmware and software updates where applicable."
        },
        {
          title: "Component Cleaning",
          description: "Cleaning of relevant components to prevent dust buildup and ensure proper cooling."
        },
        {
          title: "Functionality Testing",
          description: "Complete operational testing to confirm proper charging functionality."
        },
        {
          title: "Maintenance Report",
          description: "Detailed report of work performed, current system status, and any recommendations for repairs or upgrades."
        }
      ]
    },
    
    {
      id: "ev-charger-installation",
      title: "EV Charger Installation",
      slug: "ev-charger-installation",
      metaDescription: "Professional electric vehicle charger installation services throughout Ghana. Expert installation of Level 1, Level 2, and DC fast charging stations for residential and commercial properties.",
      ogImage: "/images/services/ev-installation.jpg",
      icon: "Plug",
      shortDescription: "Certified installation of electric vehicle charging stations with electrical upgrades and full compliance with safety standards.",
      fullDescription: "Our skilled electricians provide expert installation services for all types of EV charging equipment. From simple home setups to complex commercial charging stations, we handle the entire process including electrical assessments, necessary upgrades, mounting, wiring, configuration, and testing. Each installation is performed to the highest safety standards, ensuring reliable performance and compliance with all regulatory requirements.",
      features: [
        "Certified electrical installation",
        "Service panel upgrades when needed",
        "Weatherproof outdoor installations",
        "Proper mounting and cable management",
        "Wi-Fi and network configuration",
        "Complete system testing and demonstration"
      ],
      benefits: [
        "Safe, code-compliant installation",
        "Optimized charging performance",
        "Professionally managed project from start to finish",
        "Minimal disruption to your property",
        "Full warranty on installation work"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Tema", "Cape Coast", "Ghana Nationwide"],
      faq: [
        {
          question: "How long does installation typically take?",
          answer: "Most residential installations can be completed in a single day, provided no major electrical upgrades are required. Commercial installations may take 1-3 days depending on complexity, number of stations, and any necessary infrastructure upgrades."
        },
        {
          question: "Do I need to upgrade my electrical panel for an EV charger?",
          answer: "It depends on your current electrical setup and the charger you select. Many homes will require a panel upgrade to safely accommodate a Level 2 charger. Our initial assessment will determine if your existing service has sufficient capacity or if upgrades are necessary."
        }
      ],
      relatedServices: ["ev-charger-sales", "electrical-installation", "ev-maintenance"],
      processSteps: [
        {
          title: "Initial Consultation",
          description: "Discuss your EV charging needs, property characteristics, and installation preferences."
        },
        {
          title: "Site Assessment",
          description: "Our technicians evaluate your electrical system and identify optimal charger location."
        },
        {
          title: "Installation Plan",
          description: "We develop a detailed plan including any necessary electrical upgrades and mounting requirements."
        },
        {
          title: "Quotation",
          description: "Receive a comprehensive quote including all labor, materials, and potential panel upgrades."
        },
        {
          title: "Scheduling",
          description: "We arrange a convenient installation time that minimizes disruption to your routine."
        },
        {
          title: "Preparation",
          description: "Any necessary preliminary work is completed, such as electrical panel upgrades."
        },
        {
          title: "Installation Day",
          description: "Our certified electricians mount the charger, run wiring, make connections, and configure the system."
        },
        {
          title: "Testing and Demonstration",
          description: "We thoroughly test the charging station and provide a complete demonstration of operation."
        },
        {
          title: "Final Inspection",
          description: "All work is inspected to ensure compliance with electrical codes and safety standards."
        }
      ]
    },
    
    {
      id: "ev-charging",
      title: "Public EV Charging Network",
      slug: "ev-charging",
      metaDescription: "Access Ghana's growing network of public EV charging stations. Convenient locations, multiple charging speeds, and reliable service for electric vehicle owners on the go.",
      ogImage: "/images/services/public-ev-charging.jpg",
      icon: "MapPin",
      shortDescription: "Access to an expanding network of public electric vehicle charging stations across major Ghanaian cities and highways.",
      fullDescription: "Our public EV charging network provides convenient charging options for electric vehicle owners throughout Ghana. With strategically located stations in urban centers, commercial districts, and along major travel corridors, we ensure you can charge your vehicle wherever your journey takes you. Our network includes a variety of charging speeds from standard Level 2 to rapid DC fast charging, accessible through our mobile app or RFID cards.",
      features: [
        "Growing network of charging locations",
        "Multiple charging speeds available",
        "24/7 access at most locations",
        "Mobile app for station finding and payment",
        "RFID card access option",
        "Real-time availability updates"
      ],
      benefits: [
        "Extend your EV driving range",
        "Charge while shopping or dining",
        "Transparent pricing with no hidden fees",
        "Reduced range anxiety for EV owners",
        "Support for all standard connector types"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Tema", "Major Highways", "Ghana Nationwide"],
      faq: [
        {
          question: "How do I find and use your charging stations?",
          answer: "Download our mobile app to locate stations, check availability, and pay for charging. The app shows real-time status, charging speeds available, and connector types at each location. Alternatively, you can request an RFID card for seamless access to our entire network."
        },
        {
          question: "How much does it cost to charge my vehicle?",
          answer: "Pricing varies by location and charging speed. Level 2 charging typically costs 4-6 GHS per kWh, while DC fast charging ranges from 7-9 GHS per kWh. Some locations may also have time-based fees after a certain duration to encourage turnover. All current rates are displayed in our app and at the charging station."
        }
      ],
      relatedServices: ["ev-charger-sales", "ev-charger-installation", "commercial-ev-solutions"],
      processSteps: [
        {
          title: "Network Registration",
          description: "Download our app or visit our website to create an account for accessing the charging network."
        },
        {
          title: "Payment Setup",
          description: "Add your preferred payment method to your account for seamless charging."
        },
        {
          title: "Find a Station",
          description: "Use the app map feature to locate available charging stations near you or along your route."
        },
        {
          title: "Check Availability",
          description: "View real-time status of charging points including available connector types and charging speeds."
        },
        {
          title: "Start Charging",
          description: "Initiate charging via the app or tap your RFID card to begin your charging session."
        },
        {
          title: "Monitor Progress",
          description: "Track your charging session, including power delivery, cost, and estimated completion time."
        },
        {
          title: "Complete Session",
          description: "End your charging session through the app or by disconnecting according to station instructions."
        },
        {
          title: "Payment Processing",
          description: "Automatic billing through your registered payment method with receipt delivered to your email."
        }
      ]
    },
    
    {
      id: "solar-maintenance",
      title: "Solar System Maintenance",
      slug: "solar-maintenance",
      metaDescription: "Professional maintenance services for solar power systems throughout Ghana. Regular servicing, cleaning, and repairs to optimize energy production and extend system lifespan.",
      ogImage: "/images/services/solar-maintenance.jpg",
      icon: "Sun",
      shortDescription: "Comprehensive maintenance services to ensure optimal performance and longevity of your solar power system.",
      fullDescription: "Maximize the return on your solar investment with our professional maintenance services. Regular maintenance not only ensures optimal energy generation but also extends the lifespan of your entire system. Our technicians perform thorough inspections, panel cleaning, electrical checks, and preventative maintenance to identify and address issues before they impact performance. From residential rooftop systems to commercial installations, we keep your solar array operating at peak efficiency.",
      features: [
        "Comprehensive system inspections",
        "Professional panel cleaning",
        "Inverter performance analysis",
        "Electrical connection testing",
        "Monitoring system checks",
        "Performance optimization"
      ],
      benefits: [
        "Maximized energy production",
        "Extended system lifespan",
        "Reduced risk of system failures",
        "Maintained manufacturer warranties",
        "Early detection of potential issues"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Tema", "Cape Coast", "Ghana Nationwide"],
      faq: [
        {
          question: "How often should solar panels be maintained?",
          answer: "We recommend professional maintenance at least twice yearly for most systems in Ghana. Systems in dustier areas or near industrial zones may benefit from quarterly maintenance. Regular cleaning between professional visits can be beneficial during dry seasons."
        },
        {
          question: "What maintenance do solar systems need?",
          answer: "Solar maintenance includes thorough panel cleaning to remove dust and debris, inspection of mounting hardware, checking electrical connections and wiring, inverter performance testing, battery system assessment (if applicable), and verification of monitoring systems. We also analyze system performance data to identify any underperforming components."
        }
      ],
      relatedServices: ["solar-installation", "solar-panel-sales", "solar-inverters"],
      processSteps: [
        {
          title: "Maintenance Scheduling",
          description: "Book a convenient time for our technicians to service your solar system."
        },
        {
          title: "System Inspection",
          description: "Visual examination of all system components including panels, mounting, wiring, and inverters."
        },
        {
          title: "Performance Analysis",
          description: "Review of system production data to identify any performance anomalies or degradation."
        },
        {
          title: "Panel Cleaning",
          description: "Professional cleaning of solar panels using appropriate methods and solutions."
        },
        {
          title: "Electrical Testing",
          description: "Comprehensive checks of all electrical connections, grounding, and safety systems."
        },
        {
          title: "Inverter Service",
          description: "Thorough inspection and testing of inverters, including firmware updates if needed."
        },
        {
          title: "Battery Maintenance",
          description: "For systems with batteries, testing of capacity, connections, and overall health."
        },
        {
          title: "Monitoring System Check",
          description: "Verification that monitoring systems are accurately reporting system performance."
        },
        {
          title: "Documentation",
          description: "Detailed report of findings, work performed, and recommendations for optimal system performance."
        }
      ]
    },
    
    {
      id: "solar-inverters",
      title: "Solar Inverter Solutions",
      slug: "solar-inverters",
      metaDescription: "Premium solar inverters for all applications in Ghana. String inverters, microinverters, hybrid inverters, and off-grid inverters from leading manufacturers with professional installation.",
      ogImage: "/images/services/solar-inverters.jpg",
      icon: "Zap",
      shortDescription: "High-quality solar inverters for residential, commercial, and industrial applications with expert installation and support.",
      fullDescription: "We provide a comprehensive range of solar inverters to convert your solar array's DC power into usable AC electricity. From string inverters for simple installations to advanced hybrid inverters with battery integration, we offer solutions from the world's leading manufacturers. Our expertise ensures you get the right inverter technology for your specific needs, whether you're looking for grid-tie, off-grid, or backup power capabilities.",
      features: [
        "String, microinverter, and hybrid options",
        "Grid-tie and off-grid solutions",
        "Single and three-phase configurations",
        "Built-in monitoring capabilities",
        "Battery integration options",
        "Various capacity ranges"
      ],
      benefits: [
        "Optimized solar energy conversion",
        "Reliable performance in Ghana's climate",
        "Enhanced system monitoring",
        "Flexible power management options",
        "Long-term warranties"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Tema", "Ghana Nationwide"],
      faq: [
        {
          question: "What type of inverter is best for my solar system?",
          answer: "The best inverter depends on your specific needs. String inverters are cost-effective for simple layouts with consistent sunlight. Microinverters work better for complex roof designs or partial shading. Hybrid inverters are ideal if you want battery storage. During our consultation, we'll analyze your energy needs, installation site, and future plans to recommend the optimal solution."
        },
        {
          question: "How long do solar inverters typically last?",
          answer: "Quality solar inverters typically last 10-15 years, though this can vary by brand and model. String inverters generally have shorter lifespans (10-12 years) compared to microinverters (15-25 years). Most manufacturers offer warranties of 5-10 years, with options to extend coverage for premium models."
        }
      ],
      relatedServices: ["solar-installation", "solar-panel-sales", "solar-maintenance"],
      processSteps: [
        {
          title: "Needs Assessment",
          description: "Consultation to understand your energy requirements, system size, and specific needs."
        },
        {
          title: "System Design",
          description: "Our engineers calculate optimal inverter capacity and recommend suitable technology options."
        },
        {
          title: "Product Selection",
          description: "Choose from our curated selection of high-quality inverters based on performance needs and budget."
        },
        {
          title: "Quotation",
          description: "Receive a detailed quote including the inverter unit and professional installation."
        },
        {
          title: "Procurement",
          description: "We source your selected inverter from authorized distributors, ensuring authentic products."
        },
        {
          title: "Installation",
          description: "Professional installation by our certified technicians, including system integration."
        },
        {
          title: "Configuration",
          description: "Custom configuration of inverter settings for optimal performance in your specific conditions."
        },
        {
          title: "Monitoring Setup",
          description: "Configuration of monitoring systems for real-time performance tracking."
        },
        {
          title: "Testing & Commissioning",
          description: "Comprehensive testing to ensure proper operation and maximum efficiency."
        },
        {
          title: "Training",
          description: "User training on basic operation, monitoring features, and maintenance requirements."
        }
      ]
    },
    
    {
      id: "solar-installation",
      title: "Solar System Installation",
      slug: "solar-installation",
      metaDescription: "Professional solar power system installation across Ghana. Complete installation services for residential, commercial, and industrial properties with turnkey solutions and quality workmanship.",
      ogImage: "/images/services/solar-installation.jpg",
      icon: "Sun",
      shortDescription: "Expert installation of solar power systems for homes, businesses, and industrial facilities throughout Ghana.",
      fullDescription: "Our comprehensive solar installation service handles every aspect of bringing clean, renewable energy to your property. From initial assessment and custom system design to professional installation and final commissioning, our experienced teams ensure quality workmanship at every step. We specialize in grid-tied systems, off-grid solutions, and hybrid setups, adapting our approach to your specific energy needs, property characteristics, and budget considerations.",
      features: [
        "Customized system design",
        "Roof integrity assessment",
        "Professional mounting and racking",
        "Expert electrical integration",
        "Battery system installation",
        "Grid connection and commissioning",
        "Monitoring system setup"
      ],
      benefits: [
        "Quality installation ensuring system longevity",
        "Optimized energy production",
        "Safe and code-compliant electrical work",
        "Minimal disruption to your property",
        "Complete project management"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Tema", "Cape Coast", "Ghana Nationwide"],
      faq: [
        {
          question: "How long does a solar installation take?",
          answer: "Installation timeframes vary based on system size and complexity. Typical residential installations (3-10kW) can be completed in 2-5 days. Commercial systems may take 1-3 weeks. Factors that can affect timing include roof type, system complexity, weather conditions, and any necessary electrical upgrades."
        },
        {
          question: "Will my roof support solar panels?",
          answer: "Most structurally sound roofs can support solar panels. During our site assessment, we evaluate your roof's structural integrity, orientation, shading, and available space. We consider material type, age, and condition to determine suitability. If your roof needs repairs, we recommend completing those before installation."
        }
      ],
      relatedServices: ["solar-panel-sales", "solar-inverters", "solar-maintenance"],
      processSteps: [
        {
          title: "Initial Consultation",
          description: "We discuss your energy goals, review electricity consumption, and explain available solar options."
        },
        {
          title: "Site Assessment",
          description: "Our technicians conduct a thorough on-site evaluation of your property, including roof condition, orientation, shading analysis, and electrical infrastructure."
        },
        {
          title: "Custom System Design",
          description: "Our engineers create a tailored solar system design optimized for your energy needs and property characteristics."
        },
        {
          title: "Proposal & Quotation",
          description: "You receive a comprehensive proposal including system specifications, energy production estimates, financial analysis, and detailed pricing."
        },
        {
          title: "Contract & Permitting",
          description: "Upon approval, we handle necessary permits, utility applications, and regulatory requirements."
        },
        {
          title: "Equipment Procurement",
          description: "We source high-quality components according to your system design specifications."
        },
        {
          title: "Installation",
          description: "Our experienced installation teams mount the solar array, install inverters and electrical equipment, and integrate the system with your property's electrical infrastructure."
        },
        {
          title: "Battery Integration",
          description: "For systems with storage, we install and configure battery systems and backup power capabilities."
        },
        {
          title: "System Commissioning",
          description: "We conduct comprehensive testing of all components, verify proper operation, and activate the system."
        },
        {
          title: "Final Inspection",
          description: "The completed installation undergoes quality control checks and regulatory inspections."
        },
        {
          title: "Customer Training",
          description: "We provide complete orientation on system operation, monitoring, and maintenance requirements."
        }
      ]
    },
    
    {
      id: "solar-panel-sales",
      title: "Solar Panel Sales",
      slug: "solar-panel-sales",
      metaDescription: "Premium solar panels for residential and commercial applications in Ghana. High-efficiency monocrystalline, polycrystalline, and thin-film panels from leading manufacturers with warranty protection.",
      ogImage: "/images/services/solar-panels.jpg",
      icon: "Grid",
      shortDescription: "Supply of high-quality solar panels from leading manufacturers with expert advice and competitive pricing.",
      fullDescription: "We offer a comprehensive selection of solar panels to meet every need and budget. Our product range includes premium monocrystalline panels for maximum efficiency, cost-effective polycrystalline options, and specialized panels for unique applications. We partner with world-renowned manufacturers known for quality, reliability, and performance, ensuring you receive genuine products with full warranty protection. Our experts help you select the ideal panels based on your energy requirements, available space, and budget considerations.",
      features: [
        "Premium and mid-range panel options",
        "Monocrystalline and polycrystalline technologies",
        "Various wattage capacities",
        "Different physical dimensions",
        "Bifacial panel options",
        "Black frame aesthetic choices"
      ],
      benefits: [
        "Expert guidance on panel selection",
        "Competitive pricing on quality products",
        "Manufacturer warranties of 10-25 years",
        "Performance guarantees",
        "Compatible with all standard mounting systems"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Tema", "Ghana Nationwide"],
      faq: [
        {
          question: "What's the difference between monocrystalline and polycrystalline solar panels?",
          answer: "Monocrystalline panels offer higher efficiency (15-22%) and better performance in limited space or partial shade, but at a higher cost. Polycrystalline panels are more affordable with slightly lower efficiency (13-17%). For most Ghanaian installations, both perform well, but monocrystalline may be preferable in the hot climate due to their better temperature coefficient."
        },
        {
          question: "How many solar panels do I need?",
          answer: "The number of panels depends on your energy consumption, available space, panel efficiency, and budget. As a rough estimate, a typical Ghanaian home might need 6-12 panels for partial coverage of energy needs, while complete energy independence could require 15-25 panels. We calculate your specific requirements based on your electricity bills and energy goals."
        }
      ],
      relatedServices: ["solar-installation", "solar-inverters", "solar-maintenance"],
      processSteps: [
        {
          title: "Needs Assessment",
          description: "We evaluate your energy requirements, available space, and budget considerations."
        },
        {
          title: "Panel Recommendation",
          description: "Our experts suggest optimal panel types and quantities based on your specific situation."
        },
        {
          title: "Product Presentation",
          description: "Review detailed specifications, performance data, and warranty information for recommended panels."
        },
        {
          title: "Quotation",
          description: "Receive a comprehensive quote including panels and optional installation services."
        },
        {
          title: "Order Placement",
          description: "Place your order with convenient payment options and clear delivery timelines."
        },
        {
          title: "Delivery Coordination",
          description: "We arrange secure transportation to your location or installation site."
        },
        {
          title: "Quality Verification",
          description: "Inspection of panels upon delivery to ensure they meet specifications and are free from damage."
        },
        {
          title: "Installation Planning",
          description: "If requested, we coordinate professional installation of your new solar panels."
        }
      ]
    },
    
    {
      id: "generator-repair",
      title: "Generator Repair Services",
      slug: "generator-repair",
      metaDescription: "Expert generator repair services across Ghana. Fast diagnosis and repair of all generator types and brands with quality parts and skilled technicians for residential and commercial generators.",
      ogImage: "/images/services/generator-repair.jpg",
      icon: "Wrench",
      shortDescription: "Professional repair services for all types and brands of generators with rapid response and quality workmanship.",
      fullDescription: "When your generator fails, our experienced repair teams provide fast, effective solutions to restore your backup power. We diagnose and repair generators of all sizes and brands, from small residential units to large commercial systems. Our technicians are equipped with specialized tools and genuine parts to address mechanical failures, electrical issues, control system malfunctions, and fuel system problems, ensuring your generator returns to reliable operation quickly.",
      features: [
        "Comprehensive diagnostic services",
        "Mechanical and electrical repairs",
        "Control panel and AVR repairs",
        "Fuel system servicing",
        "Cooling system repairs",
        "Emergency repair services",
        "Genuine replacement parts"
      ],
      benefits: [
        "Fast restoration of backup power",
        "Expert diagnosis of complex issues",
        "Quality repairs with warranty protection",
        "Prevention of cascading failures",
        "Extended generator lifespan"
      ],
      locations: ["Accra", "Kumasi", "Takoradi", "Tema", "Cape Coast", "Ghana Nationwide"],
      faq: [
        {
          question: "How quickly can you respond to a generator breakdown?",
          answer: "We offer emergency response services with typical arrival times of 2-4 hours in major cities and 4-8 hours in more remote areas. For critical facilities like hospitals or data centers, we prioritize response times. Non-emergency repairs can usually be scheduled within 24-48 hours."
        },
        {
          question: "Do you repair all generator brands?",
          answer: "Yes, our technicians are trained to service and repair all major generator brands including Cummins, Perkins, FG Wilson, Caterpillar, SDMO, Jubaili Bros, Mikano, Mantrac, and many others. We maintain a comprehensive inventory of common parts and have reliable supply chains for specialized components."
        }
      ],
      relatedServices: ["generator-maintenance", "generator-installation", "emergency-services"],
      processSteps: [
        {
          title: "Service Request",
          description: "Contact our service center with details about your generator issue and location."
        },
        {
          title: "Initial Assessment",
          description: "Our team gathers information about symptoms, generator specifications, and fault indicators."
        },
        {
          title: "Technician Dispatch",
          description: "We send appropriately skilled technicians with relevant tools and common replacement parts."
        },
        {
          title: "On-site Diagnosis",
          description: "Comprehensive troubleshooting to identify the root cause of the malfunction."
        },
        {
          title: "Repair Recommendation",
          description: "You receive a detailed explanation of the issue and a quote for necessary repairs."
        },
        {
          title: "Parts Procurement",
          description: "If specialized parts are needed, we source genuine components through our supply network."
        },
        {
          title: "Repair Execution",
          description: "Our technicians complete the repair work with attention to quality and safety."
        },
        {
          title: "Testing & Verification",
          description: "The generator undergoes load testing and operational verification to ensure proper function."
        },
        {
          title: "Service Documentation",
          description: "You receive complete documentation of the repair work performed and parts replaced."
        },
        {
          title: "Follow-up",
          description: "We check back after repairs to confirm continued proper operation and address any concerns."
        }
      ]
    },
    {
      "id": "generator-maintenance",
      "title": "Generator Maintenance Services",
      "slug": "generator-maintenance",
      "metaDescription": "Professional generator maintenance services throughout Ghana. Regular servicing, preventative maintenance, and scheduled inspections to ensure reliable backup power for homes and businesses.",
      "ogImage": "/images/services/generator-maintenance.jpg",
      "icon": "Tool",
      "shortDescription": "Comprehensive maintenance programs for all types and brands of generators to ensure optimal performance and reliability.",
      "fullDescription": "Keep your generator in peak operating condition with our professional maintenance services. Regular maintenance is crucial for ensuring your backup power system works flawlessly when needed most. Our technicians perform thorough inspections, preventative maintenance, and scheduled servicing for generators of all sizes and brands. From oil changes and filter replacements to load testing and component inspections, our maintenance programs help prevent breakdowns, extend equipment life, and maintain warranty compliance.",
      "features": [
        "Customized maintenance schedules",
        "Comprehensive multi-point inspections",
        "Oil and filter changes",
        "Fuel system maintenance",
        "Cooling system service",
        "Battery maintenance and testing",
        "Load bank testing",
        "Control system checks"
      ],
      "benefits": [
        "Reliable operation during power outages",
        "Extended generator lifespan",
        "Reduced risk of unexpected failures",
        "Maintained manufacturer warranty",
        "Lower long-term operating costs"
      ],
      "locations": ["Accra", "Kumasi", "Takoradi", "Tema", "Cape Coast", "Ghana Nationwide"],
      "faq": [
        {
          "question": "How often should generators be maintained?",
          "answer": "For standby generators that run occasionally, we recommend quarterly inspections and annual comprehensive service. For prime power generators that operate regularly, monthly maintenance is advised. However, maintenance frequency also depends on usage hours, environmental conditions, and manufacturer specifications."
        },
        {
          "question": "What does generator maintenance include?",
          "answer": "Our standard maintenance service includes oil and filter changes, air filter inspection/replacement, fuel filter service, coolant checks, battery testing, starter inspection, alternator testing, control panel verification, fuel quality assessment, exhaust system inspection, and load testing. Additional services may be performed based on manufacturer recommendations and generator condition."
        }
      ],
      "relatedServices": ["generator-repair", "generator-installation", "generator-sales"],
      "processSteps": [
        {
          "title": "Maintenance Scheduling",
          "description": "Set up a maintenance plan based on your generator type, usage patterns, and manufacturer recommendations."
        },
        {
          "title": "Pre-Service Inspection",
          "description": "Visual examination of the generator and operating environment."
        },
        {
          "title": "Engine Service",
          "description": "Oil change, filter replacement, and inspection of key engine components."
        },
        {
          "title": "Fuel System Service",
          "description": "Inspection and maintenance of fuel lines, filters, pumps, and tanks."
        },
        {
          "title": "Cooling System Check",
          "description": "Inspection of coolant levels, hoses, belts, and radiator condition."
        },
        {
          "title": "Electrical System Testing",
          "description": "Battery testing, charging system verification, and starter inspection."
        },
        {
          "title": "Control Panel Verification",
          "description": "Testing of gauges, controllers, and automatic transfer switches."
        },
        {
          "title": "Load Testing",
          "description": "Operation under load to ensure proper performance and output."
        },
        {
          "title": "Final Inspection",
          "description": "Complete verification of all systems and components."
        },
        {
          "title": "Documentation",
          "description": "Detailed service report including work performed and recommendations."
        }
      ]
    },
    
    {
      "id": "generator-installation",
      "title": "Generator Installation",
      "slug": "generator-installation",
      "metaDescription": "Professional generator installation services across Ghana. Expert installation of residential, commercial, and industrial generators with proper sizing, placement, and electrical integration.",
      "ogImage": "/images/services/generator-installation.jpg",
      "icon": "Settings",
      "shortDescription": "Complete installation services for backup and prime power generators with professional electrical integration and commissioning.",
      "fullDescription": "Our generator installation service provides end-to-end solutions for reliable backup power. From initial site assessment and proper sizing to professional installation and commissioning, we handle every aspect of bringing dependable power protection to your home or business. Our certified technicians ensure correct placement, secure mounting, proper fuel system connections, and code-compliant electrical integration, resulting in a safe, efficient, and reliable generator system.",
      "features": [
        "Comprehensive site assessment",
        "Generator sizing and selection assistance",
        "Concrete pad construction",
        "Professional mounting and placement",
        "Fuel system installation",
        "Exhaust system setup",
        "Electrical integration",
        "Automatic transfer switch installation",
        "Complete system commissioning"
      ],
      "benefits": [
        "Properly sized system for your needs",
        "Code-compliant installation",
        "Safe fuel and electrical connections",
        "Optimized generator placement",
        "Professional project management"
      ],
      "locations": ["Accra", "Kumasi", "Takoradi", "Tema", "Cape Coast", "Ghana Nationwide"],
      "faq": [
        {
          "question": "How long does generator installation take?",
          "answer": "Installation timeframes vary based on system complexity. Typical residential installations can be completed in 1-2 days once all materials are on-site. Commercial installations may take 2-5 days. Factors affecting timeline include site preparation needs, concrete curing time, electrical complexity, and permit approval processes."
        },
        {
          "question": "Where should my generator be installed?",
          "answer": "Generators should be installed on a flat, stable surface outside your building, with proper clearance from doors, windows, and combustible materials (typically 5 feet minimum). Consideration must be given to noise concerns, exhaust direction, maintenance accessibility, and proximity to fuel sources and electrical connection points. Our site assessment will identify the optimal location for your specific situation."
        }
      ],
      "relatedServices": ["generator-sales", "generator-maintenance", "generator-repair"],
      "processSteps": [
        {
          "title": "Initial Consultation",
          "description": "Discuss your power needs, budget considerations, and site characteristics."
        },
        {
          "title": "Site Assessment",
          "description": "Our technicians evaluate your property to determine optimal generator placement and installation requirements."
        },
        {
          "title": "System Design",
          "description": "We develop a comprehensive installation plan including generator sizing, placement, fuel system, and electrical integration."
        },
        {
          "title": "Proposal & Quotation",
          "description": "You receive a detailed proposal covering all aspects of the installation with clear pricing."
        },
        {
          "title": "Permitting",
          "description": "We obtain necessary permits and approvals from local authorities."
        },
        {
          "title": "Site Preparation",
          "description": "Preparation of the installation area including concrete pad construction if required."
        },
        {
          "title": "Generator Delivery",
          "description": "Safe transport and positioning of the generator unit."
        },
        {
          "title": "Fuel System Installation",
          "description": "Setup of fuel lines, tanks, and connections according to safety standards."
        },
        {
          "title": "Electrical Integration",
          "description": "Professional wiring and installation of transfer switches and control systems."
        },
        {
          "title": "Exhaust System Setup",
          "description": "Installation of proper exhaust components to ensure safe operation."
        },
        {
          "title": "System Commissioning",
          "description": "Comprehensive testing of all components and systems under various load conditions."
        },
        {
          "title": "Final Inspection",
          "description": "Quality control checks and verification of code compliance."
        },
        {
          "title": "Customer Training",
          "description": "Complete orientation on system operation, maintenance, and safety procedures."
        }
      ]
    },
    
    {
      "id": "generator-sales",
      "title": "Generator Sales",
      "slug": "generator-sales",
      "metaDescription": "Quality generators for residential, commercial, and industrial use in Ghana. Wide selection of diesel, petrol, and gas generators from leading manufacturers with expert sizing and selection assistance.",
      "ogImage": "/images/services/generator-sales.jpg",
      "icon": "Package",
      "shortDescription": "Supply of reliable backup and prime power generators from trusted brands with professional sizing and selection guidance.",
      "fullDescription": "We offer a comprehensive range of high-quality generators to meet every power need. From portable units for home backup to large industrial systems for continuous operation, our selection includes trusted brands known for reliability and performance. Our power specialists help you navigate the options, ensuring you select the right generator based on your power requirements, fuel preferences, noise considerations, and budget constraints. Each generator comes with manufacturer warranty and the option for professional installation and maintenance.",
      "features": [
        "Wide range of power capacities",
        "Residential, commercial, and industrial options",
        "Diesel, petrol, and gas models",
        "Open-frame and enclosed designs",
        "Manual and automatic starting systems",
        "Portable and stationary units",
        "Single and three-phase output options"
      ],
      "benefits": [
        "Expert guidance on generator selection",
        "Properly sized units for your needs",
        "Quality brands with warranty protection",
        "Compatible with professional installation",
        "Local parts and service support"
      ],
      "locations": ["Accra", "Kumasi", "Takoradi", "Tema", "Ghana Nationwide"],
      "faq": [
        {
          "question": "What size generator do I need?",
          "answer": "Generator sizing depends on your specific power requirements. For residential use, we typically recommend 5-15kVA for essential loads, or 20-50kVA for whole house backup. Commercial needs vary widely from 20kVA for small shops to 100+ kVA for larger facilities. We conduct a detailed load analysis to determine your exact requirements, considering both starting and running wattages of your equipment."
        },
        {
          "question": "Which is better: diesel, petrol, or gas generators?",
          "answer": "Each fuel type has advantages. Diesel generators offer better fuel efficiency, longer lifespan, and are ideal for regular or heavy use. Petrol generators are typically less expensive upfront and suitable for occasional use or smaller applications. Gas generators run cleaner and quieter but require natural gas or LPG infrastructure. The best choice depends on your specific situation, including runtime requirements, fuel availability, and budget considerations."
        }
      ],
      "relatedServices": ["generator-installation", "generator-maintenance", "generator-repair"],
      "processSteps": [
        {
          "title": "Needs Assessment",
          "description": "We evaluate your power requirements, usage patterns, and specific needs."
        },
        {
          "title": "Load Analysis",
          "description": "Detailed calculation of your power requirements to ensure proper generator sizing."
        },
        {
          "title": "Generator Recommendation",
          "description": "Our experts suggest suitable generator options based on your specific situation."
        },
        {
          "title": "Product Presentation",
          "description": "Review detailed specifications, performance data, and warranty information for recommended generators."
        },
        {
          "title": "Site Evaluation",
          "description": "Optional assessment of your location to verify space requirements and installation feasibility."
        },
        {
          "title": "Quotation",
          "description": "Receive a comprehensive quote including the generator unit and optional installation services."
        },
        {
          "title": "Order Placement",
          "description": "Place your order with convenient payment options and clear delivery timelines."
        },
        {
          "title": "Delivery Coordination",
          "description": "We arrange safe transportation to your location or installation site."
        },
        {
          "title": "Installation Planning",
          "description": "If requested, we coordinate professional installation of your new generator."
        },
        {
          "title": "After-Sales Support",
          "description": "Ongoing assistance including warranty service, maintenance programs, and technical support."
        }
      ]
    }
  ];
  
  export function getAllServices() {
    return serviceData;
  }
  
  export function getServiceData(slug) {
    return serviceData.find(service => service.slug === slug);
  }
  
  export function getServicePaths() {
    return serviceData.map(service => ({
      params: { slug: service.slug }
    }));
  }