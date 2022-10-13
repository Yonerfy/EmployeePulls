import React from "react";
import Dashbord from "./dashbord/Dashbord";
import Leaderboard from "./leaderboard/Leaderboard";
import PollCreation from "./pollCreation/PollCreation";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashbord />} />
        <Route path="/Leaderboard" element={<Leaderboard />} />
        <Route path="/PollCreation" element={<PollCreation />} />
      </Routes>
    </div>
  );
}

export default App;
