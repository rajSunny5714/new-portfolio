import React from 'react';

interface EduProps {
  year: string;
  title: string;
  place: string;
  score: string;
  color: string;
  desc: string;
}

const EduCard = ({
  year,
  title,
  place,
  score,
  color,
  desc,
}: EduProps) => (
  <div
    className={`relative bg-white border-4 border-black rounded-3xl shadow-neo p-6 sm:p-8 md:p-9 ${color} min-h-[180px] md:min-h-[210px] flex items-center`}
  >
    <div className="absolute -top-5 left-5 sm:left-8 bg-black text-white font-mono font-bold text-sm sm:text-base py-2 px-4 rounded-lg border-2 border-white shadow-sm rotate-[-4deg]">
      {year}
    </div>

    <div className="w-full mt-4 sm:mt-2">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        <div className="flex-1">
          <p className="font-bold text-base sm:text-lg text-gray-700 mb-2">
            {place}
          </p>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-shrikhand leading-tight mb-3">
            {title}
          </h3>

          <p className="text-sm sm:text-base font-medium leading-relaxed text-gray-800 max-w-4xl">
            {desc}
          </p>
        </div>

        <div className="bg-black text-white font-mono font-bold text-sm sm:text-base px-5 py-3 rounded-xl w-fit whitespace-nowrap">
          {score}
        </div>
      </div>
    </div>
  </div>
);

const Education = () => {
  const educationData: EduProps[] = [
    {
      year: 'May 2025 - Jun 2027',
      place: 'IIIT Ranchi & IIT Patna (Hybrid Full Time)',
      title: 'Master of Computer Applications (MCA)',
      score: 'CGPA: 7.8/10',
      color: 'bg-purple-100',
      desc: 'I am currently pursuing a Master of Computer Applications (MCA) at IIIT Ranchi through a hybrid full-time program conducted in collaboration with IIT Patna (2025–2027), where I continue to deepen my knowledge of software engineering and advanced computer science.',
    },
    {
      year: 'Jun 2021 - Jul 2024',
      place: 'B. R. Ambedkar Bihar University, Muzaffarpur',
      title: 'Bachelor of Computer Applications (BCA)',
      score: 'Percent: 75.8%',
      color: 'bg-blue-100',
      desc: 'I completed my Bachelor of Computer Applications (BCA) from L. N. T. College, Muzaffarpur, under Bihar University, where I built a strong foundation in computer science, programming, and software development.',
    },
  ];

  return (
    <section
      id="education"
      className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 w-full max-w-[1400px] mx-auto bg-custom-green border-4 border-black rounded-3xl shadow-neo"
    >
      <div className="flex justify-center mb-14 md:mb-16">
        <div className="bg-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full border-4 border-black shadow-neo">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-shrikhand text-center">
            EDUCATION 🎓
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col gap-10 md:gap-12">
        {educationData.map((edu, index) => (
          <EduCard
            key={index}
            {...edu}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
