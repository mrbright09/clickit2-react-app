import React from 'react';
import './App.css';
const Game = props => (
    <div className="game">
        <div className="flexGrid">{props.children}</div>
    </div>
);
export default Game;