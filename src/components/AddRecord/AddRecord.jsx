import React from "react";
import { useState } from "react";
import { isValidDate } from "../ValidDate/ValidDate.jsx";
import { isValidDistance } from "../ValidDistance/ValidDistance.jsx"

export default function AddRecord({ addWorkout, updateDistance }) {
    const initialFormState = { id: null, date: "", distance: "" };
    const [workout, setWorkout] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.currentTarget;
        setWorkout({ ...workout, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!workout.date || !workout.distance) {
            return alert("Необходимо заполнить все поля!");
        } else if (isValidDate(workout.date) === false) {
            return alert("Дата введена в неправильном фомате! Корректный формат: дд.мм.гггг");
        } else if (isValidDistance(workout.distance) === false) {
            return alert("Дистанция введена в неправильном формате! Корректный формат: 2.1 км либо 2 км");
        } else {
            setWorkout(initialFormState);
            addWorkout(workout);
            updateDistance(workout);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="title">
                <span className="title-date">Дата (ДД.ММ.ГГ)</span>
                <span className="title-distance">Пройдено км</span>
            </div>
            <input
                type="text"
                name="date"
                value={workout.date}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="distance"
                value={workout.distance}
                onChange={handleInputChange}
            />
            <button className="add-workout">OK</button>
        </form>
    );
}
