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
    },
    {
        title: "Exercise A"
    },
    {
        title: "Exercise B"
    },
    {
        title: "Exercise C"
    },
    {
        title: "Exercise D"
    },
    {
        title: "Exercise E"
    },
]

const filterTypes = [
    {
        filterType: "Arms"
    },
    {
        filterType: "Legs"
    },
    {
        filterType: "Chest"
    },
    {
        filterType: "Back"
    },
    {
        filterType: "Core"
    },
    {
        filterType: "Other"
    },
]



export const Main = ({title, nav}: MainProps) => {
    const [workout, setWorkout] = useState<string[]>([])
    const [count, setCount] = useState(0);

    useEffect(() => {}, [count])

  return (
    <div className="main">
        <aside>
            {workout.length == 0 ? <h2>Begin setting up a new workout!</h2> : 
            
                <div>
                    <p>
                        {workout.join(', ')}
                    </p>
                    <button onClick={() => setWorkout([])}>Clear list</button>
                </div>
            }
        </aside>
        <div className="exerciseLibrary">
            <div className="libraryHeader">
                <div className="filter">
                    <ul>
                    {filterTypes.map(type => 
                        <li>
                            <a href='#'>
                                <p>{type.filterType}</p>
                            </a>
                        </li>)
                    }
                    </ul>
                </div>
                <div className="search">
                    <form action="">
                        <input type="text" />
                        <button>Search</button>
                    </form>
                </div>
            </div>
            
            <h1>Exercise Library</h1>

            <div className="listOfExercises">
                {listOfExercises.map(exercise => 
                    <ExerciseCard
                        title={exercise.title}
                        workout={workout} 
                        setWorkout={setWorkout}
                        count={count} 
                        setCount={setCount}
                    />)}
            </div>
        </div>
    </div>
  )
}