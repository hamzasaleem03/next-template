import React from "react";

function index() {
  return (
    <>
      {/* <div>modern</div> */}
      <div className='container mx-auto'>
      <section className="lg:px-10 xl:px-10 2xl:px-10 md:px-6 px-4 pb-12 mb-12 lg:-mt-44 md:mt-0 mt-80">
        {/* main-heading */}
        <div className="lg:text-center md:text-center text-left pb-16 px-6">
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-normal text-gray-900 capitalize mb-8">
            What Happens here?
          </h1>
          <p className="text-2xl md:text-xl text-xl font-normal lg:leading-9 lg:text-center md:text-center text-left text-gray-600">
            Vestibulum placerat scelerisque turpis, ut laoreet erat varius ut.<br/>
            Phasellus eleifend vitae augue a accumsan. Sed eu semper lorem.
          </p>
        </div>
        {/* end */}
      {/* boxes-area */}
      <div className="lg:flex lg:flex-row md:flex md:flex-col justify-center items-center lg:gap-x-8  ">
        <div className="hover:shadow-xl px-8 py-8 transform duration-300 md:w-2/3">
          <h1 className="text-5xl leading-10 text-gray-900 capitalize font-normal text-left mb-8 ">Sleak</h1>
          <p className="text-2xl leading-9 text-gray-600 font-normal text-left ">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. 
                         Ac aliquam ac volutpat. </p>
        </div>
        <div className="hover:shadow-xl px-8 py-8 transform duration-300 md:w-2/3">
          <h1 className="text-5xl leading-10 text-gray-900 capitalize font-normal text-left mb-8">Modern</h1>
          <p className="text-2xl leading-9 text-gray-600 font-normal text-left">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. 
                       Ac aliquam ac volutpat. </p>
        </div>
        <div className="hover:shadow-xl px-8 py-8 transform duration-300 md:w-2/3">
          <h1 className="text-5xl leading-10 text-gray-900 capitalize font-normal text-left mb-8">Elegant</h1>
          <p className="text-2xl leading-9 text-gray-600 font-normal text-left">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac volutpat, viverra magna risus aliquam massa. 
                         Ac aliquam ac volutpat. </p>
        </div>
      </div>
      {/* end */}
      </section>
      </div>
    </>
  );
}

export default index;
