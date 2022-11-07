import { useNavigate } from "react-router-dom";

const PollQuestion = ({
  userToArray,
  questionsToArray,
  authorName,
  questionId,
}) => {
  const navigate = useNavigate();
  const findUser = userToArray.filter((user) => user.id === authorName);
  const authorQuestion = questionsToArray
    .filter((question) => question.author === authorName)
    .find((question) => question.id === questionId);
  const user = findUser[0];
  const handlerQuestionAnswer = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Poll by {user.id}</h1>
      <img src={user.avatarURL} width={200} />
      <h2>Would You rather</h2>
      <div>
        {authorQuestion.optionOne.text}
        <button onClick={handlerQuestionAnswer}>click</button>
      </div>
      <div>
        {authorQuestion.optionTwo.text}
        <button onClick={handlerQuestionAnswer}>click</button>
      </div>
    </div>
  );
};

export default PollQuestion;
