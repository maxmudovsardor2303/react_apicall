import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Albums = () => {
  const [albums,setAlbums] = useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/albums").then(response=>{
      console.log(response)
      setAlbums(response.data)
    })
  },[])
  return (
    <div className='albums'>
      <h1 className='text-center my-3'>Albums</h1>
     <table className='table table-bordered table-hover table-striped'>
      <thead>
        <tr>
          <th>UserId</th>
          <th>id</th>
          <th>title</th>
          
          
        </tr>
      </thead>
      <tbody>
        {
          albums.map((item,index)=>(
            <tr key={index}>
            <td>{item.UserId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            
            
            </tr>
          ))
        }
      </tbody>
     </table>
    </div>
  )
}

export default Albums
