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
						<Row className="p-3 mb-5 rounded" id="Board-Row">
							<Col md={6} className="Board-Grid" id="Board-Grid">
								<Button variant="secondary" size="lg" className="drum-pad">Q</Button>
								<Button variant="secondary" size="lg" className="drum-pad">W</Button>
								<Button variant="secondary" size="lg" className="drum-pad">E</Button>

								<Button variant="secondary" size="lg" className="drum-pad">A</Button>
								<Button variant="secondary" size="lg" className="drum-pad">S</Button>
								<Button variant="secondary" size="lg" className="drum-pad">D</Button>

								<Button variant="secondary" size="lg" className="drum-pad">Z</Button>
								<Button variant="secondary" size="lg" className="drum-pad">X</Button>
								<Button variant="secondary" size="lg" className="drum-pad">C</Button>
							</Col>
							<Col md={6} className="mx-auto">
							<Card bg="secondary" id="display">
								<Card.Header as="h3">Dashboard </Card.Header>
								<Card.Body>
									<Card.Title>Main Display</Card.Title>
								</Card.Body>
							</Card>
							</Col>
						</Row>
					</Container>
				</main>
			</Container>
		);
	}
}

export default App;
