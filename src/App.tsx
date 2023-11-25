import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Starships from "./pages/Starships";
import Person from "./pages/Person";
import Planet from "./pages/Planet";
import Starship from "./pages/Starship";

export default function App() {
  return (
    <main className="h-screen">
      <div className="mb-10 mt-6">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<People />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/people/:personId" element={<Person />} />
        <Route path="/planets/:planetId" element={<Planet />} />
        <Route path="/starships/:starshipId" element={<Starship />} />
      </Routes>
    </main>
  );
}
