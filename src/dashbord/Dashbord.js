import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./dashbord.css";

const Dashbord = () => {
  const { user } = useParams();
  const users = useSelector((state) => state.user);
  const questions = useSelector((state) => state.questions);
  const userToArray = Object.values(users);
  const questionsToArray = Object.values(questions);
  const currentUser = userToArray.filter((u) => u.id === user);

  const authorOfQuestion = questionsToArray.filter((question) =>
    currentUser[0].questions.includes(question.id)
  );

  const doneQuestionEl = authorOfQuestion.map((question) => {
    const date = new Date(question.timestamp);
    return (
      <div key={question.id}>
        <h3>{question.author}</h3>
        <p>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}
        ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</p>
        <button>Show</button>
      </div>
    );
  });
  // console.log();

  const questionEl = questionsToArray.map((question) => {
    const date = new Date(question.timestamp);
    return (
      <div key={question.id}>
        <h3>{question.author}</h3>
        <p>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}
        ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</p>
        <button>Show</button>
      </div>
    );
  });
  return (
    <div className="dashbord">
      <h1>Dashbord</h1>
      <div className="dashbord-nav">
        <nav>
          <ul className="dashbord-ul">
            <li>
              <Link to={`/${user}`}>Home</Link>
            </li>
            <li>
              <Link to="/Leaderboard">Leaderboard</Link>
            </li>
            <li>
              <Link to="/PollCreation">New</Link>
            </li>
          </ul>
        </nav>
        <Link to="/">
          <img src={currentUser[0].avatarURL} width="40" />
          Login out
        </Link>
      </div>
      <section>
        <h1>New Question</h1>
        {questionEl}
      </section>
      <section>
        <h1>Done</h1>
        {doneQuestionEl}
      </section>
    </div>
  );
};

export default Dashbord;
