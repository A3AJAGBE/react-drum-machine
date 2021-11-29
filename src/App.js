import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HeaterKitSounds = [
	{
	  keyCode: 81,
	  keyTrigger: 'Q',
	  id: 'Heater-1',
	  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
	},
	{
	  keyCode: 87,
	  keyTrigger: 'W',
	  id: 'Heater-2',
	  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
	},
	{
	  keyCode: 69,
	  keyTrigger: 'E',
	  id: 'Heater-3',
	  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
	},
	{
	  keyCode: 65,
	  keyTrigger: 'A',
	  id: 'Heater-4',
	  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
	},
	{
	  keyCode: 83,
	  keyTrigger: 'S',
	  id: 'Clap',
	  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
	},
	{
	  keyCode: 68,
	  keyTrigger: 'D',
	  id: 'Kick',
	  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
	},
	{
	  keyCode: 90,
	  keyTrigger: 'Z',
	  id: 'Open-HH',
	  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
	  
	},
	{
	  keyCode: 88,
	  keyTrigger: 'X',
	  id: 'Closed-HH',
	  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
	},
	{
	  keyCode: 67,
	  keyTrigger: 'C',
	  id: "Kick-n'-Hat",
	  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
	}
];

const SmoothPianoSounds = [
	{
	  keyCode: 81,
	  keyTrigger: 'Q',
	  id: 'Chord-1',
	  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
	},
	{
	  keyCode: 87,
	  keyTrigger: 'W',
	  id: 'Chord-2',
	  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
	},
	{
	  keyCode: 69,
	  keyTrigger: 'E',
	  id: 'Chord-3',
	  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
	},
	{
	  keyCode: 65,
	  keyTrigger: 'A',
	  id: 'Side-Stick',
	  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
	},
	{
	  keyCode: 83,
	  keyTrigger: 'S',
	  id: 'Shaker',
	  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
	},
	{
	  keyCode: 68,
	  keyTrigger: 'D',
	  id: 'Punchy-Kick',
	  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
	},
	{
	  keyCode: 90,
	  keyTrigger: 'Z',
	  id: 'Open-HH',
	  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
	},
	{
	  keyCode: 88,
	  keyTrigger: 'X',
	  id: 'Closed-HH',
	  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
	},
	{
	  keyCode: 67,
	  keyTrigger: 'C',
	  id: 'Snare',
	  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
	}
  ];

class DrumPad extends React.Component {
	render() {
		return (
			<Col md={6} className="mb-3 Board-Grid">
				<Button variant="secondary" size="lg" className="drum-pad" id="drum-pad-q">Q</Button>
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
