import React, { useCallback, useMemo, CSSProperties } from "react";

import GlobalStyles from "../../styles/_global.module.css";
import SelectionAreaStyles from "../../styles/SelectionArea.module.css";
import { useDefaultPalette } from "../hooks/useDefaultPalette";

/**
 * SelectionArea component
 * @param {SelectionAreaProps} props
 * @returns {JSX.Element}
 * @example
 * <SelectionArea
 * 	selections={["Item 1", 10, { name: "Item 6", value: 6 }]}
 * 	selected={10}
 * 	setSelected={(value: any) => { ... }}
 * />
 */
export interface SelectionAreaProps {
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
 * @type {string | number | { name: string; value: any;}} SelectionItem
 */
export type SelectionItem = string | number | { name: string; value: any };

function SelectionArea(props: SelectionAreaProps) {
	const [palette] = useDefaultPalette(props.style);

	palette.width = props.dimension?.width || "400px";
	palette.height = props.dimension?.height || "200px";

	const selectionName = (selection: SelectionItem) => {
		if (typeof selection === "object") {
			return selection.name;
		}
		return selection;
	};

	const selectionAreaClass = `${GlobalStyles.global} ${SelectionAreaStyles.reuseSelectionArea} ${props.className}`;
	const selectionClass = useCallback(
		(selection: SelectionItem) => {
			if (typeof selection === "object") {
				if (selection.name === props.selected.name) {
					return `${SelectionAreaStyles.reuseSelection} ${SelectionAreaStyles.reuseSelected}`;
				}
			} else {
				if (selection === props.selected) {
					return `${SelectionAreaStyles.reuseSelection} ${SelectionAreaStyles.reuseSelected}`;
				}
			}
			return SelectionAreaStyles.reuseSelection;
		},
		[props.selected]
	);

	const handleSelection = (selection: SelectionItem) => {
		if (props.setSelected) {
			props.setSelected(selection);
		}
	};

	const selectionElements = useMemo(() => {
		return props.selections.map((selection: SelectionItem, idx: number) => {
			return (
				<div key={idx} className={selectionClass(selection)} onClick={() => handleSelection(selection)}>
					{selectionName(selection)}
				</div>
			);
		});
	}, [props.selections, props.selected]);

	return (
		<div id={props.id} className={selectionAreaClass} style={palette}>
			<div className={SelectionAreaStyles.reuseSelections}>{selectionElements}</div>
		</div>
	);
}

export { SelectionArea };
