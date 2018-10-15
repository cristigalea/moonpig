import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class LoadedImage extends Component {

    static propTypes = {
        url: PropTypes.string
    };

    state = {
        isError: false,
        isLoaded: false
    };

    onLoadImage = () => {
        this.setState({
            isError: false,
            isLoaded: true
        });
    };

    onErrorImage = () => {
        this.setState({
            isError: true
        });
    };

    render() {
        const { url } = this.props;
        const { isLoaded, isError } = this.state;
        const imgStyle = { opacity: isLoaded && !isError ? 1 : 0 };

        return (
            <div className="image__wrapper">
                <img className="image__content" style={imgStyle} src={url} onLoad={this.onLoadImage} onError={this.onErrorImage} />
                {!isLoaded && !isError && <img className="image__loader" src="https://dosrgfkou9o2m.cloudfront.net/cdn/3.0.0.16195/responsivemasterpage/img/3-dots@2x.gif"/>}
                {isError && <img className="image__error" src="error-image.png"/>}
            </div>
        )
    }
}