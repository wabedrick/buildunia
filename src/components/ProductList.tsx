import { useProduct } from "./Products";
import { Link } from "react-location";

const ProductList = () => {
  const { product } = useProduct();
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="row" style={{ marginTop: "-200px" }}>
          {product &&
            product.map((p) => (
              <div className="col-md-6 col-lg-3 mt-3 g-4">
                <div className="card">
                  <div className="card-text mt-2 text-center">
                    <h5>{p.name}</h5>
                  </div>
                  <Link
                    key={p.id}
                    to={`/product/${p.id}`}
                    className="btn btn-place stretched-link"
                    style={{ color: "blue" }}
                  >
                    <img
                      src={p.image_url}
                      style={{ height: "300px", width: "100%" }}
                      className="p-2 img-fluid"
                    />
                    <div className="card-text ms-1">Place Order</div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
