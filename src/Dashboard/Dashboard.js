import React, {Component} from 'react';
import axios from 'axios';
import ViewBox from '../ViewBox/ViewBox';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Containers/Header';
import styles from './DashboardStyles'; 
import Emptly from '../Containers/EmptlySearch/EmptlySearch';

class dashboard extends Component {
    state = {
        location: null,
        error: "",
        EnteredInput: false, 
        loading: true,
        locationData: []
    }
    render() {
        console.log(this.props.location.state)
        return(
            <div>
                <Header
                change={event => this.locationInput(event)}/>
                {
                    this.state.EnteredInput === false ? <Emptly></Emptly>
                    : <ViewBox locations={this.state.locationData} loading={this.state.loading}>
                    </ViewBox>
                }
            </div>
        ) 
    }

    componentDidMount() {
        if (this.props.location.state === undefined) {
            return null
        } else {
            this.setState({
                EnteredInput: true
            })
            axios.get("https://restaurantguide-281905.wl.r.appspot.com/api/" + this.props.location.state.zipCode +  "/restaurants/")
                .then(response => {
                    this.setState({
                        locationData: response.data.restaurants,
                        loading: false
                    })
                });
                window.history.replaceState(null, '')
            };
    }

    locationInput(event) {
        event.keyCode === 13 ? this.locationSubmit() :
        this.setState({
            location: event.target.value
        })
    }

    async locationSubmit() {
        if (this.state.location !== null) {
            this.setState({
                EnteredInput: true
            })
            await axios.get("https://restaurantguide-281905.wl.r.appspot.com/api/" + this.state.location +  "/restaurants/")
                .then(response => {
                    this.setState({
                        locationData: response.data.restaurants,
                        loading: false
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