import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Starships from "./pages/Starships";

export default function App() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<People />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/starships" element={<Starships />} />
      </Routes>
    </main>
  );
}
