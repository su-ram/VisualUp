import React, {Fragment} from 'react';

const icons = {
    "rightOutlined" : "/img/rightOutlined.png",
    "leftOutlined" : "/img/leftOutlined.png",
    "internet" : "/img/internet.png"
}

export function getIcon(type){
    return (
        <React.Fragment>
            <img src = {icons[type]}/>
        </React.Fragment>
    );
}