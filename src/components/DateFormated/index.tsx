import { parseISO } from "date-fns";
import dateFormat from "date-fns";
interface props{
	date: string;
	format: string;
}
export function DateFormated({date,format} : props) {
	const dateFormated = dateFormat.format(parseISO(date), format);
	return <span>{dateFormated}</span>;
}