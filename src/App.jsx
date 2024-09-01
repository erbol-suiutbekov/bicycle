import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Header from "./components/Header";
import Product from "./components/Product";
import Login from "./components/Login";
import CreateProduct from "./components/Login/createProduct";
import Favorite from "./components/Favorite";
import Basket from "./components/Basket";
import DetailCards from "./components/DetailCards";
import CategoryProduct from "./components/Category/CategoryProduct";
import Category from "./components/Category";
import Catalog from "./components/Catalog";
import CatalogProduct from "./components/Catalog/CatalogProduct";
import { useSelector } from "react-redux";

function App() {
  const { cataloge } = useSelector((s) => s.todo);
  const arrayComponents = [
    {
      id: 1,
      link: "/",
      element: <Home />,
    },
    {
      id: 2,
      link: "product",
      element: <Product />,
    },
    {
      id: 3,
      link: "login",
      element: <Login />,
    },
    {
      id: 4,
      link: "createProduct",
      element: <CreateProduct />,
    },
    {
      id: 5,
      link: "favorite",
      element: <Favorite />,
    },
    {
      id: 6,
      link: "basket",
      element: <Basket />,
    },
    {
      id: 7,
      link: "/detailCards/:ide",
      element: <DetailCards />,
    },
    {
      id: 8,
      link: "/category",
      element: <Category />,
    },
    {
      id: 9,
      link: "/categoryProduct",
      element: <CategoryProduct />,
    },
    {
      id: 10,
      link: "/catalog",
      element: <Catalog />,
    },
    {
      id: 11,
      link: "/catalogProduct/:catalog",
      element: <CatalogProduct />,
    },
  ];
  return (
    <>
      <Header />
      {cataloge ? null : <Catalog />}

      <Routes>
        {arrayComponents.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
}

export default App;
