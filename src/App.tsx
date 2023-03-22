import { useState } from "react";
import SelectionArea from "../lib/components/SelectionArea/SelectionArea";
import { usePalette } from "../lib/hooks/usePalette";

function App() {
	const [theme] = usePalette(
		{
			backgroundColor: "lightblue",
		},
		{
			exclude: ["SelectionArea"],
		}
	);
	const [selected, setSelected] = useState("test1");

	console.log(theme);

	return (
		<div className="App">
			<SelectionArea
				style={theme}
				selections={["test1", "test2", "test3"]}
				selected={selected}
				setSelected={(value) => {
					setSelected(value);
				}}
			/>
		</div>
	);
}

export default App;
