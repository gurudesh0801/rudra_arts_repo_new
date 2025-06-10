import { motion } from "framer-motion";
import aboutBg from "../../assets/images/about-bg.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const AboutUs = () => {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center py-24 px-4 text-center"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold uppercase font-outfit border-b-4 pb-2 border-[#b08968] inline-block text-[#4a3d2f] mb-4">
          The Story Behind Rudra Arts
        </h1>
        <p className="text-lg md:text-xl text-[#6d5c4b] mt-2">
          A Journey Through Time: Building Innovation, Preserving Tradition
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {[
          "The Beginning",
          "The Evolution",
          "Legacy of Art",
          "Future Vision",
        ].map((title, i) => (
          <motion.div
            key={title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#eae0c8] border-l-8 border-[#8b6f47] shadow-lg p-6 h-[10rem] text-left rounded-l-xl opacity-[.7]"
          >
            <h3 className="text-2xl font-semibold text-[#3e3228] mb-2">
              {title}
            </h3>
            <p className="text-[#5e4d3f] text-lg leading-relaxed">
              {title === "The Beginning"
                ? "Founded in the heart of the digital revolution, our journey started with a vision: to blend cutting-edge technology with the wisdom of the past."
                : title === "The Evolution"
                ? "Over the years, we have embraced new innovations while staying true to our core values—crafting solutions that stand the test of time."
                : title === "Legacy of Art"
                ? "Every creation we produce is deeply rooted in cultural richness and inspired by historical excellence."
                : "To continue building a future that honours our past while leading innovation for generations ahead."}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl text-[#4a3d2f] mb-4 font-semibold">
          Our Vision
        </h2>
        <p className="text-xl text-[#6d5c4b] leading-loose">
          To create a bridge between history and the future by delivering
          digital solutions that inspire, educate, and empower.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
