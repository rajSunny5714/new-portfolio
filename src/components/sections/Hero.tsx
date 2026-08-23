import React, { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from 'react-icons/fa';
import {
  SiHackerrank,
  SiLeetcode,
  SiCodingninjas,
} from 'react-icons/si';

import ContactModal from '../ui/ContactModal';
import MiniTerminal from '../ui/MiniTerminal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="pt-4 pb-8 px-4 max-w-7xl mx-auto">

      {/* ================= TOP HERO ================= */}
      <div className="flex flex-col md:flex-row gap-8 items-start justify-center">

        {/* PROFILE CARD */}
        <div className="w-full md:w-1/3 bg-white border-4 border-black rounded-3xl p-6 shadow-neo flex flex-col items-center text-center relative overflow-hidden">

          <div className="w-32 h-32 bg-custom-pink rounded-full border-4 border-black mb-4 flex items-center justify-center text-4xl overflow-hidden">
            <img
              src="/Profile_Photo.png"
              alt="Sunny Raj"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-4xl font-shrikhand mb-1">
            SUNNY RAJ
          </h1>

          <div className="bg-black text-white px-3 py-1 font-mono text-sm rounded-md mb-4 rotate-1">
            JAVA_FULLSTACK_Developer()
          </div>

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

          <div className="w-full flex flex-col gap-3 mt-6">

            <a
              href="https://drive.google.com/file/d/1C7pbRhxxej6xauWCZ8NGLcvhB3te7mVX/view"
              download
              className="bg-custom-green w-full py-3 rounded-xl border-2 border-black font-bold shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2"
            >
              <FaDownload />
              RESUME
            </a>

            <button
              type="button"
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
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:scale-110 transition-transform"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sunny-raj-299401273/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:scale-110 transition-transform text-blue-700"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://leetcode.com/u/rajSunny5714"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="hover:scale-110 transition-transform text-orange-600"
            >
              <SiLeetcode size={25} />
            </a>

            <a
              href="https://www.naukri.com/code360/profile/rajsunny5714"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Coding Ninjas"
              className="hover:scale-110 transition-transform text-orange-600"
            >
              <SiCodingninjas size={25} />
            </a>

            <a
              href="https://www.hackerrank.com/profile/rajSunny5714"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HackerRank"
              className="hover:scale-110 transition-transform text-green-600"
            >
              <SiHackerrank />
            </a>

          </div>

        </div>


        {/* ABOUT SECTION */}
        <div
          id="about"
          className="w-full md:w-2/3 flex flex-col gap-6"
        >

          <div className="bg-custom-yellow p-6 md:p-10 rounded-3xl border-4 border-black shadow-neo">

            <h2 className="text-4xl font-shrikhand mb-6">
              Hi people! 👋
            </h2>

            <p className="text-lg font-medium leading-relaxed mb-4">
              I am a{' '}
              <span className="font-bold bg-white px-1 border border-black">
                Java Full Stack Developer
              </span>{' '}
              with 1.5+ years of experience at TCS, working as a Programmer with experience in application monitoring, troubleshooting, incident management, and enterprise access management.
            </p>

            <p className="text-lg font-medium leading-relaxed mb-4">
              I have hands-on experience with{' '}
              <span className="font-bold bg-white px-1 border border-black">
                Java, Spring Boot, REST APIs, SQL, Python & Application Security
              </span>{' '}
              along with IAM concepts including JWT, OAuth 2.0, SAML, RBAC, SSO, and MFA.
            </p>

            <p className="text-lg font-medium leading-relaxed mb-4">
              Currently, I am strengthening my expertise in{' '}
              <span className="font-bold bg-white px-1 border border-black">
                Microservices, Cloud, IAM & AI
              </span>{' '}
              using AWS, Docker, Kubernetes, Kafka, Redis, LangChain, LLMs, and RAG to build scalable, secure, and intelligent applications.
            </p>

            <p className="text-lg font-medium leading-relaxed mb-4">
              I am also pursuing my{' '}
              <span className="font-bold bg-white px-1 border border-black">
                MCA
              </span>{' '}
              through the Hybrid Full-Time Programme conducted by{' '}
              <span className="font-bold bg-white px-1 border border-black">
                IIT Patna & IIIT Ranchi
              </span>{' '}
              while continuously improving my skills in backend engineering, system design, DSA, cloud technologies, and enterprise security.
            </p>

            <div className="bg-white p-4 border-2 border-black rounded-xl inline-block font-bold shadow-neo-sm">
              🚀 Open to Java Backend, Full Stack & IAM Engineer Roles
            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM SECTION ================= */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

        {/* TERMINAL IMAGE */}
        <div className="lg:col-span-1 bg-white border-4 border-black rounded-3xl shadow-neo p-6">

          <div className="border-b-4 border-black pb-3 mb-4">
            <div className="inline-block bg-black text-white px-3 py-1 rounded-md font-mono font-bold text-xs">
              DEVELOPER_WORKSPACE
            </div>
          </div>

          <div className="flex justify-center items-center h-full">
            <img
              src="/terminal-side-image.png"
              alt="Sunny Raj Developer Workspace"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

        </div>


        {/* MINI TERMINAL */}
        <div className="lg:col-span-2">
          <MiniTerminal />
        </div>

      </div>


      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </section>
  );
};

export default Hero;
