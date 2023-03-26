import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Header from "../components/Header";
import Layout from "../Layout";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Product from "../pages/Product";
import ProductsList from "../pages/ProductsList";
import {
  Base_Route,
  Products_List,
  Product_Id,
  Cart_Link,
} from "./routesNomenclature";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={Base_Route} element={<Layout />}>
        <Route path={""} element={<Home />}></Route>
        <Route path={Products_List} element={<ProductsList />}></Route>
        <Route path={Product_Id} element={<Product />}></Route>
        <Route path={Cart_Link} element={<Cart />}></Route>
      </Route>
    </>
  )
);
