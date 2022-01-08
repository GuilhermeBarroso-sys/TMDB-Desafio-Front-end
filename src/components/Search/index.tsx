import { Form } from "react-bootstrap";

interface props {

	setSearch: (value: string) => void;
}
interface IhandleSearch {
	value : string
	setSearch: (value: string) => void;

}
function handleSearch({value,setSearch} : IhandleSearch ) {
	const query = value.split(' ').join('+');
	setSearch(query);
}
export function Search({setSearch}: props) {
	return (
		<Form>
			<Form.Group className="mb-3">
				<Form.Control type="text" onChange={(event) => {
					const value = event.target.value;
					handleSearch({value, setSearch});
				}} placeholder="Digite o título do filme" />
			</Form.Group>
		</Form>

	);
}