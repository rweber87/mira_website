import React from 'react';

function Contact() {
	return(
		<div className="content-container">
			<div className="left-menu-column social-icons">
				<li><div className="social-media facebook"><a href={"https://www.facebook.com/mira.taferner"} className={"fa fa-facebook"}></a></div></li>
				<li><div className="social-media linkedin"><a href={"https://www.linkedin.com/in/mira-taferner-5b54a563/"} className={"fa fa-linkedin"}></a></div></li>
				<li><div className="social-media instagram"><a href={"https://www.instagram.com/schnago/"} className={"fa fa-instagram"}></a></div></li>
			</div>
			<div className="image-row container">
				Here's some text!
			</div>
		</div>
	)
}

export default Contact;