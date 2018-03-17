import React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';

function NavBar(props) {

	return(
		<div className="nav">
			<div className="left-nav">
				<h1 className="navbar-title">mira <b>taferner</b></h1>
				<div className="logo-line"></div>
			</div>
			<div className="right-nav">
				<Link to="/portfolio" className="nav-item">what I do</Link>
				<Link to="/about" className="nav-item">who I am</Link>
				<Link to="/contact" className="nav-item">get in touch</Link>
			</div>
		</div>
	)
}





export default NavBar;