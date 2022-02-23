import React from 'react';
import imgli from './images/Icon_linkedin.png';
import imgbe from './images/Icon_behance.png';

function Contact() {
	return(
		<div className="content-container">
			<div className="left-menu-column social-icons">
			</div>
			<div className="right-menu-column container">
				<div className="contact-paragraph-title">like my work?</div>
				<div className="contact-paragraph-content">Want to talk about your project? Then get in touch! <br/>I am looking forward to hearing from you.</div>
				<div className="contact-name">Mira Taferner</div>
				<div className="contact-email"><a className="email" href="mailto:mira.taferner@n0t.net">mira.taferner@n0t.net</a></div>
				{/*<div className="contact-phone-number">+49 152 540 78 139</div>*/}
				<div className="contact-social">or find me here &nbsp;&nbsp;<a href={"https://www.linkedin.com/in/mira-taferner-5b54a563/"}><img className="social-media linkedin" alt='LinkedIn' src={imgli} /></a>&nbsp;&nbsp; or here &nbsp;&nbsp;<a href={"https://www.behance.net/miratafernbf78"}><img className="social-media behance" alt='Behance' src={imgbe} /></a></div>
			</div>
		</div>
	)
}

export default Contact;