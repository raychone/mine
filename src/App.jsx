import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./components/Search";

function App() {
  return (
    <main className="text-center bg-black/80 text-white h-screen">
      <Router>
        <Navbar />
        <Search />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
