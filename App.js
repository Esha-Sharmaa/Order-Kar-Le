import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
import ResturantDetails from "./src/components/ResturantDetails";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./src/components/Shimmer";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Help from "./src/components/Help";

const AppLayout = () => {
    const [userName, setUserName] = useState();
    useEffect(() => {
        const data = {
            name: "Esha Sharma",
        }
        setUserName(data.name);
    },[])
    return <>
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <Header />
                <Outlet />
            </UserContext.Provider>     
        </Provider>

    </>;
}
const Grocery = React.lazy(() => import("./src/components/Grocery"));
const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element:<Body/>
            },
            {
                path: "/Cart",
                element: <Cart />
            },
            {
                path: "/ResturantDetails/:resID",
                element: <ResturantDetails />
            },
            {
                path: "/Help",
                element: <Help />
            },
            {
                path: "/grocery",
                element: (
                    <React.Suspense fallback={<Shimmer/>}>
                        <Grocery/>
                    </React.Suspense>
                )
            }
        ],
        errorElement: <Error />
    },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);