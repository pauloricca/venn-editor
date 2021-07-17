import React from 'react';
import ReactDOM from 'react-dom';
import { unmountComponentAtNode } from "react-dom";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import TextField from './TextField';

import renderer from "react-test-renderer";

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

it("renders with value passed as prop", () => {
    const {getByTestId} = render(<TextField value="test" onChange={callback}/>);
    expect(getByTestId('textfield')).toHaveValue("test");
});

describe("input value", () => {
    it("value updates on change", () => {
        const {getByTestId} = render(<TextField/>);
        const input = getByTestId('textfield');
        fireEvent.change(input, {target: {value: 'test'}});
        expect(input.value).toBe('test');
    });

    it("triggers the onChange event", () => {
        const 
    });
});