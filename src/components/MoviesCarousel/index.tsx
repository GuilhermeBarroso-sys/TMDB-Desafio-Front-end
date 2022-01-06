import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import styles from './style.module.scss';
type TMovies = {
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
		<Carousel className={`${styles.carousel}`}  >
			{movies.map((movie, index) => {
				return (
					<Carousel.Item key = {index}>
						<div className={styles.carouselTitle}>
							<h4>{movie.title}</h4>
						</div>
						<div className={styles.carouselImg}>
							<img
								className={`w-100 d-block`}
								src={`${import.meta.env.VITE_IMAGE_URL}/${movie.poster_path}`}
								alt="First slide"
							/>
						</div>
					</Carousel.Item>
			
				);
			})}
		
		</Carousel>
		
	);
}