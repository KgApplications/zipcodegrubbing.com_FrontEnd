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
        console.log(classes)

        if (this.props.locations.length > 0) {
            return (
                <div className={classes.root}>
                    {this.props.locations.map((res, index) => {
                        return (
                            <Paper key={index} className={classes.restaurant} variant="elevation" elevation="10">
                                <Link to={"restaurant/" + res.restaurant.id + "/reviews"} className={classes.link}>
                                    <Typography variant="h3">
                                        {res.restaurant.name}
                                    </Typography>
                                    <Typography variant="h4">
                                        {res.restaurant.cuisines}
                                    </Typography>
                                    <Typography variant="h5">
                                        {res.restaurant.phone_numbers}
                                    </Typography>
                                    <Typography variant="h6">
                                        {res.restaurant.location.address}
                                    </Typography>
                                    <Typography variant="h6">
                                        {res.restaurant.location.locality}
                                    </Typography>
                                </Link>
                            </Paper>
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