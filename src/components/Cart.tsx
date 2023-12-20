import Navbar from "../components/Navbar";
import * as Icon from "react-bootstrap-icons";

const Cart = () => {
  return (
    <>
      <div className="bg-light">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="card bg-white mt-3" style={{ height: "350px" }}>
              <div className="col text-center mt-5">
                <Icon.Cart3 height={50} width={50} />
                <p className="lead my-4" style={{ fontWeight: "bold" }}>
                  You don't have any items in the cart
                </p>
                <p className="mb-4">
                  Browse our different products and discover more deals about
                  what you want
                </p>
                <div className="btn btn-lg btn-success">START SHOPPING</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
