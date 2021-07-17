import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import NumberField from './NumberField';

let testIdInput = 'numberfield';
let testIdSlider = 'numberslider';
let container = null;


beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("renders correctly", () => {
    it("input renders with value passed as prop", () => {
        const {getByTestId} = render(<NumberField value={5}/>);
        expect(getByTestId(testIdInput)).toHaveValue(5);
    });

    it("slider renders with value passed as prop", () => {
        const {getByTestId} = render(<NumberField value={5}/>);
        // slider inputs have strings as values weirdly
        expect(getByTestId(testIdSlider)).toHaveValue("5");
    });
});

describe("input value", () => {

    it("input field change triggers the onChange event", () => {
        const onChange = jest.fn();
        const {getByTestId} = render(<NumberField onChange={onChange}/>);
        const input = getByTestId(testIdInput);
        fireEvent.change(input, {target: {value: 1}});
        expect(onChange).toHaveBeenCalledWith(1);
    });

    it("slider field change triggers the onChange event", () => {
        const onChange = jest.fn();
        const {getByTestId} = render(<NumberField onChange={onChange}/>);
        const input = getByTestId(testIdSlider);
        fireEvent.change(input, {target: {value: 5}});
        expect(onChange).toHaveBeenCalledWith(5);
    });
});