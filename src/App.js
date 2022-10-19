import React, { useEffect } from "react";
import Dashbord from "./dashbord/Dashbord";
import Leaderboard from "./leaderboard/Leaderboard";
import PollCreation from "./pollCreation/PollCreation";
import Login from "./login/Login";
import { Routes, Route, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./features/sliceUser";
import { fetchQuestions } from "./features/sliceQuestions";
import "./App.css";
import { getUser } from "./features/sliceUser";
import PropTypes from "prop-types";
import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

function App() {
  const { user } = useParams;
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchQuestions());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/Dashbord" element={<Dashbord />} />
        <Route path="/:user" element={<Dashbord />} />
        <Route path="/Leaderboard" element={<Leaderboard />} />
        <Route path="/PollCreation" element={<PollCreation />} />
        <Route path="/" element={<Login users={users} />} />
      </Routes>
    </div>
  );
}

export default App;
App.prototype = {
  users: PropTypes.object.isRequired,
};
