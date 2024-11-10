import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdDownload } from 'react-icons/md';
 

const Navbar = () => {
  return (
    <div className="z-50 sticky top-0">
      <header className="text-gray-600 body-font bg-purple-100">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={require("../../public/assests/pic/logo1.jpg")}
              alt="IT mate"
              width={100}
              height={100}
              className="w-[46px]"
            />

            <span className="ml-3 text-xl">Aqsa Khan</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-blue-600">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-blue-600">
              About
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-blue-600">
              Skills
            </Link>
            <Link href={"#Projects"} className="mr-5 hover:text-blue-600">
              Projects
            </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-blue-600">
              Contact
            </Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Download CV
           <a href="/assests/cv/my-cv.pdf">
        <MdDownload className="text-xl ml-2"/>
        </a>
          </button>
        
        </div>
      </header>
    </div>
  );
};

export default Navbar;
