import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
	setColorFilter,
	setPriceFilter,
} from "../../redux/slices/filterSlice.tsx";
import styles from "./ShoeFilter.module.css";

const ShoeFilter: React.FC = () => {
	const dispatch = useDispatch();
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(0);

	const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(setColorFilter(e.target.value));
	};

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "minPrice") {
            setMinPrice(Number(e.target.value));
            dispatch(setPriceFilter({ minPrice: Number(e.target.value), maxPrice }));
        } else {
            setMaxPrice(Number(e.target.value));
            dispatch(setPriceFilter({ minPrice, maxPrice: Number(e.target.value) }));
        }
    };

	return (
		<div className={styles.filterContainer}>
			<Form>
				<Form.Group controlId='color'>
					<Form.Label>Color</Form.Label>
					<Form.Control
						as='select'
						defaultValue='all'
						onChange={handleColorChange}>
						<option value='all'>All</option>
						<option value='azul'>Azul</option>
						<option value='rojo'>Rojo</option>
						<option value='verde'>Verde</option>
						<option value='gris'>Gris</option>
						<option value='cafe'>Cafe</option>
						<option value='miel'>Miel</option>
						<option value='aguamarina'>Aguamarina</option>
						<option value='perla'>Perla</option>
						<option value='perla'>Piel</option>
						<option value='marinado'>Marinado</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId='price'>
					<Form.Label>Price range</Form.Label>
					<div className='d-flex justify-content-between'>
						<Form.Control
							type='number'
							name='minPrice'
							value={minPrice}
							onChange={handlePriceChange}
							placeholder='Min price'
							style={{ width: "48%" }}
						/>
						<Form.Control
							type='number'
							name='maxPrice'
							value={maxPrice}
							onChange={handlePriceChange}
							placeholder='Max price'
							style={{ width: "48%" }}
						/>
					</div>
				</Form.Group>
			</Form>
		</div>
	);
};

export default ShoeFilter;