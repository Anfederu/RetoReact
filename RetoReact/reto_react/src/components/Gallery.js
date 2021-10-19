import React, { useState, useEffect } from 'react'
import { Card } from './card';
import './gallery.css';
export const Gallery = () => {

    let [results, setResults] = useState([])
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => setResults(data.results))
    }, [

    ])



    return (
        <div className='container'>
            {results.map((personaje) => (
                <Card
                    key={personaje.id}
                    nombre={personaje.name}
                    image={personaje.img}
                    status={personaje.status}
                    gender={personaje.gender}
                />
            ))}

        </div>
    );
}
