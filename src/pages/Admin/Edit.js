import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate,Link } from 'react-router-dom'
const Edit=() =>{

  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [details, setDetails]=useState('')

  const {id} = useParams();
  const navigate=useNavigate()
  const getInfro = async()=>{
     await axios.get(`http://localhost:3003/task/${id}`)
     .then((response )=>{
      // to show the data in the edit box from the database for edit
         setName(response.data.name);
         setEmail(response.data.email);
         setDetails(response.data.details);


        //  console.log(name)
     })
 
  }
 
     useEffect(()=>{
      getInfro()
         
     },[]);
     const data={
      name:name,
      email:email,
      details:details,
    }
  const handleUpdate=(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:3003/task/${id}`, data)
    .then(
      navigate('/')
    )
  }

 
  return (
    <div>
    <form>
    <h1 className='mt-4'>Edit User</h1>
    
      <input value={name} onChange={(e)=>setName(e.target.value)} type='text' className='input w-50 p-2 m-2' Placeholder='please enter name'/>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' className='input w-50 p-2 m-2' Placeholder='please enter email'/>
      <input value={details}  onChange={(e)=>setDetails(e.target.value)} type='text' className='input w-50 p-2 m-2' placeholder='what you like'/><br></br>

      <button className='btn btn bg-warning' onClick={handleUpdate}>update change</button>



    </form>
    
    
    </div>
  )
}

export default Edit;