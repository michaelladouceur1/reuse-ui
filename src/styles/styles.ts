import SelectionAreaStyles from "./SelectionArea.module.css";

export type PaletteNames = keyof typeof Palettes;

// 0b0a07

export const Palettes = {
	NIGHTSKY: {
		backgroundColor: "#1f1f1f",
		highlightColor1: "#292929",
		highlightColor2: "#1a1a1a",
		highlightColor3: "#0d3b66",
		alertColor: "#db5461",
	},
	MINT: {
		backgroundColor: "#c3d1d5",
		highlightColor1: "#1e8d8b",
		highlightColor2: "#c1f7dc",
		highlightColor3: "#0d3b66",
		alertColor: "#db5461",
	},
	STEEL: {
		backgroundColor: "#737a94",
		highlightColor1: "#7f8fc7",
		highlightColor2: "#7681a8",
		highlightColor3: "#0d3b66",
		alertColor: "#db5461",
	},
	FOREST: {
		backgroundColor: "#dce0df",
		highlightColor1: "#748067",
		highlightColor2: "#4B6858",
		highlightColor3: "#BBCEA8",
		alertColor: "#DB504A",
	},
};

export const reuseStyles = {
	SelectionArea: SelectionAreaStyles,
};
