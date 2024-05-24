import MainContent from "./components/MainComponent";
import Sidebar from "./components/Sidebar";
import Chat from './components/Chat';

function App() {
  return (
    <>
      <div className='flex bg-gray-800'>
        <Sidebar className="fixed left-0 top-0 bottom-0 h-full z-10" />
        <div className="flex-1 pl-64 h-screen overflow-y-auto"> {/* Adjust the left padding to accommodate the sidebar width */}
          <Chat />
        </div>
      </div>
    </>
  );
}

export default App;
