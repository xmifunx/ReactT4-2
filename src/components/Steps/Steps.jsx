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

    const updateDistance = (workout) => {
        const dateIndex = workouts.findIndex(({ date }) => workout.date === date);
        const existedDate = workouts[dateIndex];
        const newWorkout = {
            ...existedDate,
            distance: Number(existedDate.distance) + Number(workout.distance)
        };
        const newWorkouts = [...workouts];
        newWorkouts[dateIndex] = newWorkout;
        setWorkouts(newWorkouts);
    }

    return (
        <div className="wrapper">
            <AddRecord addWorkout={addWorkout} updateDistance={updateDistance}/>
            <RecordsTable workouts={workouts} deleteWorkout={deleteWorkout} />
        </div>
    )
};
