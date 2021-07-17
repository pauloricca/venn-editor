import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import TextField from './TextField';

let testId = 'textfield';

afterEach(() => cleanup);

describe("renders correctly", () => {
    it("renders with value passed as prop", () => {
        const {getByTestId} = render(<TextField value="test"/>);
        expect(getByTestId(testId)).toHaveValue("test");
    });

    it("renders without value passed as prop", () => {
        const {getByTestId} = render(<TextField/>);
        expect(getByTestId(testId)).toHaveValue("");
    });
});

describe("input value", () => {
    it("value updates on change", () => {
        const {getByTestId} = render(<TextField/>);
        const input = getByTestId(testId);
        fireEvent.change(input, {target: {value: 'test'}});
        expect(input.value).toBe('test');
    });

    it("triggers the onChange event", () => {
        const onChange = jest.fn();
        const {getByTestId} = render(<TextField onChange={onChange}/>);
        const input = getByTestId(testId);
        fireEvent.change(input, {target: {value: 'test'}});
        expect(onChange).toHaveBeenCalledWith('test');
    });
});