import bgImage from "../assets/bgImage.jpg";

const Home = () => {
  return (
    <div>
      <img
        src={bgImage}
        alt="bgImage"
        className="w-full h-[90vh] object-cover"
      />
       <h1 className="text-5xl text-red-500">HOME PAGE</h1>
    </div>
  );
};

export default Home;