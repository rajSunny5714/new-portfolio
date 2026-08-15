import React from 'react';

const SkillCategory = ({
  title,
  skills,
  color,
}: {
  title: string;
  skills: string[];
  color: string;
}) => (
  <div className="bg-white border-4 border-black p-5 rounded-2xl shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden">
    <h3
      className={`font-shrikhand text-xl mb-3 ${color} inline-block px-2 border-2 border-black rounded-md`}
    >
      {title}
    </h3>

    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="bg-gray-100 px-3 py-1 rounded-full border-2 border-black text-sm font-bold hover:bg-custom-green"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-10 px-4 max-w-7xl mx-auto bg-custom-pink border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo"
    >
      <div className="bg-custom-yellow text-black px-8 py-3 rounded-full border-4 border-black w-fit mx-auto mb-10 shadow-neo">
        <h2 className="text-3xl font-shrikhand">SKILLS 🛠️</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         <SkillCategory
            title="Programming Languages"
            color="bg-custom-pink"
            skills={[
              'Java',
              'Python',
              'SQL',
              'JavaScript',
              'HTML5',
              'CSS3',
            ]}
          />
          
          <SkillCategory
            title="Frameworks & Libraries"
            color="bg-custom-pink"
            skills={[
              'Spring Boot',
              'Spring Security',
              'Spring Data JPA',
              'Hibernate',
              'React',
              'Redux Toolkit (RTK)',
            ]}
          />

         <SkillCategory
            title="Cloud & Backend Services"
            color="bg-custom-red"
            skills={[
              'REST APIs',
              'JDBC',
              'Microservices',
              'MySQL',
              'PostgreSQL',
              'Redis',
              'AWS',
              'Docker',
              'Kubernetes',
              'Kafka',
              'Swagger (OpenAPI)',
            ]}
          />
        
          <SkillCategory
            title="IAM & Security"
            color="bg-custom-green"
            skills={[
              'OAuth 2.0',
              'OIDC',
              'SAML 2.0',
              'JWT',
              'RBAC',
              'SSO',
              'MFA',
              'LDAP',
              'Identity Federation',
              'Microsoft Entra ID',
              'Azure AD',
              'Spring Security',
              'Authentication',
              'Authorization',
              'Secure Coding',
            ]}
          />
          
          <SkillCategory
            title="AI & GenAI -- Concepts"
            color="bg-custom-yellow"
            skills={[
              'LLMs',
              'LangChain',
              'Generative AI',
              'Prompt Engineering',
              'RAG',
              'AI Agents',
            ]}
          />
          
          <SkillCategory
            title="Core CS & Networking"
            color="bg-purple-300"
            skills={[
              'Data Structures & Algorithms',
              'Object-Oriented Programming',
              'TCP/IP',
              'HTTP/HTTPS',
              'DNS',
              'SSL/TLS',
            ]}
          />
          
          <SkillCategory
            title="Developer Tools & Practices"
            color="bg-orange-300"
            skills={[
              'Git',
              'GitHub',
              'Maven',
              'Gradle',
              'JUnit',
              'ServiceNow',
              'JIRA',
              'Postman',
            ]}
          />
        
      </div>
    </section>
  );
};

export default Skills;
