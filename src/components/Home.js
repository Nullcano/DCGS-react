import React from "react";
import Character from "./Character";
import Floor from '../assets/img/wall-stripes-dark.gif';
import Wall from '../assets/img/wall-dcgs.gif';


let floor = {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '170px',
    backgroundImage: `url(${Floor})`,
    backgroundPosition: 'top center'
};
let wall = {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${Wall})`
};

const Home = () => (
    <div className="room">
        <h1 className="fw1">Home</h1>
        <div style={ wall }></div>
        <div style={ floor }></div>
        <Character />
    </div>
)

export default Home;