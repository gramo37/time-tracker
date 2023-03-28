import React, { useState, createContext } from 'react'
import AddProject from '../components/AddProject'
import AddProjectModal from '../components/AddProjectModal'
import Project from '../components/Project'
import ProjectTitle from '../components/ProjectTitle'
import data from '../data/data.json'

export const DataContext = createContext()

const Dashboard = () => {

  const [showAddProjectModal, setshowAddProjectModal] = useState(false)

  function deleteTask(taskId) {
    console.log("delete", taskId)
  }
  
  function editTask(taskId, task) {
    console.log("edit", taskId, task)
  }
  
  function addProject(project) {
    console.log("add project", project)
  }

  console.log(data)

  return (
    <DataContext.Provider value={{data, deleteTask, editTask, addProject}}>
      <div>
        {showAddProjectModal && <AddProjectModal addProject={addProject} toggleModal={() => setshowAddProjectModal(!showAddProjectModal)} />}
        <ProjectTitle />
        <div className='projects-container'>
          {Object.entries(data).map((item) => {
            const [key, value] = item
            return <Project projectName={key} tasks={value} />
          })}
        </div>
        <AddProject toggleModal={() => setshowAddProjectModal(!showAddProjectModal)}/>
      </div>
    </DataContext.Provider>
  )
}

export default Dashboard