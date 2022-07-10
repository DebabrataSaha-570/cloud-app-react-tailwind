import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const AllInOne = () => {
    return (
        <div name="platforms" className='w-full my-32 px-3'>
            <div className='max-w-[1240px] mx-auto'>
                <div>
                    <h2 className='text-5xl font-bold text-center'>All-In-One Platform</h2>
                    <p className='text-xl py-8 text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aperiam dolor quidem, sequi numquam nulla optio nostrum maiores facere facilis.</p>
                </div>

                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                    {/* card 1 */}
                    <div className='flex'>
                        <FontAwesomeIcon className='mr-4 text-green-600' size='lg' icon={faCheck} />

                        <div>
                            <h3 className='font-bold text-lg '>Notifations</h3>
                            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus id minus ipsam nihil laudantium? Amet doloribus tempora vero. Adipisci.</p>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className='flex'>
                        <FontAwesomeIcon className='mr-4 text-green-600' size='lg' icon={faCheck} />

                        <div>
                            <h3 className='font-bold text-lg '>Notifations</h3>
                            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus id minus ipsam nihil laudantium? Amet doloribus tempora vero. Adipisci.</p>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className='flex'>
                        <FontAwesomeIcon className='mr-4 text-green-600' size='lg' icon={faCheck} />

                        <div>
                            <h3 className='font-bold text-lg '>Notifations</h3>
                            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus id minus ipsam nihil laudantium? Amet doloribus tempora vero. Adipisci.</p>
                        </div>
                    </div>

                    {/* card 4 */}
                    <div className='flex'>
                        <FontAwesomeIcon className='mr-4 text-green-600' size='lg' icon={faCheck} />

                        <div>
                            <h3 className='font-bold text-lg '>Notifations</h3>
                            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus id minus ipsam nihil laudantium? Amet doloribus tempora vero. Adipisci.</p>
                        </div>
                    </div>

                    {/* card 5 */}
                    <div className='flex'>
                        <FontAwesomeIcon className='mr-4 text-green-600' size='lg' icon={faCheck} />

                        <div>
                            <h3 className='font-bold text-lg '>Notifations</h3>
                            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus id minus ipsam nihil laudantium? Amet doloribus tempora vero. Adipisci.</p>
                        </div>
                    </div>

                    {/* card 6 */}
                    <div className='flex'>
                        <FontAwesomeIcon className='mr-4 text-green-600' size='lg' icon={faCheck} />

                        <div>
                            <h3 className='font-bold text-lg '>Notifations</h3>
                            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus id minus ipsam nihil laudantium? Amet doloribus tempora vero. Adipisci.</p>
                        </div>
                    </div>

                    {/* card 7 */}
                    <div className='flex'>
                        <FontAwesomeIcon className='mr-4 text-green-600' size='lg' icon={faCheck} />

                        <div>
                            <h3 className='font-bold text-lg '>Notifations</h3>
                            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus id minus ipsam nihil laudantium? Amet doloribus tempora vero. Adipisci.</p>
                        </div>
                    </div>

                    {/* card 8 */}
                    <div className='flex'>
                        <FontAwesomeIcon className='mr-4 text-green-600' size='lg' icon={faCheck} />

                        <div>
                            <h3 className='font-bold text-lg '>Notifations</h3>
                            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus id minus ipsam nihil laudantium? Amet doloribus tempora vero. Adipisci.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AllInOne;