import React, { useState } from "react";
import axios from "axios";
import Example_1 from "./Example_1";
import Example_2 from "./Example_2";
import Example_3 from "./Example_3";
import { IoMdArrowUp } from "react-icons/io";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);

  const sendMessage = async () => {
    if (message.trim() === "") return;

    // Add user's message to the conversation
    setConversation((prevConversation) => [
      ...prevConversation,
      { sender: "user", text: message }
    ]);
    console.log(message)

    try {
      // Send the message to the API
      const response = await axios.post("https://threat-detection-final-year.onrender.com/api/v2/predict/text", { text: message });
      
      
      // Add the response to the conversation
      setConversation((prevConversation) => [
        ...prevConversation,
        { sender: "user", text: message },
        { sender: "bot", text: response.data.confidence }
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setConversation((prevConversation) => [
        ...prevConversation,
        { sender: "user", text: message },
        { sender: "bot", text: "Error: Could not get a response" }
      ]);
    }

    // Clear the input field
    setMessage("");
  };

  return (
    <div className="flex flex-col p-4 items-center">
      <div>
        <h1 className="text-gray-100 text-4xl font-bold">MiniGPT</h1>
      </div>
      <div className="flex mx-20 mt-24">
        <Example_1 />
        <Example_2 />
        <Example_3 />
        <Example_3 />
      </div>

      <div className="mb-4 rounded-xl w-full max-w-2xl">
        {conversation.map((entry, index) => (
          <div
            key={index}
            className={`p-2 my-2 rounded ${
              entry.sender === "user"
                ? "bg-gray-800 text-right text-white ml-auto rounded-2xl"
                : "bg-gray-800 text-left text-gray-400 mr-auto rounded-2xl"
            }`}
            style={{ maxWidth: '75%' }}
          >
            <span>{entry.text}</span>
          </div>
        ))}
      </div>

      <div className="relative w-1/2 mt-44">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
