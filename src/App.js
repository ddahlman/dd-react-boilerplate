import React, { Component } from 'react';
import Routes from './Routes';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import style from './App.scss';

export default class App extends Component {

	render() {

		return (
			<section className={style.appContainer}>
				<section className={style.header}>
					<nav className={style.headerContent}>
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
						<Link to="/contact">Contact</Link>
					</nav>
				</section>
				<Routes />
				<Footer />
			</section>
		);
	}
}



