import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./contants";
import { FETCH_MENU_URL } from "./contants";
// import About from "./components/About";
import Error from "./components/Error";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
// import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import UserContext from "./utils/UserContext";

// import Instamart from "./components/Instamart";s

//chuking
//code  splitting
//Dynamic Bundling
//Lazy Loading
//on Demand Loading
//Dynamic import

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Badshah Alam",
    email: "badshahalam831@gmail.com",
  });

  return (
    <>
      <Provider store={store}>
        <UserContext.Provider
          value={{
            user: user,
            setUser:setUser
          }}
        >
          <Header />

          <Outlet />

          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
            // user={{
            //   name: "Badshah Alam",
            //   email: "badshahalam831@gmail.com",
            // }}
          />
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loding...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />, //parentPath/{path}==>Localhost:1234/about/profile
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// /**

//  * Header
//  *   Logo (Title)
//  * Nav Item
//  * --Body
//  * search bar
//  * ResturantList
//  * ResturantCard (BmanyCard)
//  * Image
//  * Name
//  * Rating
//  * Cusines

//  * '--Footer
//  * links
//  * copyRight
//  */

// Config Driven UI

// optional chaining ?
