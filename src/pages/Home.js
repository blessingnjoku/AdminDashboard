import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../Components/Navbar'

function Home() {
    const [persons, setPersons]= useState([]);

 const getInfro = async()=>{
    await axios.get("http://localhost:3003/task")
    .then((response )=>{
        setPersons(response.data.reverse());
        console.log(persons)
    })

 }

    useEffect(()=>{
      
            getInfro();
       
    },[])

    function handleDelete(id){
        axios.delete(`http://localhost:3003/task/${id}`)
        .then(
          
            getInfro()

        )
    }


  return (
    <div>
    {/* <NavBar/> */}
    <div className='container'>
    <h1>Main page</h1>
    <table border={1} className='p-2 w-100 overflow-hidden mt-8'>
    <thead className=' bg-primary text-light'>
    <tr >
            <th>s/n</th>
            <th>Name</th>
            <th>Details</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
    </thead>
       
        <tbody >
        {persons.map((val, index)=>{
            return(

                <tr key={index}>
                <td>{index + 1}</td>
                <td>{val.name}</td>
                <td>{val.details}</td>
                <td>{val.email}</td>
              
                <td>
                    <Link to={`/employees${val.id}`} className='btn btn text-success m-4'>view</Link>
                    <Link  className='btn text-primary'>edit</Link>
                    <Link className='btn text-danger'onClick={()=>handleDelete(val.id)}>delete</Link>


                </td>


            </tr>
            
            )
            
           
            

        })}
           
        </tbody>
    </table>

    </div>
    </div>
  )
}

export default Home