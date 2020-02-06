import React, { Component } from 'react';
import Header from "../header/header";
import CurrentQuestion from "../current-question/current-question";
import Description from "../description/description";
import Answer from "../answers/answer";

import "./app.css"
import bird from "./bird.06a46938.jpg"

export default class App extends Component{

    state = {
        score: 0,
        stage: 0,
        img: bird,

    };

    nextLevel = () => {

    }

    render() {
        return (
            <div className="ba-app">
                <Header />
                <CurrentQuestion />
                <div className='ba-app__answers'>
                    <Answer />
                    <Description />
                </div>
                <button className="ba-app__btn"
                        onClick={this.nextLevel}>
                    Next Level</button>
            </div>
        );
    }


}

