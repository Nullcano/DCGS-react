import React from "react";
import { NavLink } from "react-router-dom";

const ContentMenu = () => (
    <div className="ContentMenu fixed bottom-0 mb4 w-100">
        <div class="mw8 center bg-dark-pink pa3 flex flex-row br-pill">
            <div class="absolute w4 h4 ba bw2 bg-gray br-100" style={{marginTop:-2.5 +'rem'}}></div>
            <NavLink class="link white pa3" to="/options" style={{marginLeft:10 +'rem'}}>Inventory</NavLink>
            <NavLink class="link white pa3" to="/wiki">Shop</NavLink>
            <NavLink class="link white pa3" to="/about">Morphing</NavLink>
      </div>
    </div>
)

export default ContentMenu;