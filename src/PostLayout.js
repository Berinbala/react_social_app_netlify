import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <>
        <Link to="/postpage/1">Post 1</Link>
        <br></br>
        <Link to="/postpage/2">Post 2</Link>
        <br></br>
        <Link to="/postpage/3">Post 3</Link>
        <br />
        <Link to="/postpage/newpost">Newpost</Link>
        <Outlet />
    </> 
  )
}

export default PostLayout