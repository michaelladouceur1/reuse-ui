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

// =========================
// SelectionArea
// =========================

interface SelectionArea {
	/**
	 * Array of selection items
	 * @type {SelectionItem[]}
	 * @example ['Item 1', 10, { name: 'Item 6', value: 6 }]
	 */
	selections: SelectionItem[];
	/**
	 * Selected value
	 * @type {any}
	 * @example (someData: any) => { ... } || 10 || 'Item 1'
	 */
	selected: any;
	/**
	 * Function for setting selected value
	 * @type {(value: any) => void}
	 * @example (value: any) => { ... }
	 */
	setSelected: (value: any) => void;
	/**
	 * Flag for whether to filter selections for unique values
	 */
	unique?: boolean;
	/**
	 * Flag for making selection area searchable
	 */
	search?: boolean;
	/**
	 * Selection area id
	 */
	id?: string;
	/**
	 * Selection area class name
	 */
	className?: string;
	/**
	 * Selection area style
	 */
	style?: object;
}

/**
 * Type for selection items
 * @type {string | number | SelectionItemObject} SelectionItem
 */
type SelectionItem = string | number | { name: string; value: any };

// =========================
// usePalette
// =========================

type usePaletteProps = ComponentPalette;

interface usePaletteOptions {
	exclude?: (keyof Palette)[];
}
