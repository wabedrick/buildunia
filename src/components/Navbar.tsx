import * as Icon from "react-bootstrap-icons";
import { Link } from "react-location";
import JumiaIcon from "../assets/img/jumia_icon.png";
import SearchForm from "./SearchForm";

const Navbar = () => {
  return (
    <>
      {/* Everything in the navbar  */}
      <nav
        className="navbar navbar-expand-lg navbar-success fixed-top"
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h3 style={{ fontFamily: "Courier New" }} className="ms-4 me-5">
              <img
                src={JumiaIcon}
                alt="Our Icon"
                className="img-fluid inline-block rounded-circle mx-3"
                width="35"
                height="35"
              />
              BUILDUNIA
            </h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <form className="d-flex mx-auto">
              <input
                className="form-control me-2 lead"
                size={50}
                type="search"
                placeholder="Search for a product that you want"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form> */}
            {/* Search Box of form component */}
            <SearchForm />

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-evenly">
              <li className="nav-item dropdown px-2">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle left-list"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Icon.Person
                    className="me-2"
                    style={{ width: "30px", height: "25px" }}
                  />
                  Account
                </Link>
                <ul className="dropdown-menu">
                  <li className="mx-2 text-center">
                    <Link
                      to="/signin"
                      className="btn btn-success "
                      style={{ width: "150px" }}
                    >
                      SIGN IN
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/myaccount">
                      <Icon.Person
                        className="me-2"
                        style={{ width: "30px", height: "25px" }}
                      />
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/orders">
                      <Icon.HouseAdd
                        className="me-2"
                        style={{ width: "30px", height: "25px" }}
                      />
                      Orders
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/saveditems">
                      <Icon.Heart
                        className="me-2"
                        style={{ width: "30px", height: "25px" }}
                      />
                      Saved Items
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown px-2">
                <Link
                  className="nav-link dropdown-toggle left-list"
                  to="/help"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="node_modules/bootstrap-icons/icons/question-circle.svg"
                    className="img-fluid w-25"
                    alt=""
                  />
                  <Icon.QuestionCircle
                    className="me-2"
                    style={{ width: "30px", height: "25px" }}
                  />
                  Help
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/help/gethelp">
                      Get Help
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/help/makeorder">
                      Make Order
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/help/makepayments">
                      Make Payments
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/help/myorder">
                      My Order
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item px-2 text-white d-lg-flex">
                <Link className="nav-link left-list" to="/cart">
                  <Icon.Cart2
                    className=""
                    style={{ width: "30px", height: "25px" }}
                  />
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
