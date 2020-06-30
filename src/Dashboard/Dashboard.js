import React, {Component} from 'react';
import axios from 'axios';
import ViewBox from '../ViewBox/ViewBox';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Containers/Header';
import styles from './DashboardStyles'; 

class dashboard extends Component {
    state = {
        location: null,
        error: "",
        locationData: []
    }
    render() {
        return(
            <div>
                <Header
                change={event => this.locationInput(event)}
                />
                <ViewBox locations={this.state.locationData}></ViewBox>
            </div>
        )
    }

    locationInput(event) {
        event.keyCode === 13 ? this.locationSubmit() :
        this.setState({
            location: event.target.value
        })
    }

    async locationSubmit() {
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