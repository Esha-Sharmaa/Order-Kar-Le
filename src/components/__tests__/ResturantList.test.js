const { fireEvent,render, screen} = require("@testing-library/react")
import { act } from "react-dom/test-utils";
import ResturantList from "../ResturanList";
import React from "react";
import MOCK_DATA from "../mocks/ResturantListMock.json";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

// simulation the fetch funtion 
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})
test("Should render the resturant list component with Search", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <ResturantList />
            </BrowserRouter>
        )
    });
    const resCardsBeforeSearch = screen.getAllByTestId('resCard');
    expect(resCardsBeforeSearch.length).toBe(9);


    const searchBtn = screen.getByRole('button', { name: "Search" });
    const searchInput = screen.getByPlaceholderText("kiya khana hai batao");

    fireEvent.change(searchInput, { target: { value: "sweets" } });
    fireEvent.click(searchBtn);

    const resCardsAfterSearch = screen.getAllByTestId('resCard');

    expect(resCardsAfterSearch.length).toBe(2);

})

test("Should render the resturant list component filtered Resturant button ", async () => {
    await act(() => {
        render(
            <BrowserRouter>
                <ResturantList />
            </BrowserRouter>
        )
    });
    const resCardsBeforeFilter = screen.getAllByTestId('resCard');
    expect(resCardsBeforeFilter.length).toBe(9);

    const filterBtn = screen.getByRole('button', { name: 'Filter Top Restaurants' });

    fireEvent.click(filterBtn);
    
    const resCardsAfterFilter = screen.getAllByTestId('resCard');
    expect(resCardsAfterFilter.length).toBe(8);
})