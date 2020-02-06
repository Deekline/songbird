import React, { Component } from "react";

import "./current-question.css"


export default class CurrentQuestion extends Component {


    render() {


        return (
            <div className="ba-question">
                <div className="ba-question">
                    <img src="" alt="unknown" className="ba-image"/>
                </div>
                <div className="ba-question__main">
                    <div className="ba-question__main-title">
                        <h1>********</h1>
                    </div>
                    <div className="ba-question__main-voice">***********</div>
                </div>
            </div>
        )
    }
}