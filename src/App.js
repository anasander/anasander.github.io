import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PersonalProjects from "./PersonalProjects";
import Header from "./Header";
import Footer from "./Footer";
import ScrollTop from "./Components/ScrollTop/ScrollTop";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <main>
        <ScrollTop />
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
