import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Button  = ({ text, handler, type ='primary' }) => <div className={`button button__${type}`} onClick={handler}>{text}</div>;
Button.propTypes = {
    text: PropTypes.string.isRequired,
    handler: PropTypes.func,
    type: PropTypes.string
};

export default Button;