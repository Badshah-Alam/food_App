import { useContext, useEffect, useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import store from "../utils/store";
import UserContext from "../utils/UserContext";

// const loggedInUser = () => {
// API call to check authentication
//   return true;
// };

const Title = () => (
  <a href="/">
    <img className="h-28 p-2" src={Logo} alt="logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useOnline();
  const {user}  = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)

  return (
    <div className="flex  justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />

      <div>
        <ul className="flex py-10">
          <Link to="/home">
            <li className="px-2">Home</li>
          </Link>

          <Link to="/about">
            <li className="px-2">About</li>
          </Link>

          <Link to="/contact">
            <li className="px-2">Contect</li>
          </Link>

          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart">
          <li className="px-2">cart-{cartItems.length}-Items</li>
          </Link>
        </ul>
      </div>
      <h1>{isOnline ? " ✅" : "🔥"}</h1>
   <span className="p-10 font-bold text-red-400">   {user.name}</span>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
