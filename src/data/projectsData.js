// Projects data configuration
export const projectsData = [
  {
    id: 1,
    title: "SolarMate",
    description: `SolarMate is a smart solar monitoring app built with Flutter, designed to help users track and manage 
    their solar energy systems in real time. It displays live data such as power generation, battery levels, 
    and energy usage through an intuitive dashboard. The app integrates Firebase and RESTful APIs to securely 
    fetch and sync data from IoT-enabled solar devices. Users receive alerts and performance insights to optimize 
    energy efficiency and maintenance schedules. With a clean and modern UI, SolarMate provides a reliable
    and user-friendly solution for solar energy monitoring across platforms.`,
    technologies: ["Flutter", "Firebase", "REST API", "IoT"],
    image: "/solarmate.png",
    liveUrl: null, // null means no live demo
    sourceUrl: "https://github.com/umairBANDESHA/SolarMate",
    category: "source", // can be "live", "source", or "both"
    featured: true
  },
  {
    id: 2,
    title: "Stemp21",
    description: `STEMP21 School's official role-based app provides a seamless way for educators to manage student assessments and projects. 
    With specialized access for Teachers, Admins, and Subadmins, this app allows teachers to conduct assessments, assign projects 
    tailored to student grades, and offer personalized remarks to help students improve. Designed with simplicity and efficiency 
    in mind, it ensures smooth communication and record-keeping across roles within the school. Perfect for streamlining educational
    processes and enhancing student learning outcomes.`,
    technologies: ["Flutter", "Firebase", "Role-based Access"],
    image: "/stemp.png",
    liveUrl: "https://play.google.com/store/apps/details?id=com.stamp.stemp&pcampaignid=web_share",
    sourceUrl: null, // null means no source code available
    category: "live",
    featured: true
  },
  {
    id: 3,
    title: "Social App",
    description: `HiChat is a real-time chat app built with React Native that allows users to sign up, connect with friends, 
    and chat instantly. It features a clean, modern UI with smooth navigation and Firebase integration for 
    authentication and live messaging. Designed for fast and secure communication across devices.`,
    technologies: ["React Native", "Firebase", "Real-time Chat"],
    image: "/hichat.png",
    liveUrl: null,
    sourceUrl: "https://github.com/umairBANDESHA/Social-Chat-App",
    category: "source",
    featured: true
  }
];

// Add new projects here following the same structure
// Example:
// {
//   id: 4,
//   title: "Your New Project",
//   description: "Project description...",
//   technologies: ["Tech1", "Tech2"],
//   image: "/your-image.png",
//   liveUrl: "https://your-live-demo.com", // or null
//   sourceUrl: "https://github.com/your-repo", // or null
//   category: "both", // or "live" or "source"
//   featured: true
// }
