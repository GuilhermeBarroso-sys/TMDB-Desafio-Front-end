import { Link } from "react-router-dom";
import styles from './styles.module.scss';
import {AiOutlineArrowLeft} from 'react-icons/ai';
interface props {
	link: string;
}
export function ArrowBack({link} : props) {
	return <div className={styles.arrowBack}><Link to={link}><AiOutlineArrowLeft/></Link></div>;
}