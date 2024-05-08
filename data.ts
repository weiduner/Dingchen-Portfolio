export interface workSkill {
  title: string;
  imageSrc: string;
}

export interface work {
  icon: string;
  name: string;
  skills: Array<workSkill>;
  title: string;
  start: string;
  end: string;
  descriptions: Array<string>;
}

export interface project {
  title: string;
  demoSrc: string;
  codeSrc: string;
  skills: Array<string>;
  descriptions: Array<string>;
}

export const allWorks = [
  {
    icon: "email.png",
    name: "D3 Security Management Systems Inc.",
    title: "Software Engineer in Testing",
    start: "Apr 2023",
    end: "Jan 2024",
    skills: [{ title: "GitHub", imageSrc: "github.png" }],
    descriptions: [
      "Developed an automation performance testing script to \
      assess the application’s performance from 10 to 500 data \
      requests per second, ensuring its stability and \
      scalability under different usage scenarios.",
      "Designed and executed test scenarios to replicate diverse \
      user activities, stress testing the application and \
      identifying performance bottlenecks for optimization.",
      "Collaborated closely with the development team to analyze \
      performance bottlenecks and implement optimizations in the \
      application’s codebase, enhancing overall performance and \
      user experience.",
      "Created a custom mock server to facilitate integration \
      testing of Rest API interactions between the application \
      and third-party systems, ensuring seamless integration and \
      reliable API interactions.",
      "Implemented comprehensive test scenarios covering \
      functional tests, performance tests, error handling, and \
      rate limit validation to guarantee the reliability and \
      stability of API interactions, enhancing the application’s \
      robustness.",
      "Employed dynamic responses to simulate real-world \
      scenarios and edge cases, augmenting the thoroughness of \
      integration testing and ensuring the application’s \
      readiness for diverse environments.",
      "Implemented authentication mechanisms such as OAuth and \
      JWT to secure API endpoints and manage user access, \
      bolstering the application’s security posture.",
      "Collaborated with QA team members to integrate automated \
      tests into the continuous integration (CI) pipeline, \
      enabling faster feedback loops and smoother deployment processes.",
    ],
  },
  {
    icon: "email.png",
    name: "D3 Security Management Systems Inc2.",
    title: "Software Engineer in Testing",
    start: "Apr 2023",
    end: "Jan 2024",
    skills: [{ title: "GitHub", imageSrc: "github.png" }],
    descriptions: [
      "Developed an automation performance testing script to \
      assess the application’s performance from 10 to 500 data \
      requests per second, ensuring its stability and \
      scalability under different usage scenarios.",
      "Designed and executed test scenarios to replicate diverse \
      user activities, stress testing the application and \
      identifying performance bottlenecks for optimization.",
      "Collaborated closely with the development team to analyze \
      performance bottlenecks and implement optimizations in the \
      application’s codebase, enhancing overall performance and \
      user experience.",
      "Created a custom mock server to facilitate integration \
      testing of Rest API interactions between the application \
      and third-party systems, ensuring seamless integration and \
      reliable API interactions.",
      "Implemented comprehensive test scenarios covering \
      functional tests, performance tests, error handling, and \
      rate limit validation to guarantee the reliability and \
      stability of API interactions, enhancing the application’s \
      robustness.",
      "Employed dynamic responses to simulate real-world \
      scenarios and edge cases, augmenting the thoroughness of \
      integration testing and ensuring the application’s \
      readiness for diverse environments.",
      "Implemented authentication mechanisms such as OAuth and \
      JWT to secure API endpoints and manage user access, \
      bolstering the application’s security posture.",
      "Collaborated with QA team members to integrate automated \
      tests into the continuous integration (CI) pipeline, \
      enabling faster feedback loops and smoother deployment processes.",
    ],
  },
];

export const allProjects = [
  {
    title: "Web Protfolio",
    demoSrc: "https://dingchen-portfolio.netlify.app",
    codeSrc: "https://github.com/weiduner/Dingchen-Portfolio",
    skills: [
      "JaveScript",
      "CSS",
      "Sass",
      "React",
      "React Hooks",
      "Framer Motion",
      "Figma",
    ],
    description: [
      "Designed and implemented the user interface leveraging \
      React.js and React Hooks, creating reusable components \
      for improved maintainability and scalability.",
      "Applied advanced styling techniques with Sass, ensuring \
      consistent design patterns across the website while \
      adhering to responsive design principles for a seamless \
      user experience.",
      "Integrated Framer-Motion to introduce fluid animations \
      and interactive elements, elevating user engagement and \
      site interactivity.",
      "Collaborated closely with a UX/UI designer to refine \
      visual elements and user flows, translating design mock-ups \
      into responsive and visually captivating web experiences.",
      "Leveraged Git for version control and collaboration, \
      maintaining a structured development workflow and \
      facilitating seamless code integration and deployment.",
    ],
  },
  {
    title: "Quasar Dipole",
    imageSrc: "email.png",
    demoSrc: "https://github.com/weiduner",
    codeSrc: "https://github.com/weiduner",
    skills: ["Python", "Pandas", "Healpy", "SQL"],
    description: [
      "Evaluated the robustness of the Cosmic Microwave \
      Background (CMB) model by comparing it to quasar \
      distributions, employing data-driven analysis techniques.",
      "Identified key features of quasars amidst stellar data \
      through advanced data extraction methods, establishing \
      dashboards and reports for visualization of research \
      findings.",
      "Utilized Python libraries to implement the CMB model \
      and monitor target quasars, extracting specific data from \
      the WISE catalog containing vast datasets.",
      "Implemented data cleaning processes to ensure data \
      quality, correctness, and accuracy, maintaining data \
      integrity throughout the research project.",
      "Leveraged SQL queries, including Joins, Aggregations, \
      Views, and Stored Procedures, to efficiently extract \
      historical data for quasar studies from the NASA \
      database, contributing to comprehensive data analysis \
      and interpretation.",
    ],
  },
  {
    title: "protfolio3",
    imageSrc: "email.png",
    demoSrc: "https:/github.com/weiduner",
    codeSrc: "https:/github.com/weiduner",
    skills: ["react1", "react2", "react3"],
    description: [],
  },
];
