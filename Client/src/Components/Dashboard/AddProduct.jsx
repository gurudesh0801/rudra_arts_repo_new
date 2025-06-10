"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";
import { LayoutDashboard } from "lucide-react";
import DashboardLayout from "./DashboardLayout";

const AddProduct = ({ onProductAdded }) => {
  const [form, setForm] = useState({
    pname: "",
    pid: "",
    pprice: "",
    pimage: null,
    pdescription: "",
    psize: "",
    pcategory: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      for (const [key, value] of Object.entries(form)) {
        formData.append(key, value);
      }

      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL_PRODUCTION}/api/products/add`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Failed to add product");

      if (onProductAdded) onProductAdded();

      setForm({
        pname: "",
        pid: "",
        pprice: "",
        pimage: null,
        pdescription: "",
        psize: "",
        pcategory: "",
      });
    } catch (err) {
      console.error("Error adding product:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <section className="py-2 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-4xl font-outfit font-bold mb-6 text-center text-gray-800 font-[Playfair]">
            Add Product
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Product Name
                </label>
                <input
                  type="text"
                  name="pname"
                  value={form.pname}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Product ID
                </label>
                <input
                  type="text"
                  name="pid"
                  value={form.pid}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Price (₹)
                </label>
                <input
                  type="number"
                  name="pprice"
                  value={form.pprice}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Size
                </label>
                <input
                  type="text"
                  name="psize"
                  value={form.psize}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Category
              </label>
              <input
                type="text"
                name="pcategory"
                value={form.pcategory}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Upload Image
              </label>
              <label className="w-full cursor-pointer flex items-center justify-between border rounded-lg px-4 py-2 bg-white hover:bg-gray-50">
                {form.pimage ? form.pimage.name : "Choose file"}
                <input
                  type="file"
                  name="pimage"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                  required
                />
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Description
              </label>
              <textarea
                name="pdescription"
                value={form.pdescription}
                onChange={handleChange}
                rows={3}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-customBrown text-white py-2 rounded-lg font-semibold hover:bg-amber-700 transition flex items-center justify-center gap-2"
              >
                {loading && <FaSpinner className="animate-spin" />}
                {loading ? "Adding..." : "Add Product"}
              </button>
            </div>
          </form>
        </motion.div>
      </section>
    </DashboardLayout>
  );
};

export default AddProduct;
