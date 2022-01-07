import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DateFormated } from '../DateFormated';
import { Stars } from '../Stars';
import styles from './style.module.scss';
type TMovie = {
	id: string;
	title: string;
	overview: string;
	video: boolean;
	adult: boolean;
	vote_average: number;
	release_date: string;
	poster_path: string;
}


export function MovieScreen() {
	const [movie,setMovie] = useState<TMovie[]>([]);
	useEffect(()=> {
		const url = window.location.href.split('/');
		const id = url.at(-1);
		axios.get<TMovie>(`${import.meta.env.VITE_REACT_APP_API_URL}/findMovie/${id}?language`).then(({data}) => {
			setMovie([data]);
		});
	}, []);
	return (
		<>
			{movie.map((data) => {
				return (
					<div className={styles.flexContainer} key={data.title}>

						<div key={data.title} className={styles.container}>
							<Link to ="/"><h1>Voltar</h1></Link>;
							<h2>{data.title}</h2>
							<div className={styles.description}>
								<p>{data.overview}</p>
								<p>Estreia: <DateFormated date = {`${data.release_date}`} format='dd/MM/yyyy' /></p>
							</div>
							<h2> Avaliação do Filme</h2>
							<Stars average_rate={data.vote_average}/>
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