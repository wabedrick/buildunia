import { useMatch } from "react-location";
import { useProduct } from "./Products";

const Product = () => {
  const {
    params: { id },
  } = useMatch();

  const { product } = useProduct();

  const productData = product?.find((p) => p.id === +id);

  if (!productData) {
    return <div>No product data found</div>;
  }
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col m-5">
              <div className="card ">
                <div className="mx-5">
                  <h1 className="text-center">{productData.name}</h1>

                  <img
                    src={productData.image_url}
                    className="img-fluid"
                    style={{ height: "200px", width: "100%" }}
                  />
                  <div className="">
                    <p>RAM: {productData.ram}GB</p>
                    <p>
                      Hard Drive Capacity: {productData.rom}{" "}
                      {productData.rom_type}
                    </p>
                    <p>
                      CORE: {productData.core}, {productData.generation}{" "}
                      generation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
