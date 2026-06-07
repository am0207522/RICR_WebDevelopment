function Product() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Our Products</h1>

          <p className="text-center">
            Explore our latest collection of clothing, footwear, and
            accessories designed for comfort and style.
          </p>

          <ul className="list-group mt-4">
            <li className="list-group-item">👕 Men's Clothing</li>
            <li className="list-group-item">👗 Women's Clothing</li>
            <li className="list-group-item">👟 Footwear</li>
            <li className="list-group-item">⌚ Accessories</li>
          </ul>

          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-primary">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;