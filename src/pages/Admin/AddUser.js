import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUser=() =>{
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [details, setDetails]=useState('')
  const data={
    name:name,
    email:email,
    details:details,
  }
const navigate = useNavigate()
const handleSubmit=(e)=>{
  e.preventDefault()
  axios.post('http://localhost:3003/task', data)
  .then(
  navigate('/')
  )
}

  return (
    <div>
    <form>
    <h1 className='mt-4'>Add User</h1>
    
      <input value={name} onChange={(e)=>setName(e.target.value)} type='text' className='input w-50 p-2 m-2' Placeholder='please enter name'/>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' className='input w-50 p-2 m-2' Placeholder='please enter email'/>
      <input value={details}  onChange={(e)=>setDetails(e.target.value)} type='text' className='input w-50 p-2 m-2' placeholder='what you like'/><br></br>

      <button className='btn btn bg-warning' onClick={handleSubmit}>Add</button>



    </form>
    
    
    </div>
  )
}

export default AddUser;