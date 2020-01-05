import React from 'react';
import prof_overalls from '../../assets/images/prof_overalls.jpg';
import prof_cheeta from '../../assets/images/prof_cheeta.jpg';
import starIcon from '../../assets/images/StarIcon.png';
import './Reviews.css';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            img: prof_cheeta,
            rating: 4,
            description: "Not allergic to any alcohol, but this has become my hang out place. No rashes so far."
        },
        {
            id: 2,
            img: prof_overalls,
            rating: 5,
            description: "Back again! This place keeps getting better. Checkout my overalls."
        }
    ]
    return (
        <div id="reviews-container">
            {
                reviews.map(reviewItem => (
                    <div key={reviewItem.id} className="review">
                        <img src={reviewItem.img} />
                        <div>
                            <div className="rating-wrapper">
                                <img src={starIcon} className={`rating-star ${reviewItem.rating >= 1 ? 'rating-star__active' : ''}`} />
                                <img src={starIcon} className={`rating-star ${reviewItem.rating >= 2 ? 'rating-star__active' : ''}`} />
                                <img src={starIcon} className={`rating-star ${reviewItem.rating >= 3 ? 'rating-star__active' : ''}`} />
                                <img src={starIcon} className={`rating-star ${reviewItem.rating >= 4 ? 'rating-star__active' : ''}`} />
                                <img src={starIcon} className={`rating-star ${reviewItem.rating >= 5 ? 'rating-star__active' : ''}`} />
                            </div>
                            <span className="rating-description">{ reviewItem.description }</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Reviews;