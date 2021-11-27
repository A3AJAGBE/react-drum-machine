import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class App extends React.Component {
 
	render() {
		return (
			<Container fluid id="App-Container">

				<header className="py-3 mb-4 text-center border-bottom">
					<h1 className="fw-bold text-md-start">A3AJAGBE Drum Machine</h1>
				</header>

				<main>
					<Container>
						<Row className="p-3 mb-5 rounded" id="Board-Row">
							<Col md={6} className="">
								<Button variant="secondary" size="lg">Q</Button>
								<Button variant="secondary" size="lg">W</Button>
								<Button variant="secondary" size="lg">E</Button>

								<Button variant="secondary" size="lg">A</Button>
								<Button variant="secondary" size="lg">S</Button>
								<Button variant="secondary" size="lg">D</Button>

								<Button variant="secondary" size="lg">Z</Button>
								<Button variant="secondary" size="lg">X</Button>
								<Button variant="secondary" size="lg">C</Button>
							</Col>
							<Col md={6} className="mx-auto">min 2</Col>
						</Row>
					</Container>
				</main>
			</Container>
		);
	}
}

export default App;
