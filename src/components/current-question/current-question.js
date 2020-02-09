import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

import "./current-question.css";


export const CurrentQuestion = ( props ) => {

    const { img, question, isCorrect } = props;
    const [ image, setImage ] = useState( img );


    console.log(isCorrect);


    useEffect( () => {
        if ( isCorrect ) {
            setImage( question.image );
        }

    }, [isCorrect] );


    return (
        <div className="ba-question">
            <div className="ba-question">
                <img src={ image } alt="unknown" className="ba-image"/>
            </div>
            <div className="ba-question__main">
                <div className="ba-question__main-title">
                    { isCorrect ? <h1>{ question.name }</h1> : <h1>*********</h1> }
                </div>
                <div className="ba-question__main-voice">
                    <ReactAudioPlayer src={ question.audio } controls/>
                </div>
            </div>
        </div>
    );

};