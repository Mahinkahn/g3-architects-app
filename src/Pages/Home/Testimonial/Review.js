import React from 'react';

const Review = ({ review }) => {
    const { name, img, review: userReview, location } = review;
    return (
        <div className="card mt-[100px] border border-primary rounded-md w-[211.83px]  h-[211.83px] max-w-[1440px] mx-auto hover:border">
            <div className="card-body flex justify-center items-center mt-4">
                <div className="avatar">
                    <div className="w-16">
                        <img src={img} alt="" />
                    </div>
                </div>
                <p className=' text-3xl font-bold'>{userReview}</p>
                <div>
                    <h5 className="text-lg">{name}</h5>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;