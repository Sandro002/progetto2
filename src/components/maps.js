import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
const position = [localStorage.getItem('lat'), localStorage.getItem('long')];

export default function Map() {
  return(
    <div>
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "40vh", width:"90vh"}}  zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
      </Marker>
    </MapContainer>
    </div>
  )
}