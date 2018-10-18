import React, { Component } from 'react';
// import './App.css';
// import CustumeRoutes from './navigation/Router';
import { withScriptjs,withGoogleMap,GoogleMap,Marker} from 'react-google-maps';

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      coords: {}
    };
    this.updateCoords = this.updateCoords.bind(this);
  }
  componentDidMount() {
    this.setPosition();
  }

  setPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({coords: position.coords})
    });
  }

  updateCoords({latitude, longitude}) {
    this.setState({coords: {latitude, longitude}})
  }
  render() {
    const {coords} = this.state;
    return (
      <div className="App">
      {/* <CustumeRoutes/><br/><br/><br/><br/><br/><br/><br/><br/>   */}
      {/* <footer className="footer"> */}
        {coords.latitude && <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `70%` }} />}
            containerElement={<div style={{ height: `70vh` }} />}
            mapElement={<div style={{ height: `70%` }} />}
            coords={coords}
            updateCoords={this.updateCoords.bind(this)}
            />}
          )
        }
      {/* </footer> */}
      </div>
    );
  }
}
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    center={{ lat: props.coords.latitude, lng: props.coords.longitude }}
    >
    {props.isMarkerShown && <Marker 
    position={{ lat: props.coords.latitude, lng: props.coords.longitude }} 
    draggable={true}
    onDragEnd={pos => {
      props.updateCoords({latitude: pos.latLng.lat(), longitude: pos.latLng.lng()})
    }}
    />}
  </GoogleMap>
))

export default App;
