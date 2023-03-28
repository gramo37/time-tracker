import React, { useState } from 'react'
import "../css/modal.css"
import { AiFillCloseCircle } from 'react-icons/ai';

const AddTaskModal = ({ toggleModal, addTask, id }) => {

    const [task, setTask] = useState({
        name: "",
        duration: ""
      })

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(id, task)
        toggleModal()
      }
    
      const handleChange = (e) => {
        e.preventDefault()
        setTask({ ...task, [e.target.name]: e.target.value })
      }

  return (
    <div className='modal-container'>
      <div className='modal-close-button' onClick={toggleModal}><AiFillCloseCircle size={40} /></div>
      <form className='modal-form-container' onChange={handleChange}>
        <input className='modal-input' placeholder='Enter Task Name' name="name" />
        <input className='modal-input' placeholder='Duration' name="duration" />
        <button onClick={handleSubmit} className='modal-button'>Submit</button>
      </form>
    </div>
  )
}

export default AddTaskModal