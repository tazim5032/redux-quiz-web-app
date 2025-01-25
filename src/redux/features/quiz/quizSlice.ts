import { createSlice } from "@reduxjs/toolkit";
// import type { RootState } from '../../store'
import { quizData } from "@/Pages/Home/QuizData";

interface TQuiz {
  question: typeof quizData;
  currentQuestionIndex: number;
  userAnswers: (string | null)[];
  quizComplete: boolean;
}

const initialState: TQuiz = {
  question: quizData,
  currentQuestionIndex: 0,
  userAnswers: Array(quizData.length).fill(null),
  quizComplete: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      //console.log(questionIndex,answer)
      state.userAnswers[questionIndex] = answer;
    },

    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.question.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },

    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },

    completeQuiz: (state) =>{
      state.quizComplete = true;
    }
  },
});

export const { setAnswer, nextQuestion, previousQuestion, completeQuiz } = quizSlice.actions;

export default quizSlice.reducer;
