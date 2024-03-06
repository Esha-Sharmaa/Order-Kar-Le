import { render, screen } from '@testing-library/react';
import Help from '../Help';
import React from 'react';
import '@testing-library/jest-dom';
test('Help component heading is loaded or not', () => {
    render(<Help />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
});
// test('Help component button is loaded or not', () => {
//     render(<Help />);
//     const buttonElement = screen.getByRole('button');
//     expect(buttonElement).toBeInTheDocument();
// });
test('Text is loaded or not', () => {
    render(<Help />);
    const text = screen.getByText('This is the help page');
    expect(text).toBeInTheDocument();
});
test('should load two buttons ', () => {
    render(<Help />);
    const buttonElements = screen.getAllByRole('button');
    expect(buttonElements.length).toBe(2);
    // expect().not.toBe(3);
});