import React from 'react'
import mapache from '../imgs/mapache.jpg'
import './card.css'
export const Card = ({ name, image, gender, status }) => {
    return (
        <div class="card">
            <img class="card-img-top" src={image} alt="perosnaje" />
            <div class="card-body">
                <h5 class="card-title"><b>{name}</b></h5>
                <p class="card-text">Gender: {gender}</p>
                <p class="card-text">Status: {status}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}


