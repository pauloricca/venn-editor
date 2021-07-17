import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import NumberField from './NumberField';

let testIdInput = 'numberfield';
let testIdSlider = 'numberslider';

afterEach(() => cleanup);

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