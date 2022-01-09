import { Link } from "react-router-dom";

export function Menu() {
	return(
		<>  
			<Link to = "/register">Cadastrar</Link> 
			<Link to = "/login">Entrar</Link> 
		</>
	);
}