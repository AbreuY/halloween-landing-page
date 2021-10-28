import React from "react";

export const InstructionsModal = () => {
	return (
		<div className="generic-modal-box">
			<div className="modal-box">
				<h1 className="modal__instructions--title">Roulette Landing Page</h1>
				<h3 className="modal__instructions">Instrucciones</h3>
				<ol>
					<li className="modal__instructions--li">
						{`Presiona el boton "GIRAR" para dar vuelta a la ruleta.`}
					</li>
					<li className="modal__instructions--li">
						{`Se te hará una pregunta por cada vez que caigas en trato`}
					</li>
					<li className="modal__instructions--li">{`Por cada respuesta corecta, tendrás un caramelo.`}</li>
					<li className="modal__instructions--li">{`Gana 5 Caramelos y sal ileso.`}</li>
					<li className="modal__instructions--li">
						{`Podrás encontrarte con trucos y sorpresas en el camino.  `}
						<br />
						<div className="text-center">
							<span>BUENA SUERTE Y HAPPY HALLOWEN</span>
						</div>
					</li>
				</ol>
			</div>
		</div>
	);
};
