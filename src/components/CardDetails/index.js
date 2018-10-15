import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LoadedImage from '../shared/LoadedImage';
import Button from '../shared/Button';
import { getCardDetails } from '../../actions/cardsActions';
import './styles.css';

class CardDetails extends Component {

    componentDidMount = () => this.props.getCardDetails(this.props.match.params.id)

    render() {
        const { title, buyUrl = '#', imageUrls } = this.props.selected;
        const images = imageUrls && imageUrls.map((url, index) => <LoadedImage key={`image-${index}`} url={url}/>)
        return (
            <div className="cardDetails">
                <div className="cardDetails__images">{images}</div>
                <div className="cardDetails__info">
                    <h3>{title}</h3>
                    {imageUrls && imageUrls.length && <div className="cardDetails__actions">
                        <Link to="/cards">
                            <Button text="Back" type="danger"/>
                        </Link>
                        <a href={buyUrl} target="_blank" rel="noopener noreferrer" >
                            <Button text="Buy"/>
                        </a>
                    </div>}
                </div>
            </div>
        );
    }
};

export default withRouter(connect(
    state => ({
        selected: state.cards.selected
    }), { getCardDetails }
)(CardDetails));