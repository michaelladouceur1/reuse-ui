import React, { useCallback, useMemo } from "react";

import "./SelectionArea.css";

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

export default SelectionArea;
