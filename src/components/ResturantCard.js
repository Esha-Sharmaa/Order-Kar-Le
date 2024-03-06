import {CDN_URL} from "../utils/constants";
const ResturantCard = (props) => {
    const { name, cloudinaryImageId, locality, cuisines, avgRatingString, sla } = props?.resData;
    return (
        <div className="flex-column w-52">
            <img className="w-52 h-36 object-cover rounded-xl" src={CDN_URL + cloudinaryImageId} alt="Restaurant Image" />
            <div className="restaurant-details">
                <h4 className="text-lg font-semibold">{name}</h4>
                <span className="text-lg font-semibold">★ {avgRatingString}</span>
                <span className="text-lg font-semibold">  {sla.slaString}</span>
                <p className="text-sm font-light tracking-wide"> {cuisines.join(", ")}</p>
                <p className="text-sm font-light tracking-wide"> {locality}</p>
            </div>
        </div>
    )
}

export const withClosedLabel = (ResturantCard) => {
    return (props) => {
        return <div>
            <label className="absolute bg-gray-300 text-lg font"> Closed </label>
            <ResturantCard {...props} />
        </div>
    }
}
export default ResturantCard;