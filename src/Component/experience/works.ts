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

export const allWorks = [
  {
    icon: "email.png",
    name: "D3 Security Management Systems Inc.",
    title: "Software Engineer in Testing",
    start: "Apr 2023",
    end: "Jan 2024",
    skills: [{ title: "GitHub", imageSrc: "github.png" }],
    descriptions: [
      "Developed an automation performance testing script to assess the application’s performance from 10 to 500 data requests per second, ensuring its stability and scalability under different usage scenarios.",
      "Designed and executed test scenarios to replicate diverse user activities, stress testing the application and identifying performance bottlenecks for optimization.",
      "Collaborated closely with the development team to analyze performance bottlenecks and implement optimizations in the application’s codebase, enhancing overall performance and user experience.",
      "Created a custom mock server to facilitate integration testing of Rest API interactions between the application and third-party systems, ensuring seamless integration and reliable API interactions.",
      "Implemented comprehensive test scenarios covering functional tests, performance tests, error handling, and rate limit validation to guarantee the reliability and stability of API interactions, enhancing the application’s robustness.",
      "Employed dynamic responses to simulate real-world scenarios and edge cases, augmenting the thoroughness of integration testing and ensuring the application’s readiness for diverse environments.",
      "Implemented authentication mechanisms such as OAuth and JWT to secure API endpoints and manage user access, bolstering the application’s security posture.",
      "Collaborated with QA team members to integrate automated tests into the continuous integration (CI) pipeline, enabling faster feedback loops and smoother deployment processes.",
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
      "Developed an automation performance testing script to assess the application’s performance from 10 to 500 data requests per second, ensuring its stability and scalability under different usage scenarios.",
      "Designed and executed test scenarios to replicate diverse user activities, stress testing the application and identifying performance bottlenecks for optimization.",
      "Collaborated closely with the development team to analyze performance bottlenecks and implement optimizations in the application’s codebase, enhancing overall performance and user experience.",
      "Created a custom mock server to facilitate integration testing of Rest API interactions between the application and third-party systems, ensuring seamless integration and reliable API interactions.",
      "Implemented comprehensive test scenarios covering functional tests, performance tests, error handling, and rate limit validation to guarantee the reliability and stability of API interactions, enhancing the application’s robustness.",
      "Employed dynamic responses to simulate real-world scenarios and edge cases, augmenting the thoroughness of integration testing and ensuring the application’s readiness for diverse environments.",
      "Implemented authentication mechanisms such as OAuth and JWT to secure API endpoints and manage user access, bolstering the application’s security posture.",
      "Collaborated with QA team members to integrate automated tests into the continuous integration (CI) pipeline, enabling faster feedback loops and smoother deployment processes.",
    ],
  },
];
