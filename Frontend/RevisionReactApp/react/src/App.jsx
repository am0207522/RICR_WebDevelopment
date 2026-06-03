import { FaWifi } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import myImage from "./assets/myImage.jpg";

function App() {
  return (
    <>
      <div className="bg-warning p-3 text-light">
        <FaWifi /> <span>My Revision Task</span>
      </div>

   <img src={myImage} alt="myimg" width="100" />
      <button className="btn btn-danger d-flex gap-3 mt-4 align-items-center">
        <IoIosSave className="fs-4 text-danger" /> <span>Save Data</span>
      </button>
    </>
  );
}

export default App;
