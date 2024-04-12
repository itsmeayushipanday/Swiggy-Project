import { useEffect, useState } from "react";

const ResCards = () => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.449923&lng=80.3318736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurant(json.data);
  };

  /*   const {name, cuisines, costForTwo, image} =   data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
   */
  return (
    <div className="grid grid-cols-3 gap-4">
      {restaurant.map((res) => (
        <div key={res.id} className="bg-white rounded shadow p-4">
          <img
            src={
              res.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
                ?.info?.cloudinaryImageId
            }
            className="w-full h-40 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold">
            {
              res.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
                ?.info?.name
            }
          </h2>
          <p className="text-gray-600">
            {
              res.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
                ?.info?.cuisines
            }
          </p>
          <div className="mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Order Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResCards;
