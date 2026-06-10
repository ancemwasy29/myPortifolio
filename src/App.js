
import Ance from "./Pages/Ance.js";
import "./css/components.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="navBar">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
