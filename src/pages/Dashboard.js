import React, { useState, createContext, useEffect } from 'react'
import AddProject from '../components/AddProject'
import AddProjectModal from '../components/AddProjectModal'
import Project from '../components/Project'
import ProjectTitle from '../components/ProjectTitle'

export const DataContext = createContext()

const Dashboard = () => {

  const [showAddProjectModal, setshowAddProjectModal] = useState(false)

  const [data, setData] = useState({})

  function deleteTask(taskId, projectId) {
    let temp = data[projectId]
    delete temp[taskId];
    setData({ ...data, [`${projectId}`]: { ...temp } })
  }

  function editTask(projectId, taskId, task) {
    let temp = data[projectId]
    setData({ ...data, [`${projectId}`]: { ...temp, [`${taskId}`]: task } })
  }

  function addTask(projectId, task) {
    let temp = data
    let uuid = Math.random().toString(36).slice(2);
    temp[projectId][`task${uuid}`] = task
    setData(temp)
  }

  function addProject(project) {
    if (data.hasOwnProperty(project)) return
    const temp = {}
    temp[project] = {}
    setData({ ...data, ...temp })
  }

  return (
    <DataContext.Provider value={{ data, deleteTask, editTask, addProject, addTask }}>
      <div>
        {showAddProjectModal && <AddProjectModal addProject={addProject} toggleModal={() => setshowAddProjectModal(!showAddProjectModal)} />}
        <ProjectTitle />
        <div className='projects-container'>
          {Object.entries(data).map((item) => {
            const [key, value] = item
            return <Project projectName={key} tasks={value} id={key} />
          })}
        </div>
        <AddProject toggleModal={() => setshowAddProjectModal(!showAddProjectModal)} />
      </div>
    </DataContext.Provider>
  )
}

export default Dashboard