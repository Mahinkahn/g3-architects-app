import React from 'react';
import Grou from '../../../assets/images/Group 16.png'
import Service from './Service';

const Services = () => {

    return (
        <div className="hero ">
            <div className="hero-content gap-12 flex-col lg:flex-row-reverse">
                <img src={Grou} alt='' className="lg:w-[708px] lg:h-[780px] w-full   rounded-lg " />
                <div className='lg:w-[583px] lg:h-[883px]'>
                    <div className='lg:mt-24 py-2 border-l-[5px] border-primary '>
                        <h1 className="lg:text-4xl text-2xl font-bold ml-5">Features you will <br /> love & enjoy!</h1>
                    </div>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>

                    <div className=' p-2 mt-5'>
                        <h1 className="text-xl font-bold">Dexktop & Mobile Version</h1>
                        <p className="py-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                    </div>

                    <div className=' p-2 mt-5'>
                        <h1 className="text-xl font-bold">Drag & Drop Builder</h1>
                        <p className="py-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                    </div>

                    <div className=' p-2 mt-5'>
                        <h1 className="text-xl font-bold">Awesome Modern Design!</h1>
                        <p className="py-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                    </div>
                    {/* <div className='absolute  ml-40'>
                        <img src={Group} alt='' className=" w-[342px] h-[200px] rounded-lg " />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Services;