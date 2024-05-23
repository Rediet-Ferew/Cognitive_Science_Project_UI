// // import { Router } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainContent from "./components/MainComponent";
import Sidebar from "./components/Sidebar";
import Chat from './components/Chat';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex bg-gray-800'>
        <Sidebar/>
        <div>
        {/* <MainContent/> */}
        <Chat/>
        </div>
        

      </div>
      </>
  );
}

export default App;
