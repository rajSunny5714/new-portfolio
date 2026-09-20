import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaTimes, FaPhone } from 'react-icons/fa';
import { SiLeetcode, SiCodingninjas, SiHackerrank, SiX } from "react-icons/si";
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
      <div className="bg-white w-full max-w-md border-4 border-black rounded-3xl p-6 shadow-neo relative animate-bounce-in">
        
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-shrikhand">Get in Touch 📬</h2>
          <button onClick={onClose} className="text-2xl hover:rotate-90 transition-transform cursor-pointer">
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col gap-4 font-bold">
            <a href="mailto:sunnyraj13094@gmail.com" className="flex items-center gap-3 p-3 bg-custom-yellow border-2 border-black rounded-xl hover:translate-x-1 hover:shadow-neo-sm transition-all">
                <FaEnvelope className="text-xl"/> sunnyraj13094@gmail.com
            </a>
           <a href="tel:+919905543185" className="flex items-center gap-3 p-3 bg-green-200 border-2 border-black rounded-xl hover:translate-x-1 hover:shadow-neo-sm transition-all">
               <FaPhone className="text-xl" /> +91 9905543185
           </a>
            <a href="tel:+919905543185" className="flex items-center gap-3 p-3 bg-green-200 border-2 border-black rounded-xl hover:translate-x-1 hover:shadow-neo-sm transition-all">
              <FaPhone className="text-xl" />
              +91 9905543185
            </a>
          </div>
          
          {/* Find Me On */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">
              Find Me On
            </h3>
          
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          
              {/* GitHub */}
              <a
                href="https://github.com/rajSunny5714"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex flex-col items-center gap-1 p-3 bg-gray-200 border-2 border-black rounded-xl hover:scale-105 hover:shadow-neo-sm transition-all"
              >
                <FaGithub size={25} />
                <span className="text-sm">GitHub</span>
              </a>
          
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sunny-raj-299401273/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex flex-col items-center gap-1 p-3 bg-blue-200 border-2 border-black rounded-xl hover:scale-105 hover:shadow-neo-sm transition-all text-blue-700"
              >
                <FaLinkedin size={25} />
                <span className="text-sm">LinkedIn</span>
              </a>
          
              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/rajSunny5714"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="flex flex-col items-center gap-1 p-3 bg-orange-200 border-2 border-black rounded-xl hover:scale-105 hover:shadow-neo-sm transition-all"
              >
                <SiLeetcode size={25} />
                <span className="text-sm">LeetCode</span>
              </a>
          
              {/* Coding Ninjas */}
              <a
                href="https://www.naukri.com/code360/profile/rajsunny5714"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Coding Ninjas"
                className="flex flex-col items-center gap-1 p-3 bg-orange-100 border-2 border-black rounded-xl hover:scale-105 hover:shadow-neo-sm transition-all"
              >
                <SiCodingninjas size={25} />
                <span className="text-sm">Coding Ninjas</span>
              </a>
          
              {/* HackerRank */}
              <a
                href="https://www.hackerrank.com/profile/rajSunny5714"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HackerRank"
                className="flex flex-col items-center gap-1 p-3 bg-green-200 border-2 border-black rounded-xl hover:scale-105 hover:shadow-neo-sm transition-all text-green-700"
              >
                <SiHackerrank size={25} />
                <span className="text-sm">HackerRank</span>
              </a>
          
              {/* X */}
              <a
                href="https://x.com/sunnyraj_21"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex flex-col items-center gap-1 p-3 bg-gray-100 border-2 border-black rounded-xl hover:scale-105 hover:shadow-neo-sm transition-all"
              >
                <SiX size={25} />
                <span className="text-sm">X</span>
              </a>
          
            </div>
          </div>
        <button 
          onClick={onClose}
          className="mt-6 w-full bg-custom-red text-white font-bold py-3 border-2 border-black rounded-xl shadow-neo-sm hover:shadow-none hover:translate-y-1 transition-all cursor-pointer"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
