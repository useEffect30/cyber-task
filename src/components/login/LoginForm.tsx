import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/state/servers/serversApiSlice";
import { ThemeContext } from "@/context/ThemeProvider";
import ThemedButton from "../ui/Button";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { toggle } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [login, { error, isLoading }] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const credentials = {
      username: userName,
      password,
    };
    try {
      const result = await login(credentials).unwrap();
      localStorage.setItem("token", result.token);
      navigate("/servers");
    } catch (err) {
      console.error("Login failed", err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-[#fa87b6] mb-2 text-2xl font-bold text-left drop-shadow-lg"
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="tesonet"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className={`w-full border border-[#ebf615] text-white rounded-md py-2 px-3 focus:outline-none ${
            !toggle ? "focus:border-black" : "focus:border-[#fa87b6]"
          }`}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-[#fa87b6] mb-2 text-2xl font-bold text-left drop-shadow-lg"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="partyanimal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full border border-[#ebf615] text-white rounded-md py-2 px-3 focus:outline-none ${
            !toggle ? "focus:border-black" : "focus:border-[#fa87b6]"
          }`}
        />
      </div>
      <ThemedButton type="submit" isLoading={isLoading} fullWidth>
        Login
      </ThemedButton>
      {error && <p className="text-red-500 mt-4">Login failed. Try again.</p>}
    </form>
  );
};

export default LoginForm;
