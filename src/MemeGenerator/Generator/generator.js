import React from "react";
import "./generator.css";

class Generator extends React.Component{
	constructor(){
		super()
		this.state={
			topText: "",
			bottomText: "",
			randomImg: "http://i.imgflip.com/1bij.jpg",
			allMemeImgs: []
		}
	}

	componentDidMount(){
		//most common use: API call to get data I need
		fetch("https://api.imgflip.com/get_memes")
			.then(response => response.json())
			.then(data => {
				//jsonify the memes.
				//pull the 'memes' array from the object
				//store memes arr in allmemeImgs state
				const {memes} = data.data
				this.setState({
					allMemeImgs: memes
				})
			})

	}

	fetchRandomMeme = (event) => {
		//prevent the submit action from refreshing the page
		event.preventDefault();

		const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
		
		const newMemeUrl = this.state.allMemeImgs[randomNum].url;
		
		this.setState({
			randomImg: newMemeUrl
		})

	}

	handleChange = (event) => {
		//pull name and value from the event's target (each input)
		const {name, value} = event.target

		this.setState({
			//whatever the name of the input is, replace the state value
			//with the value entered in the box
			[name]: value
		})
	}

	render(){
		return(
			<div className="formContainer">
				<p>Complete the fields below to create your custom meme!</p>
				<form className="memeForm" onSubmit={this.fetchRandomMeme}>
					<input
						type="text"
						name="topText"
						value={this.state.topText}
						placeholder="Top Text"
						onChange={this.handleChange}
					/>
					<input
						type="text"
						name="bottomText"
						value={this.state.bottomText}
						placeholder="Bottom Text"
						onChange={this.handleChange}
					/>
					<button className="formButton">Generate Meme</button>
				</form>
				<div className="memeContainer">
					<img src={this.state.randomImg} alt="random meme"/>
					<h2 className="topText">{this.state.topText}</h2>
					<h2 className="bottomText">{this.state.bottomText}</h2>

				</div>
			</div>
		)
	}
}
export default Generator;