import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import wallImg from "../../assets/images/tatbwall2.png";
import video from "../../assets/images/v1.mp4";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/Products");
  };

  useEffect(() => {
    const video = document.getElementById("myVideo");
    const playVideo = () => {
      video.play();
      document.removeEventListener("click", playVideo); // play once
    };

    document.addEventListener("click", playVideo);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        id="myVideo"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        loop
        autoPlay
        src={video}
        style={{ filter: "brightness(.6)" }}
      />

      {/* Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 -z-10" /> */}

      {/* Main Content */}
      <div className="z-10 text-center text-white max-w-4xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-semibold font-viaoda"
        >
          Timeless Creations, Crafted with Soul
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg leading-relaxed"
        >
          Discover the essence of heritage and artistry in every masterpiece. At
          Rudra Arts, we bring stories <br />
          to life through intricate designs, preserving tradition while
          embracing creativity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 flex justify-center"
        >
          <button
            onClick={handleShopNow}
            className="bg-white text-black hover:bg-red-900 hover:text-white transition duration-500 px-6 py-2 font-medium"
          >
            Shop Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
