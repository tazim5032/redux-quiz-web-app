import { Button } from "@/components/ui/button";
import {
  completeQuiz,
  nextQuestion,
  previousQuestion,
} from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function QuizControl() {
  const { question, currentQuestionIndex, userAnswers } =
    useAppSelector((state) => state.quiz);

  const isAnswerSelected = userAnswers[currentQuestionIndex] !== null;

  const dispatch = useAppDispatch();

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };

  const handlePreviousQuestion = () => {
    dispatch(previousQuestion());
  };

  const handleCompleteQuiz = () => {
    dispatch(completeQuiz());
  };

  const isCompleteQuiz =
    isAnswerSelected || currentQuestionIndex !== question.length - 1;

  return (
    <div className="flex justify-between mt-4 space-x-4">
      <Button
        disabled={currentQuestionIndex === 0}
        onClick={handlePreviousQuestion}
      >
        Previous
      </Button>
      {currentQuestionIndex < question.length - 1 && (
        <Button disabled={!isAnswerSelected} onClick={handleNextQuestion}>
          Next
        </Button>
      )}
      {currentQuestionIndex === question.length - 1 && (
        <Button disabled={!isCompleteQuiz} onClick={handleCompleteQuiz}>
          Complete Quiz
        </Button>
      )}
    </div>
  );
}
