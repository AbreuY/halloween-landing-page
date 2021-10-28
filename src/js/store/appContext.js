import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import scream_sound from "../../img/file.wav";
export const AppContext = createContext(undefined);

const AppContextProvider = ({ children }) => {
	const [store, setStore] = useState({
		count: 0,
		bodyAnimation: false
	});

	const actions = {
		resetCounter: () => {
			setStore(prev => ({
				...prev,
				count: 0
			}));
		},
		//Agrega un caramelo por cada respuesta correcta
		candyCounter: () => {
			setStore(prev => ({ ...prev, count: store.count + 1 }));
		},
		//Añade efecto animado al body y usamos el speech para decir lo que querramos
		setBodyAnimation: () => {
			let body = document.body;
			if (store.bodyAnimation) {
				setStore(prev => ({ ...prev, bodyAnimation: false }));
				setTimeout(function() {
					body.style.animation = "none";
				}, 5000);
			} else {
				setStore(prev => ({ ...prev, bodyAnimation: true }));
				setTimeout(function() {
					var text = new SpeechSynthesisUtterance(
						"Tu computador ha sido infectado con el virus Halloween. Sigue jugando para deshacerte del virus"
					);
					speechSynthesis.speak(text);

					body.style.animation = "weirdblur 2s infinite";
				}, 1000);
			}
		},
		//Muestra la foto de linda blair junto a un sonido de grito
		lindaBlair: () => {
			let ghost = document.getElementsByClassName("blair-container")[0];
			let sound = new Audio(scream_sound);

			//Muestra a linda blair despues de 1 segundo
			setTimeout(function() {
				sound.load();
				sound.play();
				ghost.style.visibility = "visible";
				//Esconde a linda blair despues de 3 segundos
				setTimeout(function() {
					ghost.style.visibility = "hidden";
				}, 3000);
			}, 1000);
		}
	};
	const context = { store, actions };
	useEffect(() => {}, []);
	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
	children: PropTypes.node
};

export default AppContextProvider;
