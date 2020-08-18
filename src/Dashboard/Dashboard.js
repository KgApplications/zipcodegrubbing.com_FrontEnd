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
        error: 0,
        EnteredInput: false, 
        loading: true,
        locationData: []
    }
    render() {
        console.log(this.state.error)
        if (this.state.error === 404) {
            return(
                <div>
                    <Header
                    change={event => this.locationInput(event)}/>
                    <h1 style={{fontSize: '200px'}}>
                        404
                    </h1>
                </div>
            )
        } else {
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
            if (this.state.error !== 0) {
                this.setState({
                    error: 0
                })
            }
            await axios.get("https://restaurantguide-281905.wl.r.appspot.com/api/" + this.state.location +  "/restaurants/")
                .then(response => {
                    if (response.data.restaurants !== null) {
                        this.setState({
                            locationData: response.data.restaurants,
                            loading: false
                        })
                    } else {
                        this.setState({
                            error: 404,
                            loading: false
                        })
                    }
                })
        } else {
            this.setState({
                error: "Field cant be emptly"
            })
        }
    }
}

export default withStyles(styles)(dashboard)