import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ShopItem extends Component {
    render() {
        return (
            <div className="ma3 w5">
                <div className="flex flex-column tl">
                  <span className="title pb2 f4">{this.props.item.name} <small className="pv1 ph2 dark-pink">{this.props.item.cost}</small></span>
                  <span className="db pv2 bt bw1 b--dcgs">{this.props.item.desc}</span>
                </div>
            </div>
        )
    }
}

// PropTypes
ShopItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ShopItem;
