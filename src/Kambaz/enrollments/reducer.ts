import { createSlice } from "@reduxjs/toolkit";

type Enrollment = {
  user: string;
  course: string;
};

const initialState: Enrollment[] = [];

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, action) => {
      const { userId, courseId } = action.payload;
      if (!state.find((e) => e.user === userId && e.course === courseId)) {
        state.push({ user: userId, course: courseId });
      }
    },
    unenroll: (state, action) => {
      const { userId, courseId } = action.payload;
      return state.filter((e) => !(e.user === userId && e.course === courseId));
    },
  },
});

export const { enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
