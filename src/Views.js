import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Login from "./Login";
const Views = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<About />} />
      </Routes>
    </>
  );
};

export default Views;
