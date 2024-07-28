import DefaultLayout from "@/Layouts/DefaultLayout/DefaultLayout";
import Home from "@/pages/Home/Home";
import { Route } from "react-router-dom";
export const publicRoutes = (
  <>
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
    </Route>
  </>
);
