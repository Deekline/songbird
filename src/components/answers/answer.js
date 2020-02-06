import React, { Component } from "react";

import "./answer.css"


export default class Answer extends Component {

    render() {


        return (
            <div className='ba-answer'>
                <ul className='ba-answer__list'>
                    <li className="ba-answer__list-item">Voron</li>
                    <li className="ba-answer__list-item">Juravel</li>
                    <li className="ba-answer__list-item">Sinitsa</li>
                    <li className="ba-answer__list-item">Lastochka</li>
                    <li className="ba-answer__list-item">Kukushka</li>
                    <li className="ba-answer__list-item">Ovca</li>
                </ul>
            </div>
        )
    }
}