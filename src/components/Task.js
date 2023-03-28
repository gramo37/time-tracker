import React, { useState, useContext } from 'react'
import { BiCalendarEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import "../css/task.css"
import EditTaskModal from './EditTaskModal';
import { DataContext } from '../pages/Dashboard';

const Task = ({taskName, duration, showButton, id}) => {

  const [showEditProjectModal, setshowEditProjectModal] = useState(false)

  const {editTask, deleteTask} = useContext(DataContext)

  const deleteClicked = (e) => {
    e.preventDefault()
    deleteTask(id)
  }

  return (
    <>
      <div className='task-container'>
        {showEditProjectModal && <EditTaskModal id={id} editTask={editTask} toggleModal={() => setshowEditProjectModal(!showEditProjectModal)} />}
        <h3>{taskName}</h3>
        <h4>{duration}</h4>
        <div style={{opacity: showButton ? 1 : 0, pointerEvents: showButton ? "all" : "none"}} className='task-buttons-container'>
          <div className='edit-task-button' onClick={() => setshowEditProjectModal(!showEditProjectModal)}>
            <span className='edit-task-title'>Edit Task</span>
            <BiCalendarEdit size={30} color={"gray"} />
          </div>
          <div className='edit-task-button' onClick={deleteClicked}>
            <span className='edit-task-title'>Delete Task</span>
            <AiFillDelete size={30} color={"gray"} />
          </div>
        </div>
      </div>
    </>
  )
}

Task.defaultProps = {    
  taskName: "", 
  duration: "", 
  showButton: true
}

export default Task