import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player"

import "./description.css";


export const Description = ( props ) => {
    const { answerId, birdsData } = props;
    const [ data, setData ] = useState( {
        name: null,
        species: null,
        description: null,
        image: null,
        audio: null
    } );


    const renderData = answerId ? birdsData[ answerId - 1 ] : null;


    useEffect( () => {
        if ( !answerId ) {
            return;
        }
        setData( renderData );

    }, [ answerId ] );



    const renderInformation = (
        <div>
            <div className="ba-description__about">
                <img src={ data.image } alt="" className='ba-image'/>
                <div className="ba-description__about-info">
                    <h2 className="ba-description__about-title">{ data.name }</h2>
                    <h4 className="ba-description__about-latin">{ data.species }</h4>
                    <ReactAudioPlayer key={data.id} src={data.audio} controls/>
                </div>
            </div>
            <div className="ba-answer__text">
                <p>{ data.description }</p>
            </div>
        </div>
    );

    const defaultInformation = (
        <div>
            No Info
        </div>
    );

    return (
        <div className='ba-description'>
            { renderData === null ? defaultInformation : renderInformation }
        </div>
    );

};