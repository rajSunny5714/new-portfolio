import React from 'react';
import {
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';

const ProjectCard = ({
  title,
  tools,
  description,
  link,
  github,
  color,
}: any) => (
  <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden">
    
    <div
      className={`absolute top-0 left-0 right-0 h-4 ${color} border-b-4 border-black`}
    ></div>

    <div className="mt-4 flex justify-between items-start mb-4">
      <div>
        <h3 className="text-2xl font-shrikhand">{title}</h3>

        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 border border-black rounded-md ml-1 animate-pulse">
          PROJECTS
        </span>
      </div>

      <div className="flex gap-2">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FaGithub />
          </a>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FaExternalLinkAlt />
          </a>
        )}
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
      {tools.map((t: string) => (
        <span
          key={t}
          className="bg-gray-100 border border-black px-2 py-1 text-xs font-bold font-mono rounded-md"
        >
          {t}
        </span>
      ))}
    </div>

    <ul className="list-disc list-inside space-y-2 text-sm font-medium border-t-2 border-black pt-4">
      {description.map((point: string, i: number) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      color: 'bg-custom-purple',
      tools: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'JWT',
        'React.js',
        'MySQL',
        'Hibernate',
        'Docker',
        'AWS',
      ],
      github:
        'https://github.com/rajSunny5714/FullStack_ECommerce-Project',
      link: '',
      description: [
        'Built a production-grade Full Stack eCommerce application using Spring Boot and React.js.',
        'Implemented JWT authentication, role-based access control, product and category management.',
        'Developed secure REST APIs with Spring Security and JPA/Hibernate integration.',
        'Designed responsive frontend UI using React.js and integrated backend services.',
        'Gained hands-on experience with cloud deployment practices using AWS.',
      ],
    },
    {
      title: 'E-Commerce Platform',
      color: 'bg-custom-purple',
      tools: [
        'Python',
        'Streamlit',
        'LLM',
        'AI-Agent',
        'groq api',
        'tavily-api',
      ],
      github:
        'https://github.com/rajSunny5714/Multi-Agent-AI-Tool'
      link: 'https://multi-agent-ai-tool.streamlit.app/',
      description: [
        'Developed an AI-powered Multi-Agent Research Platform using Python, Streamlit, LangChain, Groq LLM, Tavily Search, BeautifulSoup, and ReportLab, automating end-to-end research report generation.',
        'Designed a 4-agent workflow (Search, Reader, Writer, Critic) that automates web search, content extraction, report generation, and AI-based quality review, reducing manual research effort by ~80%.',
        'Integrated Tavily Search API and web scraping to retrieve and process information from 5+ trusted sources per query, generating structured reports with downloadable PDF and Markdown formats.',
        'Built a responsive Streamlit UI featuring dynamic workflow tracking, progress indicators, API-key validation, and session management, improving usability and enabling report generation in under 30 seconds for typical research topics.',
      ],
    },

    {
      title: 'ChatBot AI',
      color: 'bg-custom-blue',
      tools: [
        'Python',
        'LangChain',
        'Chainlit',
        'LLM',
        'RAG',
        'Hugging Face',
      ],
      github:
        'https://github.com/rajSunny5714/local-llm-crash-course',
      link: '',
      description: [
        'Built an AI-powered chatbot using modern LLM technologies and conversational AI concepts.',
        'Implemented conversational memory and real-time response streaming.',
        'Applied prompt engineering techniques for improved AI responses.',
        'Integrated Hugging Face models with interactive chat UI using Chainlit.',
        'Explored real-world AI application development workflows.',
      ],
    },

    {
      title: 'URL Shortener Platform',
      color: 'bg-custom-red',
      tools: [
        'Java',
        'Spring Boot',
        'React.js',
        'MySQL',
        'Spring Security',
        'Tailwind CSS',
        'Docker',
        'AWS',
      ],
      github:
        'https://github.com/rajSunny5714/Url-Shortener-FullStack-Project',
      link: 'https://url-short-react.vercel.app/',
      description: [
        'Developed a scalable URL shortening platform with secure authentication.',
        'Implemented Spring Security and responsive frontend using Tailwind CSS.',
        'Containerized application using Docker for deployment consistency.',
        'Integrated cloud deployment workflow using AWS, Render, and Vercel.',
      ],
    },

    {
      title: 'Edusity Web',
      color: 'bg-custom-pink',
      tools: [
        'React.js',
        'Tailwind CSS',
        'JavaScript',
        'Responsive UI',
      ],
      github:
        'https://github.com/rajSunny5714/ThinkHive-Projects',
      link: 'https://think-hive-projects.vercel.app/',
      description: [
        'Developed a responsive educational platform using React.js and Tailwind CSS.',
        'Implemented smooth UI interactions and responsive layouts.',
        'Enhanced frontend development skills through reusable component design.',
      ],
    },

    {
      title: 'Modern PlayStream',
      color: 'bg-custom-green',
      tools: [
        'React.js',
        'CSS3',
        'React Router',
        'REST APIs',
      ],
      github:
        'https://github.com/rajSunny5714/Modern-Playstream',
      link: 'https://modern-playstream.vercel.app/',
      description: [
        'Built a responsive YouTube clone using React.js and CSS.',
        'Integrated dynamic APIs for interactive video browsing experience.',
        'Implemented routing and responsive layouts for modern UI design.',
      ],
    },

    {
      title: 'Daily Expense Tracker',
      color: 'bg-custom-yellow',
      tools: [
        'Java',
        'Spring Boot',
        'React.js',
        'MySQL',
        'REST APIs',
      ],
      github:
        'https://github.com/rajSunny5714/Daily-Expense-Tracker-FullStack-Project',
      link: 'https://budgetify-react.vercel.app/',
      description: [
        'Built a full-stack Daily Expense Tracker application using Spring Boot and React.js.',
        'Implemented CRUD operations for managing expenses efficiently.',
        'Integrated REST APIs with frontend state management workflows.',
        'Designed a clean and responsive UI for better user experience.',
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-10 px-4 mx-auto max-w-7xl bg-custom-yellow border-4 border-black rounded-3xl shadow-neo"
    >
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-green px-8 py-3 rounded-full border-4 border-black shadow-neo transform -rotate-1">
          <h2 className="text-3xl font-shrikhand text-white">
            PROJECTS 🏗️
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
