import { useEffect, useState } from "react";
import { RES_CDN_URL } from "../utils/constants";
const CartItems = ({ resData }) => {
    const { name, imageId, price, defaultPrice } = resData;

    return (
        <div className="flex justify-between p-2 my-2"> 
            <img
                className="w-[40px] h-[30px] rounded-xl object-cover"
                src={RES_CDN_URL + imageId}
                alt="" />
            <h2 className="text-md font-semibold"> {name} </h2>
            <h2 className="text-md font-semibold"> &#8377;{(price? price : defaultPrice) / 100} </h2>
        </div>
    )

}
export default CartItems;