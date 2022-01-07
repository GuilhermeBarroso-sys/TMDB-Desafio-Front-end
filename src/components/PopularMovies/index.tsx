import { MoviesCarousel } from '../MoviesCarousel';
import styles from './styles.module.scss';
interface props {
	language: string
}
export function PopularMovies({language} : props) {
	return (
		<div className={`${styles.center} ${styles.carousel}`}>
			<MoviesCarousel language = {language}/>
		</div>
	);
}