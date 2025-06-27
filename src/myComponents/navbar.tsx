import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "@/pages/home";
import Workout from "@/pages/workout";
import About from '@/pages/About';
import Diet from "@/pages/diet";


function Navbar() {
    return (
        <BrowserRouter>
            <nav className="flex justify-start items-center px-4 py-3 border-b-2 border-gray-800 dark:text-[#EEF1EF] text-black">
                <Link to={"/"}>
                    <h1 className="text-xl font-bold hover:text-gray-500">Project Mom</h1>
                </Link>
                <Link to={"/Diet"}>
                    <h1 className="text-l px-5 hover:text-gray-500">Diet Plan</h1>
                </Link>
                <Link to={"/workout"}>
                    <h1 className="text-l hover:text-gray-500">Workouts</h1>
                </Link>
                <Link to={"/about"}>
                    <h1 className="text-l px-5 hover:text-gray-500">About</h1>
                </Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/diet" element={<Diet />} />
                <Route path="/workout" element={<Workout />}/>
          </Routes>
        </BrowserRouter>

    )
    
}

export default Navbar;