import React, { Component } from "react";

import "./description.css";


export default class Description extends Component {


    render() {

        return (
            <div className="ba-description">
                <div className="ba-description__about">
                    <img src="" alt="Voron" className='ba-image'/>
                    <div className="ba-description__about-info">
                        <h2 className="ba-description__about-title">Voron</h2>
                        <h4 className="ba-description__about-latin">Corvus</h4>
                        <p className="ba-description__about-voice">Here must be song</p>
                    </div>
                </div>
                <div className="ba-answer__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem blanditiis dicta dolore eius, esse fuga impedit laudantium minima quaerat, quo reprehenderit saepe veniam. Asperiores consectetur illum ipsum possimus temporibus!</p>
                </div>
            </div>
        );
    }
}