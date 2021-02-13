import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import pointer from '../img/pointer.jpg';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;
const position = [localStorage.getItem('lat'), localStorage.getItem('long')];


export default function Map() {

    //var Markerr=L.marker([51.5, -0.09], {icon: greenIcon});
    return (
        <div>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "40vh", width: "90vh" }} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>

                <Popup>You are here</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}