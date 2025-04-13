import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    short_description: { type: String, required: true },
    content: { type: String, required: true },
    img: { type: String },
    tabTitle: { type: String },
    metaDesc: { type: String },
    keywords: [String],
    slug: { type: String, required: true, unique: true },
    author: { type: String, default: "Admin" },
    published: { type: Boolean, default: true },
    views: { type: Number, default: 0 },
    readingTime: { type: Number, default: 0 },
  },
  { timestamps: true } // creates createdAt & updatedAt
);

export const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
