import { CDN_URL } from "../utils/constants";
const ResturantChain = (props) => {
    const { name, cloudinaryImageId, locality, cuisines, avgRatingString, sla } = props?.resData;
    return (
        <div className="flex-column w-[273px]">
            <img className="w-[273px] h-[181px] object-cover rounded-xl" src={CDN_URL + cloudinaryImageId} alt="Restaurant Image" />
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
export default ResturantChain;