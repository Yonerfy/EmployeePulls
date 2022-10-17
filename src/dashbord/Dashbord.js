import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Dashbord = () => {
  const { user } = useParams();
  const users = useSelector((state) => state.user);
  const questions = useSelector((state) => state.questions);
  const currentUser = Object.values(users);
  const userImg = currentUser.filter((u) => u.id === user);
  console.log(currentUser, userImg);

  return (
    <div className="dashbord">
      <h1>Dashbord</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="/PollCreation">New</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Link to="/">
          <img src={userImg[0].avatarURL} width="40" />
          {user}
        </Link>
        <h1>New Question</h1>
      </section>
    </div>
  );
};

export default Dashbord;
