import { MoviesCarousel } from '../MoviesCarousel';
import styles from './styles.module.scss';
export function PopularMovies() {
	return (
		<div className={`${styles.center} ${styles.carousel}`}>
			<MoviesCarousel/>
		</div>
	);
}