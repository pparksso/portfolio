import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Project from "./component/Project";
// import Skill from "./component/Skill";
// import Contact from "./component/Contact";
// import Email from "./component/Email";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
