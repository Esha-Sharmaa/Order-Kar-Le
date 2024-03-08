import { render,screen} from "@testing-library/react"
import ResturantCard, { withClosedLabel} from "../ResturantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import React from "react";
import '@testing-library/jest-dom';

const ResturantCardClosed = withClosedLabel(ResturantCard);

test('Should render Restruant Card with props Data', () => {
    render(<ResturantCard resData={MOCK_DATA} />)
    
    const heading = screen.getByText('Bikanervala');
    expect(heading).toBeInTheDocument();
});
test('should render Resturant Card with closed label', () => {
    render(<ResturantCardClosed resData={MOCK_DATA} />);

    const closedLabel = screen.getByText('Closed');
    expect(closedLabel).toBeInTheDocument();

});