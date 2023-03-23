import React, { useCallback, useMemo } from "react";

import "@styles/SelectionArea.css";

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

const SelectionArea: React.FC<SelectionArea> = (props) => {
	const selectionName = (selection: SelectionItem) => {
		if (typeof selection === "object") {
			return selection.name;
		}
		return selection;
	};

	const selectionAreaClass = `reuse-selection-area ${props.className}`;
	const selectionClass = useCallback(
		(selection: SelectionItem) => {
			if (selection === props.selected) {
				return "reuse-selection reuse-selected";
			}
			return "reuse-selection";
		},
		[props.selected]
	);

	const handleSelection = (selection: SelectionItem) => {
		if (props.setSelected) {
			if (typeof selection === "object") {
				props.setSelected(selection.value);
			} else {
				// console.log("selection: ", selection);
				props.setSelected(selection);
			}
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
	}, [props.selections]);

	return (
		<div id={props.id} className={selectionAreaClass} style={props.style}>
			<div className="reuse-selections">{selectionElements}</div>
		</div>
	);
};

export { SelectionArea };
