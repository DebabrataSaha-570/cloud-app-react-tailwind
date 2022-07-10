import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Pricing = () => {
    return (
        <div className='w-full text-white my-24'>

            <div className='w-full h-[800px] absolute mix-blend-overlay bg-slate-900 '>

            </div>

            <div className='max-w-[1240px] mx-auto py-12'>
                <div className='text-center py-8 text-slate-300'>
                    <h2 className='text-3xl uppercase'>Pricing</h2>
                    <h3 className='text-5xl font-bold text-white py-8'>The right price for your research</h3>
                    <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, velit laborum explicabo reiciendis quo nemo sit quis saepe corporis maxime delectus odit molestiae quod illo soluta provident doloremque natus commodi.</p>
                </div>

                {/* card section  */}
                <div className='grid md:grid-cols-2'>
                    {/* card 1 */}
                    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-xl relative'>
                        <div>
                            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
                        </div>
                        <div>
                            <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                        </div>
                        <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit, amet</p>
                        <div className=''>
                            <p className='py-4 '><FontAwesomeIcon className='mr-4 text-green-600' size='lg' icon={faCheck} /> Lorem ipsum dolor sit.</p>
                            <p className='py-4'><FontAwesomeIcon className='mr-4 text-green-600' size='lg' icon={faCheck} /> Lorem ipsum dolor sit.</p>
                            <p className='py-4'><FontAwesomeIcon className='mr-4 text-green-600' size='lg' icon={faCheck} /> Lorem ipsum dolor sit.</p>
                            <p className='py-4'><FontAwesomeIcon className='mr-4 text-green-600' size='lg' icon={faCheck} /> Lorem ipsum dolor sit.</p>
                            <p className='py-4'><FontAwesomeIcon className='mr-4 text-green-600' size='lg' icon={faCheck} /> Lorem ipsum dolor sit.</p>
                            <button className='w-full py-4 my-4'>Get Started</button>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-xl relative'>
                        <div>
                            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
                        </div>
                        <div>
                            <p className='text-6xl font-bold py-4 flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                        </div>
                        <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit, amet</p>
                        <div className=''>
                            <p className='py-4 '><FontAwesomeIcon className='mr-4 text-green-600' size='lg' icon={faCheck} /> Lorem ipsum dolor sit.</p>
                            <p className='py-4'><FontAwesomeIcon className='mr-4 text-green-600' size='lg' icon={faCheck} /> Lorem ipsum dolor sit.</p>
                            <p className='py-4'><FontAwesomeIcon className='mr-4 text-green-600' size='lg' icon={faCheck} /> Lorem ipsum dolor sit.</p>
                            <p className='py-4'><FontAwesomeIcon className='mr-4 text-green-600' size='lg' icon={faCheck} /> Lorem ipsum dolor sit.</p>
                            <p className='py-4'><FontAwesomeIcon className='mr-4 text-green-600' size='lg' icon={faCheck} /> Lorem ipsum dolor sit.</p>
                            <button className='w-full py-4 my-4'>Get Started</button>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Pricing;