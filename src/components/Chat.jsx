import React, { useState } from "react";
import axios from "axios";
import Example_1 from "./Example_1";
import Example_2 from "./Example_2";
import Example_3 from "./Example_3";
import { IoMdArrowUp } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [examplesVisible, setExamplesVisible] = useState(true); // State to control visibility of example components
  const [selectedApi, setSelectedApi] = useState("MiniGPT_One"); // State for selected API
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to control dropdown visibility

  const apis = {
    MiniGPT_One: "https://cognitive-dialogue-generation-using-gpt-3.onrender.com/chat",
    MiniGPT_Two: "https://cognitive-dialogue-generation-using-gpt-3.onrender.com/chat_two",
    MiniGPT_Three: "https://cognitive-dialogue-generation-using-gpt-3.onrender.com/chat_three",
  };

  const sendMessage = async () => {
    if (message.trim() === "") return;

    // Add user's message to the conversation
    setConversation((prevConversation) => [
      ...prevConversation,
      { sender: "user", text: message }
    ]);

    const userMessage = message; // Capture the current message
    setMessage(""); // Clear the input field

    try {
      // Send the message to the selected API
      const response = await axios.post(apis[selectedApi], { text: userMessage });
      
      // Add the response to the conversation
      setConversation((prevConversation) => [
        ...prevConversation,
        { sender: "bot", text: response.data.confidence }
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setConversation((prevConversation) => [
        ...prevConversation,
        { sender: "bot", text: "Error: Could not get a response" }
      ]);
    }

    setExamplesVisible(false); // Hide examples when a message is sent
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const handleMessageClick = () => {
    setExamplesVisible(false); // Hide examples when a message is clicked
  };

  const handleApiChange = (api) => {
    setSelectedApi(api);
    setDropdownVisible(false);
  };

  return (
    <div className="flex flex-col p-4 items-center h-screen overflow-hidden">
      <div className="flex justify-center w-full">
        <div className="relative mr-auto">
          <button
            onClick={() => setDropdownVisible(!dropdownVisible)}
            className="bg-gray-700 text-gray-400 px-4 py-2 rounded"
          >
            <div className="flex items-center">
              <p className="text-center">{selectedApi}</p>
              <MdOutlineKeyboardArrowDown className="mt-1 w-6 h-6"/>
            </div>
          </button>
          {dropdownVisible && (
            <div className="absolute bg-gray-800 text-gray-400 mt-2 rounded shadow-lg">
              {Object.keys(apis).map((apiKey, index) => (
                <div
                  key={index}
                  onClick={() => handleApiChange(apiKey)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-700"
                >
                  {apiKey}
                </div>
              ))}
            </div>
          )}
        </div>
       
      </div>
      {examplesVisible && (

        <div className="flex-col justify-between mt-24">
           <h1 className="text-gray-100 text-4xl font-bold text-center mb-8">MiniGPT</h1>
          <div className="flex mx-20">
          <Example_1 />
          <Example_2 />
          <Example_3 />
          <Example_3 />
        </div>
        </div>
        
      )}

      <div className={`mb-4 rounded-xl w-full max-w-2xl ${examplesVisible ? '' : 'mt-10'}`}>
        {conversation.map((entry, index) => (
          <div
            key={index}
            className={`p-2 my-2 rounded ${
              entry.sender === "user"
                ? "bg-gray-700 text-right text-gray-400 ml-auto rounded-xl py-4 border border-gray-600"
                : "bg-gray-700 text-left text-gray-400 mr-auto rounded-xl py-4 border border-gray-600"
            }`}
            style={{ maxWidth: '75%' }}
            onClick={handleMessageClick} // Hide examples when a message is clicked
          >
            <span>{entry.text}</span>
          </div>
        ))}
      </div>

      <div className="relative w-1/2 mt-auto mb-8"> {/* Ensure the input is at the bottom */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress} // Add key press event handler
          className="w-full rounded-full px-4 py-5 pr-16 bg-gray-700 focus:outline-none text-lg"
          placeholder="Message MiniGPT"
        />
        <button
          onClick={sendMessage}
          className="absolute inset-y-0 right-0 flex items-center pr-4"
        >
          <IoMdArrowUp className="w-6 h-6 text-gray-900 bg-gray-500 rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
