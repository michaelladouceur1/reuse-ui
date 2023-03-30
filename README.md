# Reuse UI

A collection of reusable React components

## Index

- [Selection Area](#selection-area)

## Installation

Install Reuse UI from npm

Using npm:

```sh
npm install reuse-ui
```

Using yarn:

```sh
yarn add reuse-ui
```

## Usage

## Selection Area

The `<SelectionArea />` component is a component for displaying selectable list items. The list items can be an array of the following types:

- `string`
- `number`
- `{name: string, value: any}`

### <b>Example #1</b>

```js
import { useState } from "react";

function App() {
	const selections = ["Michael", "Ashley", "Christopher", "Jessica"];
	const [selected, setSelected] = useState(selections[0]);
	return <SelectionArea selections={SELECTIONS} selected={selected} setSelected={setSelected} />;
}
```

### <b>Example #2</b>

```js
import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

function App() {
	const [selections, setSelections] = useState([]);
	const [selected, setSelected] = useState("");

	useEffect(() => {
		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				const users = data.map((user) => ({
					name: user.name,
					value: { id: user.id, name: user.name, email: user.email },
				}));
				setSelections(users);
				setSelected(users[0]);
			});
	}, []);

	const updateSelected = async (newSelected) => {
		fetch(URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ user: newSelected.value }),
			mode: "cors",
		});

		setSelected(newSelected);
	};

	return <SelectionArea selections={selections} selected={selected} setSelected={updateSelected} />;
}
```

### <b>Selection Area Arguments</b>

| Argument      | Description                                                                                |
| ------------- | ------------------------------------------------------------------------------------------ |
| `selections`  | Array of list items to display (`string[]`, `number[]`, or `{name: string, value: any}[]`) |
| `selected`    | Selected value                                                                             |
| `setSelected` | Function for setting value of selected and performing other actions                        |
| `dimension`   | Object to set `width` and `height` of Selection Area (`{width: string, height: string}`)   |
