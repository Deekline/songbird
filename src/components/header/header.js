import React from "react";
import "./header.css";
import logo from "./logo.4f82cd73.svg";


export const Header = ( props ) => {

    const { score, stageId } = props;
    const arr = Array.from( document.querySelectorAll( '.ba-header__element' ) );

    arr.map( el => {
        if ( Number(stageId) === Number(el.id) ) {
            return el.classList.add( 'active' );
        }
        return el.classList.remove( 'active' );
    } );


    return (
        <div className='ba-header'>
            <div className='ba-header__top'>
                <img src={ logo } alt="Long Bird" className="ba-header__top-logo"/>
                <div className="ba-header__top-score">
                    <span>Score</span>
                    <span>{ score }</span>
                </div>
            </div>
            <div className="ba-header__elements">
                <span className="ba-header__element" id='0'>Разминка</span>
                <span className="ba-header__element" id='1'>Воробьиные</span>
                <span className="ba-header__element" id='2'>Лесные птицы</span>
                <span className="ba-header__element" id='3'>Певчие птицы</span>
                <span className="ba-header__element" id='4'>Хищные птицы</span>
                <span className="ba-header__element" id='5'>Морские птицы</span>
            </div>
        </div>
    );
};
