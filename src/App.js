import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PersonalProjects from "./PersonalProjects";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos-pessoais" element={<PersonalProjects />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
