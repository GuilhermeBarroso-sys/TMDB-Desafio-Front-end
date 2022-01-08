import { useContext, useEffect, useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Menu } from '../Menu';
import { PopularMovies } from '../PopularMovies';
import { Search } from '../Search';
import { SearchMovies } from '../SearchMovies';
import { TrendingMovies } from '../TrendingMovies';
import { AuthContext } from '../../contexts/auth';
import { LanguageContext } from '../../contexts/language';
import styles from './styles.module.scss';
import searchImg from '../../assets/undraw_horror_movie_3988.svg';
export function HomeScreen() {
	const {language, setLanguage, getLanguage,storageLanguage} = useContext(LanguageContext);
	const {isAuthenticated, signOut} = useContext(AuthContext);
	const [search, setSearch] = useState('');
	const [timeWindow, setTimeWindow] = useState("day");
	function handleLogout(event : React.MouseEvent<HTMLElement>) {
		event.preventDefault();
		signOut();
	}
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
				<PopularMovies />
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
			<TrendingMovies timeWindow={timeWindow}/>
			<h2> Buscar um filme </h2>
			<div className={styles.search}>
				<Search setSearch={setSearch}/>
				
			</div>
			<div className={styles.searchMovies}>

				{!search ? <div className={styles.undraw}><img src={searchImg} /> </div> : <SearchMovies search={search}/>}
			</div>
	

		</>
	);
}