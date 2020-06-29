import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Card, Typography } from '@material-ui/core';
import Axios from 'axios';
import styles from './ViewBoxStyles';

class viewBox extends Component {
    render() {
        const {classes} = this.props

        if (this.props.locations.length > 0) {
            return (
                <div className={classes.root}>
                    {this.props.locations.map((res, index) => {
                        return (
                            <Link to={"restaurant/" + res.restaurant.id + "/reviews"} className={classes.link}>
                            <Paper key={index} className={classes.restaurant} variant="elevation" elevation="10">
                                    <div className={classes.imageContainer}>
                                        <img src={res.restaurant.cuisines === "Mexican" ? "images/mexican.svg" : "images/american.svg" } alt="food" className={classes.Img}></img>
                                    </div>
                                    <div className={classes.info}>
                                        <Typography variant="h5">
                                            {res.restaurant.name}
                                        </Typography>
                                        <Typography variant="h6">
                                            {res.restaurant.cuisines}
                                        </Typography>
                                        <Typography variant="h6">
                                            {res.restaurant.phone_numbers}
                                        </Typography>
                                        <Typography variant="body1">
                                            {res.restaurant.location.address}
                                        </Typography>
                                        <Typography variant="body2">
                                            {res.restaurant.location.locality}
                                        </Typography>
                                    </div>
                            </Paper>
                            </Link>
                        )
                    })}
                </div>
            )
        } else {
            return(
                <div>
                    <h1>
                        No locations entered yet!
                    </h1>
                </div>
            )
        }
    }
}

export default withStyles(styles)(viewBox)