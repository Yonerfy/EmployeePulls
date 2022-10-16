import { configureStore } from "@reduxjs/toolkit";
import sliceData from "../features/sliceData";
import sliceUser from "../features/sliceUser";
import sliceQuestions from "../features/sliceQuestions";

export const store = configureStore({
  reducer: {
    data: sliceData,
    user: sliceUser,
    questions: sliceQuestions,
  },
});
