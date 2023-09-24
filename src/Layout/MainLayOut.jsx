import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";

const MainLayOut = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;