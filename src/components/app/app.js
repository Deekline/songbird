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
        maxScore: 6,
        stageId: 0,
        img: bird,
        birdsData: Data[ 0 ],
        answerId: '',
        question: Data[ 0 ][ this.rnd ],
        correctAnswerId: this.rnd,
        isCorrect: null,
        isActive: true,
    };


    nextLevel = () => {
        this.setState( ( prevState ) => {
            return {
                stageId: prevState.stageId + 1,
                birdsData: Data[ this.state.stageId ],
                question: Data[ this.state.stageId ][ this.rnd ],
                isCorrect: null,
                isActive: true,
                img: bird,
                answerId: '',
                color: null,
                maxScore: 6,
            };
        } );
    };



    handleAnswer = ( event ) => {

        const targetId = event.target.id;

        if ( (targetId - 1) === this.state.correctAnswerId ) {
            this.setState( ( prevState ) => {
                return {
                    isActive: false,
                    isCorrect: true,
                    score: prevState.score + this.state.maxScore
                };
            } );
        }


        this.setState( ( prevState ) => {
            if(prevState.maxScore === 0) {
                return {
                    answerId: targetId,
                }
            }
            return {
                answerId: targetId,
                maxScore: prevState.maxScore - 1
            };
        } );
    };

    render() {

        const {
            score, stageId, img, birdsData,
            answerId, question, isCorrect, isActive
        } = this.state;

        return (
            <div className="ba-app">
                <Header score={ score } stageId={ stageId }/>
                <CurrentQuestion img={ img }
                                 question={ question } isCorrect={ isCorrect }/>
                <div className='ba-app__answers'>
                    <Answer birdsData={ birdsData }
                            handleAnswer={ this.handleAnswer }
                            isCorrect={ isCorrect }/>
                    <Description birdsData={ birdsData }
                                 answerId={ answerId }/>
                </div>
                <button className="ba-app__btn"
                        onClick={ this.nextLevel }
                        disabled={ isActive }>
                    Next Level
                </button>
            </div>
        );
    }
}

