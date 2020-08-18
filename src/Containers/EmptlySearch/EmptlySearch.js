import React from 'react';
import './EmptlySearch.css';

const emptly = props => {
    return (
        <div className="container">
            <div className="row2">
                <img src="images/lower-patio.jpg" className="image"></img>
                <h1 className="title"><span>
                        Explore New places
                </span></h1>
            </div>
            <div className="row1">
                <img src="images/bars.jpeg" className="image"></img>
                    <h1 className="title"><span>
                        Discover New Cities
                    </span></h1>
            </div>
        </div>
    )
}

export default emptly;