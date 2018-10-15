import React, {Component} from 'react';
import { Route, Switch, withRouter, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.css';

import CardListings from './CardListings';
import CardDetails from './CardDetails';

class App extends Component {
    render() {
        const { isSpinnerShowing } = this.props;

        return (
            <div className="App">
                <Link to="/">
                    <h1 className="App__title">Cards</h1>
                </Link>
                <hr />
                <div>
                    {isSpinnerShowing && <div className="App__loading">Loading...</div>}
                    <Switch>
                        <Redirect exact from="/" to="/cards" />
                        <Route path="/cards/:id" component={CardDetails} />
                        <Route path="/cards" component={CardListings} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(
    state => ({
        isSpinnerShowing: state.layout.isSpinnerShowing
    })
)(App));
