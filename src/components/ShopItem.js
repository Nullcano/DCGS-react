import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ShopItem extends Component {
    render() {
        return (
            <div class="ma3 w5">
                <div class="flex flex-column tl">
                  <span class="title pb2 f4">{this.props.item.name} <small class="pv1 ph2 dark-pink">{this.props.item.cost}</small></span>
                  <span class="db pv2 bt bw1 b--dcgs">{this.props.item.desc}</span>
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
