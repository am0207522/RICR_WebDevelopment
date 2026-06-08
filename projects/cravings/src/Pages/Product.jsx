function Product() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row"> 
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Product 1"
              />
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">This is a description of Product 1.</p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;