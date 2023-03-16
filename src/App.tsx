import { useState } from "react";
import SelectionArea from "./lib/components/SelectionArea/SelectionArea";
import { useTheme } from "./lib/hooks/useTheme";
import "./App.css";

function App() {
	const [theme] = useTheme({
		backgroundColor: "lightblue",
	});
	const [selected, setSelected] = useState("test1");
	const [selected2, setSelected2] = useState("test2");

	console.log(theme);

	return (
		<div className="App">
			<SelectionArea
				style={theme}
				selections={["test1", "test2", "test3"]}
				selected={selected}
				setSelected={(value) => {
					console.log(value);
					setSelected(value);
				}}
			/>

			<SelectionArea
				selections={["test1", "test2", "test3"]}
				selected={selected2}
				setSelected={(value) => {
					console.log(value);
					setSelected2(value);
				}}
			/>
		</div>
	);
}

export default App;
