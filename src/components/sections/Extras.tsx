import React from 'react';
import {
  FaTrophy,
  FaCertificate,
  FaCode,
  FaLanguage,
} from 'react-icons/fa';

const Extras = () => {
  return (
    <section
      id="extra"
      className="py-10 px-4 max-w-7xl mx-auto bg-custom-red border-4 border-black rounded-3xl shadow-neo"
    >
      <div className="flex justify-center mb-10">
        <div className="bg-custom-green px-8 py-3 border-4 border-black rounded-full shadow-neo">
          <h2 className="text-3xl font-shrikhand text-black">
            🏆 Extra Curriculars
          </h2>
        </div>
      </div>

      {/* CODING ACHIEVEMENTS */}
      <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-neo mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-custom-yellow p-3 rounded-2xl border-2 border-black">
            <FaTrophy className="text-2xl" />
          </div>

          <h2 className="text-3xl font-shrikhand">
            CODING ACHIEVEMENTS 🏆
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-custom-yellow border-2 border-black rounded-2xl p-5 hover:-translate-y-1 transition-transform">
            <div className="flex items-start gap-3">
              <FaCode className="text-2xl mt-1" />

              <div>
                <h3 className="font-bold text-xl">
                  LeetCode
                </h3>

                <p className="font-medium text-sm mt-2 leading-relaxed">
                  Solved 350+ DSA problems on LeetCode.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-custom-pink border-2 border-black rounded-2xl p-5 hover:-translate-y-1 transition-transform">
            <div className="flex items-start gap-3">
              <FaCode className="text-2xl mt-1" />

              <div>
                <h3 className="font-bold text-xl">
                  Coding Ninjas
                </h3>

                <p className="font-medium text-sm mt-2 leading-relaxed">
                  Solved 150+ DSA problems and 400+ DSA MCQs on Coding Ninjas.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-custom-green border-2 border-black rounded-2xl p-5 hover:-translate-y-1 transition-transform">
            <div className="flex items-start gap-3">
              <FaCode className="text-2xl mt-1" />

              <div>
                <h3 className="font-bold text-xl">
                  Problem Solving
                </h3>

                <p className="font-medium text-sm mt-2 leading-relaxed">
                  Practiced 500+ DSA problems across multiple coding platforms
                  using multiple programming languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-neo mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-custom-blue p-3 rounded-2xl border-2 border-black">
            <FaCertificate className="text-2xl" />
          </div>

          <h2 className="text-3xl font-shrikhand">
            CERTIFICATIONS 📜
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-custom-yellow border-2 border-black rounded-xl p-4 font-bold">
            AWS Certified Solutions Architect Associate — AWS
          </div>

          <div className="bg-custom-yellow border-2 border-black rounded-xl p-4 font-bold">
            Microsoft Identity and Access Administrator (SC-300) — Microsoft
          </div>

          <div className="bg-custom-yellow border-2 border-black rounded-xl p-4 font-bold">
            GitHub Foundations (GH-900) — GitHub
          </div>

          <div className="bg-custom-yellow border-2 border-black rounded-xl p-4 font-bold">
            Agentic AI Foundations Associate — Oracle
          </div>

           <div className="bg-custom-yellow border-2 border-black rounded-xl p-4 font-bold">
            OCI Certified AI Foundations Associate — Oracle
          </div>

          <div className="bg-custom-pink border-2 border-black rounded-xl p-4 font-bold">
            Microsoft Security, Compliance, and Identity Fundamentals
            (SC-900) — Microsoft
          </div>

           <div className="bg-custom-yellow border-2 border-black rounded-xl p-4 font-bold">
            Azure Fundamentals — Microsoft
          </div>

           <div className="bg-custom-yellow border-2 border-black rounded-xl p-4 font-bold">
            SQL Certificate — HackerRank
          </div>

          <div className="bg-custom-pink border-2 border-black rounded-xl p-4 font-bold">
            Full Stack Java Development — Udemy
          </div>
        </div>
      </div>

      {/* LANGUAGES */}
      <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-neo">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-custom-green p-3 rounded-2xl border-2 border-black">
            <FaLanguage className="text-2xl" />
          </div>

          <h2 className="text-3xl font-shrikhand">
            LANGUAGES 🌍
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-custom-yellow border-2 border-black rounded-2xl p-5">
            <h3 className="text-xl font-bold mb-3">
              Hindi
            </h3>

            <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
              Native Proficiency
            </span>
          </div>

          <div className="bg-custom-pink border-2 border-black rounded-2xl p-5">
            <h3 className="text-xl font-bold mb-3">
              English
            </h3>

            <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
              Professional Working Proficiency
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extras;
