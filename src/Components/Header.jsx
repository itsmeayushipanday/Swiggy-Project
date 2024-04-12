import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between">
      <div>
        <img
          className="h-28 w-28 mr-4 cursor-pointer"
          src="https://i.pinimg.com/736x/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.jpg"
        />
      </div>
      <ul className="flex space-x-10 mt-12 text-zinc-400 text-xl cursor-pointer">
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/offers">Offers</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
