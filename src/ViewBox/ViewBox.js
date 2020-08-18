import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import styles from './ViewBoxStyles';

class viewBox extends Component {
    render() {
        const {classes} = this.props

        if (this.props.locations.length > 0) {
            return (
                <div className={classes.root}>
                    {this.props.locations.map((res, index) => {
                        return (
                            <Link to={"restaurant/" + res.restaurant.id + "/reviews"} className={classes.link} key={index}>
                            <Paper className={classes.restaurant} variant="elevation" elevation={15}>
                                    <div className={classes.imageContainer}>
                                        <img src={res.restaurant.cuisines === "Mexican" ? "images/mexican.svg" : "images/american.svg" } alt="food" className={classes.Img}></img>
                                    </div>
                                    <div className={classes.info}>
                                        <Typography className={classes.infoDescription} style={{ fontSize: "35px" }}>
                                            {res.restaurant.name}
                                            </Typography>
                                        <Typography className={classes.infoDescription} style={{ fontSize: "20px" }}>
                                            {res.restaurant.cuisines}
                                        </Typography>
                                    </div>
                                    <div className={classes.contact}>
                                        <Typography style={{ fontSize: "15px" }}>
                                            {res.restaurant.location.address}
                                        </Typography>
                                        <Typography className={classes.description} style={{ fontSize: "15px" }}>
                                            {res.restaurant.phone_numbers}
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