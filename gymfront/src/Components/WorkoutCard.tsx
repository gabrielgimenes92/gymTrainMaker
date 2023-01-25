import React from 'react'

interface ExerciseProps {
  title: string;
  workout?: string[];
  setWorkout?: React.Dispatch<React.SetStateAction<string[]>>;
  count?: number;
  setCount?: React.Dispatch<React.SetStateAction<number>>;
}

export const WorkoutCard = ( {title, workout, setWorkout, count, setCount} : ExerciseProps ) => {
  return (
    <tr>
      <p>{title}</p>
      <input type="number" />
      <p>x</p>
      <input type="number" />
      <input type="number" />
      <button>Del</button>      
    </tr>
  )
}
