import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Projects = () => {
  return (
    
  <div id='Projects'>
    <section className="text-gray-600 body-font bg-purple-300">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Hello It's My Projects
      </p>
    </div>
    <div className="flex flex-wrap -m-8">
        {/* projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../public/assests/projects/age.jpeg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Age Calculator Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Age Calculator
            </h1>
            <Link href={"https://age-calculator-eta-ten.vercel.app/"}>
            <p className="leading-relaxed">
              View My Projects..
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../public/assests/projects/todo.jpeg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              To-Do List Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              To-Do List
            </h1>
            <Link href={"https://to-do-list-zeta-lac-88.vercel.app/"}>
            <p className="leading-relaxed">
              View My Projects..
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../public/assests/projects/instagram.jpg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Instagram Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Instagram
            </h1>
            <Link href={"https://vercel.com/aqsa-mansoors-projects/instagram-page"}>
            <p className="leading-relaxed">
            View My Projects..
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../public/assests/projects/Building.jpeg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Building Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Building
            </h1>
            <p className="leading-relaxed">
              View My Projects..
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../public/assests/projects/R.jpeg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Letter Projects
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Letter
            </h1>
            <p className="leading-relaxed">
              View My Projects
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../public/assests/projects/taj mahal.jpeg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Taj Mahal Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Taj Mahal
            </h1>
            <p className="leading-relaxed">
              View My Project..
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </div>
  )
}

export default Projects
