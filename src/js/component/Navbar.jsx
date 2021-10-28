import React, { useEffect } from "react";

export const Navbar = () => {
	window.addEventListener("DOMContentLoaded", event => {
		console.log("DOM fully loaded and parsed");

		const title = document.querySelector("title");
		const glitchText = document.getElementById("mytext");

		const now = new Date();
		let year = now.getFullYear();

		if (now.getMonth() > 9) {
			year += 1;
		}

		const halloween = new Date(`October 31, ${year} 00:00:00`);
		const timeUntil = halloween.getTime() - now.getTime();
		const daysUntil = Math.abs(Math.ceil(timeUntil / (1000 * 60 * 60 * 24)));

		switch (daysUntil) {
			case 1:
				glitchText.setAttribute("data-text", `Halloween está a ${daysUntil} dia de distancia!`);
				glitchText.innerText = `Halloween está a ${daysUntil} dia de distancia!`;
				title.innerHTML = ` Falta ${daysUntil} dia para Halloween!`;
				break;
			case 0:
				glitchText.setAttribute("data-text", `¡Hoy es Halloween! Coma, beba y sea aterrador!`);
				glitchText.innerText = `¡Hoy es Halloween! Coma, beba y sea aterrador!`;
				title.innerHTML = "Ahhhh! hoy es Halloween!";
				break;
			default:
				glitchText.setAttribute("data-text", `Quedan ${daysUntil} dias para Halloween!`);
				glitchText.innerText = `Quedan ${daysUntil} dias para Halloween!`;
				title.innerHTML = `${daysUntil} dias para Halloween!`;
				break;
		}
	});
	useEffect(() => {}, []);
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<a className="navbar-brand text-danger" href="#" />
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<a className="nav-link" href="#">
								<h3 className="glitch" id="mytext" data-text="" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
