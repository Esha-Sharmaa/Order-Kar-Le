import { Link } from "react-router-dom";
import { CDN_URL_CAROUSEL } from "../utils/constants";
import React from "react";
const CarouselItem = ({ dish }) => {
    return <>
        <div className="w-36">
            <img className="w-full" src={CDN_URL_CAROUSEL + dish.imageId} />
        </div>
        </>
}
export default CarouselItem;