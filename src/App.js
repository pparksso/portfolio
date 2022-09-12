import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Project from "./component/Project";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
// import Email from "./component/Email";
import GlobalStyles from "./component/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
