interface Palette {
	SelectionArea: ComponentPalette;
	Modal: ComponentPalette;
}

interface ComponentPalette {
	backgroundColor?: string;
	highlightColor1?: string;
	highlightColor2?: string;
	highlightColor3?: string;
	alertColor?: string;
	borderRadius?: string | 0;
}

export { Palette, ComponentPalette };
