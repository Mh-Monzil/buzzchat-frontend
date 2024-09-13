import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-[#1C1C1C] h-screen w-full p-4 flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default App;
