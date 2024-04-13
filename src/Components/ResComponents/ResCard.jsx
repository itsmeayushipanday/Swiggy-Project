/* eslint-disable */

const ResCard = ({ data }) => {
  return (
    <div>
      <div className="w-60 h-80 p-2 m-10 bg-gray-200 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
        <img
          className="w-56 h-36 rounded-lg"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            data.info.cloudinaryImageId
          }
        />
        <h2 className="font-bold p-1">{data.info.name}</h2>
        <h2>Rating : {data.info.avgRating}⭐</h2>
        <h2>Time : {data.info.sla.deliveryTime} minutes</h2>
        <h2>Cuisines : {data.info.cuisines.join(", ")}</h2>
        <h2>Location : {data.info.areaName}</h2>
      </div>
    </div>
  );
};

export default ResCard;

/* //name -- info.name
//Rating -- info.avgRating
//info.sla.deliveryTime
//info.cuisines
//info.areaName
//info.https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/+cloudinaryImageId
 */
