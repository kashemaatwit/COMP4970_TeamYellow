import React from 'react'
import useForm from './useRoomForm'
import './FormFormat.css'

export const Form = () => {
  const {handleChange, values} = useForm();

  return (
    <div className="form-content-right">
      <form className="form">
        <h1>Create New Room</h1>
        <div className="form-inputs">
          <label htmlFor="roomName" className="form-label">
            Room Name:
          </label>
          <input type="text" name="roomName" className="form-input" placeholder="Enter a room name" value={values.roomName} onChange={handleChange}></input>    
        </div>
        <div className="form-inputs">
          <label htmlFor="capacity" className="form-label">
            Capacity:
          </label>
          <input type="number" name="capacity" className="form-input" min="0" value={values.capacity} onChange={handleChange}></input>
        </div>
        <button className='form-input-btn' type='submit'>
          Add New Room
        </button>
        <button className='form-input-btn' type='submit'>
          Cancel
        </button>
      </form>
    </div>
  )
}