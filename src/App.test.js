import React from 'react';
import { render, fireEvent, waitforElement, wait } from '@testing-library/react';
import App from './App'

test('app component renders fetching data...', () => {
    const { getByText, queryAllByTestId, getByTestId } = render(<App />)
    expect(getByTestId("fetching")).toHaveTextContent(/fetching data.../i)
});

test('app component renders seasons after api call', async () => {
    const { getByText, queryAllByTestId, getByTestId } = render(<App />)
    wait(() => expect(getByTestId("dropdown")).toHaveTextContent(/select a season/i))
})