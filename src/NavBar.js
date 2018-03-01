import React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';

function NavBar(props) {

	return(
		<div className="nav">
			<Grid container spacing={24}>
				 <Grid item xs={12} sm={6}>
				 	<h1><Link className="navbar-title" to="/">mira <b>taferner</b></Link></h1>
				 </Grid>
				 <div className="logo-line"></div>
				<Grid item xs={12} sm={2} className="app-nav-item">
					<Link to="/portfolio" className="nav-item">what I do</Link>
				</Grid>
				<Grid item xs={12} sm={2} className="app-nav-item">
					<Link to="/about" className="nav-item">who I am</Link>
				</Grid>
				<Grid item xs={12} sm={2} className="app-nav-item">
					<Link to="/contact" className="nav-item">get in touch</Link>
				</Grid>
			</Grid>
		</div>
	)
}





export default NavBar;