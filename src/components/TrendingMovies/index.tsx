import Carousel from "react-multi-carousel";
import styles from './styles.module.scss';
import "react-multi-carousel/lib/styles.css";
import { useContext, useEffect, useState } from "react";
import { DateFormated } from "../DateFormated";
import { Stars } from "../Stars";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { LanguageContext } from "../../contexts/language";
type TMovies = {
	id: string;
	title: string;
	release_date: string;
	vote_average: number;
	poster_path: string;
}

type TPopularMoviesResponse = {
	results: TMovies[];
}
interface props {
	timeWindow: string;
}
export function TrendingMovies({timeWindow} : props) {
	const {language} = useContext(LanguageContext);
	const [movies,setMovies] = useState<TMovies[]>([]);
	useEffect(()=> {
		api.get<TPopularMoviesResponse>(`trendingMovies?time_window=${timeWindow}&language=${language}`)
			.then(({data}) => {
				const {results} = data;
				setMovies(results);
			});
	},[language, timeWindow]);
  
	const responsive = {
		UltraWide: {
			breakpoint: { max: 4000, min: 3000 },
			items: 4
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
		<>
			<Carousel
				responsive={responsive} 
				swipeable={false}
				centerMode={false}
				draggable={true}
				showDots={false}
				infinite={true}
				autoPlaySpeed={1000}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={500}
				containerClass={styles.carouselContainer}
				removeArrowOnDeviceType={["tablet", "mobile"]}
				itemClass={styles.item}
			>
				{movies.map((movie) => {
					return (
						<div className={styles.item} key = {movie.id}>
							<Link to={`/movie/${movie.id}`}><img src={`${import.meta.env.VITE_IMAGE_URL}/${movie.poster_path}`}/> </Link>
							<div className= {styles.hideLongText}>
								<div title={movie.title}>{movie.title}</div>
								<div><DateFormated date={movie.release_date} format={"dd/MM/yyyy"}/></div>
								<div><Stars average_rate={movie.vote_average}/></div>
							</div>
						</div>
					);
				})}
      
			</Carousel>
		</>
		
		
	);
}
