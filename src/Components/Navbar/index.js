import React from 'react'
import { Button, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function index() {
  return (
    <Navbar className='bg-dark p-2'>
    <div className='col'>
    <Link to='/'><h6 className='text-light'>logo</h6></Link>
    

    </div>
    <div className='col'><p className='text-light'> Company Employee Tacker</p></div>
  
    <div className='col'> <Link to='add-profile'><button className='btn btn bg-warning text-white'>Add Profile</button></Link></div>
       
    </Navbar>
  )
}

export default index