import React, {Component} from 'react';
import axios from 'axios';
import ViewBox from '../ViewBox/ViewBox';

class dashboard extends Component {
    state = {
        location: null,
        error: "",
        locationData: null
    }

    render() {
        return(
            <div>
                <div>
                    <label htmlFor="locationInput">Enter Travel Location!</label>
                    <input id="locationInput" type="text" onChange={event => this.locationInput(event)}></input>
                    <button onClick={event => this.locationSubmit(event)}>Submit Location</button>
                </div>
                <ViewBox locations={this.state.locationData}></ViewBox>
            </div>
        )
    }

    locationInput(event) {
        this.setState({
            location: event.target.value
        })
    }

    locationSubmit(event) {
        let locationInput = document.getElementById("locationInput")
        locationInput.value = ""

        if (this.state.location !== null) {
            axios.get("http://localhost:8080/api/" + this.state.location +  "/restaurants/")
                .then(response => {
                    this.setState({
                        locationData: response.data
                    })
                })
        } else {
            this.setState({
                error: "Field cant be emptly"
            })
        }
    }
}

export default dashboard