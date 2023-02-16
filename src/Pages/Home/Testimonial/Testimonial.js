import React from 'react';
import ribon from '../../../assets/icons/ribon.png';
import projects from '../../../assets/icons/projects.png';
import customers from '../../../assets/icons/customers.png';
import email from '../../../assets/icons/email.png';
import Review from './Review';


const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            img: ribon,
            review: '54',
            location: 'Awards Winnings'
        },
        {
            _id: 2,
            img: projects,
            review: '1458',
            location: 'Project Finished'
        },
        {
            _id: 3,
            img: customers,
            review: '590',
            location: 'Clients Worked'
        },
        {
            _id: 4,
            img: email,
            review: '22578',
            location: 'Email Send'
        },
    ]

    return (
        <section className='my-16 max-w-[1440px] mx-auto mt[100px]'>
            <div className='flex justify-between'>
                <div className='ml-16'>
                    <h4 className="text-4xl font-bold">Some Facts</h4>
                    <h2 className="text-sm mt-6">There are many variations of passages of Lorem Ipsum available, but <br /> the majority have suffered alteration.</h2>
                </div>
            </div>
            <div className='grid gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;