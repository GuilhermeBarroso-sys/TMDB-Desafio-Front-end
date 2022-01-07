import { useContext, useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Menu } from '../../components/Menu';
import { PopularMovies } from '../../components/PopularMovies';
import { TrendingMovies } from '../../components/TrendingMovies';
import { AuthContext } from '../../contexts/auth';
import { LanguageContext } from '../../contexts/language';
import styles from './styles.module.scss';
export function Home() {
	const {getLanguage,storageLanguage} = useContext(LanguageContext);
	const {isAuthenticated, signOut} = useContext(AuthContext);
	function handleLogout(event : React.MouseEvent<HTMLElement>) {
		event.preventDefault();
		signOut();
	}

	const [timeWindow, setTimeWindow] = useState("day");
	const [language, setLanguage] = useState(getLanguage());
	return (
		<>
			{ isAuthenticated()
				? <div className={styles.menu}><a href="" onClick={handleLogout}>Sair</a></div> 
				: <div className={styles.menu}><Menu/></div> 
			}
			<div className={styles.container}>
				<h2>Filmes Populares ✨</h2>
				<Row className={styles.selectBoxContainer}>
					
					<span>Detalhes do filme</span>
					<Form.Select defaultValue={`${getLanguage()}`} onChange={((event) => {
						setLanguage(event.target.value);
						storageLanguage(event.target.value);
					})} aria-label="language" className={styles.selectBox}>
						<option value="pt-BR">Português</option>
						<option value="en-US">Inglês</option>
					</Form.Select>
				</Row>
				<PopularMovies  language={language}/>
				<h2>Filmes em Alta 🔥</h2>
				<Row className={styles.selectBoxContainer}>
					<span>Listar por</span>
					<Form.Select defaultValue={"day"} onChange={((event) => {
						setTimeWindow(event.target.value);
            
					})} aria-label="timeWindow" className={styles.selectBox}>
						<option value="day" >Em Alta hoje</option>
						<option value="week">Em Alta essa semana</option>
					</Form.Select>
				</Row>
			</div>
			<TrendingMovies language={language} timeWindow={timeWindow}/>
	

		</>
	);
}