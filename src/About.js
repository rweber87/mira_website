import React from 'react';
import headshot from './images/mira_headshot2.jpg';

function About() {

	return (
		<div className="content-container">
			<div className="left-menu-column">
				<li>Fun Facts</li>
				<li>- love cats, not in a weird way</li>
				<li>- fluent in bavarian and pig latin</li>
				<li>- night owl</li>
				<li>- did a tough mudder and hated<br/>&nbsp;&nbsp;the swimming part of it</li>
			</div>
			<div className="right-menu-column" >
				<div className="img-window">
					<img id={"headshot"} src={headshot} />
				</div>
				<div className="about-text" > Lorem ipsum dolor sit amet consectetur adipiscing elit vehicula, torquent leo scelerisque aenean arcu quam orci per, libero nullam id nibh eget sollicitudin magnis. Potenti nascetur nibh a gravida viverra praesent tristique dapibus auctor posuere porttitor, semper nec fames ridiculus commodo ligula at consequat justo mi, inceptos risus odio accumsan erat vestibulum elementum pretium donec cursus. Sem velit in pretium per habitasse sociosqu feugiat fringilla lectus, sapien nulla tempus pharetra tempor semper neque felis.<br/><br/>
				Himenaeos nec sapien curae dapibus conubia augue sociosqu, placerat torquent congue quam nam facilisis, faucibus suspendisse tempus per parturient duis. Vulputate a non mattis rhoncus sem mollis nulla natoque, platea sociosqu viverra scelerisque mus magna molestie, dictumst morbi est potenti feugiat taciti etiam. Phasellus euismod urna interdum a nostra class sagittis facilisis non, ante vulputate neque vel nam luctus placerat iaculis leo facilisi, curae conubia aliquam varius etiam dis quis sapien.
				</div>
				<div className="decorative-line"></div>
				<div className="about-text">
					<div className="title">Vita<br/><br/></div>
					<div className="work-one">Since 04.2018<br/>Grafikhaus Schlotterer KofmacherGbR</div>
					<div className="small-decorative-line"></div>
				</div>
			</div>
		</div>
	)

}

export default About;
