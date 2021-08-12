import React, { Fragment, useState } from "react";
import TrafficLight from "./trafficlight.jsx";

const Home = () => {
	const [color, setColor] = useState({
		stop: "red",
		warning: "yellow",
		go: "green"
	});

	return (
		<Fragment>
			<div className="container text-center justify-content-center">
				<div className="containerLights row">
					<TrafficLight
						color={color.stop}
						clickChange={() => {
							setColor({
								stop: "red glow",
								warning: "yellow",
								go: "green"
							});
						}}
					/>
					<TrafficLight
						color={color.warning}
						clickChange={() => {
							setColor({
								stop: "red",
								warning: "yellow glow",
								go: "green"
							});
						}}
					/>
					<TrafficLight
						color={color.go}
						clickChange={() => {
							setColor({
								stop: "red",
								warning: "yellow",
								go: "green glow "
							});
						}}
					/>
				</div>
			</div>
		</Fragment>
	);
};
export default Home;
