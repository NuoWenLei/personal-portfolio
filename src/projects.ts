export type Project = {
  id: string;
  title: string;
  summary: string;
  titleImage: string;
  links: ProjectLink[];
  tools: string[];
  skills: string[];
  languages: string[];
};

export type ProjectLink = {
  name: string;
  url: string;
};

export const currentProjects = [
  {
    id: "hander",
    title: "Hander - Second-hand Market for Students",
    summary:
      "My friends and I are creating a platform for students to sell and trade second-hand items. Our vision is to reduce waste and increase the efficiency of the markets around campuses.",
    titleImage: "hander.png",
    skills: ["Software Engineering"],
    tools: ["Firebase", "Next.js", "React.js", "React Native"],
    languages: ["Typescript"],
    links: [
      {
        name: "Hander.us",
        url: "https://www.hander.us/",
      },
    ],
  },
  // {
  //   id: "stock-pred",
  //   title: "Quantitative Stock Price Analysis and Prediction",
  //   summary:
  //     "I want to be rich! So I created a data processing and machine learning pipeline as part of my data science class to automatically web-scrape data and make stock price predictions.",
  //   titleImage: "cubby-match.png",
  //   skills: ["Machine Learning", "Data Science"],
  //   tools: [
  //     "Scikit-Learn",
  //     "Pandas",
  //     "NumPy",
  //     "BeautifulSoup",
  //     "NLTK",
  //     "Selenium",
  //     "Amazon Web Services",
  //     "Amazon S3",
  //     "Amazon EC2",
  //   ],
  //   languages: ["Python"],
  //   links: [],
  // },
];

export const projects = [
  {
    id: "stock-pred",
    title: "Quantitative Stock Price Analysis and Prediction",
    summary:
      "I want to be rich! So I created a data processing and machine learning pipeline as part of my data science class to automatically web-scrape data and make stock price predictions.",
    titleImage: "stockpred.png",
    skills: ["Machine Learning", "Data Science"],
    tools: [
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "BeautifulSoup",
      "NLTK",
      "Selenium",
      "Amazon Web Services",
      "Amazon S3",
      "Amazon EC2",
    ],
    languages: ["Python"],
    links: [
      {
        name: "Official Report",
        url: "https://github.com/QuantBears/data-analysis/blob/main/report/DATA_1030_FINAL_REPORT.pdf",
      },
      {
        name: "GitHub Repo",
        url: "https://github.com/QuantBears/data-analysis/",
      },
    ],
  },
  {
    id: "cubby",
    title: "Cubby - Friend Group Data Matcher",
    summary: `As part of my software engineering class, my team created a data matching website that matches people into friend groups. Using Natural Language Processing techniques with Machine Learning, similarities between people are calculated based on their questionnaire answers.`,
    titleImage: "cubby-match.png",
    skills: ["Machine Learning", "Software Engineering"],
    tools: [
      "Firebase",
      "Next.js",
      "React.js",
      "Tailwind",
      "NLTK",
      "SpaCy",
      "Scikit-Learn",
      "FastAPI",
    ],
    languages: ["Python", "Typescript"],
    links: [
      {
        name: "Cubby Official Website",
        url: "https://cs320-cubby.vercel.app/",
      },
      {
        name: "Cubby API Documentation",
        url: "https://cubbyapi.com/docs",
      },
      {
        name: "GitHub Repo",
        url: "https://github.com/NuoWenLei/cs320-cubby#readme",
      },
    ],
  },
  // {
  //   id: "senior-project",
  //   title: "Model Interpreter - Senior Project",
  //   summary: `As my high school senior project, I created a simple neural network interpreter using Machine Learning and Natural Language Processing.`,
  //   titleImage: "senior_project_interpreter.png",
  //   skills: ["Machine Learning", "Data Science"],
  //   tools: ["TensorFlow", "Keras", "NLTK", "SpaCy"],
  //   languages: ["Python"],
  //   links: [
  //     {
  //       name: "Project Presentation",
  //       url: "https://docs.google.com/presentation/d/1HTauzC1eWBQXbKCHm5CnlEnE7BqevxECg2qkCQ1kEVA/edit?usp=sharing",
  //     },
  //     {
  //       name: "GitHub Repo",
  //       url: "https://github.com/NuoWenLei/senior_project_stuff",
  //     },
  //   ],
  // },
  {
    id: "maskDetection",
    title: "Mask Detection AI Web App",
    summary: `I created and hosted an AI on the internet that detects if people are wearing masks in an image.`,
    titleImage: "mask-2.png",
    skills: ["Machine Learning"],
    tools: ["TensorFlow", "Keras", "Streamlit"],
    languages: ["Python"],
    links: [
      {
        name: "Mask Detection Web App (may take some time to load)",
        url: "https://mask-detector-web.herokuapp.com/",
      },
      {
        name: "Image-processing AI Concept Presentation",
        url: "https://youtu.be/0rtiLMUj2ZM",
      },
    ],
  },
  // {
  //   id: "ppbds",
  //   title: "R Data Science Bootcamp Internship",
  //   summary: `I interned under professor David kane as a Data Science bootcamp instructor and tutorial package developer.`,
  //   titleImage: "ppbds-package.png",
  //   skills: ["Data Science"],
  //   tools: ["RStudio", "Tidyverse", "Learnr"],
  //   languages: ["R"],
  //   links: [
  //     {
  //       name: "Preceptor's Primer for Bayesian Data Science",
  //       url: "https://ppbds.github.io/primer/index.html",
  //     },
  //     {
  //       name: "Data Science Bootcamp hosted by professor David Kane",
  //       url: "https://bootcamp.davidkane.info/",
  //     },
  //     {
  //       name: "R Tutorial Package on CRAN",
  //       url: "https://cran.r-project.org/web/packages/r4ds.tutorials/index.html",
  //     },
  //   ],
  // },
  {
    id: "shanghai-property",
    title: "Shanghai Property Analysis Website",
    summary: `I created a website that visualizes the relationship between properties and location in Shanghai.`,
    titleImage: "shanghai-property.png",
    skills: ["Data Science", "Software Engineering"],
    tools: ["BeautifulSoup", "Pandas", "GitHub Pages"],
    languages: ["Python", "Javascript", "HTML"],
    links: [
      {
        name: "Shanghai Property Analysis Website",
        url: "https://nuowenlei.github.io/mapping-bingo-surround/index/index.html",
      },
    ],
  },
  // {
  //   id: "explorantine",
  //   title: "Explorantine - Hackathon Winning Project",
  //   summary: `I created a web app with friends from high school to help customers discover interesting local businesses with Natural Language Processing.`,
  //   titleImage: "explorantine-main-page.png",
  //   skills: ["Data Science", "Software Engineering"],
  //   tools: ["Flask", "NLTK", "SpaCy"],
  //   languages: ["Python", "HTML", "Javascript"],
  //   links: [
  //     {
  //       name: "Project Showcase on Devpost",
  //       url: "https://devpost.com/software/explorantine-nhezvm",
  //     },
  //     {
  //       name: "Project Presentation",
  //       url: "https://youtu.be/ALz4xrCCu2M",
  //     },
  //     {
  //       name: "GitHub Repo",
  //       url: "https://github.com/CaspianA1/BBN-Hackathon",
  //     },
  //   ],
  // },
  {
    id: "wordle",
    title: "Wordle Solver",
    summary: `As a fun spring break project, I created algorithms that can live solve Wordle, Quordle, and Octordle (named Trish, Trisha, and Patricia respectively) with probability and statistics.`,
    titleImage: "official_wordle_solve.png",
    skills: ["Data Science"],
    tools: ["BeautifulSoup", "NumPy", "Selenium"],
    languages: ["Python", "Javascript"],
    links: [
      {
        name: "GitHub Repo",
        url: "https://github.com/NuoWenLei/Wordle_Solver",
      },
    ],
  },
  // {
  //   id: "wangwang",
  //   title: "Wang Wang - Wechat Miniprogram",
  //   summary: `With friends, we are creating a WeChat miniprogram accessible to all WeChat users that can match tennis players with others who play in the same area.`,
  //   titleImage: "wangwang-main-page.png",
  //   skills: ["Software Engineering"],
  //   tools: ["Mobile Development"],
  //   languages: ["Javascript"],
  //   links: [],
  // },
  // {
  //   id: "covidAnalysis",
  //   title: "COVID Death Trend Analysis and AI Prediction",
  //   summary: `As a Capstone Project for IBM's Advanced Data Science Program, I analyzed COVID death trends with different AI techniques.`,
  //   titleImage: "covid_trend.png",
  //   skills: ["Machine Learning", "Data Science"],
  //   tools: ["TensorFlow", "Keras", "Pandas"],
  //   languages: ["Python"],
  //   links: [
  //     {
  //       name: "Covid Analysis Report + GitHub Repo",
  //       url: "https://github.com/NuoWenLei/covid_tracking_by_state#readme",
  //     },
  //     {
  //       name: "IBM Capstoe Project Representation",
  //       url: "https://www.youtube.com/watch?v=DyjopF7Bq7Q",
  //     },
  //     {
  //       name: "IBM Advanced Data Science Program Certification",
  //       url: "https://coursera.org/share/1be6f256fc23a4c73d4ceff67b97abcf",
  //     },
  //   ],
  // },
  // {
  //   id: "epilepsy",
  //   title: "Epilepsy Detection AI Web App",
  //   summary: `I created an AI with friends from the Inspirit AI program that determines if someone is experiencing epilepsy based on EEG brain waves.`,
  //   titleImage: "epilepsy-webapp.png",
  //   skills: ["Machine Learning"],
  //   tools: ["TensorFlow", "Keras", "Streamlit"],
  //   languages: ["Python"],
  //   links: [
  //     {
  //       name: "Epilepsy Model (may take some time to load)",
  //       url: "https://epilepsy-detection.herokuapp.com/",
  //     },
  //     {
  //       name: "Inspirit AI Homepage",
  //       url: "https://www.inspiritai.com/",
  //     },
  //   ],
  // },
  // {
  //   id: "pacDonation",
  //   title: "Political Action Committee Donation Analysis",
  //   summary: `I analyzed and visualized the relationship between foreign-connected company donations with US Congress representation using data provided from the OpenSecrets website.`,
  //   titleImage: "pac-web.png",
  //   skills: ["Data Science"],
  //   tools: ["RStudio", "Tidyverse"],
  //   languages: ["R"],
  //   links: [
  //     {
  //       name: "Full Donation Analysis",
  //       url: "https://nuowenlei.github.io/pac-influence/",
  //     },
  //     {
  //       name: "OpenSecrets",
  //       url: "https://www.opensecrets.org/",
  //     },
  //   ],
  // },
];
