import React from 'react';

const ExperienceCard = ({
  company,
  duration,
  color,
  roles,
}) => {
  return (
    <div
      className={`bg-white border-4 border-black rounded-3xl p-6 shadow-neo hover:-translate-y-1 transition-transform ${color}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <h3 className="text-2xl md:text-3xl font-shrikhand">
          {company}
        </h3>

        <div className="bg-black text-white px-4 py-2 rounded-xl border-2 border-white font-mono text-sm w-fit">
          {duration}
        </div>
      </div>

      <div className="space-y-8">
        {roles.map((item, index) => (
          <div
            key={index}
            className="border-t-4 border-black pt-5"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
              <div>
                <h4 className="text-xl md:text-2xl font-bold">
                  {item.role}
                </h4>

                <p className="font-mono text-sm mt-1">
                  {item.duration}
                </p>
              </div>

              <span className="bg-custom-yellow border-2 border-black px-3 py-1 rounded-full font-bold text-sm w-fit">
                📍 {item.location}
              </span>
            </div>

            <ul className="list-disc list-inside space-y-3 text-sm md:text-base font-medium leading-relaxed">
              {item.points.map((point, pointIndex) => (
                <li key={pointIndex}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const experienceData = [
    {
      company: 'Tata Consultancy Services (TCS)',
      color: 'bg-custom-yellow',
      duration: 'Jan 2025 - Present',
      roles: [
        {
          role: 'Programmer -- Developer',
          location: 'Noida, Uttar Pradesh, India',
          points: [
            'Designed and developed 15+ scalable REST APIs for product management, inventory, order processing, and secure payment workflows using Java, Spring Boot, and SQL.',
            'Optimized backend performance through SQL query tuning, database indexing, N+1 query resolution, and Redis caching, reducing API response time by 25% and database load by 30%.',
            'Collaborated with Agile teams on feature development, code reviews, production support, sprint planning, and deployments, ensuring reliable and maintainable backend services.',
            'Investigated and resolved production issues and application defects, performing root cause analysis and imple menting effective fixes to maintain 99.9% service availability and meet SLA requirements.',
          ],
        },
        {
          role: 'Graduate Trainee',
          location: 'Chennai, Tamil Nadu, India',
          points: [
            'Started my professional career at TCS through the Ignite Graduate Trainee Program, completing intensive training in IT fundamentals, software development, and professional skills.',
            'Gained hands-on experience through real-world projects, strengthening my expertise in Java Full Stack Development, backend and AI systems, and enterprise workflows.',
          ],
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-10 px-4 max-w-7xl mx-auto bg-custom-blue border-4 border-black rounded-3xl shadow-neo"
    >
      <div className="flex justify-center mb-10">
        <div className="bg-white px-8 py-3 rounded-full border-4 border-black shadow-neo">
          <h2 className="text-3xl font-shrikhand">
            EXPERIENCE 💼
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {experienceData.map((exp, index) => (
          <ExperienceCard
            key={index}
            {...exp}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
