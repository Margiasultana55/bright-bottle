import React, { useEffect, useState } from 'react';
import ReviewPage from '../ReviewPage/ReviewPage';

const ReviewHome = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://stormy-island-04558.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            });
    }, [])

    return (
        <div>

            <h2 className="arrived mt-5 text-center mb-1 "> {reviews.length} reviews</h2>
            <hr className="w-25 mx-auto mb-5 text-dark " />
            <div className="service-container container">
                {
                    reviews.map(review => <ReviewPage
                        key={review._id}
                        review={review}
                    ></ReviewPage>)
                }

            </div>

        </div>
    );
};

export default ReviewHome;