import React from "react";
const Shimmer = () => {
    return (
        <div className="w-10/12 mx-auto overflow-hidden mt-10">
            <div className="flex flex-col gap-4 p-4">

                {/* Shimmer Carousel */}
                <div className="flex gap-10 mb-10">
                    <div className="bg-custom-defaultLight  h-[150px] w-[150px] animate-pulse rounded-full"></div>
                    <div className="bg-custom-defaultLight  h-[150px] w-[150px] animate-pulse rounded-full"></div>
                    <div className="bg-custom-defaultLight  h-[150px] w-[150px] animate-pulse rounded-full"></div>
                    <div className="bg-custom-defaultLight  h-[150px] w-[150px] animate-pulse rounded-full"></div>
                    <div className="bg-custom-defaultLight  h-[150px] w-[150px] animate-pulse rounded-full"></div>
                    <div className="bg-custom-defaultLight  h-[150px] w-[150px] animate-pulse rounded-full"></div>
                </div>

                {/* Shimmer Top Restaurants */}
                <div className="flex gap-10 mb-10">
                    <div className="bg-custom-defaultLight h-64 w-[273px] animate-pulse rounded-lg"></div>
                    <div className="bg-custom-defaultLight h-64 w-[273px] animate-pulse rounded-lg"></div>
                    <div className="bg-custom-defaultLight h-64 w-[273px] animate-pulse rounded-lg"></div>
                    <div className="bg-custom-defaultLight h-64 w-[273px] animate-pulse rounded-lg"></div>
                </div>

                {/* Shimmer Restaurants */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {/* Restaurant Card Shimmer */}
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className="bg-custom-defaultLight h-64 animate-pulse"></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shimmer;
