import React, { Component } from 'react';
import { Header } from "../header/header";
import { CurrentQuestion } from "../current-question/current-question";
import { Description } from "../description/description";
import { Answer } from "../answers/answer";
import Data from "../../store/data";

import "./app.css";
import bird from "./bird.06a46938.jpg";

export default class App extends Component {

    rnd = Math.floor( Math.random() * 6 );

    state = {
        score: 0,
        stageId: 0,
        img: bird,
        birdsData: Data[ 0 ],
        answerId: '',
        question: Data[ 0 ][ this.rnd ],
        correctAnswerId: this.rnd,
        isCorrect: null,
    };


    nextLevel = () => {
        this.setState( ( prevState ) => {
            return {
                stageId: prevState.stageId + 1,
                birdsData: Data[ this.state.stageId ],
                question: Data[ this.state.stageId ][ this.rnd ]
            };
        } );
    };

    handleAnswer = ( event ) => {
        const targetId = event.target.id ;

        if ( (targetId - 1) === this.state.correctAnswerId ) {
            document.querySelector('.ba-app__btn').removeAttribute('disabled')
            this.setState( () => {
                return {
                    isCorrect: true,
                };
            } );
        }

        this.setState( () => {
            return {
                answerId: targetId
            };
        } );
    };

    render() {

        const {
            score, stageId, img, birdsData,
            answerId, question, isCorrect } = this.state;

        return (
            <div className="ba-app">
                <Header score={ score } stageId={ stageId }/>
                <CurrentQuestion img={ img }
                                 question={ question } isCorrect={ isCorrect }/>
                <div className='ba-app__answers'>
                    <Answer birdsData={ birdsData }
                            handleAnswer={ this.handleAnswer }/>
                    <Description birdsData={ birdsData }
                                 answerId={ answerId }/>
                </div>
                <button className="ba-app__btn"
                        onClick={ this.nextLevel }
                        disabled>
                    Next Level
                </button>
            </div>
        );
    }
}

