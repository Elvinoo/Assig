import React from "react";

import "./App.css";
import Header from "./Components/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="background-image px-0 py-50px bg-[url('https://addons-media.operacdn.com/media/CACHE/images/themes/96/225196/1.0-rev1/images/61cb7510444a2a7ad94a0abb7c797855/5047ff5f918c466d3e1467665f075db3.jpg')]">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
