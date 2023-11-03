import React from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {

    const loaderData = useLoaderData();
  
    const {name,photo,price,_id} = loaderData;
    return (
        <div>
        <Banner></Banner>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {
                loaderData.map(product => <div key={product._id} className="card w-78 border border-gray-400 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={product.photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{product.name}</h2>
                  <p>price: {product.price}</p>
                  <div className="card-actions">
                    <Link to={`/SingleData/${product._id}`}>
                    <button className="btn btn-primary">Buy Now</button>
                    </Link>
                  </div>
                </div>
              </div>)
            }
        </div>
            
        </div>
    );
};

export default Home;