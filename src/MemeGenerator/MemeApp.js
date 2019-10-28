import React from "react";
import "./MemeApp.css";
import Header from "./Header/header.js";
import Generator from "./Generator/generator.js";

class MemeApp extends React.Component{
	constructor(){
		super()
		this.state={

		}
	}

	componentDidMount(){
		//most common use: API call to get data I need
	}

	render(){
		return(
			<div className="Container">
				<Header />
				<Generator />

			</div>

		)
	}
}

export default MemeApp;