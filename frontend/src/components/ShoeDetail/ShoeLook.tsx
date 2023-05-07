import React from "react";
import { zapatos } from "../../assets/json/zapatos";
import ShoeCardList from "./ShoeCardList.tsx";

interface ShoeCardListProps {
    showButton?: boolean;
}

const ShoeList: React.FC<ShoeCardListProps> = ({showButton}) => {
	const shoes = zapatos;

	return <ShoeCardList shoes={shoes} showButton={showButton} />;
};

export default ShoeList;
