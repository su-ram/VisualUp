import React from 'react';
import "./Icon.css"

const icons = {
    "rightOutlined" : "/img/rightOutlined.png",
    "leftOutlined" : "/img/leftOutlined.png",
    "internet" : "/img/internet.png"
}

export function getIcon(type, style, style2){
    return (
        <span className="img-con" style={style}>
            <img src = {icons[type]} style={style2}/>
        </span>
    );
}