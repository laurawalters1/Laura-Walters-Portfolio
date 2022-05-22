import "./App.css";
import Offcanvas from "./components/Offcanvas";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Repositories from "./pages/Repositories";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div class="">
          <header className="d-lg-none d-flex"></header>
          {/* <!-- Sidebar --> */}
          <aside class="container__sidebar">
            <Navbar className="d-none bg-dark d-lg-flex" />
          </aside>

          {/* <!-- Main --> */}
          <main class="container__main mt-5">
            <Routes>
              <Route path="/laura-walters-portfolio/" element={<Home />} />
              <Route
                path="/laura-walters-portfolio/contact"
                element={<Contact />}
              />
              <Route
                path="/laura-walters-portfolio/repositories"
                element={<Repositories />}
              />
            </Routes>
          </main>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
