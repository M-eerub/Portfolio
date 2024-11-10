import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { DiIllustrator } from "react-icons/di";
import { SiCoreldraw } from "react-icons/si";
import { CiCircleCheck } from "react-icons/ci";



const Skills = () => {
  return (
    <div id='skills'>
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
        SKILLS
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
      {/* skills */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <FaHtml5 className='text-2xl font-bold' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'></div>
            <p className='font-bold text-purple-500 text-right'>
              92%  
            </p>
          </div>
        </div>
      </div>
      {/* skills */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <FaCss3Alt className='text-2xl font-bold' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'></div>
            <p className='font-bold text-purple-500 text-right'>
              95%
            </p>
          </div>
        </div>
      </div>
 {/* skills */}
 <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <DiIllustrator className='text-2xl font-bold' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Adobe Illustrator
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'></div>
            <p className='font-bold text-purple-500 text-right'>
              98%
            </p>
          </div>
        </div>
      </div>
{/* skills */}
<div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <DiPhotoshop className='text-2xl font-bold' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Adobe Photoshop
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'></div>
            <p className='font-bold text-purple-500 text-right'>
              96%
            </p>
          </div>
        </div>
      </div>
      {/* skills */}
<div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <SiCoreldraw className='text-2xl font-bold' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Corel Draw
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'></div>
            <p className='font-bold text-purple-500 text-right'>
              89%
            </p>
          </div>
        </div>
      </div>
  {/* skills */}
  <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <CiCircleCheck  className='text-2xl font-bold' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Javascript/Typescript
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'></div>
            <p className='font-bold text-purple-500 text-right'>

              85%
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

export default Skills
