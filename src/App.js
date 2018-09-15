import React, { Component } from 'react';
import TriangleDetector from './components/triangle-detector';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header data-ts="TopBar"></header>
				<main data-ts="Main">
					<div data-ts="MainContent">
						<TriangleDetector />
					</div>
				</main>
			</div>
		);
	}
}

export default App;
