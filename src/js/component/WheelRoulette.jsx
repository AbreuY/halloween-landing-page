import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Wheel } from "react-custom-roulette";
import { QuestionnaireModal } from "./QuestionnaireModal.jsx";
import { InstructionsModal } from "./InstructionsModal.jsx";

export const WheelRoulette = ({ playSound, setSound, playSoundEffect, setSoundEffect }) => {
	const [mustSpin, setMustSpin] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);
	const [actualQuestion, setActualQuestion] = useState(undefined);

	const data = [
		{
			option: "Trato",
			style: {
				textColor: "#FFFFFF"
			}
		},
		{
			option: "Truco",
			style: {
				textColor: "#FFFFFF"
			}
		},
		{
			option: "Trato",
			style: {
				textColor: "#FFFFFF"
			}
		},
		{
			option: "Truco",
			style: {
				textColor: "#FFFFFF"
			}
		},
		{
			option: "Trato",
			style: {
				textColor: "#FFFFFF"
			}
		},
		{
			option: "Truco",
			style: {
				textColor: "#FFFFFF"
			}
		}
	];
	const questions = [
		{
			question:
				"En Halloween II, cuando Michael entra por primera vez a la casa de la pareja de ancianos, ¿qué película se proyecta en su televisor?",
			optionOne: {
				correct: true,
				content: "Noche de los muertos vivientes"
			},
			optionTwo: {
				correct: false,
				content: "Harry Potter"
			},
			optionThree: {
				correct: false,
				content: "El Resplandor"
			},
			optionFourth: {
				correct: false,
				content: "Respuesta 4"
			}
		},
		{
			question: "Según la superstición, ¿qué habilidad particular tiene una persona nacida en Halloween?",
			optionOne: {
				correct: false,
				content: "El poder de hablar con los muercielagos"
			},
			optionTwo: {
				correct: true,
				content: "La capacidad de ver y hablar con los espíritus"
			},
			optionThree: {
				correct: false,
				content: "La habilidad de ver el futuro"
			},
			optionFourth: {
				correct: false,
				content: "Respuesta 4"
			}
		},
		{
			question: "¿Quién dirigió La pesadilla antes de Navidad ?",
			optionOne: {
				correct: false,
				content: "Tim Burton"
			},
			optionTwo: {
				correct: true,
				content: "Henry Selick"
			},
			optionThree: {
				correct: false,
				content: "Steven Spielberg"
			},
			optionFourth: {
				correct: false,
				content: "Respuesta 4"
			}
		},
		{
			question: "¿Cuantas personas fueron ahorcadas durante los juicios de brujas de Salem?",
			optionOne: {
				correct: true,
				content: "19"
			},
			optionTwo: {
				correct: false,
				content: "0"
			},
			optionThree: {
				correct: false,
				content: "5"
			},
			optionFourth: {
				correct: false,
				content: "Respuesta 4"
			}
		},
		{
			question: "¿Cuál es el número de muertos de la película Halloween ?",
			optionOne: {
				correct: false,
				content: "300 personas"
			},
			optionTwo: {
				correct: false,
				content: "20 personas y un avestruz"
			},
			optionThree: {
				correct: true,
				content: "5 personas y un perro"
			},
			optionFourth: {
				correct: false,
				content: "Respuesta 4"
			}
		},
		{
			question: "¿Cómo llama la gente en Nueva Inglaterra la noche antes de Halloween?",
			optionOne: {
				correct: true,
				content: "Noche de Repollo"
			},
			optionTwo: {
				correct: false,
				content: "La noche sombria"
			},
			optionThree: {
				correct: false,
				content: "Noche de espantos"
			},
			optionFourth: {
				correct: false,
				content: "Respuesta 4"
			}
		},
		{
			question: "¿Quién dirigió el clásico animado de Halloween The Nightmare Before Christmas?",
			optionOne: {
				correct: false,
				content: "Guillermo del Toro"
			},
			optionTwo: {
				correct: true,
				content: "Tim Burton"
			},
			optionThree: {
				correct: false,
				content: "Christopher Nolan"
			},
			optionFourth: {
				correct: false,
				content: "Respuesta 4"
			}
		},
		{
			question: "Al comienzo de la primera película, ¿Michael mata a qué miembro de la familia?",
			optionOne: {
				correct: true,
				content: "Su hermana"
			},
			optionTwo: {
				correct: false,
				content: "A su hermano"
			},
			optionThree: {
				correct: false,
				content: "A su papa"
			},
			optionFourth: {
				correct: false,
				content: "Respuesta 4"
			}
		},
		{
			question: "Aparte de chupar sangre humana, ¿qué tienen en común los vampiros y los murciélagos?",
			optionOne: {
				correct: false,
				content: "Les gusta el color negro"
			},
			optionTwo: {
				correct: false,
				content: "Tienen mala vision"
			},
			optionThree: {
				correct: true,
				content: "Solo salen de noche"
			},
			optionFourth: {
				correct: false,
				content: "Respuesta 4"
			}
		},
		{
			question: "¿Qué suelen montar las brujas para moverse por el cielo?",
			optionOne: {
				correct: false,
				content: "Un cuervo"
			},
			optionTwo: {
				correct: false,
				content: "Piden un Uber"
			},
			optionThree: {
				correct: true,
				content: "Una escoba"
			},
			optionFourth: {
				correct: false,
				content: "Respuesta 4"
			}
		},
		{
			question: "¿Cuántas lamidas se necesitan, en promedio, para llegar al centro de un Tootsie Pop?",
			optionOne: {
				correct: false,
				content: "79"
			},
			optionTwo: {
				correct: false,
				content: "32"
			},
			optionThree: {
				correct: true,
				content: "252"
			},
			optionFourth: {
				correct: false,
				content: "Respuesta 4"
			}
		},
		{
			question: "¿Cuál es otro nombre para una calabaza tallada?",
			optionOne: {
				correct: true,
				content: "Una Jack-o-lantern"
			},
			optionTwo: {
				correct: false,
				content: "calabacin"
			},
			optionThree: {
				correct: false,
				content: "Lampara"
			},
			optionFourth: {
				correct: false,
				content: "Respuesta 4"
			}
		},
		{
			question:
				"¿Qué fruta se corta en Halloween y se coloca afuera para que los niños la vean, y de qué color es?",
			optionOne: {
				correct: false,
				content: "Patilla, Verde"
			},
			optionTwo: {
				correct: false,
				content: "Manzana, Roja"
			},
			optionThree: {
				correct: true,
				content: "Calabaza, Naranja"
			},
			optionFourth: {
				correct: false,
				content: "Respuesta 4"
			}
		},
		{
			question:
				"¿Cuáles son los dulces más populares que se compran en los Estados Unidos, incluso durante las vacaciones de Halloween?",
			optionOne: {
				correct: false,
				content: "Milky Way"
			},
			optionTwo: {
				correct: true,
				content: "M & Ms"
			},
			optionThree: {
				correct: false,
				content: "Toronto"
			},
			optionFourth: {
				correct: false,
				content: "Respuesta 4"
			}
		}
	];

	const selectQuestion = () => {
		const randomNumber = Math.floor(Math.random() * questions.length);
		return questions[randomNumber];
	};

	const handleSpinClick = () => {
		const newPrizeNumber = Math.floor(Math.random() * data.length);
		setPrizeNumber(newPrizeNumber);
		setMustSpin(true);
		if (playSound == false) {
			setSound(true);
		}

		if (playSoundEffect == false) {
			setSoundEffect(true);
		}
	};

	return (
		<div className="game-box">
			<div className="game-box">
				{actualQuestion ? (
					<QuestionnaireModal treat={actualQuestion} resetQuestion={setActualQuestion} />
				) : (
					<InstructionsModal />
				)}
			</div>
			<div className="wheel-box">
				<Wheel
					mustStartSpinning={mustSpin}
					prizeNumber={prizeNumber}
					perpendicularText={true}
					radiusLineColor={"rgb(39, 38, 38)"}
					data={data}
					textColors={["#ffffff"]}
					backgroundColors={["#F75F1C", "#FF9A00", "#000000", "#881EE4", "#F75F1C", "#85E21F"]}
					innerBorderColor={"rgb(39, 38, 38)"}
					onStopSpinning={() => {
						setMustSpin(false);
						setSoundEffect(false);
						if (data[prizeNumber].option == "Trato") {
							const question = selectQuestion();
							setActualQuestion(question);
						}
					}}
				/>

				<button
					onClick={handleSpinClick}
					className="wheel__spin"
					style={{ visibility: mustSpin ? "hidden" : "visible" }}>
					{"GIRAR"}
				</button>
			</div>
		</div>
	);
};

WheelRoulette.propTypes = {
	playSound: PropTypes.bool,
	playSoundEffect: PropTypes.bool,
	setSound: PropTypes.func,
	setSoundEffect: PropTypes.func
};

/* const data = [
	{
		option: "Trato",
		style: {
			backgroundColor: "#FF9A0080",
			textColor: "#000000"
		}
	},
	{
		option: "Trick",
		style: {
			backgroundColor: "#00000080",
			textColor: "#ffffff"
		}
	},
	{
		option: "Free 🍬",
		style: {
			backgroundColor: "#F75F1C80",
			textColor: "#000000"
		}
	},
	{
		option: "Trato",
		style: {
			backgroundColor: "#FF9A0080",
			textColor: "#ffffff"
		}
	},
	{
		option: "☠",
		style: {
			backgroundColor: "#881EE480",
			textColor: "#ffffff"
		}
	},
	{
		option: " Take one 🍬 ",
		style: {
			backgroundColor: "#85E21F80",
			textColor: "#ffffff"
		}
	}
]; */
