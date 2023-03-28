import React from 'react'
import Task from './Task'
import "../css/project.css"

const Project = ({projectName, tasks}) => {
  return (
    <div className='project-container'>
        <div className='project-left'>
            <h1>{projectName}</h1>
        </div>
        <div className='project-right'>
            <div>
              <Task taskName="Task Name" duration="Time Spent" showButton={false}/>
              {Object.entries(tasks).map((item) => {
                const [key, value] = item
                return <Task key={key} id={key} taskName={value?.name} duration={value?.duration}/>
              })}
            </div>
        </div>
    </div>
  )
}

export default Project