import React from 'react';

import {
  Row,
  Col,
  Grid,
  Form,
  Panel,
  Button,
  FormGroup,
  PanelBody,
  InputGroup,
  FormControl,
  PanelHeader,
  PanelContainer,
} from '@sketchpixy/rubix';

class MapContainer extends React.Component {
  render() {
    return (

            <div id={this.props.id} style={{height: 300}}></div>
    );
  }
}

export default class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.geocode = null;
    this.routingmap = null;
    this.state = {
      routeslist: []
    };
  }

  geoCode(address) {
    GMaps.geocode({
      address: address,
      callback: (results, status) => {
        if (status == 'OK') {
          var latlng = results[0].geometry.location;
          this.geocode.setCenter(latlng.lat(), latlng.lng());
          this.geocode.addMarker({
            lat: latlng.lat(),
            lng: latlng.lng(),
            infoWindow: {
              content: '<div><strong>Address:</strong> '+results[0].formatted_address+'</div>'
            }
          });
        }
      }
    });
  }

  componentDidMount() {
    (() => {
      new GMaps({
        scrollwheel: false,
        div: '#basic-map',
        lat: -12.043333,
        lng: -77.028333
      });
    })();

  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.geoCode($('#address').val());
  }

  render() {
    return (
      
            <MapContainer id='basic-map' name='Basic Map' />
    );
  }
}
