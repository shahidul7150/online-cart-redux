import React from 'react';

import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { useGetAllProductsQuery } from '../features/productsApi';

import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
const navigate=useNavigate()

  const handleAddToCart =(product) => {
      dispatch(addToCart(product));
      

      
    // setTimeout(() => {
    //     navigate("/cart")
    // }, 3000);
     
    //  second way 
    navigate("/cart")
    };
   
    
//   console.log(handleAddToCart);
  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading.....</p>
      ) : error ? (
        <p>An error occured...</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add To Cart
                </button>
              </div>
            ))}
            
                          </div>
                          
        </>
          )}
             

    </div>
  );
};

export default Home;
