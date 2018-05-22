import React, { Component } from 'react';

class EventDetailsSecondPage extends Component {
    constructor(props){
        super(props);
    }


        render(){
            return(
                <div className="container-fluid main-event-display-container">
                    <div className="row">
                        <div className="col-xs-6 main-event-image-container">
                        <img src={this.props.image} />
                        </div>
                        <div className="col-xs-6 text-left main-event-info-container">
                            <div className="inner-info-container">
                                <div className="date">Date:{this.props.time}</div>
                                <div className="time">Time:{this.props.time}</div>
                                <div className="address">Address:{this.props.venue_name}</div>
                                <div className="address-info">{this.props.venue_address}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    export default EventDetailsSecondPage;