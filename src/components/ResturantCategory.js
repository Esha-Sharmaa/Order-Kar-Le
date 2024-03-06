import React from "react";
import { useState } from "react";
import CategoryItemsList from "./CategoryItemsList";
const ResturantCategory = ({ data, showDetails, setShowIndex }) => {
    const { title, itemCards } = data;
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div>
            <div className="shadow-lg my-4 flex justify-between py-4 cursor-pointer px-2" onClick={() => handleClick()}>
                <span className="text-lg font-semibold "> {title} ({itemCards.length})</span>
                <span> &darr; </span>
            </div>
            <div> 
                {
                    showDetails && itemCards.map(item =>
                        <CategoryItemsList
                            key={item?.card?.info?.id}
                            resData={item?.card?.info}
                        />)
                }
            </div>
        </div>
    )
}
export default ResturantCategory;