import { MoviesCarousel } from '../MoviesCarousel';
import styles from './styles.module.scss';
export function PopularMovies() {
	return (
		<div className={`${styles.center} ${styles.carousel}`}>
			<h2>Filmes Populares</h2>
			<MoviesCarousel/>
		</div>
	);
}