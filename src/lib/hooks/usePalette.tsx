import { ComponentPalette, Palette } from "../../../types";
import { PaletteNames, Palettes } from "../../styles/styles";

type usePaletteProps = ComponentPalette;

interface usePaletteOptions {
	exclude?: (keyof Palette)[];
}

/**
 * usePalette hook - returns a CSSProperties object for use in a style prop
 * @example
 * const [palette] = usePalette("STEEL");
 * <div style={palette} />
 */
function usePalette(props: PaletteNames, options?: usePaletteOptions): [React.CSSProperties];
/**
 * usePalette hook - returns a CSSProperties object for use in a style prop
 * @example
 * const [palette] = usePalette({ backgroundColor: "red", highlightColor1: "blue", highlightColor3: "green", ... });
 * <div style={palette} />
 */
function usePalette(props: usePaletteProps, options?: usePaletteOptions): [React.CSSProperties];
function usePalette(props: any, options?: any): [React.CSSProperties] {
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

	if (typeof props === "string") {
		props = Palettes[props as PaletteNames];
	}

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
}

export { usePalette };
