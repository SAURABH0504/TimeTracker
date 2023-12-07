import { createSlice } from "@reduxjs/toolkit";
import { ColorValue } from "react-native";
import { COLORS } from "../../color";

interface Project{
  title: String,
  trackedTime: number,
  isCurrent: boolean,
  dotColor: ColorValue
}

export interface ProjectsState {
  projects: Project[];
}

const initialState: ProjectsState = {
  projects: [
  {
    title: "UI UX Design",
    trackedTime: 0,
    dotColor: COLORS.ORANGE,
    isCurrent: false,
  },
  {
    title: "Brainstorming",
    trackedTime: 0,
    dotColor: COLORS.ORANGE,
    isCurrent: false,
  },
  {
    title: "Web development",
    trackedTime: 0,
    dotColor: COLORS.ORANGE,
    isCurrent: false,
  },
],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      return { ...state, projects: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
