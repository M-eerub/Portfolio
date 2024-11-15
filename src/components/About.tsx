import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font bg-purple-300">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
      <Image
        className="object-cover object-center rounded mx-auto w-[300px] h-[450px]"
        alt="hero"
        src={require('../../public/assests/pic/profile.jpg')}
        width={300}
        height={500}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me 
      </h1>
      <p className='mb-5 leading-relaxed'>
        I have completed my Matriculation from KB jackson grammar high school hyd <br />    I have completed my Intermediate from Govt: Girls Zubaida College hyd <br />  Bachelor's of computer science from University of Sindh (Continue)

      </p>
      <p className="mb-5 leading-relaxed">
      I am a Web Developer and Graphic Designer  I enjoy solving complex problems and collaborating with others. I thrive in type of environment, and am always eager to learn and grow. 
      </p>
      <div className="flex justify-center">
        <Link href={"assests/cv/my-cv.pdf"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          View CV
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
