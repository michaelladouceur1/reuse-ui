interface useThemeInterface {
	backgroundColor?: string;
	highlightColor1?: string;
	highlightColor2?: string;
	highlightColor3?: string;
	alertColor?: string;
	borderRadius?: string | 0;
}

interface useThemeOptionsInterface {
	exclude?: string[];
}

const useTheme = (props: useThemeInterface, options?: useThemeOptionsInterface) => {
	// const selectionAreaTheme = {
	// 	"selection-area": {
	// 		"--selection-area-border-radius": "10px",
	// 	},
	// };

	// let exclude = {};

	// for (const exc of options?.exclude) {
	// 	if (Object.keys(selectionAreaTheme).includes(exc)) {
	// 		exclude = { ...exclude, ...selectionAreaTheme[exc] };
	// 	}
	// }

	return [
		{
			"--background-color": props.backgroundColor || "",
			"--highlight-color-1": props.highlightColor1 || "",
			"--highlight-color-2": props.highlightColor2 || "",
			"--highlight-color-3": props.highlightColor3 || "",
			"--alert-color": props.alertColor || "",
			"--border-radius": props.borderRadius || 0,
		} as React.CSSProperties,
	];
};

export { useTheme };
