const mongoose = require('mongoose');
const { create } = require('/Users');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, require: true },
  user: { type: Schema.Types.ObjectId, required: true, ref:'users' },
  category: { type: Schema.types.ObjectId, required: true, ref:'categories' },
  size: { type: String, enum: ["S", "M", "X", "XL", "XXL"], default: "M" },
  colors: [String],
  discount: { type: Schema.Types.Double, default: 0.0 },
  tags: [String],
  images: [
    {
      link: { type: String, require: true },
      desc: { type: String, require: true },
    },
  ],
  shipping: [
    {
      name: { type: String, require: true },
      cost: { type: Number, require: true },
      desc: { type: String, require: true },
    },
  ],
  created: { type: Date, default: Date.now },
});
ProductSchema.index({ tags: 1, user: 1 }); // mongo slow train => index

const Product = mongoose.model("products", ProductSchema);
module.exports = Product;
