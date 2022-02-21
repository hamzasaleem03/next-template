import React from 'react';

function index() {
  return (
      <>
    {/* <div>Gallery</div> */}
    <div className='container mx-auto'>
    <section className='lg:px-10 xl:px-10 2xl:px-10 md:px-6 px-4'>
        <div className='lg:flex lg:justify-center items-center lg:flex lg:flex-row md:flex md:flex-col gap-x-8'>
        <div className="lg:w-[445px] md:w-[445px] lg:mb-0 md:mb-0 mb-4 ml-2  border border-gray-900 px-8 py-6 lg:-mt-4 lg:hidden block md:mb-8">
            <h1 className="text-4xl  text-gray-900 capitalize text-left mb-4 ">
            About Us
            </h1>
            <p className="text-xl text-left text-gray-600 mb-8">
            Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem. 
            </p>
              <a href="" className="text-2xl font-bold leading-normal underline text-gray-700">Know More </a>
          </div>
        <img className='object-cover pb-8 lg:mt-24 ' src="./img/Rectangle 27.png" />
        <img className='object-cover pb-8 ' src="./img/Rectangle 28.png" />
        </div>
        {/* end */}
        <div className='lg:flex lg:justify-center items-center lg:flex lg:flex-row md:flex md:flex-col gap-x-8'>
        <div className="w-[445px] ml-2  border border-gray-900 px-8 py-6 lg:-mt-4 lg:block hidden">
            <h1 className="text-4xl  text-gray-900 capitalize text-left mb-4 ">
            About Us
            </h1>
            <p className="text-xl text-left text-gray-600 mb-8">
            Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut. Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem. 
            </p>
              <a href="" className="text-2xl font-bold leading-normal underline text-gray-700">Know More </a>
          </div>
          <div className=''>
          <img className='object-cover pb-8 lg:-mt-28 lg:pl-4' src="./img/Rectangle 26.png" />
          </div>
          </div>
          {/* end */}
    </section>
    </div>
    </>
  );
}

export default index