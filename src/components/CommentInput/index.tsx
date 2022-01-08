import { useContext } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";
interface props  {
	handleSetComment: (value : string) => void;
	movieId: number;
}
export function CommentInput({handleSetComment, movieId} : props) {
	const {isAuthenticated, loginWarning} = useContext(AuthContext);
	async function handleComment() {
		if(!isAuthenticated()) {
			loginWarning("Você precisa criar uma conta para comentar!");
		}else {
			const { value } = await Swal.fire<string>({
				title: 'Escreva um comentario',
				input: 'text',
				showCancelButton: true,
				inputValidator: (value) => {
					if (!value) {
						return 'O Comentario não pode ser vazio!';
					}
				}
			});
			handleSetComment(value);
			api.post('comment',{text: value, movie_id: movieId}).then((response) => {
				if(response.status == 201) {
					Swal.fire("Sucesso", "Comentário adicionado com sucesso!", "success");
				}
			});
		}
	}
	return (
		<Button onClick={handleComment} variant="outline-success">Comentar</Button>
	);
}