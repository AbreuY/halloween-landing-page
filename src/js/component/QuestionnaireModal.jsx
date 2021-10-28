import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../store/appContext";

export const QuestionnaireModal = ({ treat, resetQuestion }) => {
	const [optionOne, setOptionOne] = useState(undefined);
	const [optionTwo, setOptionTwo] = useState(undefined);
	const [optionThree, setOptionThree] = useState(undefined);
	const [optionFourth, setOptionFourth] = useState(undefined);
	const { store, actions } = useContext(AppContext);
	const handleResetQuestion = value => {
		setTimeout(() => {
			resetQuestion(value);
		}, 2000);
	};
	const handleDisable = (event, answerNumber) => {
		const one = document.getElementById("one");
		const two = document.getElementById("two");
		const three = document.getElementById("three");

		if (answerNumber == "one") {
			setOptionTwo(false);
			setOptionThree(false);
			three.disabled = true;
			two.disabled = true;
		}
		if (answerNumber == "two") {
			setOptionOne(false);
			setOptionThree(false);
			three.disabled = true;
			one.disabled = true;
		}
		if (answerNumber == "three") {
			setOptionTwo(false);
			setOptionOne(false);
			one.disabled = true;
			two.disabled = true;
		}
	};
	const handleClick = () => {};
	useEffect(() => {});
	return (
		<div className="generic-modal-box">
			<div className="modal-box">
				<div className="modal__main">
					<h2 className="modal__main--title">Trato 🍬</h2>
					<p className="modal__main--question">{treat.question}</p>
				</div>
				<div className="modal__answer">
					<button
						id="one"
						className={`modal__answer--option ${
							optionOne ? "good-response" : optionOne == undefined ? "" : "bad-response"
						}`}
						onClick={e => {
							handleDisable("one");
							if (treat.optionOne.correct) {
								setOptionOne(true);
								actions.candyCounter();
								handleResetQuestion(undefined);
							}
							if (!treat.optionOne.correct) {
								setOptionOne(false);
								alert("Lo lamento, intenta nuevamente.");
								handleResetQuestion(undefined);
							}
							// setTimeout(() => {
							// 	resetQuestion(undefined);
							// }, 3800);
						}}>
						{treat.optionOne.content}
					</button>
					<button
						id="two"
						className={`modal__answer--option ${
							optionTwo ? "good-response" : optionTwo == undefined ? "" : "bad-response"
						}`}
						onClick={e => {
							handleDisable("two");
							if (treat.optionTwo.correct) {
								setOptionTwo(true);
								actions.candyCounter();
								handleResetQuestion(undefined);
							}
							if (!treat.optionTwo.correct) {
								setOptionTwo(false);
								alert("Lo lamento, intenta nuevamente.");
								handleResetQuestion(undefined);
							}
						}}>
						{treat.optionTwo.content}
					</button>
					<button
						id="three"
						className={`modal__answer--option ${
							optionThree ? "good-response" : optionThree == undefined ? "" : "bad-response"
						}`}
						onClick={e => {
							handleDisable("three");
							if (treat.optionThree.correct) {
								setOptionThree(true);
								actions.candyCounter();
								handleResetQuestion(undefined);
							}
							if (!treat.optionThree.correct) {
								setOptionThree(false);
								alert("Lo lamento, intenta nuevamente.");
								handleResetQuestion(undefined);
							}
							// setTimeout(() => {
							// 	resetQuestion(undefined);
							// }, 3800);
						}}>
						{treat.optionThree.content}
					</button>
				</div>
			</div>
		</div>
	);
};

QuestionnaireModal.propTypes = {
	treat: PropTypes.object,
	resetQuestion: PropTypes.func
};
