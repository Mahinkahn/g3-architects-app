import React from 'react';
import amazon from '../../../assets/images/sponsors/amazon.png'
import figma from '../../../assets/images/sponsors/figma.png'
import google from '../../../assets/images/sponsors/google.png'
import spotify from '../../../assets/images/sponsors/spotify.png'
import telerama from '../../../assets/images/sponsors/telerama.png'


const MakeAppointment = () => {
    return (
        <section className='mt-40 max-w-[1440px] mx-auto'>
            <div className=' text-center'>
                <h1 className='lg:text-4xl text-2xl font-bold mb-6'>Our Sponspors</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but <br />
                    the majority have suffered alteration.</p>
            </div>
            <div className="grid gap-[50px] grid-cols-1 ml-24 md:grid-cols-2 lg:grid-cols-5 lg:ml-14 mb-10 mt-[50px]">
                <div>
                    <img src={spotify} alt="" />
                </div>
                <div>
                    <img src={amazon} alt="" />
                </div>
                <div>
                    <img src={google} alt="" />
                </div>
                <div>
                    <img src={telerama} alt="" />
                </div>
                <div>
                    <img src={figma} alt="" />
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;