import React from 'react'
import { projects } from '../data'

const Projects = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={project.id}>
          <div className="project" >{project.name}</div>
          <div className="project" >{project.description}</div>
        </ div>

      ))}
    </div>
  )
}

export default Projects