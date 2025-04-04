import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import sun from "@/assets/sun.svg";
import moon from "@/assets/moon.svg";
import "./App.css";
import { ThemeContext } from "./context/ThemeProvider";
import Login from "./components/login/Login";
import Servers from "./components/servers/Servers";

function App() {
  const { toggle, toggleFunction } = useContext(ThemeContext);

  return (
    <div className={`${!toggle ? "bg-[#7f92e2]" : "bg-[black]"}`}>
      <img
        className="w-10 h-10 absolute top-5 right-5 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
        src={toggle ? moon : sun}
        alt={
          toggle
            ? "Switch to light mode picture of a moon"
            : "Switch to dark mode picture of a sun"
        }
        onClick={toggleFunction}
      />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/servers" element={<Servers />} />
      </Routes>
    </div>
  );
}

export default App;
