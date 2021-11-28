import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class App extends React.Component {
 
	render() {
		return (
			<Container fluid id="App-Container">

				<header className="py-3 mb-4 text-center border-bottom">
					<h1 className="fw-bold text-md-start">A3AJAGBE Drum Machine</h1>
				</header>

				<main>
					<Container id="drum-machine">
						<Row className="p-3 rounded flex-md-row-reverse g-3 g-md-0" id="Board-Row">
							<Col md={6} className="">
								Display
							</Col>

							<Col md={6} className="mb-3 mb-md-0">
								Buttons
							</Col>
						</Row>
					</Container>
				</main>
			</Container>
		);
	}
}

export default App;
