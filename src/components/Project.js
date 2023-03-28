import React, { useContext, useState } from 'react'
import Task from './Task'
import { GrAddCircle } from 'react-icons/gr';
import "../css/project.css"
import { DataContext } from '../pages/Dashboard';
import AddTaskModal from './AddTaskModal';

const Project = ({ projectName, tasks, id }) => {

  const { addTask } = useContext(DataContext)

  const [showEditTaskModal, setShowEditTaskModal] = useState(false)

  return (
    <div className='project-container'>
      {showEditTaskModal && <AddTaskModal toggleModal={() => setShowEditTaskModal(!showEditTaskModal)} addTask={addTask} id={id} />}
      <div className='project-left'>
        <h1>{projectName}</h1>
      </div>
      <div className='project-right'>
        {Object.entries(tasks).length !== 0 && <div>
          <Task taskName="Task Name" duration="Time Spent" showButton={false} />
          {Object.entries(tasks).map((item) => {
            const [key, value] = item
            return <Task projectId={id} key={key} id={key} taskName={value?.name} duration={value?.duration} />
          })}
        </div>}
        <div className='edit-task-button' onClick={() => setShowEditTaskModal(!showEditTaskModal)}>
          <span className='edit-task-title'>Add Task</span>
          <GrAddCircle size={30} color={"gray"} />
        </div>
      </div>
    </div>
  )
}

export default Project