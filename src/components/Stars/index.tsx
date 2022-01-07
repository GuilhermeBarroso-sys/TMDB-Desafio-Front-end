import Rate from 'react-star-ratings';
interface props {
	average_rate: number;
}

export function Stars({average_rate} : props) {
	
	const rate = !average_rate ? 0 :average_rate / 2;
	return (
		<Rate 
			rating={rate}
			starRatedColor="#FFE300"
			starDimension="1rem"
		/>
	);
}