import React, { Component } from 'react';
import ShopItem from './ShopItem';
import PropTypes from 'prop-types';

class Shop extends Component {
    render() {
        return this.props.items.map((item) => (
           <ShopItem key={item.id} item={item} />
        ));
    }
}

// PropTypes
Shop.propTypes = {
    item: PropTypes.array.isRequired
}

export default Shop;
