import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";
interface props  {
	movieId: number;
}
export function SaveMovieInput({movieId} : props) {
	const {isAuthenticated, loginWarning} = useContext(AuthContext);
	const [alreadyHaveThisMovie, setAlreadyHaveThisMovie] = useState<boolean>(false);
	useEffect(() => {
		if(isAuthenticated()) {
			api.get(`haveThisMovie/${movieId}`).then(({data}) => {
				setAlreadyHaveThisMovie(data);
			});
		}
	}, [alreadyHaveThisMovie]);
	function handleComment() {
		if(!isAuthenticated()) {
			loginWarning("Você precisa criar uma conta para adicionar esse filme!");
		}else {
			api.post(`savedmovie`, {movie_id: movieId}).then((response) => {
				if(response.status == 201) {
					Swal.fire("Sucesso", "Filme adicionado a sua lista com sucesso!", "success");
					setAlreadyHaveThisMovie(true);
				}
			});
		}
	}
	return (
		<>
			{!alreadyHaveThisMovie && <Button onClick={handleComment} variant="outline-primary">Adicionar aos meus filmes</Button> }
		</>   
	);
}