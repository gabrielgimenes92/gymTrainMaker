import React, { useState, useEffect } from 'react'
import { ExerciseCard } from '../Components/ExerciseCard'
import { WorkoutCard } from '../Components/WorkoutCard'

import { exerciseLibrary } from '../Assets/Data/exercisesLibrary'
import { filters } from '../Assets/Data/filters'

type MainProps = {
    title: string,
    nav: Array<string>
}

interface Workout {
    workoutList: Array<string>
}

const listOfExercises = exerciseLibrary;
const filterTypes = filters;



export const Main = ({title, nav}: MainProps) => {
    const [workout, setWorkout] = useState<string[]>([])
    const [count, setCount] = useState(0);

    useEffect(() => {}, [count])

  return (
    <div className="main">
        <aside>
            {workout.length == 0 ? 
                <h2>Begin setting up a new workout!</h2> 
                :            
                <div>
                    <table>
                        <tr>
                            <th>NAME</th>
                            <th>SETS</th>
                            <th></th>
                            <th>REPS</th>
                            <th>LBS</th>
                            <th></th>
                        </tr>
                        {workout.map(exercise =>
                            <WorkoutCard 
                                title={exercise}
                            />)}
                    </table>
                    <button>Save</button>
                    <button onClick={() => setWorkout([])}>Clear</button>
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