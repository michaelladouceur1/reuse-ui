import React, { useCallback, useMemo } from "react";

import { SelectionAreaInterface, Selection } from "./SelectionAreaTypes";
import "./SelectionArea.css";

const SelectionArea: React.FC<SelectionAreaInterface> = (props) => {
	const selectionName = (selection: Selection) => {
		if (typeof selection === "object") {
			return selection.name;
		}
		return selection;
	};

	const selectionAreaClass = `reuse-selection-area ${props.className}`;
	const selectionClass = useCallback(
		(selection: Selection) => {
			if (selection === props.selected) {
				return "reuse-selection reuse-selected";
			}
			return "reuse-selection";
		},
		[props.selected]
	);

	const handleSelection = (selection: Selection) => {
		if (props.setSelected) {
			if (typeof selection === "object") {
				props.setSelected(selection.value);
			} else {
				props.setSelected(selection);
			}
		}
	};

	const selectionElements = useMemo(() => {
		return props.selections.map((selection: Selection) => {
			return (
				<div className={selectionClass(selection)} onClick={() => handleSelection(selection)}>
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
