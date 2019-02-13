import React from "react";
import { NavLink } from "react-router-dom";
import Map from '../assets/img/map.gif';
import Home from '../assets/img/home.svg';
import Room from '../assets/img/room.svg';
import Office from '../assets/img/monitor.svg';
import Farm from '../assets/img/farm.svg';
import Settings from '../assets/img/settings.svg';
import Wiki from '../assets/img/wiki.svg';
import About from '../assets/img/info.svg';
import More from '../assets/img/more.svg';

const RightMenu = () => (
    <nav className="GameMenu Right fixed right-0 bottom-0 w4">
        <ul className="list pa0 flex flex-column items-end">
        <li className="mh2 mv1">
            <NavLink className="link white grow" to="/">
                <img className="w2 h2 pa3 bg-blue br3" alt="Home" src={Home} />
            </NavLink>
            <ul className="list pa0">
                <li>
                    <NavLink className="mv1 flex flex-row items-center w5 link white pa2 grow bg-blue br3" to="/">
                        <img className="mh2 w2 h2" alt="Room" src={Room} />
                        <span className="f3">Room</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="mv1 flex flex-row items-center w5 link white pa2 grow bg-blue br3" to="/">
                        <img className="mh2 w2 h2" alt="Office" src={Office} />
                        <span className="f3">Office</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="mv1 flex flex-row items-center w5 link white pa2 grow bg-blue br3" to="/">
                        <img className="mh2 w2 h2" alt="Farm" src={Farm} />
                        <span className="f3">Farm</span>
                    </NavLink>
                </li>
            </ul>
        </li>
        <li className="mh2 mv1">
            <NavLink className="link white grow" to="/">
                <img className="w2 h2 pa3 bg-blue br3" alt="Home" src={Home} />
            </NavLink>
            <ul className="list pa0">
                <li>
                    <NavLink className="mv1 flex flex-row items-center w5 link white pa2 grow bg-blue br3" to="/">
                        <img className="mh2 w2 h2" alt="Room" src={Room} />
                        <span className="f3">Room</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="mv1 flex flex-row items-center w5 link white pa2 grow bg-blue br3" to="/">
                        <img className="mh2 w2 h2" alt="Office" src={Office} />
                        <span className="f3">Office</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="mv1 flex flex-row items-center w5 link white pa2 grow bg-blue br3" to="/">
                        <img className="mh2 w2 h2" alt="Farm" src={Farm} />
                        <span className="f3">Farm</span>
                    </NavLink>
                </li>
            </ul>
        </li>
        <li className="mh2 mv1">
            <NavLink className="link white grow" to="/">
                <img className="w2 h2 pa3 bg-blue br3" alt="Home" src={Home} />
            </NavLink>
            <ul className="list pa0">
                <li>
                    <NavLink className="mv1 flex flex-row items-center w5 link white pa2 grow bg-blue br3" to="/">
                        <img className="mh2 w2 h2" alt="Room" src={Room} />
                        <span className="f3">Room</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="mv1 flex flex-row items-center w5 link white pa2 grow bg-blue br3" to="/">
                        <img className="mh2 w2 h2" alt="Office" src={Office} />
                        <span className="f3">Office</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="mv1 flex flex-row items-center w5 link white pa2 grow bg-blue br3" to="/">
                        <img className="mh2 w2 h2" alt="Farm" src={Farm} />
                        <span className="f3">Farm</span>
                    </NavLink>
                </li>
            </ul>
        </li>
        <div className="ProgressRight ProgressNrg bg-dark">
            <div className="ProgressNrgValue w-80 h-100 bg-dcgs"></div>
        </div>
        <div className="ProgressRight ProgressLvl bg-dark">
            <div className="ProgressLvlValue w-40 h-100 bg-dcgs"></div>
        </div>
        <div className="Map relative ma3 w4 h4 br-100 bg-gray" style={{backgroundImage: 'url('+ Map +')'}}></div>
        </ul>
    </nav>
)

export default RightMenu;