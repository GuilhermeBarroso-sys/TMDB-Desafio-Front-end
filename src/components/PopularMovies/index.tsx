import { MoviesCarousel } from '../MoviesCarousel';
import styles from './styles.module.scss';
interface props {
	language: string
}
export function PopularMovies({language} : props) {
	return (
		<div className={`${styles.center} ${styles.carousel}`}>
			<h2>Filmes Populares</h2>
			<MoviesCarousel language = {language}/>
		</div>
	);
}