import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div>	
			<div>reloj</div>		
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