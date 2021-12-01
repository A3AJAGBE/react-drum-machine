import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faSlidersH } from '@fortawesome/free-solid-svg-icons';

const powerIcon = <FontAwesomeIcon icon={faPowerOff} />
const SlidersIcon = <FontAwesomeIcon icon={faSlidersH} />

const HeaterKitSounds = [
  {
    keyCode: 81,
    keypress: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keypress: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keypress: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keypress: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keypress: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keypress: "D",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 90,
    keypress: "Z",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 88,
    keypress: "X",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
  {
    keyCode: 67,
    keypress: "C",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
];

const SmoothPianoSounds = [
  {
    keyCode: 81,
    keypress: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keypress: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keypress: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keypress: "A",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 83,
    keypress: "S",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 68,
    keypress: "D",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 90,
    keypress: "Z",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 88,
    keypress: "X",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 67,
    keypress: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

const play = (keyPress) => {
	const audio = document.getElementById(keyPress);
	audio.currentTime = 0;
	audio.play();
}

const changeSounds = () => {

}

const DrumPad = (props) => {

	const handleKeyDown = (e) => {
		props.sounds.map(sound => {
			if (e.keyCode === sound.keyCode) {
				props.play(sound.keypress);
			}
		}
	)}
		

	React.useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
	});

	return (
		<Col md={6} className="mb-3 Board-Grid">
			{
				props.sounds.map((sound, index) => {
					return <Button size="lg" className="drum-pad theme-button fs-1" id={index} onClick={() => props.play(sound.keypress)}>
					{sound.keypress}
					<audio id={sound.keypress} className="clip" src={sound.url}></audio>
					</Button>
				})
			}
		</Col>
	);
}

const SoundsCtrl = (props) => {
	return (
		<Button className="theme-pwr-button fs-5" onClick={props.changeSounds}> {SlidersIcon} Sound Settings</Button>
	);
}

const App = () => {	
	const [sounds, setSounds] = React.useState(HeaterKitSounds);
	
	return (
		<Container fluid id="App-Container">

			<header className="py-3 mb-4 text-center border-bottom">
				<h1 className="fw-bold text-md-start px-2">A3AJAGBE Drum Machine</h1>
			</header>

			<main>
				<Container id="drum-machine">
					<Row className="p-3 rounded flex-md-row-reverse g-4" id="Board-Row">
						<Col md={6} className="">
							<Card id="display" className="theme-card">
								<Card.Header>
									<Row>
										<Col>
											<h2 className="my-2">DashBoard</h2>
										</Col>
										<Col className="d-flex justify-content-end"> 
											<Button className="theme-pwr-button fs-4"> {powerIcon} </Button> 
										</Col>
									</Row>
									
								</Card.Header>
								<Card.Body>
									<Card.Title>Main Display</Card.Title>
									
								</Card.Body>
								<Card.Footer> 
									<SoundsCtrl changeSounds={changeSounds} />
								</Card.Footer>
							</Card>
						</Col>

						<DrumPad play={play} sounds={sounds} />
					</Row>
				</Container>
			</main>
		</Container>
	);
}

export default App;
