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
    name: "D3 Security Management Systems Inc.",
    icon: "d3Security.png",
    title: "Software Engineer in Testing",
    start: "Apr 2023",
    end: "Jan 2024",
    skills: [
      { title: "C#", imageSrc: "cSharp.png" },
      { title: "Python", imageSrc: "python.png" },
      { title: "Jinja", imageSrc: "jinja.png" },
      { title: "React", imageSrc: "react.png" },
      { title: "jQuery", imageSrc: "jQuery.png" },
      { title: "Playwright", imageSrc: "playWright.png" },
      { title: "Flask", imageSrc: "flask.png" },
      { title: "Postman", imageSrc: "postman.png" },
      { title: "Kubernetes", imageSrc: "kubernetes.png" },
      { title: "GitHub", imageSrc: "github.png" },
      { title: "Visual Studio", imageSrc: "visualStudio.png" },
      { title: "Jira", imageSrc: "jira.png" },
    ],
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
    name: "University of British Columbia",
    icon: "ubc.png",
    title: "Teaching Assistant",
    start: "Sept 2019",
    end: "Dec 2021",
    skills: [
      { title: "Office 365", imageSrc: "office365.png" },
      { title: "Slack", imageSrc: "slack.png" },
      { title: "Logisim", imageSrc: "logisim.png" },
      { title: "Gradescope", imageSrc: "gradeScope.png" },
      { title: "Canvas", imageSrc: "canvas.png" },
    ],
    descriptions: [
      "Conducted laboratory sessions, providing hands-on guidance \
      to students on course material and assignments.",
      "Delivered tutorials, clarifying concepts and solving \
      problem sets to aid students in understanding complex \
      topics.",
      "Held regular office hours, offering personalized \
      assistance to students with inquiries regarding lectures, \
      tutorials, labs, and homework assignments.",
      "Collaborated with course instructors to ensure alignment \
      between lecture content and tutorial sessions, enhancing \
      student comprehension and engagement.",
      "Received consistently positive feedback from students for \
      clarity in explanations, responsiveness to inquiries, and \
      dedication to student success.",
    ],
  },
];

export const allProjects = [
  {
    title: " Issue Tracker Web App",
    demoSrc: "https://issue-tracker-ruddy-nine.vercel.app",
    codeSrc: "https://github.com/weiduner/Issue-Tracker",
    skills: [
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "Radix-UI",
      "NextAuth.js",
      "MongoDB",
      "MySQL",
      "Prisma ORM",
    ],
    description: [
      "Designed and implemented the web application using \
      TypeScript and JavaScript with Next.js, creating reusable\
      components to enhance maintainability and scalability.",
      "Utilized Tailwind CSS and Radix-UI for advanced styling \
      techniques, ensuring a consistent design across the\
      application while adhering to responsive design principles \
      for a seamless user experience.",
      "Built secure user authentication and authorization \
      using NextAuth.js, allowing users to sign in and manage \
      their issues effectively.",
      "Developed robust API endpoints with Next.js for creating, \
      updating, deleting, and assigning issues, streamlining \
      issue management.",
      "Implemented a dynamic dashboard to summarize issues \
      with key metrics and visualizations, providing users with \
      an overview of project statuses.",
      "Connected and interacted with MongoDB and MySQL databases \
      using Prisma ORM, ensuring efficient data\
      management and scalability.",
      "Optimized application performance using Next.js features \
      like server-side rendering and static site generation,\
      improving load times and user satisfaction.",
      "Leveraged Git for version control, maintaining a \
      structured development workflow and facilitating seamless \
      code integration and deployment.",
    ],
  },
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
];
