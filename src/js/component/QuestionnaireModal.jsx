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
		}, 1000);
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
						className={`modal__answer--option ${
							optionOne ? "good-response" : optionOne == undefined ? "" : "bad-response"
						}`}
						onClick={e => {
							if (treat.optionOne.correct) {
								setOptionOne(true);
								actions.candyCounter();
								handleResetQuestion(undefined);
							}
							if (!treat.optionOne.correct) {
								setOptionOne(false);
								handleResetQuestion(undefined);
							}
							// setTimeout(() => {
							// 	resetQuestion(undefined);
							// }, 3800);
						}}>
						{treat.optionOne.content}
					</button>
					<button
						className={`modal__answer--option ${
							optionTwo ? "good-response" : optionTwo == undefined ? "" : "bad-response"
						}`}
						onClick={e => {
							if (treat.optionTwo.correct) {
								setOptionTwo(true);
								actions.candyCounter();
								handleResetQuestion(undefined);
							}
							if (!treat.optionTwo.correct) {
								setOptionTwo(false);
								handleResetQuestion(undefined);
							}
						}}>
						{treat.optionTwo.content}
					</button>
					<button
						className={`modal__answer--option ${
							optionThree ? "good-response" : optionThree == undefined ? "" : "bad-response"
						}`}
						onClick={e => {
							if (treat.optionThree.correct) {
								setOptionThree(true);
								actions.candyCounter();
								handleResetQuestion(undefined);
							}
							if (!treat.optionThree.correct) {
								setOptionThree(false);
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
