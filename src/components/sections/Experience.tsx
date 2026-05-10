import React from 'react';

interface ExperienceProps {
  company: string;
  role: string;
  duration: string;
  location: string;
  color: string;
  points: string[];
}

const ExperienceCard = ({
  company,
  role,
  duration,
  location,
  color,
  points,
}: ExperienceProps) => (
  <div
    className={`bg-white border-4 border-black rounded-3xl p-6 shadow-neo hover:-translate-y-1 transition-transform ${color}`}
  >

    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5">

      <div>
        <h3 className="text-2xl md:text-3xl font-shrikhand">
          {company}
        </h3>

        <p className="font-bold text-base md:text-lg mt-1">
          {role}
        </p>
      </div>

      <div className="bg-black text-white px-4 py-2 rounded-xl border-2 border-white font-mono text-sm w-fit">
        {duration}
      </div>
    </div>

    <div className="mb-5">
      <span className="bg-custom-yellow border-2 border-black px-3 py-1 rounded-full font-bold text-sm">
        📍 {location}
      </span>
    </div>

    <ul className="list-disc list-inside space-y-3 text-sm md:text-base font-medium leading-relaxed">
      {points.map((point, index) => (
        <li key={index}>
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  const experienceData = [
    {
      company: 'Tata Consultancy Services (TCS)',
      role: 'Programmer - Fullstack Engineer',
      duration: 'Jan 2025 - Present',
      location: 'Delhi, India',
      color: 'bg-custom-yellow',
      points: [
       'Resolved 20+ real-time production incidents per month for a client-facing web application, ensuring minimal downtime and smooth business operations.',
       'Investigated and troubleshot REST API issues using Postman, validating responses, status codes, and backend service functionality.',
       'Coordinated with clients and cross-functional teams through online meetings and Microsoft Teams calls to analyze and resolve application-related issues.',
       'Monitored and supported live production applications by identifying root causes of issues, tracking incidents through ticketing systems, analyzing application logs and API responses, and ensuring timely resolution within SLA timelines to maintain application stability and business continuity.
       'Worked closely with senior developers to understand newly introduced features, application updates, and workflow changes in the real time production environment.',
       'Maintained incident reports and issue documentation to improve troubleshooting efficiency and support recurring issue resolution.',
       'Participated in Agile/Scrum activities including daily stand-ups, sprint discussions, and team collaboration for production support operations.',
      ],
    },

    {
      company: 'Tata Consultancy Services (TCS)',
      role: 'Graduate Trainee',
      duration: 'Jan 2025 - May 2025',
      location: 'Chennai, Tamil Nadu, India',
      color: 'bg-custom-pink',
      points: [
        'Started professional career at TCS under the Ignite Graduate Trainee Program.',
        'Completed intensive training focused on IT fundamentals, software development, and professional skills.',
        'Worked on real-world projects to gain hands-on industry experience.',
        'Strengthened knowledge in Java Fullstack Development, backend systems, and enterprise workflows.',
        'Bridged the gap between academic learning and industry-level application development.',
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
