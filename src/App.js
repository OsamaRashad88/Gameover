import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Register from "./components/Login-Register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  children,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./components/Login-Register/Login";
import jwtDecode from "jwt-decode";
import Logout from "./components/Logout";
import Protectedroute from "./components/Protected/Protectedroute";
import Allgames from "./components/Allgames";
import Gamedetails from "./components/Gamedetails";
import Platform from "./components/Platforms/Platform";
import Sort from "./components/Sort";
import GetByCategory from "./components/GetByCategory";
import Notfound from "./components/Notfound/Notfound";
export default function App() {
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveuserData();
    }
  }, []);

  function saveuserData() {
    console.log("Save User Data Works ✅");
    let encodedToken = localStorage.getItem(`userToken`);
    let decodedToken = jwtDecode(encodedToken);
    setuserData(decodedToken);
    console.log(userData);
    console.log("Save User Data ens ✅");
  }

  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layout userData={userData} setuserData={setuserData} />,
      children: [
        {
          index: true,
          element: (
            <Protectedroute>
              <Home />
            </Protectedroute>
          ),
        },

        { path: "register", element: <Register /> },
        { path: "login", element: <Login saveuserData={saveuserData} /> },
        { path: "logout", element: <Logout /> },
        {
          path: "allgames",
          element: (
            <Protectedroute>
              <Allgames />
            </Protectedroute>
          ),
        },
        {
          path: "platform/:name",
          element: (
            <Protectedroute>
              <Platform />
            </Protectedroute>
          ),
        },

        {
          path: "gamedetails/:id",
          element: (
            <Protectedroute>
              <Gamedetails />
            </Protectedroute>
          ),
        },
        {
          path: "sort/:sortType",
          element: (
            <Protectedroute>
              <Sort />
            </Protectedroute>
          ),
        },
        {
          path: "categories/:category",
          element: (
            <Protectedroute>
              <GetByCategory />
            </Protectedroute>
          ),
        },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);
  return <RouterProvider router={routers}></RouterProvider>;
}
