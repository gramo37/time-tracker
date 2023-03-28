import React, {useState} from 'react'
import "../css/modal.css"
import { AiFillCloseCircle } from 'react-icons/ai';

const AddProjectModal = ({toggleModal, addProject}) => {

  const [projectName, setProjectName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addProject(projectName)
    toggleModal()
  }

  const handleChange = (e) => {
    setProjectName(e.target.value)
  }

  return (
      <div className='modal-container'>
      <div className='modal-close-button' onClick={toggleModal}><AiFillCloseCircle size={40}/></div>
        <form className='modal-form-container'>
          <input className='modal-input' placeholder='Enter Project Name' onChange={handleChange} value={projectName}/>
          <button className='modal-button' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
  )
}

export default AddProjectModal