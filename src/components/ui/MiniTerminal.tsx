import React, { useState } from 'react';

type HistoryItem = {
  type: string;
  text: string;
};

const MiniTerminal = () => {
  const [input, setInput] = useState('');

  const [history, setHistory] = useState<HistoryItem[]>([
    { type: 'output', text: 'SunnyOS v2.0.0 (tty1)' },
    { type: 'output', text: 'Terminal Initialized...' },
    { type: 'output', text: 'Type "help" to see available commands.' },
  ]);

  const [secretNumber, setSecretNumber] = useState<number | null>(null);
  const [gameMode, setGameMode] = useState<string | null>(null);

  const addLine = (text: string, type: string = 'output') => {
    setHistory((prev) => [...prev, { type, text }]);
  };

  const handleCommand = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();

      addLine(`guest@sunny:~$ ${input}`, 'input');

      // Number Guess Game
      if (
        gameMode === 'guess' &&
        secretNumber !== null &&
        cmd !== '' &&
        !isNaN(Number(cmd))
      ) {
        const guess = Number(cmd);

        if (guess === secretNumber) {
          addLine('🎉 Correct! You guessed the number.');
          addLine('Type "guess" to play again.');
          setSecretNumber(null);
          setGameMode(null);
        } else if (guess < secretNumber) {
          addLine('Too low ⬇️');
        } else {
          addLine('Too high ⬆️');
        }

        setInput('');
        return;
      }

      switch (cmd) {
        case 'help':
          addLine('Available Commands 👇');
          addLine('whoami    -> About me');
          addLine('skills    -> Technical skills');
          addLine('projects  -> Featured projects');
          addLine('experience -> Work experience');
          addLine('education -> Academic background');
          addLine('contact   -> Social links');
          addLine('clear     -> Clear terminal');
          addLine('sudo      -> Hidden command 😏');
          addLine(' ');
          addLine('🎮 Fun Commands');
          addLine('game      -> Show available games');
          addLine('guess     -> Number Guessing Game');
          addLine('rps       -> Rock Paper Scissors');
          break;

        case 'whoami':
          addLine('👨‍💻 Sunny Raj');
          addLine(
            'Java FullStack Engineer @ TCS | MCA Student'
          );
          addLine(
            'Aspiring IAM & Cybersecurity Engineer'
          );
          break;

        case 'skills':
          addLine('⚡ Backend');
          addLine(
            'Java, Spring Boot, Hibernate, JDBC, REST APIs'
          );
          addLine('⚡ Frontend');
          addLine(
            'React.js, Tailwind CSS, Bootstrap'
          );
          addLine('⚡ Security');
          addLine(
            'Spring Security, JWT, OAuth 2.0'
          );
          addLine('⚡ Database & Cloud');
          addLine(
            'MySQL, PostgreSQL, AWS, Docker'
          );
          addLine('⚡ AI');
          addLine(
            'LLM, LangChain, RAG, OpenAI APIs'
          );
          break;

        case 'projects':
          addLine('🚀 Featured Projects');
          addLine(
            '1. E-Commerce Platform'
          );
          addLine(
            '2. URL Shortener Platform'
          );
          addLine(
            '3. ChatBot AI'
          );
          addLine(
            '4. Modern PlayStream'
          );
          addLine(
            '5. ThinkHive Edusity Web'
          );
          addLine(
            '6. Daily Expense Tracker'
          );
          break;

        case 'experience':
          addLine(
            '💼 Programmer - Fullstack Engineer @ TCS'
          );
          addLine(
            'Resolved production incidents using Java & Spring Boot.'
          );
          addLine(
            'Optimized APIs and backend SQL performance.'
          );
          addLine(
            'Worked with REST APIs, MySQL, Postman & Agile.'
          );
          break;

        case 'education':
          addLine(
            '🎓 MCA - IIIT Ranchi & IIT Patna'
          );
          addLine(
            '🎓 BCA - BRABU Muzaffarpur'
          );
          break;

        case 'contact':
          addLine(
            'GitHub  : github.com/rajSunny5714'
          );
          addLine(
            'LinkedIn: linkedin.com/in/sunny-raj-299401273'
          );
          addLine(
            'LeetCode: leetcode.com/u/mrsj5714'
          );
          break;

        case 'game':
          addLine('🎮 Available Games');
          addLine(
            'guess -> Number Guessing Game'
          );
          addLine(
            'rps   -> Rock Paper Scissors'
          );
          addLine(
            'Type the game command to start.'
          );
          break;

        case 'guess': {
          const num =
            Math.floor(Math.random() * 10) + 1;

          setSecretNumber(num);
          setGameMode('guess');

          addLine(
            '🤔 I picked a number between 1 and 10.'
          );
          addLine('Try to guess it!');
          break;
        }

        case 'rps':
          setGameMode('rps');
          addLine(
            '✊ Type rock, paper, or scissors'
          );
          break;

        case 'rock':
        case 'paper':
        case 'scissors': {
          if (gameMode !== 'rps') {
            addLine(
              'Start the game first using "rps"'
            );
            break;
          }

          const options = [
            'rock',
            'paper',
            'scissors',
          ];

          const bot =
            options[Math.floor(Math.random() * 3)];

          addLine(`You chose: ${cmd}`);
          addLine(`Bot chose: ${bot}`);

          if (cmd === bot) {
            addLine('🤝 Draw');
          } else if (
            (cmd === 'rock' &&
              bot === 'scissors') ||
            (cmd === 'paper' &&
              bot === 'rock') ||
            (cmd === 'scissors' &&
              bot === 'paper')
          ) {
            addLine('🎉 You win!');
          } else {
            addLine('🤖 Bot wins!');
          }

          addLine(
            'Type rock, paper, or scissors again to continue.'
          );

          break;
        }

        case 'sudo':
          addLine(
            '🚨 Access Denied. Incident reported to Sunny.'
          );
          break;

        case 'clear':
          setHistory([]);
          setInput('');
          return;

        case '':
          break;

        default:
          addLine(
            `bash: ${cmd}: command not found`
          );
      }

      setInput('');
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-black border-4 border-black rounded-3xl shadow-neo overflow-hidden font-mono">

      {/* TERMINAL HEADER */}
      <div className="bg-gray-200 border-b-4 border-black px-4 py-3 flex items-center justify-between">

        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
        </div>

        <span className="font-bold text-black text-xs sm:text-sm tracking-widest">
          root@sunny:~
        </span>

        <div className="w-10"></div>
      </div>

      {/* TERMINAL BODY */}
      <div className="p-4 h-72 sm:h-80 overflow-y-auto bg-black text-green-400 custom-scrollbar text-sm sm:text-base">

        {history.map((line, index) => (
          <div
            key={index}
            className={`mb-1 break-words ${
              line.type === 'input'
                ? 'text-white'
                : 'text-green-400'
            }`}
          >
            {line.text}
          </div>
        ))}

        {/* INPUT */}
        <div className="flex items-center mt-2">
          <span className="text-custom-yellow mr-2 whitespace-nowrap">
            guest@sunny:~$
          </span>

          <input
            type="text"
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent border-none outline-none text-green-400 caret-green-400"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>

      {/* FOOTER HELP */}
      <div className="bg-gray-100 border-t-4 border-black px-4 py-2 text-xs sm:text-sm font-bold text-center">
        Try commands:
        <span className="text-custom-red"> help </span>•
        <span className="text-custom-blue"> whoami </span>•
        <span className="text-custom-green"> game </span>
      </div>
    </div>
  );
};

export default MiniTerminal;