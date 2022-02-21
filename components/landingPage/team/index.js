import React from 'react';

function index() {
  return (
      <>
        <div className='container mx-auto'>
    {/* <div>Team</div> */}

    <section className='lg:px-10 xl:px-10 2xl:px-10 md:px-6 px-4 mt-44 pb-12'>
    <div className="">
          <h1 className="lg:text-6xl md:text-5xl text-4xl leading-10 text-gray-900 capitalize text-center mb-8">
          Our Talented Team
          </h1>
          <p className="lg:text-2xl md:text-xl text-base leading-9 text-center text-gray-600">
            Dive into our projects from small businesses to <br /> Enterprise
            solutions. Record of delivering
          </p>
        </div>
        {/* end */}
        <div className='lg:flex lg:justify-center items-center lg:flex lg:flex-row md:flex md:flex-col gap-x-4 py-16 '>
                   <div className='lg:mb-0 md:mb-8 mb-8'>
              <img className='object-cover pb-8' src="./img/Rectangle 24.png" /> 
              <p className='lg:text-4xl md:text-4xl text-2xl font-medium leading-7 text-gray-700 capitalize text-center pb-6'>Josephine Sand </p>
              <p className='lg:text-4xl md:text-4xl text-2xl leading-9 text-gray-600  font-normal text-center'>sand.j@gmail.com</p>
              </div>
              <div className='lg:mb-0 md:mb-8 mb-8'>
              <img className='object-cover pb-8' src="./img/Rectangle 22.png" /> 
              <p className='lg:text-4xl md:text-4xl text-2xl  font-medium leading-7 text-gray-700 capitalize text-center pb-6'>Alex Bryan</p>
              <p className='lg:text-4xl md:text-4xl text-2xl  leading-9 text-gray-600  font-normal text-center'>bryan.a@gmail.com</p>
   
              </div>
              <div className=''>
                  <img className='object-cover pb-8' src="./img/Rectangle 25.png" /> 
                  <p className='lg:text-4xl md:text-4xl text-2xl font-medium leading-7 text-gray-700 capitalize text-center pb-6'>Jessica Stan</p>
                  <p className='lg:text-4xl md:text-4xl text-2xl leading-9 text-gray-600  font-normal text-center'>stan.a@gmail.com</p>
   
                  </div>
               </div>
               <div className="text-center py-12 ">
        <button className="text-2xl font-bold w-52 bg-gray-800 px-4 py-4 leading-normal text-center text-white uppercase hover:bg-gray-200 hover:text-gray-800 transform duration-300">View all</button>
        </div>
    </section>
    </div>
    </>
  );
}

export default index