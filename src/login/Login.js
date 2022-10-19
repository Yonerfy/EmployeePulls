import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../features/sliceUser";
import { Link, useParams } from "react-router-dom";
import { fetchQuestions } from "../features/sliceQuestions";

const Login = ({ users }) => {
  const dispatch = useDispatch();

  const currentUser = Object.values(users);
  const userEl = currentUser.map((user) => (
    <Link to={`/${user.id}`} key={user.id}>
      {user.id}
      <img src={user.avatarURL} width="40" />
    </Link>
  ));
  return (
    <div>
      <h1>Please Log In</h1>
      {userEl}
    </div>
  );
};

export default Login;
