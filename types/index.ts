import { CSSProperties } from "react";

export interface Palette {
	SelectionArea: ComponentPalette;
	Modal: ComponentPalette;
}

export interface ComponentPalette {
	backgroundColor?: string;
	highlightColor1?: string;
	highlightColor2?: string;
	highlightColor3?: string;
	alertColor?: string;
	borderRadius?: string | 0;
}
