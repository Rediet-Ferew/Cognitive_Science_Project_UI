import React from 'react';
import Examples from './Example_1';
import Chat from './Chat';
// import Capabilities from './Capabilities';
// import Limitations from './Limitations';

const MainContent = () => {
  return (
    <div className="">
      <h1>ChatGPT</h1>
      <div className="flex">
        <Examples />
        {/* <Capabilities />
        <Limitations /> */}
        <Chat/>
      </div>
    </div>
  );
};

export default MainContent;
