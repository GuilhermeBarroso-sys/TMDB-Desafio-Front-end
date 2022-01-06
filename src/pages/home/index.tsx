import { Dropdown, Form, FormSelect, NavDropdown, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
export function Home() {
	
	return (
		<div className={styles.container}>
			<Row>
				<Form.Select aria-label="timeWindow" className={styles.selectBox}>
					<option value="day" selected>Dia</option>
					<option value="week">Semana</option>
				</Form.Select>
				<Form.Select aria-label="language" className={styles.selectBox}>
					<option value="day" selected>Português</option>
					<option value="week">Inglês</option>
				</Form.Select>
			</Row>

		</div>
	);
}