function About() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">About Us</h1>

          <p className="text-center">
            Welcome to our shopping platform. We provide a wide range of
            clothing, footwear, and accessories for customers at affordable
            prices.
          </p>

          <p className="text-center">
            Our mission is to deliver quality products with excellent customer
            service and a smooth shopping experience.
          </p>

          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-primary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;