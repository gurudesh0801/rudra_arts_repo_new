"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ContactSection = () => {
  return (
    <section className="py-16 bg-[#f4efe9] text-gray-800 font-[Outfit]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12 mt-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-viaoda mb-4 text-[#4a3c2f]">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Reach out to us and become a part of our timeless journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h3 className="text-2xl font-outfit font-semibold mb-4 text-[#3b2f25]">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <textarea
                placeholder="Message"
                rows="4"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
              <button
                type="submit"
                className="bg-[#6b4c3b] text-white px-6 py-2 rounded-lg hover:bg-[#5a3d30] transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h3 className="text-2xl font-outfit font-semibold mb-4 text-[#3b2f25]">
              Our Details
            </h3>
            <p className="mb-2">
              <strong>Address:</strong> Famous Chowk, No. 1, Ganesh Nagar,
              Samata Nagar, Pune, Maharashtra, India, 411027
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@rudraarts.com"
                className="text-amber-700 hover:underline"
              >
                contact@rudraarts.com
              </a>
            </p>
            <p className="mb-6">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+917028996666"
                className="text-amber-700 hover:underline"
              >
                +91 7028996666
              </a>
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">Quick Links</h4>
              <ul className="space-y-1">
                <li>
                  <a href="/" className="text-amber-700 hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-amber-700 hover:underline"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-amber-700 hover:underline">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
              >
                <FaWhatsapp size={20} /> Connect on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
