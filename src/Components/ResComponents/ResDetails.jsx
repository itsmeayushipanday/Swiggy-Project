import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ResDetails = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const { resId } = useParams();
  const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4677641&lng=80.31225769999999&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`;

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  return <div></div>;
};

export default ResDetails;
