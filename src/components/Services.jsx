import React from "react";

const cardItems=[
    {
        title : "Strategy",
        discription : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, iste!"
    },
    {
        title : "Branding",
        discription : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, iste!"
    },
    {
        title : "Development",
        discription : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, iste!"
    },{
        title : "Web Design",
        discription : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, iste!"
    },
    {
        title : "Social Media",
        discription : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, iste!"
    },{
        title : "E-Commerce",
        discription : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, iste!"
    },

]

const Card = () => {
  return (
    <div className="flex gap-5 flex-wrap px-40 justify-center items-center">
{cardItems.map((items,index)=>(

    <div key={index} className="gap-5 bg-gray-200 p-10 w-64 flex rounded-lg justify-center items-center">
<div className="flex flex-col space-y-6 justify-center items-center"><h1>{items.title}</h1><p className="text-center">{items.discription}</p></div>
    </div>
    ))}
    </div>
  )
}



const Services = () => {
  return (
    <div className=" space-y-6 flex flex-col justify-center items-center">
      <div className=" flex flex-col justify-center items-center space-y-4">
        {" "}
        <h1 className="font-bold text-3xl flex"> Our Services</h1>{" "}
        <p className="text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quis
          ipsa nulla, voluptas consectetur fugiat quo a animi quidem, unde eaque
          
        </p>
      </div>
      <div><Card/></div>
    </div>

  );
};

export default Services;
