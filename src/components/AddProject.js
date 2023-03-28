import React from 'react'
import { GrAddCircle } from 'react-icons/gr';
import "../css/addProject.css"

const AddProject = ({toggleModal}) => {
  return (
    <div className='add-project-button' onClick={toggleModal}>
        <span className='add-project-title'>Add Project</span>
        <GrAddCircle size={50}/>
    </div>
  )
}

export default AddProject