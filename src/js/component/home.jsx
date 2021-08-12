import React, { useState } from "react";
import TrafficLight from "./trafficlight.jsx";

// Declaramos Home con su Hook useState inicializao al color de las luces
const Home = () => {
	const [color, setColor] = useState({
		stop: "red",
		warning: "yellow",
		go: "green"
	});

	// Devolvemos las luces con su brillo segun donde hagamos el click
	return (
		<div className="container text-center justify-content-center">
			<div className="containerLights row">
				<TrafficLight // Llamamos a TrafficLight 3 veces para ver que hacemos con las luces
					color={color.stop} //usamos las proptypes
					clickChange={() => {
						setColor({
							stop: "red glow",
							warning: "yellow",
							go: "green"
						});
					}}
				/>
				<TrafficLight
					color={color.warning} //usamos las proptypes
					clickChange={() => {
						setColor({
							stop: "red",
							warning: "yellow glow",
							go: "green"
						});
					}}
				/>
				<TrafficLight
					color={color.go} //usamos las proptypes
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
	);
};
export default Home;
