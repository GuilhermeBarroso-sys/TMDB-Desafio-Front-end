import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import ReactDOM from "react-dom";
import 'sweetalert2/src/sweetalert2.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.scss";
import { Movie } from "./pages/Movie";
import { Register } from "./pages/Register";
import { AuthProvider } from "./contexts/auth";
import { HandleLanguage } from "./contexts/language";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
ReactDOM.render(
	<React.StrictMode>
		<HandleLanguage>
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home/>} />
						<Route path="/movie/:id" element={<Movie/>} />
						<Route path="/register" element={<Register/>} />
						<Route path="/login" element={<Login/>} />

					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</HandleLanguage>
   
	</React.StrictMode>,
	document.getElementById("root")
);
