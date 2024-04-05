import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LIST_API } from "../utils/constants";
import ResturantCard, { withClosedLabel } from "./ResturantCard";
import Shimmer from "./Shimmer";
import CarouselItem from "./Carousel ";
import UserContext from "../utils/UserContext";
import ResturantChain from "./ResturantChain";

const ResturantList = () => {
  const [searchText, setSearchText] = useState("");
  const [resturantList, setResturantList] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [dishesList, setDishesList] = useState([]);
  const [topResturantList, setTopResturantList] = useState([]);
  const [loading, setLoading] = useState(true);
  const isOnline = useOnlineStatus();

  const ResturantCardClosed = withClosedLabel(ResturantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(LIST_API);
        const { data } = await response.json();
        const { cards } = data;

        const dishes =
          cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || [];
        const topResturant =
          cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        const resturant =
          cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setResturantList(resturant);
        setFilteredResturant(resturant);
        setDishesList(dishes);
        setTopResturantList(topResturant);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = () => {
    const filtered = resturantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResturant(filtered);
  };

  const handleFilterTopRestaurants = () => {
    const filtered = resturantList.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setFilteredResturant(filtered);
  };
  const slideLeft = (id) => {
    let slider = document.getElementById(id);
    slider.scrollLeft -= 500;
    console.log(slider.scrollLeft);
  };
  const slideRight = (id) => {
    let slider = document.getElementById(id);
    slider.scrollLeft += 500;
    console.log(slider.scrollLeft);
  };
  const renderCards = () => (
    <div className="w-10/12 mx-auto px-6">
      <div className=" border-gray-200 border-b-2">
        <div className="flex justify-between mt-8">
          <h2 className="text-2xl font-bold"> What's on your mind? </h2>
          <div>
            <button onClick={() => slideLeft("slider")} className="text-4xl">
              &#8592;
            </button>
            <button
              onClick={() => slideRight("slider")}
              className="text-4xl ml-8"
            >
              &#8594;
            </button>
          </div>
        </div>
        <div
          id="slider"
          className="flex gap-8 mb-6 overflow-x-scroll whitespace-nowrap no-scrollbar scroll-smooth"
        >
          {dishesList.map((dish) => {
            const encodedLink = encodeURIComponent(dish.entityId);
            return (
              <Link key={dish.id} to={`/foodCollection/${encodedLink}`}>
                <CarouselItem dish={dish} />
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex justify-between mt-8">
          <h2 className="text-2xl font-bold mb-8">
            Top Restaurants Chain in Gwalior
          </h2>
          <div>
            <button className="text-4xl" onClick={() => slideLeft("slider2")}>
              &#8592;
            </button>
            <button
              className="text-4xl ml-8"
              onClick={() => slideRight("slider2")}
            >
              &#8594;
            </button>
          </div>
        </div>
        <div
          id="slider2"
          className="flex gap-14 mb-8 overflow-x-scroll whitespace-nowrap no-scrollbar scroll-smooth"
        >
          {topResturantList.map((resturant) => (
            <Link
              key={resturant.info.id}
              to={`/resturantDetails/${resturant.info.id}`}
            >
              <ResturantChain resData={resturant.info} />
            </Link>
          ))}
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">
        Restaurants With Online food delivery in Gwalior
      </h2>
      <div className="flex justify-between">
        <button
          className="text-sm font-light tracking-tight p-2 rounded-lg mb-4 border-2 border-solid bg-slate-50"
          onClick={handleFilterTopRestaurants}
        >
          Filter Top Restaurants
        </button>
        <div>
          <input
            className="border rounded-md px-2 py-1 mr-2 focus:outline-none focus:border-custom-defaultLight"
            type="text"
            placeholder="kiya khana hai batao"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="hover:bg-custom-defaultLight bg-custom-default text-white font-bold py-1 px-2 rounded transition-all ease-in-out"
          >
            Search
          </button>
        </div>
        {/* <input
                    placeholder="Enter your name"
                    value = {loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}
                /> */}
      </div>
      <div className="flex flex-wrap gap-16 justify-stretch">
        {filteredResturant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/ResturantDetails/${restaurant.info.id}`}
          >
            {restaurant.info.isOpen ? (
              <ResturantCard resData={restaurant.info} />
            ) : (
              <ResturantCardClosed resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );

  if (!isOnline)
    return (
      <h1>
        Looks like you are offline. Please check your internet Connection 🙏🏽
      </h1>
    );
  return loading ? <Shimmer /> : renderCards();
};

export default ResturantList;
