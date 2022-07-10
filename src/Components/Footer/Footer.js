import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faTwitter, } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
            <div className='max-w-[1240px] mx-auto  border-b-2 border-gray-600 py-8'>
                <div className='grid grid-cols-2 md:grid-cols-6'>
                    {/* first part  */}
                    <div>
                        <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                        <ul>
                            <li className='py-1'>Marketing</li>
                            <li className='py-1'>Analytics</li>
                            <li className='py-1'>Commerce</li>
                            <li className='py-1'>Data </li>
                            <li className='py-1'>Cloud</li>
                        </ul>

                    </div>

                    {/* second part  */}
                    <div>
                        <h6 className='font-bold uppercase pt-2'>Support</h6>
                        <ul>
                            <li className='py-1'>Pricing</li>
                            <li className='py-1'>Documentation</li>
                            <li className='py-1'>Guides</li>
                            <li className='py-1'>API Status</li>
                        </ul>

                    </div>

                    {/* third part  */}

                    <div>
                        <h6 className='font-bold uppercase pt-2'>Company</h6>
                        <ul>
                            <li className='py-1'>About</li>
                            <li className='py-1'>Blog</li>
                            <li className='py-1'>Jobs </li>
                            <li className='py-1'>Press</li>
                            <li className='py-1'>Partner</li>
                        </ul>

                    </div>

                    {/* fourth part  */}
                    <div>
                        <h6 className='font-bold uppercase pt-2'>Legal</h6>
                        <ul>
                            <li className='py-1'>Claims</li>
                            <li className='py-1'>Privacy</li>
                            <li className='py-1'>Terms</li>
                            <li className='py-1'>Policies</li>
                            <li className='py-1'>Conditions</li>
                        </ul>

                    </div>
                    {/* fifth part  */}
                    <div className='col-span-2 pt-8 md:pt-2'>
                        <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                        <p className='py-4'>The latest news, articles, and resources , sent to you inbox weekly.</p>
                        <form className='flex flex-col  sm:flex-row' action="">
                            <input className='w-full p-2 mr-4 rounded mb-4' type="email" placeholder='Enter email..' />
                            <button className='p-2 mb-4'>Subscribe </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex flex-col max-w-[1240px] m-auto px-2 py-4 justify-between items-center sm:flex-row text-center text-gray-500'>
                <p>2022 Code Commerce. All rights reserved</p>
                <div className='flex   text-2xl'>
                    <FontAwesomeIcon className='mr-3' icon={faFacebook} />
                    <FontAwesomeIcon className='mr-3' icon={faTwitter} />
                    <FontAwesomeIcon icon={faGithub} />
                </div>
            </div>
        </div>
    );
};

export default Footer;