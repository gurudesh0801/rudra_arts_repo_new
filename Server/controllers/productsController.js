const Product = require("../models/Products");
const cloudinary = require("../cloudinaryConfig");
const streamifier = require("streamifier");

// Create Product with Cloudinary upload
exports.createProduct = async (req, res) => {
  const { pname, pid, pprice, pdescription, psize, pcategory } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "Image file is required." });
  }

  try {
    const streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "Rudra-artss" },
          (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          }
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    const result = await streamUpload(req);

    const newProduct = new Product({
      product_name: pname,
      product_id: pid,
      product_price: pprice,
      product_image: result.secure_url,
      product_description: pdescription,
      product_size: psize,
      product_category: pcategory,
    });

    await newProduct.save();
    res
      .status(201)
      .json({ message: "Product created successfully", newProduct });
  } catch (err) {
    console.error("Product creation failed:", err);
    res.status(500).json({ error: "Failed to create product" });
  }
};
