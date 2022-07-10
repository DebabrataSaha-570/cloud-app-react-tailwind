import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
    }
    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className='flex items-center'>
                    <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
                    <ul className='hidden md:flex'>
                        <Link to="home" smooth={true} offset={50} duration={500}>
                            <li>Home</li>
                        </Link>
                        <Link to="about" smooth={true} offset={-200} duration={500}>
                            <li>About</li>
                        </Link>
                        <Link to="support" smooth={true} offset={-100} duration={500}>
                            <li>Support</li>
                        </Link>
                        <Link to="platforms" smooth={true} offset={-100} duration={500}>
                            <li>Platforms</li>
                        </Link>
                        <Link to="pricing" smooth={true} offset={-100} duration={500}>
                            <li>Pricing</li>
                        </Link>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className='border-none bg-transparent text-black mr-4  hover:text-indigo-600'>Sign In</button>
                    <button className='px-8 py-3 hover:bg-transparent hover:text-indigo-600'>Sign Up</button>
                </div>
                <div className='md:hidden mr-4'>

                    {nav && <FontAwesomeIcon onClick={handleClick} size="lg" icon={faBars} />}
                    {!nav && <FontAwesomeIcon onClick={handleClick} size="lg" icon={faXmark} />}
                </div>
            </div>

            {/* mobile menu  */}
            {
                !nav && <ul className='md:hidden lg:hidden  absolute bg-zinc-200 w-full px-8'>
                    <Link to="home" smooth={true} offset={50} duration={500}>
                        <li onClick={handleClick} className='border-b-2 border-zinc-300 w-full'>Home</li>
                    </Link>

                    <Link to="about" smooth={true} offset={-200} duration={500}>
                        <li onClick={handleClick} className='border-b-2 border-zinc-300 w-full'>About</li>
                    </Link>
                    <Link to="support" smooth={true} offset={-100} duration={500}>
                        <li onClick={handleClick} className='border-b-2 border-zinc-300 w-full'>Support</li>
                    </Link>
                    <Link to="platforms" smooth={true} offset={-100} duration={500}>
                        <li onClick={handleClick} className='border-b-2 border-zinc-300 w-full'>Platforms</li>
                    </Link>
                    <Link to="pricing" smooth={true} offset={-100} duration={500}>
                        <li onClick={handleClick} className='border-b-2 border-zinc-300 w-full'>Pricing</li>
                    </Link>
                    <div className='flex flex-col my-4'>
                        <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                        <button className='px-8 py-3  hover:bg-transparent hover:text-indigo-600'>Sign Up</button>
                    </div>
                </ul>
            }
        </div>
    );
};

export default Navbar;