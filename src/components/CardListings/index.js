import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCardsList } from '../../actions/cardsActions';
import CardGrid from './CardGrid';
import './styles.css';

class CardListings extends Component {

    componentDidMount() {
        this.props.getCardsList();
    }

    render = () => <CardGrid items={this.props.cards} />;
};

export default withRouter(connect(
    state => ({
        cards: state.cards.list
    }),
    { getCardsList }
)(CardListings));