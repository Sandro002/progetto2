import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import pointer from '../img/pointer.jpg';
import L, { map } from 'leaflet';

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