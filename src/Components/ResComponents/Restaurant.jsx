import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";

const Restaurant = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.449923&lng=80.3318736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    const newList =
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    //console.log(newList);
    setResList(newList);
  };
  return (
    <div className="flex flex-wrap">
      {resList.map((res) => (
        <Link key={res.info.id} to={`resmenu/${res.info.id}`}>
          <ResCard data={res} />
        </Link>
      ))}
    </div>
  );
};

export default Restaurant;
