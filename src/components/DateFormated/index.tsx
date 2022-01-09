import { parseISO } from "date-fns";
import {format} from "date-fns";
interface props{
	date: string;
	formatDate: string;
}
export function DateFormated({date,formatDate} : props) {
	const dateFormated = format(parseISO(date), formatDate);
	return <span>{dateFormated}</span>;
}