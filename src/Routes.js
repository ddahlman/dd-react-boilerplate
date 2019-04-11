import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Portfolio/Portfolio';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
			<Route render={() => <h1>404 Page is not found</h1>} />
		</Switch>
	);
};

export default Routes;

