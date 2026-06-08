function ContactUs() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className="text-center">Contact Us</h1>
          <p className="text-center">
            If you have any questions, suggestions or feedback, please feel free
            to contact us. We are here to assist you and provide the best
            shopping experience possible.
          </p>
          <p className="text-center">
            You can reach us through the following channels:
          </p>
          <ul className="list-unstyled text-center">
            <li>
              Email:
              <a href="mailto:support@example.com">support@example.com</a>
            </li>
            <li>
              Phone: <a href="tel:+1234567890">+1 234 567 890</a>
            </li>
            <li>Address: 123 Main Street, City, Country</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ContactUs;