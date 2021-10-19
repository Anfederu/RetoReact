import React from 'react'
import mapache from '../imgs/mapache.jpg'
import './card.css'
export const Card = ({ name, image, gender, status }) => {
    return (
        <div class="card">s
            <img class="card-img-top" src={image} alt="Mapache" />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{gender}</p>
                <p class="card-text">{status}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}


