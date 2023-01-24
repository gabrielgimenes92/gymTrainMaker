import React, { useState, useEffect } from 'react'
import { ExerciseCard } from '../Components/ExerciseCard'

type MainProps = {
    title: string,
    nav: Array<string>
}

interface Workout {
    workoutList: Array<string>
}

const listOfExercises = [
    {
        title: "Biceps curl"
    },
    {
        title: "Leg curl"
    },
    {
        title: "Triceps extension"
    }
]



export const Main = ({title, nav}: MainProps) => {
    const [workout, setWorkout] = useState<string[]>([])
    const [count, setCount] = useState(0);

    useEffect(() => {}, [count])

  return (
    <header>
        <div>
            <p>----------------------</p>
            {workout.length == 0 ? <p>Begin setting up a new workout!</p> : <p>{workout.join(', ')}</p>}
            <p>----------------------</p>
        </div>
        <div>This page is the main</div>
        {listOfExercises.map(exercise => 
            <ExerciseCard
                title={exercise.title}
                workout={workout} 
                setWorkout={setWorkout}
                count={count} 
                setCount={setCount}
            />)}

        
    </header>
  )
}