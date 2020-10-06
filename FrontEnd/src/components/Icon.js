import React, {Fragment} from 'react';

const icons = {
    "rightOutlined" : "/img/rightOutlined.png",
    "internet" : "/img/internet.png"
}

export function getIcon(type){
    return (
        <React.Fragment>
            <img src = {icons[type]}/>
        </React.Fragment>
    );
}