import SignUp from "./pages/singup/SignUp";
import Login from "./pages/login/Login"


const App = () => {
  return (
    <div className="bg-[#1C1C1C] h-screen w-full p-4 flex items-center justify-center">
      <Login />
      <SignUp />
    </div>
  );
};

export default App;
