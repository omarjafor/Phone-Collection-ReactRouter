import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PhonesDetails from "../Components/Phones/PhonesDetails";

const myCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '',
                element: <Home></Home>,
                loader: () => fetch('/phones.json')
            },
            {
                path: 'favorites',
                element: <Favorites></Favorites>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'phones/:id',
                element: <PhonesDetails></PhonesDetails>,
                loader: async ({params}) => {
                    const res = await fetch('/phones.json');
                    const data = res.json();
                    const phone = data.find(phn => phn.id == params.id)
                    return phone;
                }
            }
        ]
    }
])

export default myCreatedRoute;