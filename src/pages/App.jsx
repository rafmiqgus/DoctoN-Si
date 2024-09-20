import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Acceuil from "./Acceuil";
import Python from "./routes/Python";
import Binaire from "./routes/Base";
import Algorithmes from "./routes/Algorithmes";
import JavaScript from "./routes/JavaScript";
import "../styles/App.module.css";

const App = () => {
  return (
    <div className="App flex-column">
      <Navbar />
      <div className="page flex">
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/Python" element={<Python />} />
          <Route path="/Binaire" element={<Binaire />} />
          <Route path="/Algorithmes" element={<Algorithmes />} />
          <Route path="/JavaScript" element={<JavaScript />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
