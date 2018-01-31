import React, { Component } from 'react';
import { Link } from 'react-router-dom'

function NavBar(props) {

	return(
		<div className="navbar-fixed right">
				<Link to="/home">Home</Link>
				<br/>
				<Link to="/portfolio">Portfolio</Link>
				<br/>
				<Link to="/about">About</Link>
				<br/>
				<Link to="/contact">Contact</Link>
				<br/>
		</div>
	)
}





export default NavBar;