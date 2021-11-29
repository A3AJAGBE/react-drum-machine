import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class DrumPad extends React.Component {
	render() {
		return (
			<Col md={6} className="mb-3 Board-Grid">
				<Button variant="secondary" size="lg" className="drum-pad" id="drum-pad-q">Q
				</Button>
				<Button variant="secondary" size="lg" className="drum-pad" id="drum-pad-w">W</Button>
				<Button variant="secondary" size="lg" className="drum-pad" id="drum-pad-e">E</Button>

				<Button variant="secondary" size="lg" className="drum-pad" id="drum-pad-a">A</Button>
				<Button variant="secondary" size="lg" className="drum-pad" id="drum-pad-s">S</Button>
				<Button variant="secondary" size="lg" className="drum-pad" id="drum-pad-d">D</Button>

				<Button variant="secondary" size="lg" className="drum-pad" id="drum-pad-z">Z</Button>
				<Button variant="secondary" size="lg" className="drum-pad" id="drum-pad-x">X</Button>
				<Button variant="secondary" size="lg" className="drum-pad" id="drum-pad-c">C</Button>
			</Col>
		);
	}
}

class App extends React.Component {
 
	render() {
		return (
			<Container fluid id="App-Container">

				<header className="py-3 mb-4 text-center border-bottom">
					<h1 className="fw-bold text-md-start px-2">A3AJAGBE Drum Machine</h1>
				</header>

				<main>
					<Container id="drum-machine">
						<Row className="p-3 rounded flex-md-row-reverse g-4" id="Board-Row">
							<Col md={6} className="">
								<Card bg="secondary" id="display">
									<Card.Header as="h3">Dashboard </Card.Header>
									<Card.Body>
										<Card.Title>Main Display</Card.Title>
									</Card.Body>
								</Card>
							</Col>

							<DrumPad />
						</Row>
					</Container>
				</main>
			</Container>
		);
	}
}

export default App;
