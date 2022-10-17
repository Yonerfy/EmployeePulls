import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../features/sliceUser";
import { Link, useParams } from "react-router-dom";
import { fetchQuestions } from "../features/sliceQuestions";
import { getUser } from "../features/sliceUser";
import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../_DATA";

const Login = ({ users }) => {
  const dispatch = useDispatch();
  // _getUsers().then((data) => dispatch(getUser(data)));
  // useEffect(() => {
  // dispatch(fetchUsers());
  // dispatch(fetchQuestions());
  // }, []);
  // const users = useSelector((state) => state.user);
  console.log(users);
  // users.then((data) => console.log(data));
  const currentUser = Object.values(users);
  const userEl = currentUser.map((user) => (
    <Link to={`/${user.id}`}>
      {user.id}
      <img src={user.avatarURL} width="40" />
    </Link>
  ));
  return (
    <div>
      <h1>Please Log In</h1>
      {/* <Link to={`/${users.sarahedo.id}`}>
        {users.sarahedo.id}
        <img src={users.sarahedo.avatarURL} width="40" />
      </Link>
      <Link to={`/${users.tylermcginnis.id}`}>
        {users.tylermcginnis.id}
        <img src={users.tylermcginnis.avatarURL} width="40" />
      </Link>
      <Link to={`/${users.mtsamis.id}`}>
        {users.mtsamis.id}
        <img src={users.mtsamis.avatarURL} width="40" />
      </Link> */}
      {userEl}
    </div>
  );
};

export default Login;
