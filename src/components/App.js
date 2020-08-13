import React, { Component } from 'react';
import { Portfolio } from './Portfolio/Portfolio';
import { about } from './../constants/About';
import { skills } from './../constants/Skills';
import { projects } from './../constants/Projects';
import {Contact} from './Contact/Contact'

import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			selectedSection: "",
			selectedHeading: "",
			selectedQuote: "",
			about: null,
			skills: null,
			projects: null,
			Contact: null,
			
		};
	}

	componentWillMount() {
		this.setState({
			about,
			skills,
			projects,
			Contact,
			selectedHeading: about.heading,
			selectedQuote: about.quote,
			selectedSection: "about"
		});
	}

	handleSectionClick = (section) => {
		this.setState({
			selectedSection: section,
			selectedHeading: this.state[section].heading,
			selectedQuote: this.state[section].quote
		})
	}

	render() {
		return (
			<div className="App">
				<Portfolio
					handleSectionClick={this.handleSectionClick}
					selectedSection={this.state.selectedSection}
					selectedHeading={this.state.selectedHeading}
					selectedQuote={this.state.selectedQuote}
					about={this.state.about}
					skills={this.state.skills}
					projects={this.state.projects}
					Contact={this.state.Contact}
					
				/>
			</div>
		);
	}
}

export default App;
