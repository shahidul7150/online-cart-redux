import React from 'react';
import { useGetAllProductsQuery } from '../features/productsApi';

const Home = () => {
    const { data, error, isLoading } = useGetAllProductsQuery()
    console.log("Api ",isLoading);
    console.log("Data ",data);
    return (
        <div>
            <h2>Home</h2>
            <p>{data.length}</p>
            <p>{data[0].name}</p>
            <img src={data[0].image} alt="" />
        </div>
    );
};

export default Home;