import { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Comment } from '../Comment';
import { LanguageContext } from '../../contexts/language';
import { api } from '../../services/api';
import { CommentInput } from '../CommentInput';
import { DateFormated } from '../DateFormated';
import { Stars } from '../Stars';
import styles from './style.module.scss';
import { SaveMovieInput } from '../SaveMovieInput';
import { ArrowBack } from '../ArrowBack';
type TMovie = {
	id: string;
	title: string;
	overview: string;
	runtime: number;
	genres: [{
		id: string;
		name: string;
	}]
	vote_average: number;
	release_date: string;
	poster_path: string;
}

export function MovieScreen() {
	function handleGetMovieId() {
		const url = window.location.href.split('/');
		const movie_id = url.at(-1);
		return parseInt(movie_id);
	}
	const {getLanguage} = useContext(LanguageContext);
	const [movie,setMovie] = useState<TMovie[]>([]);
	const [comment, setComment] = useState('');
	function handleSetComment(value: string) {
		setComment(value);
	}
	useEffect(()=> {
		const movie_id = handleGetMovieId();
		api.get<TMovie>(`findMovie/${movie_id}?language=${getLanguage()}`).then(({data}) => {
			setMovie([data]);
		});
	}, []);
	return (
		<>
			{movie.map((data) => {
				return (
					<div className={styles.flexContainer} key={data.title}>

						<ArrowBack link = "/" />
						<div key={data.title} className={styles.container}>
							<h2>{data.title}</h2>
							<div className={styles.description}>
								<p>{data.overview}</p>
								<p>Data de lançamento: <DateFormated date = {`${data.release_date}`} format='dd/MM/yyyy' /></p>
								<p>Duracao: {(data.runtime / 60).toFixed(2)} Horas</p>
								<p>Gênero: {data.genres.map((genre, index) => {
									
									return (
										<span key={genre.id}>{index == data.genres.length-1 ? `${genre.name}` : `${genre.name}, `} </span>
										
									);
								})}</p>
								
							</div>
							<h2> Avaliação do Filme</h2>
							<Stars average_rate={data.vote_average}/>
							<div className={styles.buttons}>
                
								<p><SaveMovieInput movieId={handleGetMovieId()} /></p>
								<p><CommentInput movieId={handleGetMovieId()} handleSetComment = {handleSetComment}/></p>
								
							</div>
							<h2> Comentários</h2>
							<Comment movieId={handleGetMovieId()} comment = {comment}/>
						</div>
						<div className={styles.background}>
							<img className={styles.movieBackgroundContainer}  src={`${import.meta.env.VITE_IMAGE_URL}/${data.poster_path}`} />
						</div>
					</div>
          
				);
			})}
		</>

			
	);
}