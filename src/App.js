import React, { useEffect } from "react";
import Dashbord from "./dashbord/Dashbord";
import Leaderboard from "./leaderboard/Leaderboard";
import PollCreation from "./pollCreation/PollCreation";
import Login from "./login/Login";
import { Routes, Route, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/sliceUser";
import { fetchQuestions } from "./features/sliceQuestions";
import "./App.css";

function App() {
  const { user } = useParams;
  const dispatch = useDispatch();
  dispatch(fetchUsers());
  dispatch(fetchQuestions());
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/Dashbord" element={<Dashbord />} /> */}
        <Route path="/:user" element={<Dashbord />} />
        <Route path="/Leaderboard" element={<Leaderboard />} />
        <Route path="/PollCreation" element={<PollCreation />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
