import { configureStore } from "@reduxjs/toolkit";

import sliceUser from "../features/sliceUser";
import sliceQuestions from "../features/sliceQuestions";

export const store = configureStore({
  reducer: {
    user: sliceUser,
    questions: sliceQuestions,
  },
});
