import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Welcome from "./Welcome";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;