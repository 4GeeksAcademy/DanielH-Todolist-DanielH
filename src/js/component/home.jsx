import React from "react";
import { ListaTareas } from "./Tareas";
import { TareasForm } from "./TareasForm";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
				<ListaTareas/>

				<TareasForm/>

		</div>
	);
};

export default Home;
