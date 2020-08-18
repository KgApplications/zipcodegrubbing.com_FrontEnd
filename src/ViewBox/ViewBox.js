import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import "./loading.css"
import "./ViewBox.css"

class viewBox extends Component {
    render() {
        if (this.props.loading === true) {
            return(
                <ReactLoading className="loading" type={"bars"} color={"black"} height={'25%'} width={'25%'}/>
            )
        } else {
            return (
                <div className="root">
                    {this.props.locations.map((res, index) => {
                        return (
                            <Link to={"restaurant/" + res.restaurant.id + "/reviews"} className="link" key={index}>
                            <div className="restaurant">
                                <div className="imageContainer">
                                    <img src={res.restaurant.cuisines === "Mexican" ? "images/mexican.svg" : "images/american.svg" } alt="food" className="Img"></img>
                                </div>
                                <div className="info">
                                    <h1 className="infoDescription">
                                        {res.restaurant.name}
                                        </h1>
                                    <h2 className="infoDescription">
                                        {res.restaurant.cuisines}
                                    </h2>
                                </div>
                                <div className='contact'>
                                    <p>
                                        {res.restaurant.location.address}
                                    </p>
                                    <p className='description'>
                                        {res.restaurant.phone_numbers}
                                    </p>
                                </div>
                            </div>
                            </Link>
                        )
                    })}
                </div>
            );
            }
    }
}

export default viewBox