import React from "react";
import { useDispatch } from "react-redux";
import { RES_CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const CategoryItemsList = ({ resData }) => {
    const { name, description, imageId, price, defaultPrice } = resData;
    // need access to dispatch using dispatch hook from react-redux
    const dispatch = useDispatch();
    const handleAddItem = () => {
        // dispatch an action 
        dispatch(addItem(resData));
    }
    return (
        <div className="flex justify-between mb-8 border-b border-gray-300 pb-4 gap-2">
            <div className="w-9/12"> 
                <h3 className="text-lg font-semibold"> {name} </h3>
                <span> &#8377;{(price?price:defaultPrice) / 100}</span>
                <p className="text-md text-gray-400 font-extralight text-justify"> {description}</p>
            </div>
            <div className="relative">
                <img
                    className="w-[118px] h-24 rounded-xl object-cover"
                    src={RES_CDN_URL + imageId}
                    alt="" />
                <button
                    className="bg-white text-custom-defaultLight font-semibold absolute top-16 left-[12px] px-8 py-2 rounded-md shadow-md"
                    onClick={() => {
                        handleAddItem()
                    }}
                >
                    ADD
                </button>
            </div>
        </div>
        )
}
export default CategoryItemsList;