import React, {Component} from 'react';
import Axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from '../Containers/Header';
import './Reviews.css';

class reviews extends Component {
    state = {
        Reviews: []
    }

    async componentDidMount() {
        await Axios.get("http://localhost:8080/api/" + this.props.match.params.ID + "/reviews/")
        .then(response => {
            this.setState({
                Reviews: response.data.user_reviews
            })
        })
        console.log(this.state.Reviews)
    }

    render() {
        if (this.state.Reviews.length > 0) {
        return(
            <div className="reviews__containers">
                <Header></Header>
                <Typography variant='h4' className="title">
                    User Reviews
                </Typography>
                {this.state.Reviews.map(res => {
                    return(
                        <Paper variant="elevation" elevation="10">
                            <Typography variant='h5'>
                                {res.review.review_text}
                            </Typography>
                            <Typography variant='h5' color="primary">
                                {res.review.review_time_friendly}
                            </Typography>
                        </Paper>
                    )
                })}
            </div>
        )
        } else {
            return(
                <Paper variant="elevation" elevation="10" className="noReviews__container">
                    <Typography variant='h3' className="noReviews">
                        No Reviews...
                    </Typography>
                </Paper>
            )
        }
    }
}

export default reviews