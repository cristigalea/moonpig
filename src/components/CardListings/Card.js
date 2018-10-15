import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LoadedImage from '../shared/LoadedImage';
import './styles.css';

const Card = ({ url, id }) => (
    <Link to={`/cards/${id}`} className="card">
        <LoadedImage url={url} />
    </Link>
);

Card.propTypes = {
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default Card;