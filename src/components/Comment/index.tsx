import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { DateFormated } from '../DateFormated';
import styles from './styles.module.scss';
type Comment = {
	id: string
	text: string;
	created_at: string;
	user: {
		name: string
	} 
}
interface props  {
	comment: string;
	movieId: number;
}
export function Comment({comment, movieId} : props) {
	const [comments, setComments] = useState<Comment[]>([]);
	useEffect(() => {
		api.get<Comment[]>(`comment/${movieId}`)
			.then(({data}) => {
				console.log(data);
				setComments(data);
			});
	}, [comment]);
	return (
		<>
			{
				comments.length > 0
					? comments.map((comment) => {
						return (
							<div className = {styles.container} key = {comment.id}>
								<div className={styles.comments} >		
									<span className={styles.author}>{comment.user.name}:</span>
									<span > {comment.text}</span>
									<div className={styles.datetime}>
										<span ><DateFormated date={comment.created_at} format='dd/MM/yyyy'/></span>
									</div>
								</div>
							</div>
						);
					})
					: (
						<div>
							<p>Nenhum comentário encontrado. Seja o primeiro a comentar! </p>
						</div>
					)
			}
		</>

	);
}