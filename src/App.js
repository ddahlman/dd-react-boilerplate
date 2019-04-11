import React, { Component } from 'react';
import Routes from './Routes';
import { Link } from 'react-router-dom';
import style from './App.scss';

export default class App extends Component {

	render() {

		return (
			<section className={style.appContainer}>
				<nav clasName={style.header}>
					<Link exact to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/contact">Contact</Link>
				</nav>
				<Routes />

			</section>
		);
	}
}



