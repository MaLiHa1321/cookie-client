import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';


const CheckOut = () => {
    const [order, setOrder] = useState([])
    const {user} = useContext(AuthContext)
    const url = `/booking?email=${user?.email}`
    const axiosSecure = useAxiosSecure()
    useEffect(()=>{
  
         axiosSecure.get(url)
         .then(res => {
          setOrder(res.data)
         })
         .catch(error => {
          console.error("Error fetching data:", error);
        });
    },[url,axiosSecure])
  
    return (
        <div>
            <h2>{order.length}</h2>

            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th>email</th>
      
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
   
      {
        order.map(data => <tr key={data._id}>
             <th >1</th>
        <td>{data.name}</td>
        <td>{data.price}</td>
        <td>{data.email}</td>
      
        </tr>

            )
      }

      
    
     
    
    
    </tbody>
  </table>
</div>

            
        </div>
    );
};

export default CheckOut;