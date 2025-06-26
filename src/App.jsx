import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileSelect from "./components/ProfileSelect";
import About from "./pages/About";
import Code from "./pages/Code";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProfileSelect />} />
      <Route path="/about" element={<About />} />
      <Route path="/code" element={<Code />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}