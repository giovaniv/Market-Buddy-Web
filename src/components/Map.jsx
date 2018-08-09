import React, { Component } from "react";
import HEREMap from "react-here-maps";

export default class Map extends Component {
   render() {
       // center the map somewhere in London
       const center = {
           lat: 51.5,
           lng: 0,
       };

       const your_app_id = 'cEFnf8LIFrbMaPpViTgE';
       const your_app_code = 'Fq_3xSNct4qJTbyTiJTMkg';
       
       return (
           <HEREMap
               appId={your_app_id}
               appCode={your_app_code}
               center={center}
               zoom={8}
           />
       )
   }
}