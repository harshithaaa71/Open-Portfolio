import { Project, SkillCategory, ContactDetails } from '../types.ts';

export const personalInfo = {
  name: 'Harshitha Gudivada',
  initials: 'HG',
  title: 'Data Analysis • Business Intelligence • Project Management',
  heroBio:
    'I specialize in bridging the gap between business objectives and data-driven execution. Through exploratory data analysis, KPI dashboarding, requirement gathering, and structured project coordination, I transform complex data into actionable strategies—helping teams streamline delivery, track performance metrics, and make informed decisions.',
  currentFocus: 'Seeking opportunities in Data Analysis, Business Intelligence & Project Management Delivery',
};

export const aboutParagraphs = [
  "Hello! I'm Harshitha Gudivada, a Computer Science graduate specializing in Artificial Intelligence and Machine Learning with a dedicated focus on Data Analysis, Business Intelligence, and Project Management. I enjoy collaborating with cross-functional teams to solve practical business problems, streamline operational workflows, and transform raw data into strategic, actionable clarity.",
  "Throughout my academic journey, I have managed and executed analytical projects involving exploratory data analysis, interactive executive dashboards, KPI tracking, and business reporting using Power BI, Tableau, Advanced Excel, SQL, and Python. Every project has strengthened my ability to structure problem statements, analyze metrics, coordinate project milestones, and communicate findings to diverse stakeholders.",
  "Beyond analytical methodologies, I bring strong project management principles—embracing Agile/Scrum practices, requirement elicitation, detailed documentation, and stakeholder collaboration. I enjoy understanding core business requirements before planning analytical solutions that deliver measurable impact.",
  "I am currently seeking opportunities in Data Analysis, Business Analysis, Business Intelligence, and Project Management / Delivery Consulting where I can contribute to strategic initiatives, coordinate impactful projects, and support data-driven decision-making.",
];

export const projectsData: Project[] = [
  {
    id: 'career-intelligence',
    title: 'Career Intelligence & Opportunity Analytics Platform',
    shortTitle: 'Career Intelligence Platform',
    icon: '🚀',
    featured: true,
    category: 'Analytics & ML',
    description:
      'Career planning often requires information from multiple disconnected sources. I managed and developed an interactive analytics platform that combines resume analysis, skill gap identification, job matching, market insights, and career recommendations into a single application. The project demonstrates how structured analytics and user-centric design simplify decision-making through intuitive visualizations.',
    tags: ['Data Analytics', 'Streamlit', 'Pandas', 'Plotly', 'Market Insights', 'Requirement Scoping'],
    githubUrl: 'https://github.com/harshithaaa71/Career-Intelligence-Platform',
    problem:
      'Students and job seekers often struggle to understand whether their skills align with industry requirements. Identifying suitable career paths and understanding missing skills can be difficult without proper analysis. The goal of this project was to coordinate and build an intelligent platform that helps users evaluate their resumes, compare skills with target roles, and make better career decisions using data-driven insights.',
    extendedDescription:
      'An end-to-end career analytics platform designed to bridge candidate credentials with current market demand. The system guides users through resume analysis, skill gap detection, job compatibility scoring, and interactive market demand trends.',
    features: [
      'Resume Analysis & Metric Extraction',
      'Skill Gap Detection & Analysis',
      'Job Compatibility Match Scoring',
      'Market Demand Trend Visualizations',
      'Actionable Career Recommendations',
      'Interactive Executive Dashboard',
      'End-to-End User Flow Coordination',
    ],
    toolsUsed: ['Data Analytics', 'Streamlit', 'Pandas', 'Plotly', 'PyPDF2', 'Business Analytics'],
    keyOutcomesOrInsights:
      'The platform successfully analyzes resumes, identifies skills, matches candidates to relevant roles, and provides structured recommendations. Interactive dashboards help users understand current market demand for high-growth analytics roles, demonstrating end-to-end analytical problem-solving and project execution.',
  },
  {
    id: 'ecommerce-dashboard',
    title: 'E-Commerce Sales Analysis Dashboard',
    shortTitle: 'E-Commerce Sales Dashboard',
    icon: '🛒',
    featured: false,
    category: 'Business Intelligence',
    description:
      'Business decisions become more effective when supported by data. This project analyzes retail sales data to uncover customer purchasing behavior, regional performance, and product profitability trends. The insights are presented through an interactive Power BI dashboard designed to support business reporting, executive reviews, and data-driven decision making.',
    tags: ['Power BI', 'Business Intelligence', 'KPI Dashboards', 'Data Modeling', 'Exploratory Analysis'],
    githubUrl: 'https://github.com/harshithaaa71',
    problem:
      'Businesses generate large amounts of transactional data, but raw data alone does not easily reveal useful insights. Without proper analysis and visualization, it becomes difficult to identify sales trends, profitable products, and regional performance differences. The goal of this project was to analyze retail transactions and design an interactive BI dashboard that allows management stakeholders to monitor key revenue drivers and KPIs at a glance.',
    dataset:
      'The analysis uses the Kaggle Superstore dataset, which contains information about product sales, profit, order details, customer segments, and regional sales performance.',
    toolsUsed: ['Power BI', 'Exploratory Data Analysis', 'KPI Metric Trees', 'Data Visualization', 'Executive Reporting'],
    keyOutcomesOrInsights:
      'The dashboard revealed that certain product categories consistently generated higher revenue while specific regions contributed disproportionately to total sales. Visualization of revenue trends helped identify top-performing products and profitable markets, providing leadership with actionable insights for inventory planning and resource allocation.',
  },
  {
    id: 'sentiment-dashboard',
    title: 'Sentiment Analysis Dashboard',
    shortTitle: 'Sentiment Analysis Dashboard',
    icon: '💬',
    featured: false,
    category: 'Healthcare & NLP',
    description:
      'Customer opinions contain valuable business intelligence. This project applies Natural Language Processing and sentiment analysis techniques to convert unstructured text into meaningful business metrics, enabling interactive visualization of public sentiment and supporting stakeholder interpretation.',
    tags: ['Text Analytics', 'Plotly Dash', 'VADER NLP', 'Data Visualization', 'Metric Reporting'],
    githubUrl: 'https://github.com/harshithaaa71',
    problem:
      'Understanding public opinion and customer sentiment from large volumes of unstructured textual data is difficult without proper analytical tools. Social media platforms contain valuable market feedback, but raw text must be systematically processed into measurable KPI trends. The objective of this project was to build a system that analyzes public feedback and visualizes the results through an interactive dashboard for rapid sentiment assessment.',
    extendedDescription:
      'This project presents an interactive sentiment analysis dashboard built using Python and Plotly Dash. The dashboard analyzes over 500 tweets from the Sentiment140 dataset using VADER sentiment analysis to classify opinions into positive, negative, and neutral categories and visualize trends through clear charts.',
    dataset:
      'A subset of the Sentiment140 dataset containing labeled public sentiment records, used for trend exploration and stakeholder visual reporting.',
    toolsUsed: ['Text Analytics', 'Plotly Dash', 'VADER Sentiment Analysis', 'Data Visualization', 'Trend Analysis'],
    keyOutcomesOrInsights:
      'Sentiment distributions highlighted shifting customer sentiment patterns across topics. Interactive bar charts and pie charts enabled rapid executive assessment of audience mood, while keyword analysis revealed key drivers behind positive and negative feedback.',
  },
  {
    id: 'bipolar-analysis',
    title: 'Bipolar Disorder Data Analysis',
    shortTitle: 'Bipolar Disorder Analysis',
    icon: '🧠',
    featured: false,
    category: 'Healthcare & NLP',
    description:
      'Healthcare datasets contain complex behavioural patterns that require careful exploration before meaningful conclusions can be drawn. This project applies exploratory data analysis, statistical techniques, and visualization to identify trends, validate data quality, and improve understanding through evidence-based reporting.',
    tags: ['Exploratory Analysis', 'Statistical Analysis', 'Healthcare Analytics', 'Data Quality Assessment', 'Pandas'],
    githubUrl: 'https://github.com/harshithaaa71',
    problem:
      'Healthcare datasets contain complex behavioral patterns and multi-dimensional variables that require methodical exploration before clinical conclusions can be drawn. Without systematic exploratory data analysis, data quality anomalies and correlation patterns remain hidden.',
    dataset:
      'Clinical and behavioral healthcare dataset containing patient observations, behavioral metrics, and timeline records.',
    toolsUsed: ['Exploratory Data Analysis', 'Statistical Analysis', 'Pandas', 'Data Quality Validation', 'Visual Reporting'],
    keyOutcomesOrInsights:
      'Applied exploratory data analysis, statistical techniques, and visualization to identify trends, validate data quality, and communicate evidence-based findings clearly for clinical and research stakeholders.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Data Analysis & Business Intelligence',
    description: 'Transforming operational data into strategic, decision-ready insights',
    skills: [
      'Exploratory Data Analysis (EDA)',
      'Business Intelligence (BI)',
      'KPI & Metric Definition',
      'Trend & Pattern Analysis',
      'Business Reporting & Reviews',
      'Statistical Analysis',
      'Data-Driven Decision Making',
      'Root Cause Analysis',
    ],
  },
  {
    title: 'Project Management & Strategic Delivery',
    description: 'Guiding project lifecycles from requirement gathering to stakeholder delivery',
    skills: [
      'Agile & Scrum Methodologies',
      'Sprint Planning & Execution',
      'Requirements Gathering (BRD)',
      'Stakeholder Management',
      'Milestone Tracking & Timelines',
      'Risk Identification & Mitigation',
      'Cross-Functional Collaboration',
      'Process Workflow Mapping',
    ],
  },
  {
    title: 'BI Dashboards & Visualization',
    description: 'Crafting intuitive visual storytelling and executive dashboards',
    skills: [
      'Power BI',
      'Tableau',
      'Excel (Advanced Pivot Tables & VLOOKUP)',
      'Interactive KPI Dashboards',
      'Executive Presentations',
      'Data Storytelling & Reporting',
    ],
  },
  {
    title: 'Data Querying & Analytical Tools',
    description: 'Querying databases, data wrangling, and structured analysis workflows',
    skills: [
      'SQL (Querying & Data Joins)',
      'Python (Pandas for Data Analysis)',
      'Data Cleaning & Validation',
      'ETL & Data Preprocessing',
      'Process Documentation',
      'Git & Project Repositories',
    ],
  },
];

export const contactInfo: ContactDetails = {
  email: 'gudivadaharshitha85@gmail.com',
  phone: '+91 9390625263',
  github: 'https://github.com/harshithaaa71',
  linkedin: 'https://www.linkedin.com/in/harshitha-gudivada-8935a4422',
  resumeUrl: 'https://harshithaaa71.github.io/Portfolio/RESUMEMAIN.pdf',
};
