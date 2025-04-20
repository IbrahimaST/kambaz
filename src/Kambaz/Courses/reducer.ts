import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

type Course = {
    _id: string;
    name: string;
    number: string;
    description: string;
    startDate: string;
    endDate: string;
    department: string;
    credits: number;
  };
  

  const initialState: {
    courses: Course[];
    selectedCourse: Course | null;
  } = {
    courses: [],
    selectedCourse: null,
  };
  

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    addCourse: (state) => {
        const newCourse: Course = {
          _id: uuidv4(),
          name: "New Course",
          number: "CS101",
          description: "This is a new course.",
          startDate: "2025-01-01",
          endDate: "2025-06-01",
          department: "Computer Science",
          credits: 3,
        };
        state.courses.push(newCourse);
        state.selectedCourse = newCourse;
      },       
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter((c) => c._id !== action.payload);
    },
    updateCourse: (state, action) => {
      const updated = action.payload;
      const index = state.courses.findIndex((c) => c._id === updated._id);
      if (index !== -1) state.courses[index] = updated;
    },
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
  },
});


export const { 
    setCourses,
    addCourse,
    deleteCourse,
    updateCourse,
    setSelectedCourse, 
} = courseSlice.actions;

export default courseSlice.reducer;
