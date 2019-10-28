import React from "react";
import "./header.css"
//functional component
//can be used when you want to only display something. No logic
//no class needed
//no render needed
//still need to import React cuz of JSX
//still need to export so it can be imported on other files
function header(){

		return(
			<header className="headerContainer">
				<img
					src="https://www.sccpre.cat/mypng/full/184-1842586_dog-bulldog-puppy-cartoon-cute-bulldog-drawing.png"
					alt="bulldog puppy"
				/>
				<p className="title">Mila's Meme Generator</p>
			</header>
		)

}

export default header;
