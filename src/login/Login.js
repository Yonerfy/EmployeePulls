import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../features/sliceUser";
import { Link, useParams } from "react-router-dom";
import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../_DATA";

const Login = () => {
  // const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  console.log(users);
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <div>
      <h1>Please Log In</h1>
      <Link to={`/${users.sarahedo.id}`}>
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
      </Link>
    </div>
  );
};

export default Login;
