import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './style.module.scss';
type TMovies = {
	id: string;
	title: string;
	video: boolean;
	adult: boolean;
	vote_average: number;
	poster_path: string;
}

type TPopularMoviesResponse = {
	results: TMovies[]
}
interface props {
	language: string
}
export function MoviesCarousel({language} : props) {
	const [movies,setMovies] = useState<TMovies[]>([]);
	useEffect(() => {
	
		axios.get<TPopularMoviesResponse>(`${import.meta.env.VITE_REACT_APP_API_URL}/popularMovies?language=${language}`).then(({data}) => {
			const {results} = data;
			setMovies(results);
		});
	},[language]);
	return (
		<Carousel interval={2500} className={`${styles.carousel}`}  >
			{movies.map((movie, index) => {
				return (
					<Carousel.Item key = {index}>
						<div className={styles.carouselTitle}>
							<Link to={`/movie/${movie.id}`}> <h4>{movie.title}</h4></Link>
						</div>
						<div className={styles.carouselImg}>
							<Link to={`/movie/${movie.id}`}> 
								<img
									className={`w-100 d-block`}
									src={`${import.meta.env.VITE_IMAGE_URL}/${movie.poster_path}`}
									alt="First slide"
								/>
            
							</Link>
						</div>
					</Carousel.Item>
			
				);
			})}
		
		</Carousel>
		
	);
}