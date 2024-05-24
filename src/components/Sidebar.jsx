import React from 'react';
import { FaBars, FaGithub } from 'react-icons/fa';
import { GrPowerReset } from "react-icons/gr";
import { SlNotebook } from "react-icons/sl"

const Sidebar = () => {
  const handleResetConversation = () => {
    window.location.reload();
  };

  return (
    <div className="fixed left-0 top-0 bottom-0 h-full bg-gray-900 w-64 p-4 flex flex-col">
      <nav className="flex-grow">
        <ul>
          <li className="mb-2">
            <button onClick={handleResetConversation} className="flex items-center text-blue-500">
              <GrPowerReset className="mr-2 w-6 h-6 text-gray-300 my-2 ml-2" />
              <p className='text-gray-300'>Reset Conversation</p>
            </button>
          </li>
          <li className="mb-2">
            <a href="https://colab.research.google.com/drive/1v5yl0GCHEGtgjGnhtYuTweepuyVOgDm8?usp=sharing" className="flex items-center text-blue-500">
              <SlNotebook className="mr-2 w-6 h-6 text-gray-300 my-2 ml-2" />
              <p className='text-gray-300'>Notebook</p>
            </a>
          </li>
          <li className="mb-2">
            <a href="https://github.com/Rediet-Ferew/Cognitive_Science_Project_UI" className="flex items-center text-green-500">
              <FaGithub className="mr-2 w-6 h-6 text-gray-300 my-2 ml-2" />
              <p className='text-gray-300'>GUI</p>
            </a>
          </li>
          <li className="mb-2">
            <a href="https://github.com/TigistW/Cognitive-Dialogue-Generation-using-GPT-3" className="flex items-center text-green-500">
              <FaGithub className="mr-2 w-6 h-6 text-gray-300 my-2 ml-2" />
              <p className='text-gray-300'>API</p>
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/drive/folders/1sNUl5irQOahmyCqq6QHGfVSw8yys-u7s?usp=sharing" className="flex items-center text-yellow-500">
              <FaBars className="mr-2 w-6 h-6 text-gray-300 my-2 ml-2" />
              <p className='text-gray-300'>Dataset</p>
            </a>
          </li>
        </ul>
      </nav>
     
    </div>
  );
};

export default Sidebar;
