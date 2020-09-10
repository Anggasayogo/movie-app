import React from 'react'
import "./card.css";
import { Bintang } from '../../../assets';

const Cards = ({hero,content,recomenation}) => {
    return (
        <div className="card shadow-sm p-3 mb-5 bg-white rounded ">
            <img src={hero}  className="card-top" alt="Hero" id="hero"/>
            <div className="card-body">
                <p className="card-text text-center">{content}</p>
                <p className="card-text text-center">{recomenation}</p>
                <img src={Bintang} alt="bintang" id="bintang"/>
                <img src={Bintang} alt="bintang" id="bintang"/>
                <img src={Bintang} alt="bintang" id="bintang"/>
                <img src={Bintang} alt="bintang" id="bintang"/>
            </div>
        </div>
    )
}

export default Cards;
