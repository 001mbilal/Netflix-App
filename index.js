import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css';
import Sdata from './Sdata';

console.log(Sdata[0].title);

ReactDom.render( <
    App / > , document.getElementById("root")
)