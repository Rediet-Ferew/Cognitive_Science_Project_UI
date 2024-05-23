import React from 'react';
import { FaBars, FaGithub } from 'react-icons/fa';
import { GrPowerReset } from "react-icons/gr";
// import { PiNotebookBold } from 'react-icons/pi';
import { SlNotebook } from "react-icons/sl"

import hack from '../assets/Hacking.png';

const Sidebar = () => {
  const handleResetConversation = () => {
    window.location.reload();
  };

  return (
    <div className="bg-gray-900 p-4 min-h-screen flex flex-col w-1/4">
      <nav className="flex-grow">
        <ul>
          <li className="mb-2">
            <button onClick={handleResetConversation} className="flex items-center text-blue-500">
              <GrPowerReset className="mr-2 w-6 h-6 text-gray-300 my-2 ml-2" />
              <p className='text-gray-300'>Reset Conversation</p>
            </button>
          </li>
          <li className="mb-2">
            <a href="https://www.kaggle.com/code/butterflyaway/cognitive-dialogue-generation-with-gpt-3/edit" className="flex items-center text-blue-500">
              <SlNotebook className="mr-2 w-6 h-6 text-gray-300 my-2 ml-2" />
              <p className='text-gray-300'>Notebook</p>
            </a>
          </li>
          <li className="mb-2">
            <a href="https://github.com/Rediet-Ferew/NLP-UI/" className="flex items-center text-green-500">
              <FaGithub className="mr-2 w-6 h-6 text-gray-300 my-2 ml-2" />
              <p className='text-gray-300'>GUI</p>
            </a>
          </li>
          <li className="mb-2">
            <a href="https://github.com/TigistW/PandoraGuard/tree/samuel.fast-api" className="flex items-center text-green-500">
              <FaGithub className="mr-2 w-6 h-6 text-gray-300 my-2 ml-2" />
              <p className='text-gray-300'>API</p>
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1ZEgtQmqrRBE3dcCrFpS6EBamuHVoNz81/view?usp=sharing" className="flex items-center text-yellow-500">
              <FaBars className="mr-2 w-6 h-6 text-gray-300 my-2 ml-2" />
              <p className='text-gray-300'>Dataset</p>
            </a>
          </li>
        </ul>
      </nav>
      <div className="w-10 h-10 ml-8">
        <img src={hack} alt="Small hack computer image" />
      </div>
    </div>
  );
};

export default Sidebar;
