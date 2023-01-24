import React, { useState, Dispatch, SetStateAction, useEffect } from 'react'

    
interface ExerciseProps {
    title: string;
    workout: string[];
    setWorkout: React.Dispatch<React.SetStateAction<string[]>>;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const ExerciseCard = ( {title, workout, setWorkout, count, setCount} : ExerciseProps ) => {
    const [isCollapsed, setIsCollapsed] = useState(false)


    function handleAdd() {
        let prevArray = workout;
        prevArray.push(title);
        setWorkout(prevArray);
        setCount(count + 1);
    }

  return (
    <div>
        { isCollapsed ? 
            <div>
                <h2>This exercise is called {title}</h2>
                <img src='https://picsum.photos/200'/>
                <p>Hey, I'm not collapsed anymore!</p>
                <button onClick={() => setIsCollapsed(false)}>Less</button>
                <button onClick={() => handleAdd()}>Add</button>
            </div>
        : 
            <div>
                <h2>This exercise is called {title}</h2>
                <p>Hey, I'm collapsed</p>
                <button onClick={() => setIsCollapsed(true)}>More</button>
                <button onClick={() => handleAdd()}>Add</button>
            </div>
        }
    </div>
  )
}