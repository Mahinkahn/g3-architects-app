import React from 'react';
import chair from '../../../assets/images/banner.png';
import Rectangle from '../../../assets/images/Rectangle 2.png';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <section className='bg-secondary'>
            <div className="hero">
                <div className="hero-content flex-col  mt-16">
                    <h1 className="text-5xl font-bold text-center">Brand New <br />
                        Group of Architects
                    </h1>
                    <p className="py-6 text-center mb-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in <br /> some form, by injected humour, or randomised words which don't look even</p>
                    <PrimaryButton>Explore More</PrimaryButton>
                    <div className='hero-content'>
                        <img src={chair} className="rounded-lg lg:w-full  mb-5 mt-11" alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;