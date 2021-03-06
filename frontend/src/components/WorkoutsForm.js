import React, { useState } from 'react'

const WorkoutsForm = () => {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [err, setErr] = useState(null)

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const workout = {title, load, reps}
        const response = await fetch('/api/workouts',{
            method :'POST',
            body : JSON.stringify(workout),
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json()
        if(!response.ok){
            setErr(json.error)
        }
        if(response.ok){
            setErr(null)
            console.log("new Workout Added");
            setTitle('')
            setLoad('')
            setReps('')
        }
    }

  return (
    <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>
        <label>Exercice Title:</label>
        <input type="text"
            onChange={(e)=>setTitle(e.target.value)}
            value = {title}
         />
        <label>Load in (KG):</label>
        <input type="number"
            onChange={(e)=>setLoad(e.target.value)}
            value = {load}
         />
        <label>Reps:</label>
        <input type="number"
            onChange={(e)=>setReps(e.target.value)}
            value = {reps}
         />
         <button>Add Workout</button>
         {err && <div className='error'>{err}</div>}
    </form>
  )
}

export default WorkoutsForm