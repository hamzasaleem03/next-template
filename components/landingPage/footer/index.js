import React from 'react';

function index() {

  return (
    <>
    {/* <div>Footer</div> */}
    <footer className=' mt-24 '>
    <div className="pt-2 bg-gray-700 lg:px-10 xl:px-10 2xl:px-10 md:px-6 px-4 " >

  <div className="container border-b border-white px-5 py-4 pt-12 mx-auto mb-4  ">
    <div className=" lg:flex lg:flex-row flex flex-col md:text-left text-center justify-between lg:items-start items-start ">
      <div className=" lg:w-1/3 lg:pb-0 pb-8">
      
      <svg width="165" height="31" viewBox="0 0 165 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.88 17.2C5.88 22.3467 6.16 26.4533 6.72 29.52C5.86667 29.84 4.96 30 4 30C3.04 30 2.2 29.6933 1.48 29.08C0.786667 28.4667 0.44 27.6267 0.44 26.56C0.44 25.4667 0.573333 23.4133 0.84 20.4C1.10667 17.3867 1.24 15.0533 1.24 13.4C1.24 9.32 0.96 5.38667 0.4 1.6C2.37333 1.76 5.02667 1.84 8.36 1.84C11.6933 1.84 14.88 1.6 17.92 1.12C18.24 1.70666 18.4 2.41333 18.4 3.24C18.4 4.04 18.08 4.76 17.44 5.4C16.8267 6.01333 16.0533 6.32 15.12 6.32C14.2133 6.32 12.7467 6.18667 10.72 5.92C8.72 5.65333 7.24 5.52 6.28 5.52C6.06667 8.42667 5.93333 11.0933 5.88 13.52C7.42667 13.68 9.13333 13.76 11 13.76C12.8933 13.76 14.5333 13.48 15.92 12.92C16.24 13.5067 16.4 14.2133 16.4 15.04C16.4 15.84 16.08 16.5733 15.44 17.24C14.8267 17.88 14.0933 18.2 13.24 18.2C12.3867 18.2 11.16 18.04 9.56 17.72C7.96 17.3733 6.73333 17.2 5.88 17.2ZM37.7741 11.16C37.0541 14.2267 36.6941 17.3067 36.6941 20.4C36.6941 23.4667 37.0407 26.5067 37.7341 29.52C36.7741 29.84 35.7874 30 34.7741 30C33.7607 30 33.0541 29.7067 32.6541 29.12C32.2541 28.5067 32.0541 27.64 32.0541 26.52C32.0541 25.3733 32.2274 23.8133 32.5741 21.84C30.6807 25.8933 28.8541 28.4533 27.0941 29.52C26.2941 30 25.4674 30.24 24.6141 30.24C22.5874 30.24 21.0141 29.4933 19.8941 28C18.7741 26.48 18.2141 24.6 18.2141 22.36C18.2141 18.9467 19.1607 15.96 21.0541 13.4C22.9474 10.8133 25.4007 9.52 28.4141 9.52C31.4541 9.52 34.5741 10.0667 37.7741 11.16ZM32.5341 13.56C31.1207 13.1333 29.9207 12.92 28.9341 12.92C26.9341 12.92 25.4407 13.36 24.4541 14.24C23.5474 16.48 23.0941 18.76 23.0941 21.08C23.0941 22.3067 23.2807 23.5467 23.6541 24.8C24.0541 26.0533 24.6541 26.68 25.4541 26.68C26.3874 26.68 27.5874 25.3067 29.0541 22.56C30.5207 19.8133 31.6807 16.8133 32.5341 13.56ZM41.2909 28.6C41.9043 23.2933 42.2109 19.64 42.2109 17.64C42.2109 12.04 41.9843 6.32 41.5309 0.479999C42.3309 0.159998 43.1843 -2.38419e-06 44.0909 -2.38419e-06C44.9976 -2.38419e-06 45.7709 0.306664 46.4109 0.919998C47.0509 1.53333 47.3709 2.30666 47.3709 3.24C47.3709 4.84 47.2109 7.4 46.8909 10.92C46.5709 14.4133 46.3709 16.7467 46.2909 17.92C48.4776 13.8133 50.6509 11.2533 52.8109 10.24C53.7709 9.76 54.7976 9.52 55.8909 9.52C57.3843 9.52 58.5309 10.3067 59.3309 11.88C60.1576 13.4533 60.5709 15.3733 60.5709 17.64C60.5709 21.2667 59.5843 24.28 57.6109 26.68C55.6376 29.0533 53.0776 30.24 49.9309 30.24C46.8109 30.24 43.9309 29.6933 41.2909 28.6ZM46.0909 26.08C47.1576 26.48 48.4243 26.68 49.8909 26.68C51.3576 26.68 52.6243 26.4 53.6909 25.84C54.9976 23.6 55.6509 21.16 55.6509 18.52C55.6509 17.2667 55.5043 16.0533 55.2109 14.88C54.9176 13.68 54.4509 13.08 53.8109 13.08C52.8243 13.08 51.5309 14.44 49.9309 17.16C48.3309 19.88 47.0509 22.8533 46.0909 26.08ZM65.4291 3.88C66.2824 3.45333 67.1491 3.24 68.0291 3.24C68.9091 3.24 69.6157 3.52 70.1491 4.08C70.7091 4.64 70.9891 5.46667 70.9891 6.56C70.9891 7.65333 70.9224 8.89333 70.7891 10.28C72.7891 10.28 74.6957 10 76.5091 9.44C76.8291 9.97333 76.9891 10.6 76.9891 11.32C76.9891 12.0133 76.6691 12.5867 76.0291 13.04C75.4157 13.4667 74.7891 13.68 74.1491 13.68C73.5091 13.68 72.7891 13.6 71.9891 13.44C71.1891 13.28 70.6691 13.1867 70.4291 13.16C70.4024 13.4 70.3224 13.88 70.1891 14.6C70.0824 15.32 69.9891 15.9467 69.9091 16.48C69.6957 17.9467 69.5891 19.52 69.5891 21.2C69.5891 24.8533 70.7757 26.68 73.1491 26.68C74.0291 26.68 75.0424 26.3733 76.1891 25.76C76.5357 26.2667 76.7091 26.92 76.7091 27.72C76.7091 28.52 76.2691 29.1467 75.3891 29.6C74.5357 30.0267 73.5091 30.24 72.3091 30.24C67.6157 30.24 65.2691 27.5733 65.2691 22.24C65.2691 21.4667 65.3757 20.0667 65.5891 18.04C65.8291 16.0133 65.9491 14.3733 65.9491 13.12C64.6691 13.2 63.6424 13.4267 62.8691 13.8C62.5491 13.32 62.3891 12.7733 62.3891 12.16C62.3891 11.52 62.6157 11 63.0691 10.6C63.5224 10.1733 64.0824 9.96 64.7491 9.96C65.4157 9.96 65.8557 9.97333 66.0691 10C66.0957 9.78667 66.1091 9.50667 66.1091 9.16C66.1091 7.16 65.8824 5.4 65.4291 3.88ZM83.2503 20.92C83.2503 22.84 83.557 24.36 84.1703 25.48C84.7836 26.5733 85.8103 27.12 87.2503 27.12C88.6903 27.12 89.8103 26.64 90.6103 25.68C91.437 24.6933 91.8503 23.5067 91.8503 22.12C92.757 22.12 93.5436 22.3467 94.2103 22.8C94.877 23.2533 95.2103 23.88 95.2103 24.68C95.2103 26.3333 94.3303 27.72 92.5703 28.84C90.8103 29.9333 88.957 30.48 87.0103 30.48C83.9703 30.48 81.7703 29.6667 80.4103 28.04C79.0503 26.3867 78.3703 23.9467 78.3703 20.72C78.3703 17.4933 79.277 14.7867 81.0903 12.6C82.9303 10.3867 85.3703 9.28 88.4103 9.28C90.4903 9.28 92.157 9.76 93.4103 10.72C94.6903 11.6533 95.3303 13.12 95.3303 15.12C95.3303 17.0933 94.4236 18.5867 92.6103 19.6C90.8236 20.5867 88.637 21.08 86.0503 21.08C85.1436 21.08 84.2103 21.0267 83.2503 20.92ZM83.2903 17.76C84.0903 17.92 84.9303 18 85.8103 18C87.7303 18 89.3436 17.64 90.6503 16.92C90.8103 16.28 90.8903 15.7733 90.8903 15.4C90.8903 14.4667 90.557 13.76 89.8903 13.28C89.2236 12.8 88.3036 12.56 87.1303 12.56C85.9836 12.56 84.9436 12.9333 84.0103 13.68C83.5303 15.0667 83.2903 16.4267 83.2903 17.76ZM104.983 29.52C104.157 29.84 103.277 30 102.343 30C101.41 30 100.65 29.7867 100.063 29.36C99.5034 28.9067 99.2234 28.2933 99.2234 27.52C99.2234 26.72 99.3434 25.28 99.5834 23.2C99.8234 21.12 99.9434 19.1067 99.9434 17.16C99.9434 15.1867 99.6368 12.88 99.0234 10.24C99.8768 9.92 100.717 9.76 101.543 9.76C102.37 9.76 103.077 10.04 103.663 10.6C104.277 11.16 104.583 11.9067 104.583 12.84C104.583 13.32 104.503 14.04 104.343 15C104.183 15.9333 104.09 16.64 104.063 17.12C105.103 14.7467 106.33 12.8933 107.743 11.56C109.183 10.2 110.61 9.52 112.023 9.52C113.01 9.52 113.797 9.86667 114.383 10.56C114.97 11.2533 115.263 12.1333 115.263 13.2C115.263 14.24 114.997 15.0933 114.463 15.76C113.93 16.4 113.263 16.72 112.463 16.72C111.69 16.72 111.063 16.64 110.583 16.48C110.663 16.16 110.703 15.8667 110.703 15.6C110.703 14.5067 110.317 13.96 109.543 13.96C108.37 13.96 107.263 15.1467 106.223 17.52C105.21 19.8667 104.53 22.0667 104.183 24.12C104.317 26.12 104.583 27.92 104.983 29.52ZM117.545 10.12C118.398 9.88 119.251 9.76 120.105 9.76C120.985 9.76 121.731 10.0267 122.345 10.56C122.958 11.0933 123.265 11.7867 123.265 12.64C123.265 13.4667 123.118 14.92 122.825 17C122.558 19.0533 122.425 20.6533 122.425 21.8C122.425 24.7867 122.705 27.36 123.265 29.52C122.438 29.84 121.545 30 120.585 30C119.625 30 118.865 29.7867 118.305 29.36C117.745 28.9067 117.465 28.2667 117.465 27.44C117.465 26.5867 117.625 25.2 117.945 23.28C118.265 21.36 118.425 19.7733 118.425 18.52C118.425 15.1867 118.131 12.3867 117.545 10.12ZM118.065 1.08C118.998 0.653332 119.918 0.439999 120.825 0.439999C121.731 0.439999 122.398 0.679999 122.825 1.16C123.278 1.61333 123.505 2.29333 123.505 3.2C123.505 4.10667 123.198 4.90667 122.585 5.6C121.998 6.29333 121.225 6.64 120.265 6.64C118.291 6.64 117.305 5.61333 117.305 3.56C117.305 2.65333 117.558 1.82666 118.065 1.08ZM134.86 30.48C131.927 30.48 129.767 29.6267 128.38 27.92C126.993 26.1867 126.3 23.7867 126.3 20.72C126.3 17.6267 127.22 14.9467 129.06 12.68C130.9 10.4133 133.26 9.28 136.14 9.28C142.06 9.28 145.02 12.6133 145.02 19.28C145.02 22.4 144.06 25.0533 142.14 27.24C140.22 29.4 137.793 30.48 134.86 30.48ZM131.98 13.68C131.5 15.2267 131.26 16.7733 131.26 18.32C131.26 19.8667 131.313 21.0667 131.42 21.92C131.527 22.7733 131.727 23.6267 132.02 24.48C132.633 26.2133 133.833 27.08 135.62 27.08C137.433 27.08 138.62 26.6 139.18 25.64C139.767 24.68 140.06 23.2 140.06 21.2C140.06 15.52 138.713 12.68 136.02 12.68C134.473 12.68 133.127 13.0133 131.98 13.68ZM154.046 29.52C153.219 29.84 152.339 30 151.406 30C150.473 30 149.713 29.7867 149.126 29.36C148.566 28.9067 148.286 28.2933 148.286 27.52C148.286 26.72 148.406 25.28 148.646 23.2C148.886 21.12 149.006 19.1067 149.006 17.16C149.006 15.1867 148.699 12.88 148.086 10.24C148.939 9.92 149.779 9.76 150.606 9.76C151.433 9.76 152.139 10.04 152.726 10.6C153.339 11.16 153.646 11.9067 153.646 12.84C153.646 13.32 153.566 14.04 153.406 15C153.246 15.9333 153.153 16.64 153.126 17.12C154.166 14.7467 155.393 12.8933 156.806 11.56C158.246 10.2 159.673 9.52 161.086 9.52C162.073 9.52 162.859 9.86667 163.446 10.56C164.033 11.2533 164.326 12.1333 164.326 13.2C164.326 14.24 164.059 15.0933 163.526 15.76C162.993 16.4 162.326 16.72 161.526 16.72C160.753 16.72 160.126 16.64 159.646 16.48C159.726 16.16 159.766 15.8667 159.766 15.6C159.766 14.5067 159.379 13.96 158.606 13.96C157.433 13.96 156.326 15.1467 155.286 17.52C154.273 19.8667 153.593 22.0667 153.246 24.12C153.379 26.12 153.646 27.92 154.046 29.52Z" fill="white"/>
                  </svg>

      </div>
    
      <div className="w-full lg:flex lg:justify-between lg:flex lg:flex-row flex flex-col items-start cursor-pointer ">
       {/* for large */}
       <div className="w-1/4 lg:block  hidden lg:leading-10 leading-6 list-none  lg:text-left text-left cursor-pointer" >
            <h2 className="title-font font-bold  text-white tracking-widest lg:text-lg text-xl mb-3">Top Products</h2>
            <nav className="list-none mb-10">
              <li>
                <a className=" text-base font-light leading-none text-left text-white capitalize">Chairs</a>
              </li>
              <li>
                <a className=" text-base font-light leading-none text-left text-white capitalize ">Tables</a>
              </li>
              <li>
                <a className="text-base font-light leading-none text-left text-white capitalize">Vase</a>
              </li>
              <li>
                <a className=" text-base font-light leading-none text-left text-white capitalize ">Plants</a>
              </li>
            </nav>
        </div>
        
          <div className="w-1/4 lg:block hidden   lg:leading-10 leading-6 list-none  lg:text-left text-left cursor-pointer" >
            <h2 className="title-font font-bold  text-white tracking-widest lg:text-lg text-xl mb-3">Services</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-base font-light leading-none text-left text-white capitalize">Chairs</a>
              </li>
              <li>
                <a className="text-base font-light leading-none text-left text-white capitalize ">Tables</a>
              </li>
            
            </nav>
          </div>
       {/* end */}
        <div className='flex justify-between items-center lg:hidden block'>
        <div className="w-1/4  lg:leading-10 leading-6 list-none  lg:text-left text-left cursor-pointer" >
            <h2 className="title-font font-bold  text-white tracking-widest lg:text-lg text-xl mb-3">Top Products</h2>
            <nav className="list-none mb-10">
              <li>
                <a className=" text-base font-light leading-none text-left text-white capitalize">Chairs</a>
              </li>
              <li>
                <a className=" text-base font-light leading-none text-left text-white capitalize ">Tables</a>
              </li>
              <li>
                <a className="text-base font-light leading-none text-left text-white capitalize">Vase</a>
              </li>
              <li>
                <a className=" text-base font-light leading-none text-left text-white capitalize ">Plants</a>
              </li>
            </nav>
        </div>
        
          <div className="w-1/4   lg:leading-10 leading-6 list-none  lg:text-left text-left cursor-pointer" >
            <h2 className="title-font font-bold  text-white tracking-widest lg:text-lg text-xl mb-3">Services</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-base font-light leading-none text-left text-white capitalize">Chairs</a>
              </li>
              <li>
                <a className="text-base font-light leading-none text-left text-white capitalize ">Tables</a>
              </li>
            
            </nav>
          </div>
          </div>
          {/* new */}
          {/* for large */}
          <div className="w-1/4 lg:block hidden   lg:leading-10 leading-6 list-none  lg:text-left text-left relative z-10 cursor-pointer" >
            <h2 className="title-font font-bold  text-white tracking-widest lg:text-lg text-xl mb-3">Projects</h2>
            <nav className="list-none mb-10 ">
                <li>
                    <a className="text-base font-light leading-none text-left text-white capitalize">Chairs</a>
                  </li>
                  <li>
                    <a className="text-base font-light leading-none text-left text-white capitalize ">Tables</a>
                  </li>
                  <li>
                    <a className=" text-base font-light leading-none text-left text-white capitalize ">Vase</a>
                  </li>
                
            </nav>
          </div>
          <div className="w-1/4 lg:block hidden  lg:leading-10 leading-6 list-none  lg:text-left text-center  cursor-pointer" >
        <h2 className="title-font font-bold  text-white tracking-widest lg:text-lg text-xl mb-3">Exhibitions</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-base font-light leading-none text-left text-white capitalize">Chairs</a>
          </li>
          <li>
            <a className=" text-base font-light leading-none text-left text-white capitalize">Tables</a>
          </li>
         
        </nav>
    </div>
          {/* end */}
          <div className='flex justify-between items-center lg:hidden block'>
          <div className="w-1/4   lg:leading-10 leading-6 list-none  lg:text-left text-left relative z-10 cursor-pointer" >
            <h2 className="title-font font-bold  text-white tracking-widest lg:text-lg text-xl mb-3">Projects</h2>
            <nav className="list-none mb-10 ">
                <li>
                    <a className="text-base font-light leading-none text-left text-white capitalize">Chairs</a>
                  </li>
                  <li>
                    <a className="text-base font-light leading-none text-left text-white capitalize ">Tables</a>
                  </li>
                  <li>
                    <a className=" text-base font-light leading-none text-left text-white capitalize ">Vase</a>
                  </li>
                
            </nav>
          </div>
          <div className="w-1/4  lg:leading-10 leading-6 list-none  lg:text-left text-center  cursor-pointer" >
        <h2 className="title-font font-bold  text-white tracking-widest lg:text-lg text-xl mb-3">Exhibitions</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-base font-light leading-none text-left text-white capitalize">Chairs</a>
          </li>
          <li>
            <a className=" text-base font-light leading-none text-left text-white capitalize">Tables</a>
          </li>
         
        </nav>
    </div>
    </div>
          {/* new */}
    <div className="lg:w-1/4 md:w-1/4 w-full   lg:leading-10 leading-6 list-none  lg:text-left text-left cursor-pointer relative" >
        <h2 className="title-font font-bold  text-white tracking-widest lg:text-lg text-xl mb-8">NEWSLETTER</h2>
        <nav className="list-none mb-10 border border-white ">
          <input className='bg-gray-700 md:w-full lg:w-full w-full h-12 text-white lg:px-8 px-4 md:px-2 py-1 relative' type="text" placeholder="Email Adress" />
        </nav>
    <div className='absolute lg:-right-12 md:-right-6 right-0 top-[60px]'>
        <button className='w-12  bg-white py-[17px]'><svg className='ml-3' width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.785156 7.85693H24.7852" stroke="#334048" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.9282 14.7141L24.7854 7.85693" stroke="#334048" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.9282 1L24.7854 7.85714" stroke="#334048" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</button>   
</div>
      </div>
      </div>

      
     
    
      
    </div>
  </div>


  <div className=' p-4 flex justify-between lg:flex lg:flex-row flex flex-col  items-center'>
<p class="text-base tracking-wide leading-none text-center text-white capitalize p-2">Copyright @2020 All rights reserved</p>
<div className='flex justify-end items-center '>
<svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2356_99)">
<path d="M6.57471 9.58333V13.4167H9.10102V20.125H12.4694V13.4167H14.9958L15.8379 9.58333H12.4694V7.66667C12.4694 7.4125 12.5582 7.16875 12.7161 6.98902C12.874 6.8093 13.0882 6.70833 13.3115 6.70833H15.8379V2.875H13.3115C12.1948 2.875 11.1239 3.37983 10.3343 4.27845C9.54463 5.17706 9.10102 6.39584 9.10102 7.66667V9.58333H6.57471Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2356_99">
<rect width="20.2105" height="23" fill="white" transform="translate(0.680176)"/>
</clipPath>
</defs>
</svg>
&nbsp;&nbsp;
<svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2356_105)">
<path d="M14.2068 4H7.46998C5.60966 4 4.10156 5.79086 4.10156 8V16C4.10156 18.2091 5.60966 20 7.46998 20H14.2068C16.0672 20 17.5752 18.2091 17.5752 16V8C17.5752 5.79086 16.0672 4 14.2068 4Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.8383 15C12.2336 15 13.3646 13.6569 13.3646 12C13.3646 10.3431 12.2336 9 10.8383 9C9.44308 9 8.31201 10.3431 8.31201 12C8.31201 13.6569 9.44308 15 10.8383 15Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6274 7.5V7.501" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2356_105">
<rect width="20.2105" height="24" fill="white" transform="translate(0.73291)"/>
</clipPath>
</defs>
</svg>
&nbsp;&nbsp;
<svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2356_102)">
<path d="M19.3113 4.01001C18.4692 4.50001 17.644 4.69901 16.785 5.00001C15.841 3.73501 14.4414 3.66501 13.0966 4.26301C11.7518 4.86101 10.8709 6.32301 10.8903 8.00001V9.00001C8.15766 9.08301 5.72398 7.60501 4.15345 5.00001C4.15345 5.00001 0.631764 12.433 7.52187 16C5.94545 17.247 4.37324 18.088 2.46924 18C5.25492 19.803 8.29071 20.423 10.9189 19.517C13.9337 18.477 16.4111 15.794 17.3619 11.775C17.6455 10.5527 17.7863 9.28987 17.7804 8.02201C17.7787 7.77301 19.052 5.25001 19.3113 4.00901V4.01001Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2356_102">
<rect width="20.2105" height="24" fill="white" transform="translate(0.785156)"/>
</clipPath>
</defs>
</svg>

</div>
</div>
</div>

    </footer>
    </>
  );
}

export default index