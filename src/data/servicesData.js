import { Workflow, Smartphone, Code2, TrendingUp, Palette } from "lucide-react";

const servicesData = [
  {
    slug: "erp-solutions",
    icon: Workflow,

    title: "ERP Solutions that run the whole operation",

    subtitle:
      "Streamline your operations with custom ERP systems designed to manage sales, inventory, projects, finance HR and business workflows all in one platform.",

    highlights: [
      "Sales & Inventory Management",
      "Finance & HR Workflows",
      "Project & Operations Tracking",
      "Custom ERP Integrations",
    ],
    about: {
      heading: "About The Service",
      description:
        "Every business works differently, so your software should too. We build custom ERP solutions that bring your sales, inventory, finance, HR and operations together in one easy-to-use system.",
    },

    whyItMatters: {
      heading: "Why It Matters",

      statements: [
        "Managing multiple tools and spreadsheets can slow your team down. A custom ERP keeps everything organized, saves time and helps you make better business decisions.",

        "A single source of truth turns guesswork into decisions you can defend.",
      ],
    },

    whyBootstack: {
      heading: "Why Bootstact",
      description:
        "We don't believe in one-size-fits-all software. We understand your business, design the right solution and build an ERP that grows with you.",
    },

    whyBootstackPoints: [
      "Business\nUnderstanding",
      "Custom\nDevelopment",
      "Scalable\nArchitecture",
      "Long-Term\nSupport",
    ],

    services: [
      {
        title: "Custom ERP Development",
      },
      {
        title: "CRM Integration",
      },
      {
        title: "Inventory Management",
      },
      {
        title: "HR & Payroll",
      },
      {
        title: "Finance & Reports",
      },
    ],

    process: [
      {
        title: "Understand Your Business",
      },
      {
        title: "Plan the Solution",
      },
      {
        title: "Develop The Software",
      },
      {
        title: "Test Everything Carefully",
      },
      {
        title: "Launch & Support",
      },
    ],

    cta: {
      title: "Ready to build your next app?",
      description:
        "Tell us what you want to build. We'll turn your idea into a reliable mobile experience.",
      primaryButton: "Book a discovery call",
    },
  },

  //mobile-app-development

  {
    slug: "mobile-app-development",
    icon: Smartphone,

    title: "Mobile apps people keep on the home screen",

    subtitle:
      "Build fast, secure and user-friendly Android and iOS applications that deliver seamless customer experiences and support your business growth.",

    highlights: [
      "iOS & Android Apps",
      "Custom App Development",
      "API & Backend Integration",
      "Scalable App Architecture",
    ],
    about: {
      heading: "About The Service",
      description:
        "We create mobile apps that are fast, easy to use and built around your business goals. Whether it's for your customers or your team, we make apps that deliver real value.",
    },

    cta: {
      title: "Got an app in mind? ",
      description:
        "Bring the idea. we'll turn it into a scoped, shippable plan",
      primaryButton: "Book a discovery call",
    },

    whyItMatters: {
      heading: "Why It Matters",
      statements: [
        "People expect everything to be available on their phones. A mobile app helps you stay connected with customers, improve services and grow your business.",

        "A great mobile experience keeps your brand within reach every day.",
      ],
    },

    whyBootstack: {
      heading: "Why Bootstack",
      description:
        "We focus on building reliable, user-friendly apps that not only look great but also perform smoothly across devices.",
    },

    whyBootstackPoints: [
      "User-Centric\nDesign",
      "Cross-Platform\nDevelopment",
      "Performance\nOptimization",
      "App Store\nSupport",
    ],

    services: [
      {
        title: "Android Apps",
      },
      {
        title: "iOS Apps",
      },
      {
        title: "Cross-Platform Apps",
      },
      {
        title: "Business Applications",
      },
      {
        title: "API Integration",
      },
    ],

    process: [
      {
        title: "Discuss Your Business Needs",
      },
      {
        title: "Design the User Experience",
      },
      {
        title: "Build the Application",
      },
      {
        title: "Test Every Feature",
      },
      {
        title: "Launch & Support",
      },
    ],
  },

  //high-performing-websites
  {
    slug: "high-performing-websites",
    icon: Code2,

    title: "Websites engineered for speed and trust",

    subtitle:
      "Create fast, responsive and conversion focused websites that showcase your brand, engage visitors and generate more business",

    highlights: [
      "High-Converting Websites",
      "Responsive Web Development",
      "SEO-Friendly Architecture",
      "Performance Optimization",
    ],
    about: {
      heading: "About",
      description:
        "Your website is often the first impression of your business. We build modern, responsive websites that look professional, load quickly and help turn visitors into customers.",
    },

    whyItMatters: {
      heading: "Why It Matters",
      statements: [
        "A great website builds trust, improves your online presence and works as a powerful tool to generate leads and sales.",

        "Your website should work as your best salesperson, 24 hours a day.",
      ],
    },

    whyBootstack: {
      heading: "Why Bootstack",
      description:
        "We combine clean design, strong performance and SEO best practices to create websites that support your business growth.",
    },

    whyBootstackPoints: [
      "Modern\nDesign",
      "Fast\nPerformance",
      "SEO\nOptimized",
      "Ongoing\nMaintenance",
    ],

    services: [
      {
        title: "Business Websites",
      },
      {
        title: "Corporate Websites",
      },
      {
        title: "E-Commerce Stores",
      },
      {
        title: "Landing Pages",
      },
      {
        title: "Website Optimization",
      },
    ],

    process: [
      {
        title: "Understand Your Business",
      },
      {
        title: " Design the Website",
      },
      {
        title: "Develop every Page",
      },
      {
        title: "Optimize for Performance",
      },
      {
        title: "Launch & Support",
      },
    ],

    cta: {
      title: "Let's build a site that earns its keep ",
      description:
        "Share your goals and we'll come back with a scope and timeline.",
      primaryButton: "Book a discovery call",
    },
  },

  //lead-generation
  {
    slug: "lead-generation",
    icon: TrendingUp,

    title: "Pipeline built on signal, not spray",

    subtitle:
      "Attract high-quality leads through performance marketing, SEO, landing pages and data driven campaigns that turn prospects into customers.",
    
      highlights: [
      "Targeted Lead Campaigns",
      "Landing Page Optimization",
      "Meta & Google Ads",
      "Lead Tracking & Automation",
    ],
    about: {
      heading: "About",
      description:
        "We help businesses reach the right audience through digital marketing strategies that generate quality leads and create new business opportunities.",
    },

    whyItMatters: {
      heading: "Why It Matters",
      statements: [
        "Getting more visitors is only part of the journey. The right lead generation strategy brings people who are genuinely interested in your products or services.",

        "The companies that win aren't shouting louder, they're targeting sharper.",
      ],
    },

    whyBootstack: {
      heading: "Why Bootstack",
      description:
        "We create data campaigns focused on delivering real leads, measurable growth and a better return on your marketing investment.",
    },

    whyBootstackPoints: [
      "Audience\nResearch",
      "Campaign\nStrategy",
      "Performance\nTracking",
      "Continuous\nOptimization",
    ],

    services: [
      {
        title: "Meta Ads",
      },
      {
        title: "Google Ads",
      },
      {
        title: "SEO",
      },
      {
        title: "Landing Pages",
      },
      {
        title: "Marketing Automation",
      },
    ],

    process: [
      {
        title: "We research your audience",
      },
      {
        title: "Create a marketing strategy",
      },
      {
        title: "Launch campaigns",
      },
      {
        title: "Performance Optimization",
      },
      {
        title: "Continuously improve results.",
      },
    ],

    cta: {
      title: "Want a predictable pipeline?",
      description:
        "We'll audit your current funnel and show where the leaks are.",
      primaryButton: "Book a discovery call",
    },
  },

  //brand-identity & branding
  {
    slug: "brand-identity-branding",
    icon: Palette,

    title: "Brand identity with a point of view",

    subtitle:
      "Build a memorable brand with a strong identity, compelling messaging and consistent visuals that inspire trust and leave a lasting impression.",

    about: {
      heading: "About",
      description:
        "We believe finding the right property is about more than just a listing. We bring together carefully selected properties, market insight, and personalized guidance to help you make confident decisions and find a space that truly fits your goals.",
    },

    whyItMatters: {
      heading: "Why It Matters",
      statements: [
        "A consistent brand builds trust, creates recognition and helps customers remember your business over competitors.",

        "Strong branding turns first impressions into lasting relationships.",
      ],
    },

    whyBootstack: {
      heading: "Why Bootstack",
      description:
        "We create brands with purpose combining strategy, creativity and consistency to give your business a professional and lasting identity.",
    },

    whyBootstackPoints: [
      "Brand\nStrategy",
      "Creative\nIdentity",
      "Visual\nConsistency",
      "Long-Term\nGrowth",
    ],

    services: [
      {
        title: "Logo Design",
      },
      {
        title: "Brand Strategy",
      },
      {
        title: "Visual Identity",
      },
      {
        title: "Brand Guidelines",
      },
      {
        title: "Marketing Assets",
      },
    ],

    process: [
      {
        title: "We understand your business,",
      },
      {
        title: "Define your brand strategy",
      },
      {
        title: "Design your identity",
      },
      {
        title: "Create all brand assets",
      },
      {
        title: "Ensure consistency across every platform.",
      },
    ],
    cta: {
      title: "Time to look like the company you are",
      description:
        "Let's talk about where your brand is and where it needs to be.",
      primaryButton: "Book a discovery call",
    },
  },
];

export default servicesData;
