import { ClientLayout } from "../layouts";
// import { Error404 } from "../pages";
import { Home } from "../layouts/pages/Client";

const routesClient = [
  {
    path: "/",
    layout: ClientLayout,
    component: Home,
    exact: true,
  },
];

export default routesClient;
