import React from 'react'
import { Button, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function index() {
  return (
    <Navbar className='bg-success p-2'>
    <div className='col'>
    <h6 >logo</h6>

    </div>
    <div className='col'><p>Company Employee Tacker</p></div>
  
    <div className='col'> <Link to='add-profile'><button className='btn btn bg-primary text-white'>Add Profile</button></Link></div>
       
    </Navbar>
  )
}

export default index