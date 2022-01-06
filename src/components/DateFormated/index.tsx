import { parseISO } from "date-fns";
import { format as dateFormat} from "date-fns";
interface props{
	date: string;
	format: string;
}
export function DateFormated({date,format} : props) {
	const dateFormated = dateFormat(parseISO(date), format);
	return <span>{dateFormated}</span>;
}