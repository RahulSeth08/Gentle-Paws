import React from 'react';
import './App.css'
import {Landing} from "../src/components/pages/Landing"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function AppContent() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Landing />} />
    </Routes>
    </>
  )
}

export default function App() {
  return (
      <Router>
        <AppContent />
      </Router>
  );
}