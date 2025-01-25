import Questions from "./Pages/Home/Questions";
import QuizSummary from "./Pages/Home/QuizSummary";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { quizComplete } = useAppSelector((state) => state.quiz);
  return (
    <div className="">
      <h1 className="text-center text-9xl my-12">Quiz App</h1>
      {!quizComplete ? <Questions /> : <QuizSummary />}
    </div>
  );
}

export default App;
