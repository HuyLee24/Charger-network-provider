import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { BrowserRouter as Link } from "react-router-dom";
import config from './config/config';
import Marker from './Marker.js';

console.log(config);

//const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Google extends Component {
  static defaultProps = {
    center: {
      lat: 65.011648,
      lng: 25.502615
    },
    zoom: 6
  };
 
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: config.googleApiKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={60.855221}
            lng={24.597627}
            text="Test Marker"
          />
          <Marker
            lat={61.604433}
            lng={29.482190}
            text="Test Marker2"
          />
        </GoogleMapReact>
        
      </div>
    );
  }
}
 
export default Google;