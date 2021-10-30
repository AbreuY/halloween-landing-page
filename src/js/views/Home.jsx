import React, { useContext, useEffect, useState } from "react";

//include images into your bundle
import PropTypes from "prop-types";
import audio from "./../../img/terror-v2.mp3";
import roulette_sound from "./../../img/roulette_sound.wav";
import { WheelRoulette } from "../component/WheelRoulette.jsx";
import { AppContext } from "../store/appContext";
import linda_blair from "../../img/linda_blair.jpg";

//create your first component
export const Home = () => {
	const [playSound, setPlaySound] = useState(false);
	const [playSoundEffect, setSoundEffect] = useState(false);
	const { store, actions } = useContext(AppContext);
	const sound = new Audio(audio);
	const handlePlaySound = async soundStatus => {
		if (soundStatus) {
			if (sound.status == 206) {
				//console.log("I returned");
				return;
			} else {
				//console.log("from play");
				const terrorSound = await sound.play();
			}
		}
	};

	const rouletteSound = new Audio(roulette_sound);
	const handleSoundEffec = soundStatus => {
		if (soundStatus) {
			setTimeout(() => {
				rouletteSound.play();
				sound.volume = 0.3;
			}, 2000);
		}
	};
	useEffect(() => {
		if (!playSoundEffect) {
			sound.volume = 1;
		}

		handleSoundEffec(playSoundEffect);
	}, [playSoundEffect]);
	useEffect(() => {
		handlePlaySound(playSound);
	}, [playSound]);
	useEffect(() => {
		if (store.count == 5) {
			alert("Felicidades completaste el reto 👏");
			actions.resetCounter();
		}
	}, [store.count]);
	return (
		<>
			<div className="blair-container">
				<img className="blair" src={linda_blair} />
			</div>
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
