import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/styles/components/CharacterThumbnail.css'
const CharacterThumbnail = ({name, location, image}) =>{
    return (
        <div className="col-2 character">
            <div className="character-container">
                <div className="character-overlay">
                    <div className="overlay-text">
                        <h4 className="character-name">{name}</h4>
                        <p className="character-location">{location.name}</p>
                    </div>
                </div>
                <img className="img-fluid shadow mx-auto d-block character-image" src={image} alt={name} />
            </div>
        </div>
    );
}

export default CharacterThumbnail;