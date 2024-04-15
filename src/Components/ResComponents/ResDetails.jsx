import { useEffect } from "react";

const ResDetails = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.490642&lng=80.3093933&restaurantId=253770"
    );
    const data = await response.json();
    const obj = data.card?.card?.itemCards?.card?.info?.id;
    console.log(obj);
  };

  return <div></div>;
};

export default ResDetails;
