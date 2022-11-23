import React, { useState } from "react";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish course" },
    { id: "cg2", text: "RA work" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    //setCourseGoals([...courseGoals, newGoal]);
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h2>Course goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
