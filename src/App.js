import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
 
	render() {
		return (
			<Container fluid id="App">
				<header className="py-3 mb-4 border-bottom">
					<span className="fs-3 fw-bold">A3AJAGBE Drum Machine</span>
				</header>
				
				<h1>Wow</h1>
			</Container>
		);
	}
}

export default App;
