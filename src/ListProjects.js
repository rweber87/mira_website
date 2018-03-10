import React, { Component } from 'react';
import Project from './Project.js';
import img1 from './images/Cover_Landingpage.jpg';
import img2 from './images/book_covers/Book1.jpg';
import img3 from './images/book_covers/Book2.jpg';
import img4 from './images/book_covers/Book3.jpg';
import img5 from './images/Haufe_Landingpage.jpg';
import img6 from './images/haufe_collection/haufe1.jpg';
import img7 from './images/haufe_collection/haufe2.jpg';
import img8 from './images/haufe_collection/haufe3.jpg';
import img9 from './images/Fitz_landingpage.jpg';
import img10 from './images/fitz_images/fitz1.jpg';
import img11 from './images/fitz_images/fitz2.jpg';
import img12 from './images/fitz_images/fitz3.jpg';
import img13 from './images/fitz_images/fitz4.jpg';
import img14 from './images/fitz_images/fitz5.jpg';
import img15 from './images/fitz_images/fitz6.jpg';
import img16 from './images/fitz_images/fitz7.jpg';
import img17 from './images/fitz_images/fitz8.jpg';
import img18 from './images/fitz_images/fitz9.jpg';
import img19 from './images/fitz_images/fitz10.jpg';
import img20 from './images/fitz_images/fitz11.jpg';
import img21 from './images/Kloepfer_Landingpage.jpg';
import img22 from './images/kloepfer_images/kloepfer1.jpg';
import img23 from './images/kloepfer_images/kloepfer2.jpg';
import img24 from './images/kloepfer_images/kloepfer3.jpg';
import img25 from './images/kloepfer_images/kloepfer4.jpg';
import img26 from './images/kloepfer_images/kloepfer5.jpg';
import img27 from './images/kloepfer_images/kloepfer6.jpg';
import img28 from './images/kloepfer_images/kloepfer7.jpg';
import img29 from './images/kloepfer_images/kloepfer8.jpg';
import img30 from './images/kloepfer_images/kloepfer9.jpg';
import img31 from './images/kloepfer_images/kloepfer10.jpg';
import img32 from './images/kloepfer_images/kloepfer11.jpg';
import img33 from './images/BayLGB_Landingpage.jpg';
import img34 from './images/baylgb_images/bay1.jpg';
import img35 from './images/Joe_Landingpage.jpg';
import img36 from './images/joe_images/joe1.jpg';
import img37 from './images/joe_images/joe2.jpg';
import img38 from './images/joe_images/joe3.jpg';
import img39 from './images/joe_images/joe4.jpg';
import img40 from './images/WillowGareth_Landingpage.jpg';
import img41 from './images/willow_gareth_images/wg1.jpg';
import img42 from './images/willow_gareth_images/wg2.jpg';
import img43 from './images/willow_gareth_images/wg3.jpg';
import img44 from './images/willow_gareth_images/wg4.jpg';
import img45 from './images/willow_gareth_images/wg5.jpg';
import img46 from './images/SpeakUp_Landingpage.jpg';
import img47 from './images/speakup_images/su1.jpg';
import img48 from './images/speakup_images/su2.jpg';
import img49 from './images/Karina_Landingpage.jpg';
import img50 from './images/karina_images/karina1.jpg';
import img51 from './images/karina_images/karina2.jpg';
import img52 from './images/karina_images/karina3.jpg';
import img53 from './images/karina_images/karina4.jpg';
import img54 from './images/karina_images/karina5.jpg';
import img55 from './images/karina_images/karina6.jpg';
import img56 from './images/karina_images/karina7.jpg';
import img57 from './images/karina_images/karina8.jpg';
import img58 from './images/EasyFrank_Landingpage.jpg';
import img59 from './images/easy_frank_images/ef1.jpg';
import img60 from './images/easy_frank_images/ef2.jpg';
import img61 from './images/Theresa_Landingpage.jpg';
import img62 from './images/theresa_images/t1.jpg';
import img63 from './images/theresa_images/t2.jpg';
import img64 from './images/theresa_images/t3.jpg';
import img65 from './images/Logos_Landingpage.jpg';
import img66 from './images/logo_images/logo1.jpg';
import img67 from './images/logo_images/logo2.jpg';
import img68 from './images/logo_images/logo3.jpg';
import img69 from './images/logo_images/logo4.jpg';
import img70 from './images/logo_images/logo5.jpg';
import img71 from './images/logo_images/logo6.jpg';
import img72 from './images/logo_images/logo7.jpg';
import img73 from './images/logo_images/logo8.jpg';
import img74 from './images/logo_images/logo9.jpg';
import img75 from './images/logo_images/logo10.jpg';

class ListProjects extends Component {

	constructor(props) {
		super(props)

		this.state = {
			projects: [
				{
					title: "print",
					subtitle: "some book covers",
					modal_text: "designing book covers is fun. not all of these actually made it to the book shelf but they are pretty enough to go on my webpage.",
					img: img1,
					modal: [img2, img3, img4]
				},
				{
					title: "print",
					subtitle: "cover design for a book series",
					modal_text: "sketching, scribbling, doodeling... so much fun to just be creative on a piece of gum wrapper. in this case, I was allowed to make sketch notes on 6 different topics. the covers of this series of books was for the 20 year aniversary of this particular format of self help books. the covers in 6 different colors looks especially nice in the »box« that they were presented in in the book shops.",
					img: img5,
					modal: [img6, img7, img8]
				},
				{
					title: "print",
					subtitle: "Michael Fitz CD booklet",
					modal_text: "one of the most time consuming projects I have ever worked on. each of the 23 songs on the cd received its own design. Michale gave me paintings that his wife had made and a hard drive full of pictures he took of the sky and asked me to just be free and creating the visual for each song. I definitely got to know photoshop a bit better. I wish projects like theses would happen more often.",
					img: img9,
					modal: [img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20]
				},
				{
					title: "print",
					subtitle: "pamphlets for lumber a company",
					modal_text: "sketching, scribbling, doodeling... so much fun to just be creative on a piece of gum wrapper. in this case, I was allowed to make sketch notes on 6 different topics. the covers of this series of books was for the 20 year aniversary of this particular format of self help books. the covers in 6 different colors looks especially nice in the »box« that they were presented in in the book shops.",
					img: img21,
					modal: [img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32]
				},
				{
					title: "print",
					subtitle: "pamphlets for idk???",
					modal_text: "here are more pamphlets lorem ipsum",
					img: img33,
					modal: [img34]
				},
				{
					title: "print",
					subtitle: "building a deck",
					modal_text: "for this project i actually learned how to build a deck. the client gave almost no instruction and i built this from scratch...pun intended",
					img: img35,
					modal: [img36, img37, img38, img39]
				},
				{
					title: "print",
					subtitle: "wedding invitations",
					modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
					img: img40,
					modal: [img41, img42, img43, img44, img45]
				},
				{
					title: "print",
					subtitle: "language school promo material",
					modal_text: "here is some swag i made for a language school around blah blah blah",
					img: img46,
					modal: [img47, img48]
				},
				{
					title: "other",
					subtitle: "designs for wall decals",
					modal_text: "a good friend had a baby and asked me to design some wall decals for the baby's room. i think they came out quite neat",
					img: img49,
					modal: [img50, img51, img52, img53, img54, img55, img56, img57 ]
				},
				{
					title: "other",
					subtitle: "CD cover design",
					modal_text: "when my friend francois called me to ask if I would be willing to help him do the cover design for his new CD I was very excited. I love listening to him when he talks about his music, he is so passionate, so on fire. he invited me for dinner, told me about the idea behind his new cd and what it means to him. It's about his journey. »RESTLESS« is the perfect name for this album, especially if you know francois ;-) once the name was there, the rest just fell into place.",
					img: img58,
					modal: [img59, img60]
				},
				{
					title: "logo and print",
					subtitle: "cosmetic company designs",
					modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
					img: img61,
					modal: [img62, img63, img64 ]
				},
				{
					title: "logos",
					subtitle: "examples of logos",
					modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
					img: img65,
					modal: [img66, img67, img68, img69, img70, img71, img72, img73, img74, img75 ]
				},
			]    
		};
	}

	render () {
		const projects = this.state.projects.map ( project => 
				<Project project={project}/>
			)
		return(
			<div className="content-container">
				<div className="left-menu-column">
					<li>all</li>
					<li>print</li>
					<li>digital</li>
					<li>logo</li>
					<li>others</li>
				</div>
				<div className="image-row container">
					{projects}
				</div>
			</div>
		);
	}
}

export default ListProjects;

