import "animate.css/animate.min.css";
import Image1 from "../assets/img/laptop11.avif";
import Image2 from "../assets/img/laptop12.avif";
import Image4 from "../assets/img/laptop13.jpg";
// import Image5 from "../assets/img/laptop14.jpeg";
import Image3 from "../assets/img/laptop15.jpeg";
import Image6 from "../assets/img/laptop16.jpeg";

// type Props = {};

const SlidingImages = () => {
  return (
    <div className="parallelogram" style={{ height: "90vh" }}>
      <div
        id="carouselTop"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="10000"
        data-bs-pause="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="kenburns-top-right d-flex justify-content-start justify-content-md-start align-items-center"
              style={{
                height: "90vh",
                width: "100%",
                backgroundImage: `url(${Image1})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                // backgroundColor: "rgba(0,0,0,0.5)",
                backgroundBlendMode: "overlay",
              }}
            ></div>
          </div>
          <div className="carousel-item">
            <div
              className="kenburns-top-right d-flex justify-content-start justify-content-md-start align-items-center"
              style={{
                height: "90vh",
                width: "100%",
                backgroundImage: `url(${Image2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                // backgroundColor: "rgba(0,0,0,0.5)",
                backgroundBlendMode: "overlay",
              }}
            ></div>
          </div>
          <div className="carousel-item">
            <div
              className="kenburns-top-right d-flex justify-content-start justify-content-md-start align-items-center"
              style={{
                height: "90vh",
                width: "100%",
                backgroundImage: `url(${Image4})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                // backgroundColor: "rgba(0,0,0,0.5)",
                backgroundBlendMode: "overlay",
              }}
            ></div>
          </div>
          {/* <div className="carousel-item">
            <div
              className="kenburns-top-right d-flex justify-content-start justify-content-md-start align-items-center"
              style={{
                height: "90vh",
                width: "100%",
                backgroundImage: `url(${Image5})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                // backgroundColor: "rgba(0,0,0,0.5)",
                backgroundBlendMode: "overlay",
              }}
            ></div>
          </div> */}

          <div className="carousel-item">
            <div
              className="kenburns-top-right d-flex justify-content-start justify-content-md-start align-items-center"
              style={{
                height: "90vh",
                width: "100%",
                backgroundImage: `url(${Image3})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                // backgroundColor: "rgba(0,0,0,0.5)",
                backgroundBlendMode: "overlay",
              }}
            ></div>
          </div>

          <div className="carousel-item">
            <div
              className="kenburns-top-right d-flex justify-content-start justify-content-md-start align-items-center"
              style={{
                height: "90vh",
                width: "100%",
                backgroundImage: `url(${Image6})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                // backgroundColor: "rgba(0,0,0,0.5)",
                backgroundBlendMode: "overlay",
              }}
            ></div>
          </div>
        </div>
        {/* <div
          style={{ top: "30%" }}
          className="position-absolute text-center text-md-start"
        >
          <div className="d-flex justify-content-between align-items-start pt-md-3 pb-md-5">
            <div className="ms-5 col-8 text-start col-md-6">
              <h3
                className="lora text-white animate__animated animate__slideInLeft"
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  fontSize: "50px",
                }}
              >
                Help Elderly People Africa
              </h3>
              <p
                className="mont text-white box-3 animate__animated animate__slideInLeft"
                style={{ textAlign: "left" }}
              >
                Our organisation is driven by the commitment to provide
                unwavering support and compassionate care to the elderly in our
                community, ensuring their well-being, happiness and dignity.
              </p>
            </div>
          </div> */}
        {/* <Heading color="white" className="animate__animated animate__bounceInRight topText text-center text-md-start abril animated-heading"  text="Traveling with Respect, Exploring with Purpose" /> */}
        {/* </div> */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselTop"
          data-bs-slide="prev"
          style={{ marginTop: "-120px" }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselTop"
          data-bs-slide="next"
          style={{ marginTop: "-120px", marginLeft: "-500px" }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default SlidingImages;
