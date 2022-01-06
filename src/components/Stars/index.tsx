import { useState } from "react";
import Rate from 'react-star-ratings';
interface props {
	average_rate: number;
}

export function Stars({average_rate} : props) {
	const rate = Math.round(average_rate) / 2;
	return (
		<Rate 
			rating={rate}
			starRatedColor="#FFE300"
			starDimension="1rem"
		/>
	);
}