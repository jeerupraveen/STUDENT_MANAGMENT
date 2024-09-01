import Attendence from "./components/Attendence";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Studentdetails from "./components/Studentdetails";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <h1 className="text-black text-lg text-center font-bold bg-green-500 h-12 p-2">STUDENT MANAGMENT</h1>
      <BrowserRouter>
        <div>
          <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4 list-none justify-around mx-3">            
              <li className="text-white text-lg font-bold">
                <Link to="/" className="hover:text-gray-300">HOME</Link>
              </li>
              <li className="text-white text-lg">
                <Link to="/registration" className="hover:text-gray-300">REGISTRATION</Link>
              </li>
              <li className="text-white text-lg">
                <Link to="/attendence" className="hover:text-gray-300">ATTENDENCE</Link>
              </li>
              <li className="text-white text-lg">
                <Link to="/studentdetails" className="hover:text-gray-300">STUDENT DETAILS</Link>
              </li>
              <li className="text-white text-lg">
                <Link to="/login" className="hover:text-gray-300">LOGIN</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/attendence" element={<Attendence />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/studentdetails" element={<Studentdetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
