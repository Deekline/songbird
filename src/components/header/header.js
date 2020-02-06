import React, { Component } from "react";
import "./header.css";
import logo from "./logo.4f82cd73.svg";


export default class Header extends Component {


    render() {

        return (
            <div className='ba-header'>
                <div className='ba-header__top'>
                    <img src={ logo } alt="Long Bird" className="ba-header__top-logo"/>
                    <div className="ba-header__top-score">
                        <span>Score</span>
                        <span>0</span>
                    </div>
                </div>
                <div className="ba-header__elements">
                    <span className="ba-header__element">Разминка</span>
                    <span className="ba-header__element">Воробьиные</span>
                    <span className="ba-header__element">Лесные птицы</span>
                    <span className="ba-header__element">Певчие птицы</span>
                    <span className="ba-header__element">Хищные птицы</span>
                    <span className="ba-header__element">Морские птицы</span>
                </div>
            </div>
        );
    }
}