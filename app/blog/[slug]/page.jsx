import { connectDB } from "@/lib/mongodb";
import { Blog } from "@/models/Blog";
import { notFound } from "next/navigation";
import Head from "next/head";

export async function generateStaticParams() {
  await connectDB();
  const posts = await Blog.find({}, "slug");
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }) {
  await connectDB();
  const post = await Blog.findOne({ slug: params.slug });

  if (!post) return notFound();

  return (
    <>
      <Head>
        <title>{post.tabTitle || post.title}</title>
        <meta
          name="description"
          content={post.metaDesc || post.short_description}
        />
        <meta name="keywords" content={post.keywords?.join(", ") || ""} />
      </Head>

      <div className="min-h-screen text-white p-6">
        <div className="max-w-4xl mx-auto">
          {/* Image */}
          {post.img && (
            <img
              src={post.img}
              alt={post.title}
              className="rounded-lg mb-6 w-full object-cover max-h-[400px]"
            />
          )}

          {/* Title */}
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>

          {/* Dates */}
          <p className="text-sm text-gray-400 mb-4">
            Published on {new Date(post.createdAt).toLocaleDateString()}
            {post.updatedAt && post.updatedAt !== post.createdAt && (
              <> | Updated on {new Date(post.updatedAt).toLocaleDateString()}</>
            )}
          </p>

          {/* Short Description */}
          {post.short_description && (
            <p className="text-lg text-gray-300 mb-6">
              {post.short_description}
            </p>
          )}

          {/* Content */}
          <div className="prose prose-invert max-w-none whitespace-pre-wrap leading-relaxed text-gray-100">
            {post.content}
          </div>
        </div>
      </div>
    </>
  );
}
