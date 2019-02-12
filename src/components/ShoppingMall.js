import React from "react";
import Shop from './components/Shop';

const ShoppingMall = () => (
    <div className="w-50">
        <h3 className="f3 fw1">Shop</h3>
        <div className="flex flex-wrap">
            <Shop items={this.state.items} />
        </div>
    </div>
)

export default ShoppingMall;
