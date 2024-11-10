import React from "react";
import Image from "next/image";
 import Link from "next/link"

const Hero = () => {
  return (
    
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am
              <br className="hidden lg:inline-block" />
             Web Developer & <br /> Graphic Designer
            </h1>
            <div className="w-[150px] h-[2px] bg-purple-500"></div>
            <p className="mb-8 leading-relaxed">
              Detail-oriented and innovative web developer with expertise in
              HTML, CSS, JavaScript, and front-end frameworks. Seeking to
              leverage strong problem-solving skills and creativity to build
              responsive, user-friendly websites and applications. Passionate
              about learning new technologies and contributing to dynamic teams
              to deliver high-quality digital experiences.
            </p>
            <div className="flex justify-center">
               <Link href={"#Contact"}> 
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                
                Contact

              </button>
              </Link> 
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto w-[15rem]"
              alt="hero"
              width={500}
              height={500}
              src={require('../../public/assests/pic/profile.jpg')}
            />
          </div>
        </div>
      </section>
    
  );
};

export default Hero;
