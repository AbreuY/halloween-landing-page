import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AppContextProvider from "./store/appContext";

import { Navbar } from "./component/Navbar.jsx";
import { Home } from "./views/Home.jsx";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<AppContextProvider>
				<BrowserRouter basename={basename}>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
				</BrowserRouter>
			</AppContextProvider>
		</div>
	);
};

export default Layout;
