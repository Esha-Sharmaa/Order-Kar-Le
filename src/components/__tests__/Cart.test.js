import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import ResturantDetails from "../ResturantDetails"
import Header from "../Header";
import Cart from "../Cart";
import React from 'react';
import MOCK_DATA from "../../utils/ResturantDetailsMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
}))

test('Should render the resturant details component', async () => {
    await act(async () => {
        render(<ResturantDetails />);
    });
    
})
test("should render resturant details component with add button ", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <ResturantDetails />
                </Provider>
            </BrowserRouter>
        );
    });

    // should render the panel Rolls (3) on resturnant details componet and add btn should work
    const panel = screen.getByText('Rolls (3)');
    expect(panel).toBeInTheDocument();
    fireEvent.click(panel);

    // should render three add btns on the resturant details component 
    const addBtns = screen.getAllByRole('button', { name: "ADD" });
    expect(addBtns.length).toBe(3);
    // fire event click on add btn and header should have (1) on it
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("(1)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("(2)")).toBeInTheDocument();

});

test('should upadate the cart componet on click the add btn on resturant details component', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <ResturantDetails />
                    <Cart />
                </Provider>
            </BrowserRouter>
        );
    });
    
    expect(screen.getAllByTestId("cart-items").length).toBe(2);
}
)