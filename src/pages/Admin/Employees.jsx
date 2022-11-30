import React,{useState,useEffect}  from 'react'
import { Link, useParams}from 'react-router-dom';
import axios from 'axios';


const Employees=() =>{
  const [users, setUsers]= useState([]);

  const getUser = async()=>{
     await axios.get(`http://localhost:3003/task/${id}`)
     .then((response )=>{
         setUsers(response.data);
         console.log(users)
     })
 
  }
 
     useEffect(()=>{
         getUser();
         
     },[]);
const {id} = useParams()

  return (
    <div className='container' ><h1>Employees</h1>
    {users &&(
<>
  <div className='w-100 bg-light d-flex justify-content-around align-items-start' >
  <div> 
  <h3>Name:</h3>
  <h3>Email:</h3>
  <h3>Bio:</h3>

  </div>
  <div>
  <p>{users.name}</p>
  <p>{users.email}</p>
  <p>{users.details}</p>

  
  </div>
 

  
  </div>
</>

    )}
    
    <Link to="/"><h3>Back to Home</h3></Link>
    </div>
  )
}

export default Employees;