import React from 'react';
import supportImg from '../../images/support.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Support = () => {
    return (
        <div name="support" className='w-full  my-24' >
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="" />
            </div>

            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='pt-8 text-3xl text-slate-400 uppercase text-center'>Support</h2>
                    <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                    <p className='py-4 text-xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quaerat possimus totam adipisci aliquam nisi alias nam obcaecati </p>
                </div>

                {/* card section */}
                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-lg shadow-2xl'>
                        <div className='px-5 py-3'>
                            <FontAwesomeIcon size='lg' icon={faPhone} className="bg-indigo-600 p-4 text-white rounded-lg mt-[-8rem]" />
                            <h3 className='font-bold text-2xl'>Sales</h3>
                            <p className='my-4 text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quasi?</p>
                        </div>
                        <div className='bg-slate-100 rounded-lg pl-8 py-4'>
                            <p className='ml-2'>Contact Us <FontAwesomeIcon size="lg" icon={faArrowRight} className="text-indigo-600" /></p>
                        </div>
                    </div>

                    {/* second card  */}
                    <div className='bg-white rounded-lg shadow-2xl'>
                        <div className='px-5 py-3'>
                            <FontAwesomeIcon size='lg' icon={faPhone} className="bg-indigo-600 p-4 text-white rounded-lg mt-[-8rem]" />
                            <h3 className='font-bold text-2xl'>Technical support</h3>
                            <p className='my-4 text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quasi?</p>
                        </div>
                        <div className='bg-slate-100 rounded-lg pl-8 py-4'>
                            <p className='ml-2'>Contact Us <FontAwesomeIcon size="lg" icon={faArrowRight} className="text-indigo-600" /></p>
                        </div>
                    </div>


                    {/* Third card  */}
                    <div className='bg-white rounded-lg shadow-2xl'>
                        <div className='px-5 py-3'>
                            <FontAwesomeIcon size='lg' icon={faPhone} className="bg-indigo-600 p-4 text-white rounded-lg mt-[-8rem]" />
                            <h3 className='font-bold text-2xl'>Media Inquiries</h3>
                            <p className='my-4 text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quasi?</p>
                        </div>
                        <div className='bg-slate-100 rounded-lg pl-8 py-4'>
                            <p className='ml-2'>Contact Us <FontAwesomeIcon size="lg" icon={faArrowRight} className="text-indigo-600" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;