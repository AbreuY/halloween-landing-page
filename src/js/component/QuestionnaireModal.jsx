import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const QuestionnaireModal = ({ treat, resetQuestion }) => {
	const [optionOne, setOptionOne] = useState(undefined);
	const [optionTwo, setOptionTwo] = useState(undefined);
	const [optionThree, setOptionThree] = useState(undefined);
	const [optionFourth, setOptionFourth] = useState(undefined);
	return (
		<div className="generic-modal-box">
			<div className="modal-box">
				<div className="modal__main">
					<h2 className="modal__main--title">Treat 🍬</h2>
					<p className="modal__main--question">{treat.question}</p>
				</div>
				<div className="modal__answer">
					<p
						className={`modal__answer--option ${
							optionOne ? "good-response" : optionOne == undefined ? "" : "bad-response"
						}`}
						onClick={e => {
							if (treat.optionOne.correct) {
								setOptionOne(true);
							}
							if (!treat.optionOne.correct) {
								setOptionOne(false);
							}
							setTimeout(() => {
								resetQuestion(undefined);
							}, 3800);
						}}>
						{treat.optionOne.content}
					</p>
					<p
						className={`modal__answer--option ${
							optionTwo ? "good-response" : optionTwo == undefined ? "" : "bad-response"
						}`}
						onClick={e => {
							if (treat.optionTwo.correct) {
								setOptionTwo(true);
							}
							if (!treat.optionTwo.correct) {
								setOptionTwo(false);
							}
							setTimeout(() => {
								resetQuestion(undefined);
							}, 3800);
						}}>
						{treat.optionTwo.content}
					</p>
					<p
						className={`modal__answer--option ${
							optionThree ? "good-response" : optionThree == undefined ? "" : "bad-response"
						}`}
						onClick={e => {
							if (treat.optionThree.correct) {
								setOptionThree(true);
							}
							if (!treat.optionThree.correct) {
								setOptionThree(false);
							}
							setTimeout(() => {
								resetQuestion(undefined);
							}, 3800);
						}}>
						{treat.optionThree.content}
					</p>
				</div>
			</div>
		</div>
	);
};

QuestionnaireModal.propTypes = {
	treat: PropTypes.object,
	resetQuestion: PropTypes.func
};
