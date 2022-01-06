import Carousel from "react-multi-carousel";
import styles from './styles.module.scss';
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
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
export function TrendingMovies({language} : props) {
  
	const [movies,setMovies] = useState<TMovies[]>([]);
	useEffect(()=> {
		axios.get<TPopularMoviesResponse>(`${import.meta.env.VITE_REACT_APP_API_URL}/popularMovies?language=${language}`)
			.then(({data}) => {
				const {results} = data;
				setMovies(results);
			});
	},[]);
	const responsive = {
		UltraWide: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};
	return (
		<Carousel
			responsive={responsive} 
			swipeable={false}
			centerMode={true}
			draggable={false}
			showDots={true}
			infinite={true}
			autoPlaySpeed={1000}
			keyBoardControl={true}
			customTransition="all .5"
			transitionDuration={500}
			containerClass={styles.carouselContainer}
			removeArrowOnDeviceType={["tablet", "mobile"]}
			itemClass={styles.item}
		>
			{movies.map((movie, index) => {
				return (
					<div className={styles.item} key = {movie.id}>
						<img src={`${import.meta.env.VITE_IMAGE_URL}/${movie.poster_path}`} />
						<span>{movie.id}</span>
					</div>
				);
			})}
      
		</Carousel>
	);
}
