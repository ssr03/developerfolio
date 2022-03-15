/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sora Son",
  title: "Hi all, I'm Sora",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web with JavaScript / Reactjs / Vuejs / Spring Boot and some other cool libraries and frameworks."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ssr03",
  // linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "chocolates9991@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
        "⚡ Develop Back end REST API with Spring"
    ),
    emoji(
      "⚡ Develop highly interactive Back end / Front end for your web applications"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "서울 시립대학교",
      // logo: require("./assets/images/harvardLogo.png"),
      subHeader: "수학(전공) / 컴퓨터 과학(부전공)",
      duration: "March 2012 - February 2019",
      desc: "",
    },
    {
      schoolName: "금천고등학교",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "인문계",
      duration: "March 2009 - February 2012",
      desc: "",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "40%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "일진 씨앤에스",
      companylogo: require("./assets/images/ijinc&s.png"),
      date: "December 2019 – Present",
      desc: "DT사업파트",
      descBullets: ["SI프로젝트 개발"]
    },
    {
      role: "Back-End Developer Intern",
      company: "딜리버리 히어로 코리아",
      companylogo: require("./assets/images/deliveryHero.png"),
      date: "March 2019 – July 2019",
      desc: "기술연구소 백엔드 팀",
      descBullets: ["Django 기반으로 '미니요기요' 웹 애플리케이션 개발(인턴 프로젝트)진행"]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "",
      projectName: "알피니언 전자전표 프로젝트",
      projectDesc: "증빙관리, 전표처리 등 경비처리와 관련된 토탈 서비스를 제공하는 '기업형 경비관리' 솔루션",
      footerLink: [
        {
          name: "Front-end Source",
          url: "https://github.com/ssr03/ijap-eacct-front/"
        },
        {
          name: "Back-end Source",
          url: "https://github.com/ssr03/ijap-eacct-back/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "",
      projectName: "포스코 인터네셔녈 미얀마 RPA프로젝트",
      projectDesc: "5개의 자동화 추진 과제중 '출장신청서 내 Per Diem 자동계산 및 검증' 과제 수행",
      footerLink: [
      ]
    },
    {
      image: "",
      projectName: "유니스코/건설 전자전표 프로젝트",
      projectDesc: "증빙관리, 전표처리 등 경비처리와 관련된 토탈 서비스를 제공하는 '기업형 경비관리' 솔루션",
      footerLink: [
        {
          name: "Front-end Source",
          url: "https://github.com/ssr03/ijun-eacct-front/"
        },
        {
          name: "Back-end Source",
          url: "https://github.com/ssr03/ijun-eacct-back/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "",
      projectName: "일진 머티리얼즈 RPA 프로젝트",
      projectDesc: "7개의 자동화 추진 과제중 '일일 출하 마감자료 작성 자동화' 과제 수행",
      footerLink: [
          //  you can add extra buttons here.
      ]
    },
    {
      image: "",
      projectName: "일진 다이아몬드 MES 구축 프로젝트",
      projectDesc: "MES 구축 프로젝트",
      footerLink: [
        //  you can add extra buttons here.
      ]
    },
    {
      image: "",
      projectName: "스터디 모집 사이트",
      projectDesc: "스터디 모집 웹사이트(신입 과제 프로젝트)",
      footerLink: [
        {
          name: "Front-end Source",
          url: "https://github.com/ssr03/get-together-front"
        },
        {
          name: "Back-end Source",
          url: "https://github.com/ssr03/get-together-back"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "",
      projectName: "미니요기요",
      projectDesc: "기존 요기요 시스템의 기본 기능 및 추가로 기획한 기능을 포함한 웹사이트(루키 히어로 테크 인턴쉽 프로젝트)",
      footerLink: [
        {
          name: "Source",
          url: "https://github.com/ssr03/MiniDelivery"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications that I have done !",

  achievementsCards: [
    {
      title: "정보처리기사",
      subtitle: "",
      image: "",
      footerLink: [
        {name: "Certification", url: ""},
      ]
    },
    {
      title: "SQLD",
      subtitle: "",
      image: "",
      footerLink: [
        {name: "Certification", url: ""},
      ]
    },
    {
      title: "컴퓨터활용능력 1급",
      subtitle: "",
      image: "",
      footerLink: [
        {name: "Certification", url: ""},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "appio12@naver.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
