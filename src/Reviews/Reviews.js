import React, {Component} from 'react';
import Axios from 'axios';
import Header from '../Containers/Header';
import './ReviewsStyles.css'

class reviews extends Component {
    state = {
        Reviews: [],
        Location: null,
    }

    async componentDidMount() {
        await Axios.get("https://restaurantguide-281905.wl.r.appspot.com/api/" + this.props.match.params.ID + "/reviews/")
        .then(response => {
            this.setState({
                Reviews: response.data.user_reviews
            })
        })
    }

    redirect = () => {
        if (this.state.Location !== null) {
            this.props.history.push({
            pathname: '/',
            state: { zipCode: this.state.Location }
            })
        }
    }

    headerChange(event) {
        event.keyCode === 13 ? this.redirect() :
        this.setState({
            Location: event.target.value
        })
    }

    render() {
        if (this.state.Reviews.length > 0) {
        return(
            <div>
                <Header change={event => this.headerChange(event)}></Header>

                <div className='root'>
                    {this.state.Reviews.map((res, index )=> {
                        return(
                            <div className='review' key={index}>
                                <h1>
                                    {res.review.review_text}
                                </h1>
                                <h1>
                                    {res.review.review_time_friendly}
                                </h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
        } else {
            return(
                <div>
                    <Header change={event => this.headerChange(event)}></Header>
                    <div className="root">
                        <h1 className="review">
                            No Reviews...
                        </h1>
                    </div>
                </div>
            )
        }
    }
}

export default reviews