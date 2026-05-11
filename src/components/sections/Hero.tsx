import React, { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaDownload,
  FaEnvelope,
} from 'react-icons/fa';

import ContactModal from '../ui/ContactModal';
import MiniTerminal from '../ui/MiniTerminal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="pt-4 pb-10 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start justify-center">

      {/* LEFT CARD */}
      <div className="w-full md:w-1/3 bg-white border-4 border-black rounded-3xl p-6 shadow-neo flex flex-col items-center text-center relative overflow-hidden">

        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gray-200/50 w-20 h-6 rotate-[-5deg] border border-gray-400"></div>

        {/* PROFILE IMAGE */}
        <div className="w-32 h-32 bg-custom-pink rounded-full border-4 border-black mb-4 flex items-center justify-center text-4xl overflow-hidden">
          <img
            src="/sunny.jpeg"
            alt="Sunny Raj"
            className="w-full h-full object-cover"
          />
        </div>

        {/* NAME */}
        <h1 className="text-4xl font-shrikhand mb-1">
          SUNNY RAJ
        </h1>

        <div className="bg-black text-white px-3 py-1 font-mono text-sm rounded-md mb-4 rotate-1">
          JAVA_FULLSTACK_ENGINEER()
        </div>

        {/* INFO */}
        <div className="w-full space-y-3 text-left font-bold text-sm font-mono border-t-2 border-black pt-4">

          <div>
            <span className="bg-custom-yellow px-1 border border-black mr-2">
              [LOCATION]
            </span>
            Delhi, India
          </div>

          <div>
            <span className="bg-custom-green px-1 border border-black mr-2">
              [STATUS]
            </span>
            FullStack Java Developer & Aspiring IAM Engineer
          </div>

          <div>
            <span className="bg-custom-blue px-1 border border-black mr-2">
              [MISSION]
            </span>
            Build. Secure. Scale.
          </div>

        </div>

        {/* BUTTONS */}
        <div className="w-full flex flex-col gap-3 mt-6">

          <a
            href="https://drive.google.com/file/d/13eKbWwihqSOIDcvLm18V47J63QZdfvzY/view?usp=drivesdk"
            download
            className="bg-custom-green w-full py-3 rounded-xl border-2 border-black font-bold shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2"
          >
            <FaDownload />
            RESUME
          </a>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-custom-red text-white w-full py-3 rounded-xl border-2 border-black font-bold shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaEnvelope />
            CONTACT_ME
          </button>

        </div>

        {/* SOCIAL LINKS */}
        <div className="flex gap-4 mt-6 text-2xl">

          <a
            href="https://github.com/rajSunny5714"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sunny-raj-299401273/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform text-blue-700"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/mrsj5714/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform text-orange-600"
          >
            <FaCode />
          </a>

           <a
            href="https://www.naukri.com/code360/profile/rajsunny5714"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform text-orange-600"
          >
            <FaCode />
          </a>

        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-2/3 flex flex-col gap-6" id="about">

        <div className="bg-custom-yellow p-6 md:p-10 rounded-3xl border-4 border-black shadow-neo">

          <h2 className="text-4xl font-shrikhand mb-6">
            Hi people! 👋
          </h2>

          <p className="text-lg font-medium leading-relaxed mb-4">
            I am a{' '}
            <span className="font-bold bg-white px-1 border border-black">
              Java FullStack Engineer
            </span>{' '}
            with 1.5+ years of hands-on experience in building scalable web applications using Spring Boot, React.js, and REST APIs.
          </p>

          <p className="text-lg font-medium leading-relaxed mb-4">
            I have strong experience in backend development, secure authentication using{' '}
            <span className="font-bold bg-white px-1 border border-black">
              JWT, SAML & OAuth 2.0
            </span>{' '}
            along with database management using MySQL, JDBC, Hibernate, and JPA.
          </p>

          <p className="text-lg font-medium leading-relaxed mb-4">
            I am also exploring AI-powered applications using{' '}
            <span className="font-bold bg-white px-1 border border-black">
              LLM, RAG & LangChain
            </span>{' '}
            while continuously improving my skills in cloud technologies, scalable systems, and cybersecurity.
          </p>

          <p className="text-lg font-medium leading-relaxed mb-4">
            Currently pursuing{' '}
            <span className="font-bold bg-white px-1 border border-black">
              MCA
            </span>{' '}
            through the Regular Hybrid Programme conducted in collaboration with{' '}
            <span className="font-bold bg-white px-1 border border-black">
              IIIT Ranchi & IIT Patna
            </span>.
          </p>

          <div className="bg-white p-4 border-2 border-black rounded-xl inline-block font-bold shadow-neo-sm">
            🚀 Open to Backend, FullStack Developer & IAM Entry-Level Roles
          </div>
        </div>

        <MiniTerminal />

      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </section>
  );
};

export default Hero;
