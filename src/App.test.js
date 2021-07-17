import React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

let appTestId = 'app';
let editorTestId = 'editor';
let viewerTestId = 'viewer';

afterEach(() => cleanup);

it("is rendered with viewer and editor, using dummy data", () => {
    const {getByTestId} = render(<App useDummyData={true}/>);
    expect(getByTestId(appTestId)).toBeInTheDocument();
    expect(getByTestId(viewerTestId)).toBeInTheDocument();
    expect(getByTestId(editorTestId)).toBeInTheDocument();
});

it("loads data from params", () => {

    const dummyData = [
        {
            "moduleType": "VTextBox",
            "attributes": {
                "bodyText": "TESTTEST"
            }
        }
    ];

    const {getByTestId} = render(<App useData={dummyData}/>);
    expect(getByTestId(appTestId)).toBeInTheDocument();

    const viewer = getByTestId(viewerTestId);
    const editor = getByTestId(editorTestId);

    expect(viewer).toBeInTheDocument();
    expect(editor).toBeInTheDocument();

    // Does the viewer display the text content?
    expect(viewer).toHaveTextContent('TESTTEST');

    // Does the editor display a Text element?
    expect(editor).toHaveTextContent('Text');
});


it("loads data from params", () => {

    const dummyData = [
        {
            "moduleType": "VTextBox",
            "attributes": {
                "bodyText": "TESTTEST"
            }
        }
    ];

    const {getByTestId} = render(<App useData={dummyData}/>);
    
    expect(getByTestId(appTestId)).toBeInTheDocument();

    const viewer = getByTestId(viewerTestId);
    const editor = getByTestId(editorTestId);

    expect(viewer).toBeInTheDocument();
    expect(editor).toBeInTheDocument();

    // Does the viewer display the text content?
    expect(viewer).toHaveTextContent('TESTTEST');

    // Does the editor display a Text element?
    expect(editor).toHaveTextContent('Text');
});


it("loads data from server", async () => {

    const {getByTestId} = render(<App/>);

    await waitFor(
        () =>  { 
            expect(getByTestId(appTestId)).toBeInTheDocument();
            const viewer = getByTestId(viewerTestId);
            const editor = getByTestId(editorTestId);
            expect(viewer.querySelectorAll('.view-container').length).not.toBe(0);
            expect(editor.querySelectorAll('.ModuleEditor').length).not.toBe(0);
        },
        { timeout: 2000 }
    );
});



it("removes view", () => {

    const dummyData = [
        {
            "moduleType": "VTextBox",
            "attributes": {
                "bodyText": "TESTTEST"
            }
        }
    ];

    const {getByTestId} = render(<App useData={dummyData}/>);

    const viewer = getByTestId(viewerTestId);
    const editor = getByTestId(editorTestId);

    window.confirm = () => true;

    expect(viewer.querySelectorAll('.view-container').length).not.toBe(0);
    const removeBtn = editor.querySelectorAll('.remove-btn')[0];
    fireEvent.click(removeBtn);
    expect(viewer.querySelectorAll('.view-container').length).toBe(0);
});




it("adds new view", () => {

    const dummyData = [];

    const {getByTestId} = render(<App useData={dummyData}/>);

    const viewer = getByTestId(viewerTestId);
    const editor = getByTestId(editorTestId);

    expect(viewer.querySelectorAll('.view-container').length).toBe(0);
    const addNew = editor.querySelectorAll('.add-new-module')[0];
    fireEvent.change(addNew, {target: {value: 'VTextBox'}});
    expect(viewer.querySelectorAll('.view-container').length).toBe(1);
});




it("edits content", () => {

    const dummyData = [
        {
            "moduleType": "VTextBox",
            "attributes": {
                "bodyText": "TESTTEST"
            }
        }
    ];

    const {getByTestId} = render(<App useData={dummyData}/>);

    const viewer = getByTestId(viewerTestId);
    const editor = getByTestId(editorTestId);

    const editorTitle = editor.querySelectorAll('.ModuleEditor .title')[0];

    // open the editor
    fireEvent.click(editorTitle);

    // add text
    const textField = editor.querySelectorAll('.ModuleEditor .editor-field input')[0];
    fireEvent.change(textField, {target: {value: 'TESTTEST'}});

    expect(viewer).toHaveTextContent("TESTTEST");
});



/*
const dummyData = [
    {
        "moduleType": "VTextBox",
        "attributes": {
            "padding": 14,
            "backgroundColor": {
                "hex": "#FF0000"
            },
            "bodyText": "20% Discount on all items",
            "textAlignment": "right",
            "fontSize": 21,
            "capitalised": true,
            "fontColor": {
                "hex": "#0000FF"
            }
        }
    },
    {
        "moduleType": "VImageWithPadding",
        "attributes": {
            "padding": 50,
            "backgroundColor": {
                "hex": "#00BB00"
            },
            "imageUrl": "https://firebasestorage.googleapis.com/v0/b/mulawl.appspot.com/o/c70f0c40-78b4-11ea-9167-f7c4afbaf99b%2F2020-12-21%2Fritz_app2_1500x%402x.gif?alt=media&token=df148b2e-18df-47e8-844f-9755c5aedade",
            "link": {
                "payload": "124",
                "type": "category"
            }
        },
        "heightMultiplier": 1.25
    },
    {
        "moduleType": "VImageCarousel",
        "attributes": {
            "padding": 0,
            "images": [
                "https://firebasestorage.googleapis.com/v0/b/mulawl.appspot.com/o/c70f0c40-78b4-11ea-9167-f7c4afbaf99b%2F2020-12-21%2Fritz_app2_1500x%402x.gif?alt=media&token=df148b2e-18df-47e8-844f-9755c5aedade",
                "https://firebasestorage.googleapis.com/v0/b/mulawl.appspot.com/o/c70f0c40-78b4-11ea-9167-f7c4afbaf99b%2F2020-12-21%2Fritz_app2_1500x%402x.gif?alt=media&token=df148b2e-18df-47e8-844f-9755c5aedade",
                "https://firebasestorage.googleapis.com/v0/b/mulawl.appspot.com/o/c70f0c40-78b4-11ea-9167-f7c4afbaf99b%2F2020-12-21%2Fritz_app2_1500x%402x.gif?alt=media&token=df148b2e-18df-47e8-844f-9755c5aedade"
            ]
        },
        "heightMultiplier": 1.25
    }
];

*/