import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import SelectionArea from "../../lib/components/SelectionArea/SelectionArea";

const STRING_DATA = ["hello", "world"];
const NUMBER_DATA = [1, 2, 3, 4, 5];
const OBJECT_DATA = [
	{ name: "hello", value: 1 },
	{ name: "world", value: 2 },
	{ name: "foo", value: 3 },
	{ name: "bar", value: 4 },
];

test("component loads", async () => {
	render(<SelectionArea selections={STRING_DATA} selected="hello" setSelected={() => {}} />);
});

// Test SelectionArea receives and renders strings
test("component receives, renders, and selects strings", async () => {
	// Set initial selection and mock setSelected
	let selected = STRING_DATA[0];
	const setSelected = jest.fn((selection: any) => {
		selected = selection;
	});

	// Render component
	render(<SelectionArea selections={STRING_DATA} selected={selected} setSelected={setSelected} />);

	// Check that all selections are rendered
	STRING_DATA.forEach((selection) => {
		expect(screen.getByText(selection)).toBeInTheDocument();
	});

	// Check that other selections can be selected
	const nextSelection = screen.getByText(STRING_DATA[1]);
	await nextSelection.click();
	expect(setSelected).toHaveBeenCalledTimes(1);
	expect(setSelected).toHaveBeenCalledWith(STRING_DATA[1]);
	expect(selected).toBe(STRING_DATA[1]);
});

// Test SelectionArea receives and renders numbers
test("component receives, renders, and selects numbers", async () => {
	// Set initial selection and mock setSelected
	let selected = NUMBER_DATA[0];
	const setSelected = jest.fn((selection: any) => {
		selected = selection;
	});

	// Render component
	render(<SelectionArea selections={NUMBER_DATA} selected={selected} setSelected={setSelected} />);

	// Check that all selections are rendered
	NUMBER_DATA.forEach((selection) => {
		expect(screen.getByText(selection.toString())).toBeInTheDocument();
	});

	// Check that other selections can be selected
	const nextSelection = screen.getByText(NUMBER_DATA[1].toString());
	nextSelection.click();
	expect(setSelected).toHaveBeenCalledTimes(1);
	expect(setSelected).toHaveBeenCalledWith(NUMBER_DATA[1]);
	expect(selected).toBe(NUMBER_DATA[1]);

	// // Check that selected has class "reuse-selection reuse-selected"
	// expect(nextSelection).toHaveClass("reuse-selection reuse-selected");
});

// Test SelectionArea receives and renders objects
test("component receives, renders, and selects objects", async () => {
	// Set initial selection and mock setSelected
	let selected = OBJECT_DATA[0].value;
	const setSelected = jest.fn((selection: any) => {
		selected = selection;
	});

	// Render component
	render(<SelectionArea selections={OBJECT_DATA} selected={OBJECT_DATA[0].value} setSelected={setSelected} />);

	// Check that all selections are rendered
	OBJECT_DATA.forEach((selection) => {
		expect(screen.getByText(selection.name)).toBeInTheDocument();
	});

	// Check that other selections can be selected
	const nextSelection = screen.getByText(OBJECT_DATA[1].name);
	nextSelection.click();
	expect(setSelected).toHaveBeenCalledTimes(1);
	expect(setSelected).toHaveBeenCalledWith(OBJECT_DATA[1].value);
	expect(selected).toBe(OBJECT_DATA[1].value);
});
