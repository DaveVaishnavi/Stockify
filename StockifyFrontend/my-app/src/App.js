import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import LogInPage from "./pages/LogIn";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/LogIn" element={<LogInPage />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
