import React from 'react'
import useForm from './useTimeslotForm'
import './FormFormat.css'

export const Form = () => {
  const {handleChange, values} = useForm();

  return (
    <div className="form-content-right">
      <form className="form">
        <h1>Create New Timeslot</h1>
        <div className="form-inputs">
          <label htmlFor="timeslotName" className="form-label">
            Name:
          </label>
          <input type="text" name="timeslotName" className="form-input" placeholder="Enter a timeslot name" value={values.timeslotName} onChange={handleChange}></input>    
        </div>
        <div className="form-inputs">
          <label htmlFor="startTime" className="form-label">
            Enter a Start Time: 
          </label>
          <input type="time" name="startTime" className="form-input" min="09:00" max="18:00" value={values.startTime} onChange={handleChange}></input>   
        </div>
        <div className="form-inputs">
          <label htmlFor="endTime" className="form-label">
            Enter an End Time: 
          </label>
          <input type="time" name="endTime" className="form-input" min="09:00" max="18:00" value={values.endTime} onChange={handleChange}></input>
        </div>
        <button className='form-input-btn' type='submit'>
          Add New Timeslot
        </button>
        <button className='form-input-btn' type='submit'>
          Cancel
        </button>
      </form>
    </div>
  )
}