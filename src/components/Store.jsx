import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []) ;

  return (
    <div className="flex flex-wrap gap-6 justify-center px-4 md:px-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-md p-5 w-72 flex flex-col items-center space-y-4"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-40 object-contain"
          />
          <h1 className="font-bold text-center">{item.title}</h1>
          <p className="text-sm text-gray-600 text-center">
            {item.description.substring(0, 100)}...
          </p>
          <span > <button className="p-2 bg-blue-500 rounded text-white font-bold cursor-pointer">Add to Cart</button></span>
        </div>
      ))}
    </div>
  );
};

const Store = () => {
  return (
    <div className="space-y-10 flex flex-col items-center py-10 px-4">
      <div className="text-center space-y-4 max-w-2xl">
        <h1 className="text-3xl font-bold">Our Store</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quis
          ipsa nulla, voluptas consectetur fugiat quo a animi quidem, unde
          eaque.
        </p>
      </div>
      <Card />
    </div>
  );
};

export default Store;
