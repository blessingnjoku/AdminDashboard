import React, { useState } from 'react'

const AddUser=() =>{
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [number, setNumber]=useState('')


  return (
    <div>
    <form>
    <h1 className='mt-4'>Add User</h1>
    
      <input  type='text' className='input w-50 p-2 m-2' Placeholder='please enter name'/>
      <input  type='email' className='input w-50 p-2 m-2' Placeholder='please enter email'/>
      <input  type='tel' className='input w-50 p-2 m-2' placeholder='please enter phone number'/>



    </form>
    
    
    </div>
  )
}

export default AddUser;