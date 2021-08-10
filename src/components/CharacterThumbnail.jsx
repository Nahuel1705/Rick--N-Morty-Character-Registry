import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/styles/components/CharacterThumbnail.css'
const CharacterThumbnail = ({name, location, image}) =>{
    return (
        <div className="col-2">
            <img className="img-fluid rounded shadow mx-auto d-block" src={image} alt={name} />
        </div>
    );
}

export default CharacterThumbnail;