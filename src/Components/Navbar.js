import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <h1>This is the navbar</h1>
        <Link to="/" >About</Link>
        <Link to="projects" >Projects</Link>
        <Link to="api" >Api</Link>

    </div>
  )
}

export default Navbar;