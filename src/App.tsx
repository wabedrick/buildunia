import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { Outlet, ReactLocation, Router } from "react-location";
import ProductList from "./components/ProductList";
import { QueryClient, QueryClientProvider } from "react-query";
import { ProductProvider } from "./components/Products";
import Product from "./components/Product";
import SlidingImages from "./components/SlidingImages";

const location = new ReactLocation();
const queryClient = new QueryClient();

const routes = [
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <SlidingImages />
        <ProductList />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Navbar />
        <Cart />
      </>
    ),
  },

  {
    path: "/product/:id",
    element: (
      <>
        <Navbar />
        <div>
          <Product />
        </div>
      </>
    ),
  },
];

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProductProvider>
          <Router location={location} routes={routes}>
            <Outlet />
          </Router>
        </ProductProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
