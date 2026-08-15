import React from 'react';

interface EduProps {
  year: string;
  title: string;
  place: string;
  score: string;
  color: string;
}

const EduCard = ({
  year,
  title,
  place,
  score,
  color,
}: EduProps) => (
  <div
    className={`relative bg-white border-4 border-black p-6 md:p-8 rounded-3xl shadow-neo hover:-translate-y-1 transition-transform ${color}`}
  >
    <div className="absolute -top-5 left-6 bg-black text-white font-mono font-bold py-2 px-4 rounded-lg border-2 border-white shadow-sm rotate-[-3deg]">
      {year}
    </div>

    <div className="pt-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="flex-1">
          <p className="font-bold text-sm md:text-base text-gray-700 mb-2">
            {place}
          </p>

          <h3 className="text-2xl md:text-3xl font-shrikhand leading-tight">
            {title}
          </h3>
        </div>

        <div className="bg-black text-white px-4 py-2 rounded-xl border-2 border-black font-mono font-bold text-sm w-fit whitespace-nowrap">
          {score}
        </div>
      </div>
    </div>
  </div>
);

const Education = () => {
  const educationData = [
    {
      year: 'May 2025 - Jun 2027',
      title: 'Master of Computer Applications (MCA)',
      place: 'IIIT Ranchi & IIT Patna (Hybrid Full Time)',
      score: 'CGPA: 7.8/10',
      color: 'bg-purple-100',
    },
    {
      year: 'Jun 2021 - Jul 2024',
      title: 'Bachelor of Computer Applications (BCA)',
      place: 'B. R. Ambedkar Bihar University, Muzaffarpur',
      score: '75.8%',
      color: 'bg-blue-100',
    },
  ];

  return (
    <section
      id="education"
      className="py-10 px-4 max-w-7xl mx-auto bg-custom-green border-4 border-black rounded-3xl shadow-neo"
    >
      <div className="flex justify-center mb-12">
        <div className="bg-white px-8 py-3 rounded-full border-4 border-black w-fit shadow-neo">
          <h2 className="text-3xl font-shrikhand">
            EDUCATION 🎓
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        {educationData.map((edu, index) => (
          <EduCard
            key={index}
            year={edu.year}
            title={edu.title}
            place={edu.place}
            score={edu.score}
            color={edu.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
