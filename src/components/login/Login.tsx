import Desktop from "@/assets/desktop-computer.svg";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block bg-black">
        <img
          src={Desktop}
          alt="Hero Image Of A Desktop Computer"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:p-36 md:p-52 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4 text-[#ebf615]">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
