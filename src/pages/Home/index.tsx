import { useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import { PopularMovies } from '../../components/PopularMovies';
import { TrendingMovies } from '../../components/TrendingMovies';
import styles from './styles.module.scss';
export function Home() {
	const [timeWindow, setTimeWindow] = useState("day");
	const [language, setLanguage] = useState("pt-BR");
	return (
		<>
			<div className={styles.container}>
				<h2>Filmes Populares ✨</h2>
				<Row className={styles.selectBoxContainer}>
					
					<span>Idioma</span>
					<Form.Select defaultValue={"ptBR"} onChange={((event) => {setLanguage(event.target.value);})} aria-label="language" className={styles.selectBox}>
						<option value="pt-BR">Português</option>
						<option value="en-US">Inglês</option>
					</Form.Select>
				</Row>
				<PopularMovies  language={language}/>
				<h2>Filmes em Alta 🔥</h2>
				<Row className={styles.selectBoxContainer}>
					<span>Listar por</span>
					<Form.Select defaultValue={"day"} onChange={((event) => {setTimeWindow(event.target.value);})} aria-label="timeWindow" className={styles.selectBox}>
						<option value="day" >Em Alta hoje</option>
						<option value="week">Em Alta essa semana</option>
					</Form.Select>
				</Row>
			</div>
			<TrendingMovies language={language} timeWindow={timeWindow}/>
	

		</>
	);
}