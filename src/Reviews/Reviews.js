import React, {Component} from 'react';
import Axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from '../Containers/Header';
import { withStyles } from '@material-ui/core/styles';
import styles from './ReviewsStyles';

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
    }

    render() {
        const {classes} = this.props

        if (this.state.Reviews.length > 0) {
        return(
            <div>
                <Header></Header>
                <div className={classes.root}>
                    <Typography variant='h4' className="title">
                        User Reviews
                    </Typography>
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