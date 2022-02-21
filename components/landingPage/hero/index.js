import React from "react";
// import headImage from "../../../public/img/";

function index() {
  return (
    <>
      {/* <div>hero</div> */}
      <div className='container mx-auto'>
      <section className="lg:px-10 xl:px-10 2xl:px-10 md:px-6 px-4 pb-8 mx-auto mt-4 mb-16 md:mb-72 relative ">
        {/* forcorner-box */}
        <div className='absolute lg:top-[-20px] lg:left-[21%] 2xl:left-[34%]'>
          <img className='' src="./img/Rectangle 40.png"/>
        </div>
        {/* end */}
        
        <div className="flex justify-end items-center relative">
          {/* image-area-hero */}
        <div className='relative '>
          {/* <Image src={headImage} className=" " alt="image" /> */}
          <img className=' w-full object-cover' src="./img/Mask Group.png" />

        </div>
        {/* end */}
        </div>
        {/* flex justify-end items-center */}
        {/* we design future */}
        <div className='bg-gray-700 w-[80%] p-4 lg:px-12 md:px-12 px-4 lg:py-12 md:py-12 py-4 lg:w-[714px] md:w-[600px] absolute lg:top-44 z-10 lg:left-8 2xl:left-60 2xl:top-52 md:top-96 top-60 md:left-24 left-10 rounded'>
          <h1 className='font-normal lg:text-8xl md:text-8xl text-2xl text-white mb-8 '>We Design <br/> your Future  </h1>
          <p className="lg:text-2xl md:text-2xl texl-xl lg:leading-9 md:leading-9 text-white mb-8">Vestibulum placerat scelerisque turpis, ut  laoreet erat varius ut. Phasellus eleifend vitae <br/> augue a accumsan. Sed eu semper lorem. </p>
          <button className="lg:text-2xl md:text-2xl text-xl font-bold lg:w-52 md:w-52 w-44 bg-gray-800 px-4 py-4 leading-normal text-center text-white uppercase hover:bg-white hover:text-gray-800 transform duration-300  ">Get IN TOUCH</button>
        </div>
        {/* end */}
       <div className="lg:block hidden w-28 h-28 bg-gray-700 absolute lg:right-20 lg:bottom-[-10px] 2xl:-bottom-20 2xl:right-16 2xl:bottom-0">
       <svg className="mt-8 ml-8" width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 10.9639V38.9639" stroke="white" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36 26.9639L24 38.9639" stroke="white" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 26.9639L24 38.9639" stroke="white" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

         </div>        
      </section>
      </div>
    </>
  );
}

export default index;
