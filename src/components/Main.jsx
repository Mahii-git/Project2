import React from 'react';
const Main = () => {
  return (
    <main>
      <div className="absolute inset-0 bg-cover bg-center"
     style={{backgroundImage:"url('https://www.ubereats.com/_static/c413f20400e04805.webp')"}} >
<div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
    <h1 className="text-5xl font-bold text-black ">Deliveries near you </h1>
    <div class="mt-4">
                <input type="text" placeholder="Enter delivery address" class="p-2 m-2 w-110  bg-white font-semibold text-black focus:outline-none"/>
                <select class="px-4 py-2 bg-white text-black font-semibold">
                    <option class="text-black font-semibold">Deliver Now</option>
                    <option class="text-black font-semibold">Plan for later</option>
                </select> 
                <button class="px-4 py-2 m-2 bg-black text-white rounded-full font-bold">Find Food</button>
                </div>
                <p class="mt-2 text-white-500">Or
                <a href="#" class="m-2 underline">Log in</a>
            </p>
  </div>
  </div>
    </main>
  );
};

export default Main;
