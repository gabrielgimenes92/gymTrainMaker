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
    <div className='exerciseCard'>
        { isCollapsed ? 
            <div>
                <h2>{title}</h2>
                <img src='https://picsum.photos/200'/>
                <button onClick={() => setIsCollapsed(false)}>Less</button>
                <button onClick={() => handleAdd()}>Add</button>
            </div>
        : 
            <div>
                <h2>{title}</h2>
                <button onClick={() => setIsCollapsed(true)}>More</button>
                <button onClick={() => handleAdd()}>Add</button>
            </div>
        }
    </div>
  )
}