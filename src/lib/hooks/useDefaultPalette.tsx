import { CSSProperties } from "react";
import { usePalette } from "./usePalette";

function useDefaultPalette(style: CSSProperties | undefined) {
	const [palette] = usePalette("STEEL");
	return [{ ...palette, ...style }];
}

export { useDefaultPalette };
