import React, {Component} from 'react';
import './ViewBox.css';

class viewBox extends Component {
    render() {
        if (this.props.locations !== null) {
            return (
                <div className="viewBox__container">
                    <div className="viewBox__infoContainer">
                        <div className="viewBox__info">
                            <h1>
                                {this.props.locations.name}
                            </h1>
                            <h2>
                                {this.props.locations.rating}/5
                            </h2>
                        </div>
                        <div className="viewBox__ImageCaption">
                            <p>
                                {this.props.locations.photo.caption}
                            </p>
                        </div>
                    </div>

                    <div className="viewBox__ImageContainer">
                        <img src={this.props.locations.photo.images.original.url} className="viewBox__image"></img>
                    </div>
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

export default viewBox