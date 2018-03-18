import React from 'react';

function Contact() {
	return(
		<div className="content-container">
			<div className="left-menu-column social-icons">
			</div>
			<div className="right-menu-column container">
				<strong>like my work?</strong><br/><br/>
				Want to talk about your project? Then get in touch!<br/>
				I am looking forward to hearing from you.<br/><br/><br/><br/>
				<strong>Mira Taferner</strong><br/><br/>
				<a className="email" href="mailto:mira.taferner@n0t.net">mira.taferner@n0t.net</a><br/><br/>
				+49 152 540 78 139<br/><br/><br/><br/>
				<div>or find me here &nbsp;&nbsp;<a className="social-media linkedin" href={"https://www.linkedin.com/in/mira-taferner-5b54a563/"} className={"fa fa-linkedin"}></a>&nbsp;&nbsp; or here &nbsp;&nbsp;<a className="social-media instagram" href={"https://www.instagram.com/schnago/"} className={"fa fa-instagram"}></a></div>
				
				{/*<li><div className="social-media facebook"><a href={"https://www.facebook.com/mira.taferner"} className={"fa fa-facebook"}></a></div></li>
				<li><div className="social-media linkedin"><a href={"https://www.linkedin.com/in/mira-taferner-5b54a563/"} className={"fa fa-linkedin"}></a></div></li>
				<li><div className="social-media instagram"><a href={"https://www.instagram.com/schnago/"} className={"fa fa-instagram"}></a></div></li>*/}
			</div>
		</div>
	)
}

export default Contact;