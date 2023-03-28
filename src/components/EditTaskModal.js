import React, { useState, useContext } from 'react'
import "../css/modal.css"
import { AiFillCloseCircle } from 'react-icons/ai';
import { DataContext } from '../pages/Dashboard';

const EditTaskModal = ({ toggleModal, editTask, projectId, id }) => {

  const {data} = useContext(DataContext)

  const [task, setTask] = useState({
    name: data[projectId][id].name,
    duration: data[projectId][id].duration
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    editTask(projectId, id, task)
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
        <input className='modal-input' placeholder='Enter Task Name' name="name" value={task?.name} />
        <input className='modal-input' placeholder='Duration' name="duration" value={task?.duration} />
        <button onClick={handleSubmit} className='modal-button'>Submit</button>
      </form>
    </div>
  )
}

export default EditTaskModal