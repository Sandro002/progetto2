import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
export var lat=localStorage.getItem('lat'),long=localStorage.getItem('long');

const mapStyles = {
  width: '40%',
  height: '30%'
};

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: lat,
            lng: long
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCZzg2VkFPFLQGY4iOTLEVGKsOcu8CV_AM'
})(MapContainer);