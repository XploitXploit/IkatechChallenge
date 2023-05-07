import React from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./SizeSelector.module.css";

interface SizeSelectorProps {
	selectedSize: string;
	onSizeChange: (size: string) => void;
	onClearFilter: () => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
	selectedSize,
	onSizeChange,
	onClearFilter,
}) => {
	const sizeOptions = [
		"36",
		"37",
		"38",
		"39",
		"40",
		"41",
		"42",
		"43",
		"44",
		"trash",
	];

	return (
		<div className={styles.sizeMatrix}>
			{sizeOptions.map((size) => {
				if (size === "trash") {
					return (
						<div
							key={size}
							className={styles.sizeSquare}
							onClick={onClearFilter}>
							<FaTrash />
						</div>
					);
				} else {
					return (
						<div
							key={size}
							className={`${styles.sizeSquare} ${
								selectedSize === size ? styles.selected : ""
							}`}
							onClick={() => onSizeChange(size)}>
							{size}
						</div>
					);
				}
			})}
		</div>
	);
};

export default SizeSelector;
