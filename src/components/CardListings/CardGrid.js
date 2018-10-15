import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const CardGrid = ({ items }) => {
    const cards = items.map((item, index) => <Card key={index} url={item.imageUrl} id={item.id} />);
    return (
        <div className="cardGrid">
            {cards}
        </div>
    );
};

CardGrid.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CardGrid;