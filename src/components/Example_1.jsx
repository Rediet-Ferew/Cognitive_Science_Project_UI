import React from "react";
import { FaLightbulb } from "react-icons/fa";
const Example_1 = () => {
  return (
    <div className="bg-gray-900 text-gray-400 w-1/4 p-10 text-center h-min m-5 border border-gray-500 rounded-3xl hover:bg-gray-800">
      <div>
        <FaLightbulb className="mx-auto"/>
      </div>

      <h3 className="p-1">Examples</h3>
      <p className="p-1">"Got any creative ideas for a 10 year old's birthday?"</p>
      
    </div>
  );
};

export default Example_1;
