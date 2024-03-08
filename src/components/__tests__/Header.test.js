import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Header from "../Header";
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

test("Should render the Header Component with Sign in button ", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const signIn = screen.getByText('Sign in');
    expect(signIn).toBeInTheDocument();
});

test("Should render the Header Component with logo img", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const logoImg = screen.getByRole('img');
    expect(logoImg).toBeInTheDocument();
});

test("Should render the Header Component with cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const cartItems = screen.getByText('(0)');
    expect(cartItems).toBeInTheDocument();
});

test("Should change sign in button to sign out on click  ", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const signInButton = screen.getByRole('button', { name: "Sign in" });
    fireEvent.click(signInButton);
    const signOutButton = screen.getByRole('button', { name: "Sign out" });
    expect(signOutButton).toBeInTheDocument();
});
// 1. render
// 2. query 
// 3. assertion 