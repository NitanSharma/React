import { createRootRoute } from "@tanstack/react-router";
import App from "../App.jsx";
import { dashboardPageRoute } from "./dashboard.js";
import { homePageRoute } from "./home.js";

export const rootRoute = createRootRoute({
    component: App
});

export const routeTree = rootRoute.addChildren([
   dashboardPageRoute ,
   homePageRoute
]);