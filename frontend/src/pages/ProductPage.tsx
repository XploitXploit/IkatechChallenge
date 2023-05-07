import React from "react";
import ShoeDetail from "../components/ShoeDetail/ShoeDetail.tsx";
import { useLocation } from "react-router-dom";
import { zapatos } from "../assets/json/zapatos.js";

const useShoeData = (referencia: string) => {
	const shoe = zapatos.find((shoe) => shoe.referencia === referencia);
	console.log(shoe);
	return shoe;
};

const ProductPage: React.FC = () => {
	const location = useLocation();
	const referencia = location.pathname.split("/")[2]; 
	const shoeData = useShoeData(referencia);
	return (
		<div className='mx-auto text-center'>
			<ShoeDetail shoe={shoeData}/>
		</div>
	);
};

export default ProductPage;
