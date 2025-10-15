import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//icono
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

//create your first component
const Home = (props) => {
	return (
		<div className="row">	
			<div className="col">
				<FontAwesomeIcon icon={faClock} />
			</div>
			<div className="col">{props.digitSix}</div>
			<div className="col">{props.digitFive}</div>
			<div className="col">{props.digitFour}</div>
			<div className="col">{props.digitThree}</div>
			<div className="col">{props.digitTwo}</div>
			<div className="col">{props.digitOne}</div> 
		</div>
	);
};

export default Home;