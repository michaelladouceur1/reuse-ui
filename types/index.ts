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

/**
 * SelectionArea component
 * @param {SelectionArea} props
 * @returns {JSX.Element}
 * @example
 * <SelectionArea
 * 	selections={["Item 1", 10, { name: "Item 6", value: 6 }]}
 * 	selected={10}
 * 	setSelected={(value: any) => { ... }}
 * />
 */
export interface ISelectionArea {
	/**
	 * Array of selection items
	 * @type {ISelectionItem[]}
	 * @example ['Item 1', 10, { name: 'Item 6', value: 6 }]
	 */
	selections: ISelectionItem[];
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
	 * Dimension for selection area
	 */
	dimension?: {
		/**
		 * Width for selection area
		 * @type {string}
		 */
		width?: string;
		/**
		 * Height for selection area
		 * @type {string}
		 */
		height?: string;
	};
	/**
	 * Flag for whether to filter selections for unique values
	 */
	// unique?: boolean;
	/**
	 * Flag for making selection area searchable
	 */
	// search?: boolean;
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
	style?: CSSProperties;
}

/**
 * Type for selection items
 * @type {string | number | SelectionItemObject} SelectionItem
 */
export type ISelectionItem = string | number | { name: string; value: any };
