import React, { useEffect, useState } from 'react'

// components:
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutsForm from '../components/WorkoutsForm'

const Home = () => {

    const [workouts, setWorkouts] = useState(null)

    useEffect(()=>{
        const fetchWorkout = async () =>{
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok){
                setWorkouts(json)
            }
        }
        fetchWorkout()
    },[])
  return (
    <div className='home'>
        <div className='workouts'>
            {workouts && workouts.map((workout)=>{
                return <WorkoutDetails workout={workout} />
            })}
        </div>
        <WorkoutsForm />
    </div>
  )
}

export default Home