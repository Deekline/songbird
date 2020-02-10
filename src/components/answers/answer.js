import React from "react";

import "./answer.css";


export const Answer = ( props ) => {

    const { birdsData, handleAnswer, } = props;


    return (
        <div className='ba-answer'>
            <ul className='ba-answer__list'>
                { birdsData.map( ( el ) => {
                    return (
                        <li className="ba-answer__list-item"
                            key={ el.id }
                            id={ el.id }
                            onClick={ handleAnswer }>
                            <span className='ba-answer__indicator'/>
                            { el.name }</li>
                    );
                } ) }
            </ul>
        </div>
    );
};