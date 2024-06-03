// import "./cars.css";
// import { useState } from "react";
// // import UserModal from "../../components/modal";
// import { NavLink } from "react-router-dom";

// const Cars = () => {
//   const [cars, setCars] = useState([]);
//   // const [modal, setModal] = useState(false);
//   const [search, setSearch] = useState("")
//   return (
//     <>
//       {/* <UserModal open={modal} toggle ={()=>setModal(false)} cars={cars} setCars={setCars} /> */}
//       <div className="container">
//         <div className="row mt-3">
//           <div className="col-md-10 offset-1">
//             <div className="row">
//               <div className="col-4">
//                 <button className="btn btn-success" onClick={()=>setModal(true)}>
//                   Open Modal
//                 </button>
//               </div>
//               <div className="col-8">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="form-control"
//                   onChange={(e)=>setSearch(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row mt-3">
//           <table className="table table-bordered table-hover table-stiped">
//             <thead>
//               <tr>
//                 <td>T/R</td>
//                 <td>Name</td>
//                 <td>Price</td>
//                 <td>Year</td>
//                 <td>Color</td>
//                 <td>Brand</td>
//                 <td>Action</td>
//               </tr>
//             </thead>
//             <tbody>
//               {
//               cars.filter((item)=>{
//                 if(item?.name?.toLowerCase().includes(search.toLocaleLowerCase())){
//                     return item
//                 }
//               }).map((item, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{item.name}</td>
//                   <td>{item.price}</td>
//                   <td>{item.year}</td>
//                   <td>{item.color}</td>
//                   <td>{item.brand}</td>
//                   <td>
//                     <div className="d-flex gap-2">
//                       <button className="btn btn-warning">
//                         <i className="fa-solid fa-user-pen"></i>
//                       </button>
//                       <button className="btn btn-danger">
//                         <i className="fa-solid fa-trash"></i>
//                       </button>
//                       <NavLink to={`/main/single-car/${item.id}`} className="btn btn-primary">
//                       <span><i className="fa-solid fa-eye"></i></span>
//                       </NavLink>
//                       </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cars

import React, { useEffect, useState } from 'react'

import axios from 'axios'

const Index = () => {
  // get,post, put,patch, delete
  const [users,setUsers] = useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
      console.log(response)
      setUsers(response.data)
    })
  },[])
  return (
    <div className='users'>
      <h1 className='text-center my-3'>Users</h1>
     <table className='table table-bordered table-hover table-striped'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Username</th>
          <th>Addess</th>
          <th>Company name</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((item,index)=>(
            <tr key={index}>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{item.username}</td>
            <td>{item.address.city}</td>
            <td>{item.company.name}</td>
            </tr>
          ))
        }
      </tbody>
     </table>
    </div>
  )
}

export default Index




