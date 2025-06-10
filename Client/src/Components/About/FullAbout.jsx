import { Button, Typography, Avatar } from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";
import InsightsIcon from "@mui/icons-material/Insights";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import { motion } from "framer-motion";

const cardFade = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const FullAbout = () => {
  return (
    <section className="w-full text-gray-900 font-sans mt-16">
      <div className="relative bg-cover bg-center bg-[url('/images/bgimg.jpg')] py-24 px-6 text-white">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md font-viaoda">
            Preserving Heritage Through Craftsmanship
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow">
            At Rudra Arts, every artifact tells a story — not just of history,
            but of devotion and deep-rooted legacy. Founded by{" "}
            <strong>Satyajeet Arun Vaidya</strong>, a cultural preservationist
            and traditional weapon collector, Rudra Arts is a living tribute to
            India’s warrior spirit and artisan excellence.
          </p>
        </motion.div>
      </div>

      {/* Mission */}
      <div className="bg-[#fcf8f2] py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardFade}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl uppercase font-outfit font-bold text-[#3b2f2f] mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To revive and celebrate the cultural and historical significance of
            traditional Indian weaponry through ethical crafting, historical
            accuracy, and artisan collaboration — making heritage accessible to
            collectors, cultural institutions, and proud homeowners alike.
          </p>
        </motion.div>
      </div>

      {/* Core Values */}
      <div className="py-20 px-6 bg-[#fefae0]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <BrushIcon fontSize="large" />,
              title: "Artistic Integrity",
              desc: "Historically accurate designs based on research. We honor India’s artistic traditions with each handcrafted piece.",
            },
            {
              icon: <InsightsIcon fontSize="large" />,
              title: "Creative Innovation",
              desc: "Blending ancient techniques with modern needs — from ceremonial swords to museum-grade replicas.",
            },
            {
              icon: <Diversity2Icon fontSize="large" />,
              title: "Cultural Connection",
              desc: "Crafted with devotion and legacy, our weapons and artifacts bridge generations of heritage and identity.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardFade}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              <Avatar
                sx={{ bgcolor: "#6c584c", width: 70, height: 70 }}
                className="mx-auto group-hover:scale-110 transition-transform"
              >
                {item.icon}
              </Avatar>
              <Typography
                variant="h6"
                className="mt-5 font-bold text-[#3b2f2f]"
              >
                {item.title}
              </Typography>
              <Typography variant="body2" className="mt-3 text-gray-700">
                {item.desc}
              </Typography>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Craftsmanship Section */}
      <div className="bg-[#f2e9dc] py-24 px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardFade}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl uppercase font-outfit font-bold text-[#3b2f2f] mb-6">
            Craftsmanship & Cultural Integrity
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            What sets Rudra Arts apart is our commitment to authentic designs,
            collaboration with skilled artisans, and deep cultural respect. From
            the revered dandi patta to 65kg ceremonial swords, our creations are
            steeped in history and reverence.
          </p>
        </motion.div>
      </div>

      {/* Offerings */}
      <div className="bg-[#fff9f4] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl uppercase font-outfit font-bold text-[#3b2f2f] mb-10"
          >
            What We Create
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Ceremonial Weapons",
                desc: "Swords, daggers & dandi pattas crafted with historical accuracy, used in religious rituals and cultural displays.",
              },
              {
                title: "Art Murals & Statues",
                desc: "Soulful depictions of warrior legends, gods, and stories — captured in brushstrokes and stone.",
              },
              {
                title: "Decor & Installations",
                desc: "Handmade heritage décor for temples, events, and modern homes honoring tradition.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardFade}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6"
              >
                <h3 className="text-2xl font-semibold text-[#3b2f2f] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Legacy Section */}
      <div className="bg-[#fefae0] py-24 px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardFade}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-outfit uppercase font-bold text-[#3b2f2f] mb-6">
            More Than a Product — A Legacy
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Our artifacts aren't just for display — they symbolize identity,
            devotion, and ancestral pride. Each creation is a timeless bond
            between giver and receiver, meant to be cherished for generations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FullAbout;
