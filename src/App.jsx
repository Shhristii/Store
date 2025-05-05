// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Services from "./components/Services";
// import Store from "./components/Store";

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/store" element={<Store />} />
//           <Route path="/produ" element={<Store />} />
          
//         </Routes>
        
    
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react'

const App = () => {
  const [show,setShow] = useState(false);

  return (
    <div>
{
  show && (
    <div className="box bg-amber-300 w-fit text-white p-2 flex flex-col justify-center items-center">
      <h1> Product Name : Laptop</h1>
      <h1> Title : Brand New Laptop</h1>
      <h1> Description : This is latest laptop in town.</h1>
    </div>
  )
}
<button className='bg-blue-500 p-2 rounded-lg ' onClick={() => setShow (!show)}>
   {
show ? "hide box" : "show box"
}
</button>
    </div>
  )
}

export default App
