import React from 'react'
import "./card.css";
import { Bintang } from '../../../assets';

const Cards = ({image,content,recomenation}) => {
    return (
        <div className="card shadow-sm p-3 mb-5 bg-white rounded ">
            <img src={image} className="card-top" alt="" id="images"/>
            <div className="card-body">
                <p className="card-text text-center">{content}</p>
                <p className="card-text text-center">{recomenation}</p>
                <img src={Bintang} id="bintang"/>
                <img src={Bintang} id="bintang"/>
                <img src={Bintang} id="bintang"/>
                <img src={Bintang} id="bintang"/>
            </div>
        </div>
    )
}

export default Cards;
