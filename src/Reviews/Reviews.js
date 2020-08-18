import React, {Component} from 'react';
import Axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from '../Containers/Header';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from "react-router-dom";
import styles from './ReviewsStyles';

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
        const {classes} = this.props
        if (this.state.Reviews.length > 0) {
        return(
            <div>
                <Header change={event => this.headerChange(event)}></Header>

                <div className={classes.root}>
                    {this.state.Reviews.map((res, index )=> {
                        return(
                            <Paper variant="elevation" elevation={10} className={classes.review} key={index}>
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
            </div>
        )
        } else {
            return(
                <div>
                    <Header></Header>
                    <Paper variant="elevation" elevation={10} className={classes.root}>
                        <Typography variant='h3' className={classes.review}>
                            No Reviews...
                        </Typography>
                    </Paper>
                </div>
            )
        }
    }
}

export default withStyles(styles)(reviews)