import { CDN_URL_CAROUSEL } from "../utils/constants";
const CarouselItem = ({ dish }) => {
    return <>
            <img className="w-36" src={CDN_URL_CAROUSEL + dish.imageId} />
        </>
}
export default CarouselItem;