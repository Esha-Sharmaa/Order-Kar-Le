import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { extract } from "../utils/functions";
import { Link } from "react-router-dom";
import { COLLECTION_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import ResturantCard from "./ResturantCard";
import ResturantChain from "./ResturantChain";
const FoodCollection = () => {
    const { link } = useParams();
    const [collectionHeader, setCollectionHeader] = useState([]);
    const [collectionCards, setCollectionCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const collectionLink = extract(link);

    const fetchFoodCollections = async () => {
        try {
            const data = await fetch(`${COLLECTION_URL}${collectionLink}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`);
            const json = await data.json();
            setCollectionHeader(json.data.cards[0]);
            setCollectionCards(json.data.cards);
            setLoading(false);

        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        fetchFoodCollections();
    }, [])
    !loading && console.log(collectionCards[3]);
    return loading ? <Shimmer /> : <div className="p-10"> 
        <h1 className="text-[40px] font-semibold"> {collectionHeader?.card?.card?.title}</h1>
        <p className="text-lg opacity-90 mt-2 font-thin"> {collectionHeader?.card?.card?.description}</p>
        <h2 className="font-bold text-2xl mt-6"> Restaurants To Explore </h2>
        <div className="flex gap-8 flex-wrap mt-8">
            {
                collectionCards.map((card, index) => {
                    if (index > 2) return (<Link
                        key={card?.card?.card?.info?.id}
                        to={`/ResturantDetails/${card?.card?.card?.info?.id}`}
                    >
                        <ResturantChain resData={card?.card?.card?.info} />
                    </Link>)
                })
            }
        </div>
    </div>; 
};
export default FoodCollection;