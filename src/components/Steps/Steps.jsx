import "../../App.css";
import { useState } from "react";
import AddRecord from '../AddRecord/AddRecord.jsx';
import RecordsTable from '../RecordsTable/RecordsTable.jsx';
import { sortByDate } from "../SortByDate/SortByDate.jsx";

export default function Steps() {
    const [workouts, setWorkouts] = useState([]);

    const addWorkout = (workout) => {
        workout.id = workouts.length + 1;
        setWorkouts([...workouts, workout].sort(sortByDate));
    };

    const deleteWorkout = (id) => {
        setWorkouts(workouts.filter((i) => i.id !== id));
    };

    return (
        <div className="wrapper">
            <AddRecord addWorkout={addWorkout} />
            <RecordsTable workouts={workouts} deleteWorkout={deleteWorkout} />
        </div>
    )
};
