import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';



const SingleData = () => {
    const singleData = useLoaderData()
    const {user} = useContext(AuthContext)
    const email = user?.email;
    const axiosSecure = useAxiosSecure()



    const {name,photo,price,} = singleData

    const handleOrder = () =>{
        const order ={name,photo,price,email}

       const url ='/booking'
     
       axiosSecure.post(url,order)
       .then(res =>console.log(res.data))

         
        
        


        // fetch('http://localhost:5000/booking',{
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(order)
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))

        


    }


    return (
        <div>
            <img src={photo} alt="" />
            <h3>{name}</h3>
            <button className='btn btn-primary' onClick={handleOrder}>Order</button>

            
        </div>
    );
};

export default SingleData;