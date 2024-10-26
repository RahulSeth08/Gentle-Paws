import './App.css'
import {Hero} from "./components/Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function AppContent() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Hero />} />
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