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
              'HTML5',
              'CSS3',
              'JavaScript',
            ]}
          />

          <SkillCategory
            title="Frameworks and Libraries"
            color="bg-custom-pink"
            skills={[
              'Spring Boot',
              'Spring MVC',
              'Spring Security',
              'Spring Data JPA',
              'Hibernate',
              'React',
              'Redux Toolkit (RTK)',
              'Tailwind CSS',
            ]}
          />

          <SkillCategory
            title="Backend/Architecture"
            color="bg-custom-blue"
            skills={[
              'REST APIs',
              'JDBC',
              'Microservices',
              'Swagger (OpenAPI)',
              'API Gateway',
              'Event-Driven Architecture',
              'Caching',
              'System Design',
            ]}
          />
        
        <SkillCategory
            title="Cloud, Databases & DevOps Concepts"
            color="bg-custom-red"
            skills={[
              'MySQL',
              'PostgreSQL',
              'Redis',
              'AWS (S3, EC2, IAM, RDS, Lambda)',
              'Docker',
              'Kubernetes',
              'Kafka',
              'Jenkins',
              'CI/CD',
              'GitHub',
              'GitHub Actions',
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
              'PIM',
              'Identity Federation',
              'Authentication',
              'Authorization',
              'Microsoft Entra ID (Azure AD)',
              'Spring Security',
              'Secure Coding',
            ]}
          />

          <SkillCategory
            title="AI & GenAI"
            color="bg-custom-yellow"
            skills={[
              'LLMs',
              'LangChain',
              'Generative AI',
              'Prompt Engineering',
              'RAG',
              'AI Agents',
              'Vector Embedding',
              'Function Calling',
            ]}
          />

          <SkillCategory
            title="Core CS "
            color="bg-purple-300"
            skills={[
              'Data Structures & Algorithms',
              'Object-Oriented Programming',
              'Java Collection Framework',
            ]}
          />

          <SkillCategory
            title="Developer Tools"
            color="bg-orange-300"
            skills={[
              'Intellij IDEA',
              'VS Code',
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
