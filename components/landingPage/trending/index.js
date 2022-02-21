import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function index() {
  return (
    <>
   <div className='container mx-auto'>
      {/* <div>trending products</div> */}
      <section className="lg:px-10 xl:px-10 2xl:px-10 md:px-6 px-4 py-12 relative md:block lg:block block">
        <img className="absolute -z-10 lg:right-10 md:right-10 right-2 lg:w-[485px] md:w-[485px] w-[300px;]" src="./img/Rectangle 43.png" />

        <div className="flex items-center justify-between">
          <div className="flex justify-between items-center  relative right-0 lg:top-60 md:top-44">
            <div className="">
              <h1 className="lg:text-6xl md:text-5xl font-normal  text-gray-900 capitalize">
                Trending <br /> Products
              </h1>
            </div>
          </div>
        </div>
        {/* flex end */}
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={155}
          totalSlides={5}
          visibleSlides={3}
        >
          <Slider>
            <Slide index={0}>
              <div className="flex justify-end items-center gap-x-8">
                <div className="">
                  <img
                    className="object-cover pb-8"
                    src="./img/Rectangle 44.png"
                  />
                  <p className="text-4xl font-medium leading-7 text-gray-700 capitalize text-center pb-6">
                    Study lamp{" "}
                  </p>
                  <p className="text-4xl leading-9 text-gray-600 capitalize font-normal text-center">
                    $45
                  </p>
                </div>
              </div>
            </Slide>
            <Slide index={1} >
              <div className="flex justify-end items-center  ">
                <div className="">
                  <img
                    className="object-cover pb-8"
                    src="./img/Rectangle 45.png"
                  />
                  <p className="text-4xl font-medium leading-7 text-gray-700 capitalize text-center pb-6">
                    Flower Vase
                  </p>
                  <p className="text-4xl leading-9 text-gray-600 capitalize font-normal text-center">
                    $45
                  </p>
                </div>
              </div>
            </Slide>
            <Slide index={2}>
              <div className="flex justify-end items-center ">
                <div className="">
                  <img
                    className="object-cover pb-8"
                    src="./img/Rectangle 49.png"
                  />
                  <p className="text-4xl font-medium leading-7 text-gray-700 capitalize text-center pb-6">
                    Stylish Chair
                  </p>
                  <p className="text-4xl leading-9 text-gray-600 capitalize font-normal text-center">
                    $45
                  </p>
                </div>
              </div>
            </Slide>
            <Slide index={3}>
              <div className="flex justify-end items-center ">
                <div className="">
                  <img
                    className="object-cover pb-8"
                    src="./img/Rectangle 45.png"
                  />
                  <p className="text-4xl font-medium leading-7 text-gray-700 capitalize text-center pb-6">
                    Flower Vase
                  </p>
                  <p className="text-4xl leading-9 text-gray-600 capitalize font-normal text-center">
                    $45
                  </p>
                </div>
              </div>
            </Slide>
            <Slide index={4}>
              <div className="flex justify-end items-center">
                <div className="">
                  <img
                    className="object-cover pb-8"
                    src="./img/Rectangle 44.png"
                  />
                  <p className="text-4xl font-medium leading-7 text-gray-700 capitalize text-center pb-6">
                    Study lamp{" "}
                  </p>
                  <p className="text-4xl leading-9 text-gray-600 capitalize font-normal text-center">
                    $45
                  </p>
                </div>
              </div>
            </Slide>
          </Slider>

          <ButtonBack className="w-16 h-16 border-gray-600 border ml-8">
            <svg
              className="ml-4"
              width="34"
              height="20"
              viewBox="0 0 34 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.333 10.0482H0.666339"
                stroke="#334048"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 19.2973L0.666671 9.96399"
                stroke="#334048"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 0.630615L0.666671 9.96395"
                stroke="#334048"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </ButtonBack>
          <ButtonNext className="w-16 h-16 border-gray-600 border ml-6">
            <svg
              className="ml-4"
              width="34"
              height="20"
              viewBox="0 0 34 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666504 9.96399H33.3332"
                stroke="#334048"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24 19.2973L33.3333 9.96399"
                stroke="#334048"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24 0.630615L33.3333 9.96395"
                stroke="#334048"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </ButtonNext>
        </CarouselProvider>
      </section>
      </div>
      
    </>
  );
}

export default index;
