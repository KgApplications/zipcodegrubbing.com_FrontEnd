import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import './StarRating.css';

const starRatings = props => {
    const stars = [1, 2, 3, 4, 5]
    return (
    stars.map((star, index) => {
        const ratingValue = index + 1 
        return(
            <StarIcon key={index} className={ ratingValue <= props.value ? "gold" : "grey" } ></StarIcon>
        )
    })
    )
}

export default starRatings