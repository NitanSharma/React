import { createRoute } from "@tanstack/react-router"
import Dashboard from "../components/Dashboard";
import { rootRoute } from "./routeTree";

export const dashboardPageRoute  = createRoute({
    getParentRoute: () => rootRoute,
    path: "/dashboard",
    component: Dashboard,
})