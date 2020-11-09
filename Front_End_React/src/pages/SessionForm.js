import React from 'react'
import useForm from './useSessionForm'
import './FormFormat.css'

export const Form = () => {
  const {handleChange, values} = useForm();

  return (
    <div className="form-content-right">
      <form className="form">
        <h1>Create New Session</h1>
        <div className="form-inputs">
          <label htmlFor="sessionName" className="form-label">
            Session Name:
          </label>
          <input type="text" name="sessionName" className="form-input" placeholder="Enter a session name" value={values.sessionName} onChange={handleChange}></input>    
        </div>
        <div className="form-inputs">
          <label htmlFor="speaker" className="form-label">
            Speaker: 
          </label>
          <select name="speaker" className="form-input" value={values.speaker} onChange={handleChange}>
            <option selected disabled value="">-- select --</option>   
            <option value="mark">Mark Zuckerberg</option>
          </select>
        </div>
        <div className="form-inputs">
          <label htmlFor="timeslot" className="form-label">
            Timeslot: 
          </label>
          <select name="timeslot" className="form-input" value={values.timeslot} onChange={handleChange}>
            <option selected disabled value="">-- select --</option>   
            <option value="8am">08:00 AM</option>
          </select>
        </div>
        <div className="form-inputs">
          <label htmlFor="room" className="form-label">
            Room:
          </label>
          <select name="room" className="form-input" value={values.room} onChange={handleChange}>
            <option selected disabled value="">-- select --</option>   
            <option value="rm203">203</option>
          </select>
        </div>
        <button className='form-input-btn' type='submit'>
          Add New Session
        </button>
        <button className='form-input-btn' type='submit'>
          Cancel
        </button>
      </form>
    </div>
  )
}