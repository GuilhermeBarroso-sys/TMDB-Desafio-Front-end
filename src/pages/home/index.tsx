import { Form, Row } from 'react-bootstrap';
import { MoviesCarousel } from '../../components/MoviesCarousel';
import { PopularMovies } from '../../components/PopularMovies';
import styles from './styles.module.scss';
export function Home() {
	
	return (
		<div className={styles.container}>
			<Row className={styles.selectBoxContainer}>
				<Form.Select defaultValue={'day'} aria-label="timeWindow" className={styles.selectBox}>
					<option value="day" >Dia</option>
					<option value="week">Semana</option>
				</Form.Select>
				<Form.Select defaultValue={'pt-BR'} aria-label="language" className={styles.selectBox}>
					<option value="pt-BR">Português</option>
					<option value="en-US">Inglês</option>
				</Form.Select>
			</Row>

			<PopularMovies/>
		</div>
	);
}