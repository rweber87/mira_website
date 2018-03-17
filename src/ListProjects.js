import React, { Component } from 'react';
import Project from './Project.js';
import img1 from './images/Fitz_landingpage.jpg';
import img2 from './images/fitz_images/Fitz_1.jpg';
import img3 from './images/fitz_images/Fitz_2.jpg';
import img4 from './images/fitz_images/Fitz_3.jpg';
import img5 from './images/fitz_images/Fitz_4.jpg';
import img6 from './images/fitz_images/Fitz_5.jpg';
import img7 from './images/fitz_images/Fitz_6.jpg';
import img8 from './images/fitz_images/Fitz_7.jpg';
import img9 from './images/fitz_images/Fitz_8.jpg';
import img10 from './images/fitz_images/Fitz_9.jpg';
import img11 from './images/fitz_images/Fitz_10.jpg';
import img12 from './images/fitz_images/Fitz_11.jpg';
import img13 from './images/Zeitscheine_Landingpage.jpg'
import img14 from './images/zeit_images/Zeitschein_1.jpg'
import img15 from './images/zeit_images/Zeitschein_2.jpg'
import img16 from './images/zeit_images/Zeitschein_3.jpg'
import img17 from './images/zeit_images/Zeitschein_4.jpg'
import img18 from './images/Haufe_Landingpage.jpg'
import img19 from './images/haufe_images/Haufe_TG_1.jpg'
import img20 from './images/haufe_images/Haufe_TG_2.jpg'
import img21 from './images/haufe_images/Haufe_TG_3.jpg'
import img22 from './images/BayLGB_Landingpage.jpg'
import img23 from './images/bay_images/BayLGB_1.jpg'
import img24 from './images/PBB_Landingpage.jpg'
import img25 from './images/pbb_images/pbb_Neujahrsgruesse_2016_klein.mp4'
import img26 from './images/pbb_images/pbb_Weihnachtsgruesse_2016_klein.mp4'
import img27 from './images/pbb_images/RZ_pbb_Neujahrskarte_digital_2017_klein.mp4'
import img28 from './images/pbb_images/RZ_pbb_Weihnachtskarte_digital_2017_klein.mp4'
import img29 from './images/Kinderliederbuch_landingpage.jpg'
import img30 from './images/kinder_images/Kinderliederbuch_1.jpg'
import img31 from './images/kinder_images/Kinderliederbuch_2.jpg'
import img32 from './images/kinder_images/Kinderliederbuch_3.jpg'
import img33 from './images/kinder_images/Kinderliederbuch_4.jpg'


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
					modal: [img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]
				},
				{
					title: "print",
					subtitle: "cover design for a book series",
					modal_text: "sketching, scribbling, doodeling... so much fun to just be creative on a piece of gum wrapper. in this case, I was allowed to make sketch notes on 6 different topics. the covers of this series of books was for the 20 year aniversary of this particular format of self help books. the covers in 6 different colors looks especially nice in the »box« that they were presented in in the book shops.",
					img: img13,
					modal: [img14, img15, img16, img17 ]
				},
				{
					title: "print",
					subtitle: "Michael Fitz CD booklet",
					modal_text: "one of the most time consuming projects I have ever worked on. each of the 23 songs on the cd received its own design. Michale gave me paintings that his wife had made and a hard drive full of pictures he took of the sky and asked me to just be free and creating the visual for each song. I definitely got to know photoshop a bit better. I wish projects like theses would happen more often.",
					img: img18,
					modal: [img19, img20, img21 ]
				},
				{
					title: "print",
					subtitle: "pamphlets for lumber a company",
					modal_text: "sketching, scribbling, doodeling... so much fun to just be creative on a piece of gum wrapper. in this case, I was allowed to make sketch notes on 6 different topics. the covers of this series of books was for the 20 year aniversary of this particular format of self help books. the covers in 6 different colors looks especially nice in the »box« that they were presented in in the book shops.",
					img: img22,
					modal: [img23]
				},
				{
					title: "print",
					subtitle: "pamphlets for idk???",
					modal_text: "here are more pamphlets lorem ipsum",
					img: img24,
					modal: [img25, img26, img27, img28]
				},
				{
					title: "print",
					subtitle: "building a deck",
					modal_text: "for this project i actually learned how to build a deck. the client gave almost no instruction and i built this from scratch...pun intended",
					img: img29,
					modal: [img30, img31, img32, img33]
				},
				// {
				// 	title: "print",
				// 	subtitle: "wedding invitations",
				// 	modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
				// 	img: img40,
				// 	modal: [img41, img42, img43, img44, img45]
				// },
				// {
				// 	title: "print",
				// 	subtitle: "language school promo material",
				// 	modal_text: "here is some swag i made for a language school around blah blah blah",
				// 	img: img46,
				// 	modal: [img47, img48]
				// },
				// {
				// 	title: "other",
				// 	subtitle: "designs for wall decals",
				// 	modal_text: "a good friend had a baby and asked me to design some wall decals for the baby's room. i think they came out quite neat",
				// 	img: img49,
				// 	modal: [img50, img51, img52, img53, img54, img55, img56, img57 ]
				// },
				// {
				// 	title: "other",
				// 	subtitle: "CD cover design",
				// 	modal_text: "when my friend francois called me to ask if I would be willing to help him do the cover design for his new CD I was very excited. I love listening to him when he talks about his music, he is so passionate, so on fire. he invited me for dinner, told me about the idea behind his new cd and what it means to him. It's about his journey. »RESTLESS« is the perfect name for this album, especially if you know francois ;-) once the name was there, the rest just fell into place.",
				// 	img: img58,
				// 	modal: [img59, img60]
				// },
				// {
				// 	title: "logo and print",
				// 	subtitle: "cosmetic company designs",
				// 	modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
				// 	img: img61,
				// 	modal: [img62, img63, img64 ]
				// },
				// {
				// 	title: "logos",
				// 	subtitle: "examples of logos",
				// 	modal_text: "a beautiful wedding that was accompanied by these amazing inviations, name holders etc...",
				// 	img: img65,
				// 	modal: [img66, img67, img68, img69, img70, img71, img72, img73, img74, img75 ]
				// },
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

