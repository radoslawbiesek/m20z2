import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Navigation}>
                    <IndexRoute component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/hello/:name' component={Hello} />
                    <Route path='*' component={PageNotFound} />
                </Route>
            </Router>
        );
    }
}

const Navigation = props => (
    <div>
        <ul>
            <li><Link to='/' activeStyle={{color: '#48abee'}} onlyActiveOnIndex>Home</Link></li>
            <li><Link to='/contact' activeStyle={{color: '#48abee'}} onlyActiveOnIndex>Contact</Link></li>
        </ul>
    {props.children}
    </div>
);

const Home = () => <h1>Home component</h1>
const Contact = () => <h1>Contact component</h1>
const PageNotFound = () => <h1>404 Not found</h1>
const Hello = (props) => <h1>Hello, {props.params.name}</h1>

export default App;