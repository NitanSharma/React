import { createRoute } from "@tanstack/react-router";
import Home from "../pages/Home";
import { rootRoute } from "./routeTree";

export const homePageRoute = createRoute({  
     getParentRoute: () => rootRoute,
    path: "/",
    component: Home,
})