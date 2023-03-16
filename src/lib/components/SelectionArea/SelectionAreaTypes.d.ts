interface SelectionAreaInterface {
	/*
		Items to be displayed in selection area	
	*/
	selections: Selection[];
	/*
		Selected value
	*/
	selected: string;
	/*
		Function for setting selected value
	*/
	setSelected: (value: any) => void;
	/*
		Flag for whether to filter selections for unique values
	*/
	unique?: boolean;
	/*
		Flag for making selection area searchable
	*/
	search?: boolean;
	id?: string;
	className?: string;
	placeholder?: string;
	style?: object;
}

type Selection = string | number | { name: string; value: any };

export { SelectionAreaInterface, Selection };
