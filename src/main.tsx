import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.scss";
import App from "./App";
ReactDOM.render(
	<React.StrictMode>

		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App/>} />
			</Routes>
		</BrowserRouter>
   
	</React.StrictMode>,
	document.getElementById("root")
);
