import React from 'react';

function Contact() {
	return(
		<div className="content-container">
			<div className="left-menu-column social-icons">
			</div>
			<div className="right-menu-column container">
				<div className="contact-paragraph-title">like my work?</div>
				<div className="contact-paragraph-content">Want to talk about your project? Then get in touch! I am looking forward to hearing from you.</div>
				<div className="contact-name">Mira Taferner</div>
				<div className="contact-email"><a className="email" href="mailto:mira.taferner@n0t.net">mira.taferner@n0t.net</a></div>
				<div className="contact-phone-number">+49 152 540 78 139</div>
				<div className="contact-social">or find me here &nbsp;&nbsp;<a className="social-media linkedin" href={"https://www.linkedin.com/in/mira-taferner-5b54a563/"} className={"fa fa-linkedin"}></a>&nbsp;&nbsp; or here &nbsp;&nbsp;<a className="social-media instagram" href={"https://www.instagram.com/schnago/"} className={"fa fa-instagram"}></a></div>
				
				{/*<li><div className="social-media facebook"><a href={"https://www.facebook.com/mira.taferner"} className={"fa fa-facebook"}></a></div></li>
				<li><div className="social-media linkedin"><a href={"https://www.linkedin.com/in/mira-taferner-5b54a563/"} className={"fa fa-linkedin"}></a></div></li>
				<li><div className="social-media instagram"><a href={"https://www.instagram.com/schnago/"} className={"fa fa-instagram"}></a></div></li>*/}
			</div>
		</div>
	)
}

export default Contact;