import React, {Component} from 'react';
import axios from 'axios';
import ViewBox from '../ViewBox/ViewBox';
import { Button, IconButton, InputBase, Toolbar, makeStyles, Typography } from '@material-ui/core';
import { Menu} from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import styles from './DashboardStyles'; 

class dashboard extends Component {
    state = {
        location: null,
        error: "",
        locationData: []
    }

    render() {
        const {classes} = this.props
        return(
            <div>
                <AppBar position="fixed">
                    <Toolbar>
                    <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer">
                    <Menu></Menu>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Location restaurants
                    </Typography>
                        <div className={classes.search}>
                        <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                        <InputBase
                        id="locationInput"
                        placeholder="Search ZipCode…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        onChange={event => this.locationInput(event)}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <Button color="inherit" onClick={() => this.locationSubmit()}>Submit Location</Button>
                    </Toolbar>
                </AppBar>
                    <ViewBox locations={this.state.locationData}></ViewBox>
            </div>
        )
    }

    locationInput(event) {
        this.setState({
            location: event.target.value
        })
    }

    async locationSubmit(event) {
        let locationInput = document.getElementById("locationInput")
        locationInput.value = ""

        if (this.state.location !== null) {
            await axios.get("http://localhost:8080/api/" + this.state.location +  "/restaurants/")
                .then(response => {
                    this.setState({
                        locationData: response.data.restaurants
                    })
                })
        } else {
            this.setState({
                error: "Field cant be emptly"
            })
        }
    }
}

export default withStyles(styles)(dashboard)