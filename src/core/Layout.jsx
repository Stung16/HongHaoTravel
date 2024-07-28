
import { publicRoutes } from "@/routers/publicRoutes";
import { Routes } from "react-router-dom";
const Layout = () => {
  return (
    <Routes>
      {publicRoutes}
    </Routes>
  );
};

export default Layout;
