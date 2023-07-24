import { AdminLayout } from "../layouts/AdminLayout";
import { LoginAdmin } from "../layouts/pages/Admin";

const routesAdmin = [
  {
    path: "/admin",
    layout: AdminLayout,
    component: LoginAdmin,
    exact: true,
  },
];

export default routesAdmin;
