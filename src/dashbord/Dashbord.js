import { Link } from "react-router-dom";

const Dashbord = () => {
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
    </div>
  );
};

export default Dashbord;
