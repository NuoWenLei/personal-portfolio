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

export type Category = {
  name: string;
  count: number;
};

export type ProjectLink = {
  name: string;
  url: string;
};

export const skillColors: { [key: string]: string } = {
  "Machine Learning": "bg-emerald-500",
  "Data Science": "bg-violet-400",
  "Software Engineering": "bg-amber-500",
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
  {
    id: "3d-to-minecraft",
    title: "3D Model to Minecraft Build",
    summary: "Bring any 3D Model into Minecraft!",
    titleImage: "minecraft_frog.png",
    skills: ["Machine Learning", "Data Science"],
    tools: ["Open3D", "Streamlit", "NumPy", "Plotly"],
    languages: ["Python"],
    links: [
      {
        name: "GitHub Repo",
        url: "https://github.com/NuoWenLei/3D-to-minecraft",
      },
    ],
  },
  // {
  //   id: "short-analytics",
  //   title: "(Ideation Phase) YouTube Shorts Analytics",
  //   summary: "Help content creators analyze their videos by uploading specific sections as shorts"
  // },
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
    id: "dynamic-deep-learning",
    title: "Dynamic Environment Generation with Image Diffusion",
    summary:
      "I created a deep learning model that mimics a playable video game without training on any in-game inputs as part of my deep learning class. Basically, this model can turn videos into playable video games!",
    titleImage: "mario.gif",
    skills: ["Machine Learning"],
    tools: ["TensorFlow", "Keras", "NumPy", "Matplotlib", "Google Colab"],
    languages: ["Python"],
    links: [
      {
        name: "GitHub Repo",
        url: "https://github.com/NuoWenLei/deep-learning-final-project#readme",
      },
      {
        name: "Official Writeup",
        url: "https://docs.google.com/document/d/19hoKxmYsMC61kqL0uESkP32rdQ0Y5HXupEyuVd7eHJo/edit?usp=sharing",
      },
      {
        name: "Devpost Submission",
        url: "https://devpost.com/software/dynamic-environment-generation-in-classic-video-games",
      },
    ],
  },
  {
    id: "ai-telephone",
    title: "TelePhoto - Telephone with Generative AI",
    summary:
      "As part of the Hack@Brown Hackathon, my friends and I created an online telephone game with a twist ... you can only communicate through AI-generated images!",
    titleImage: "telephoto.png",
    skills: ["Software Engineering"],
    tools: ["Firebase", "Next.js", "React.js"],
    languages: ["Typescript"],
    links: [
      {
        name: "TelePhoto Website",
        url: "https://ai-image-telephone.vercel.app/",
      },
      {
        name: "Hackathon Submission (Devpost)",
        url: "https://devpost.com/software/telephoto",
      },
      {
        name: "GitHub Repo",
        url: "https://github.com/NuoWenLei/ai-image-telephone",
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
];

export const projectArchives = [
  ...currentProjects,
  ...projects,
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
  {
    id: "senior-project",
    title: "Model Interpreter - High School Senior Project",
    summary: `As my high school senior project, I created a simple neural network interpreter using Machine Learning and Natural Language Processing.`,
    titleImage: "senior_project_interpreter.png",
    skills: ["Machine Learning", "Data Science"],
    tools: ["TensorFlow", "Keras", "NLTK", "SpaCy"],
    languages: ["Python"],
    links: [
      {
        name: "Project Presentation",
        url: "https://docs.google.com/presentation/d/1HTauzC1eWBQXbKCHm5CnlEnE7BqevxECg2qkCQ1kEVA/edit?usp=sharing",
      },
      {
        name: "GitHub Repo",
        url: "https://github.com/NuoWenLei/senior_project_stuff",
      },
    ],
  },
  {
    id: "explorantine",
    title: "Explorantine - Hackathon Winning Project",
    summary: `I created a web app with friends from high school to help customers discover interesting local businesses with Natural Language Processing.`,
    titleImage: "explorantine-main-page.png",
    skills: ["Data Science", "Software Engineering"],
    tools: ["Flask", "NLTK", "SpaCy"],
    languages: ["Python", "HTML", "Javascript"],
    links: [
      {
        name: "Project Showcase on Devpost",
        url: "https://devpost.com/software/explorantine-nhezvm",
      },
      {
        name: "Project Presentation",
        url: "https://youtu.be/ALz4xrCCu2M",
      },
      {
        name: "GitHub Repo",
        url: "https://github.com/CaspianA1/BBN-Hackathon",
      },
    ],
  },
  {
    id: "wangwang",
    title: "Wang Wang - Wechat Miniprogram",
    summary: `With friends, we are creating a WeChat miniprogram accessible to all WeChat users that can match tennis players with others who play in the same area.`,
    titleImage: "wangwang-main-page.png",
    skills: ["Software Engineering"],
    tools: ["Mobile Development"],
    languages: ["Javascript"],
    links: [],
  },
  {
    id: "covidAnalysis",
    title: "COVID Death Trend Analysis and AI Prediction",
    summary: `As a Capstone Project for IBM's Advanced Data Science Program, I analyzed COVID death trends with different AI techniques.`,
    titleImage: "covid_trend.png",
    skills: ["Machine Learning", "Data Science"],
    tools: ["TensorFlow", "Keras", "Pandas"],
    languages: ["Python"],
    links: [
      {
        name: "Covid Analysis Report + GitHub Repo",
        url: "https://github.com/NuoWenLei/covid_tracking_by_state#readme",
      },
      {
        name: "IBM Capstoe Project Representation",
        url: "https://www.youtube.com/watch?v=DyjopF7Bq7Q",
      },
      {
        name: "IBM Advanced Data Science Program Certification",
        url: "https://coursera.org/share/1be6f256fc23a4c73d4ceff67b97abcf",
      },
    ],
  },
  {
    id: "epilepsy",
    title: "Epilepsy Detection AI Web App",
    summary: `I created an AI with friends from the Inspirit AI program that determines if someone is experiencing epilepsy based on EEG brain waves.`,
    titleImage: "epilepsy-webapp.png",
    skills: ["Machine Learning"],
    tools: ["TensorFlow", "Keras", "Streamlit"],
    languages: ["Python"],
    links: [
      {
        name: "Epilepsy Model (may take some time to load)",
        url: "https://epilepsy-detection.herokuapp.com/",
      },
      {
        name: "Inspirit AI Homepage",
        url: "https://www.inspiritai.com/",
      },
    ],
  },
  {
    id: "pacDonation",
    title: "Political Action Committee Donation Analysis",
    summary: `I analyzed and visualized the relationship between foreign-connected company donations with US Congress representation using data provided from the OpenSecrets website.`,
    titleImage: "pac-web.png",
    skills: ["Data Science"],
    tools: ["RStudio", "Tidyverse"],
    languages: ["R"],
    links: [
      {
        name: "Full Donation Analysis",
        url: "https://nuowenlei.github.io/pac-influence/",
      },
      {
        name: "OpenSecrets",
        url: "https://www.opensecrets.org/",
      },
    ],
  },
];

let tools = projectArchives.flatMap((p) => p.tools);
let skills = projectArchives.flatMap((p) => p.skills);

let toolCount = Object.fromEntries(
  tools
    .filter((value, index, array) => array.indexOf(value) === index)
    .map((t) => [t, 0])
);

let skillCount = Object.fromEntries(
  skills
    .filter((value, index, array) => array.indexOf(value) === index)
    .map((t) => [t, 0])
);

tools.forEach((t) => {
  toolCount[t] += 1;
});

skills.forEach((t) => {
  skillCount[t] += 1;
});

export const allTools = Object.entries(toolCount).map((tc) => {
  return {
    name: tc[0],
    count: tc[1],
  } as Category;
});

export const allSkills = Object.entries(skillCount).map((tc) => {
  return {
    name: tc[0],
    count: tc[1],
  } as Category;
});

// export const tools = projectArchives
//   .flatMap((p) => p.tools)
//   .filter((value, index, array) => array.indexOf(value) === index);
