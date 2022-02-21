import React from 'react';

function index() {
  return (
      <>
    {/* <div>exhibition</div> */}
    <div className='container mx-auto'>
    <section className='lg:px-10 xl:px-10 2xl:px-10 md:px-6 px-4 mt-24 pb-12 py-10 lg:mb-0 md:mb-0 mb-96' >
    <div className="">
          <h1 className="lg:text-6xl md:text-5xl text-4xl leading-10 text-gray-900 capitalize text-center mb-20">
          Upcoming Exhibitions
          </h1>
       </div>
        {/* end */}
        <div className='flex justify-between items-center py-12 relative'>
        <img className='object-cover pb-8 relative' src="./img/Exhibitions.png" />
          {/* we design future */}
        <div className='bg-gray-700 lg:w-[572px] md:w-[572px]   lg:h-[393px] md:h-[393px] p-2 lg:px-12 md:px-12 px-6 lg:py-8 md:py-8 py-8 rounded absolute lg:right-20 md:right-20 lg:mt-36 md:top-0 top-72 2xl:right-52'>
          <h1 className='font-normal lg:text-4xl md:text-4xl text-2xl text-white mb-4 '>Extra Space  </h1>
          <p className="lg:text-lg md:text-lg text-base leading-9 text-white mb-2">Nov 01 - 10 &nbsp;&nbsp;James Haul </p>
          <p className="lg:text-2xl md:text-2xl text-base text-white mb-2">Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem. Nullam sodales lorem libero, ut viverra diam suscipit et.  </p>
          <a href="" className="text-2xl font-bold underline text-white">Read More</a>

        </div>
        {/* end */}
        </div>
    </section>
    </div>
    </>
  );
}

export default index