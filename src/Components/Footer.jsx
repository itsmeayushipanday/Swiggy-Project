const Footer = () => {
  return (
    <div>
      <div className="w-auto h-36 bg-gray-300 flex  justify-center items-center ">
        <h2 className=" p-5 text-2xl  font-extrabold">
          For better experience, download the Swiggy app now!
        </h2>
        <div className="cursor-pointer w-96 mt-5 flex rounded-lg">
          <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" />
          </a>
          <a href="https://apps.apple.com/in/app/swiggy-food-grocery-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage">
            <img
              className="ml-10"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            />
          </a>
        </div>
      </div>

      <div className="w-auto h-96 flex bg-black"></div>
    </div>
  );
};

export default Footer;
