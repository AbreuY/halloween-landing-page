import React, { useEffect, useState } from "react";

//include images into your bundle
import PropTypes from "prop-types";
import audio from "./../../img/terror-v2.mp3";
import roulette_sound from "./../../img/roulette_sound.mp3";
import { Navbar } from "../component/Navbar.jsx";
import { WheelRoulette } from "../component/WheelRoulette.jsx";

//create your first component
export const Home = () => {
	const [playSound, setPlaySound] = useState(false);
	const [playSoundEffect, setSoundEffect] = useState(false);

	const sound = new Audio(audio);
	const handlePlaySound = soundStatus => {
		if (playSound) {
			//sound.currentTime = 80;
			console.log("from play");
			sound.play();
		}
	};

	const rouletteSound = new Audio(roulette_sound);
	const handleSoundEffec = soundStatus => {
		if (playSoundEffect) {
			setTimeout(() => {
				rouletteSound.play();
				sound.volume = 0.3;
			}, 2000);
		}
	};
	useEffect(
		() => {
			if (!playSoundEffect) {
				sound.volume = 1;
			}

			handlePlaySound(playSound);
			handleSoundEffec(playSoundEffect);
		},
		[playSound, playSoundEffect]
	);
	return (
		<>
			<Navbar />
			<div className="home">
				<div className="">
					<WheelRoulette
						playSound={playSound}
						setSound={setPlaySound}
						playSoundEffect={playSoundEffect}
						setSoundEffect={setSoundEffect}
					/>
				</div>
			</div>
		</>
	);
};
//container-fluid d-flex flex-nowrap flex-column justify-content-center align-items-center h-75
