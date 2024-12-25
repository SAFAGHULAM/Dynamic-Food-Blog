"use client";
import { notFound } from "next/navigation";
import { posts } from "../../data/post";
import Image from "next/image";
import CommentSection from "../../components/CommentSection";
import React from "react";

export default function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap the params Promise
  const { slug } = React.use(params);

  // Find the post by slug
  const post = posts.find((p) => p.slug === slug);

  // If no post is found, return 404
  if (!post) return notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Post Title and Date */}
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>

      {/* Display Post Image */}
      <div className="mt-4">
        <Image
          src={post.image}
          alt={post.title}
          width={200}
          height={200}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      {/* Ingredients and Instructions */}
      <div className="mt-4">
        {post.ingredients && (
          <>
            <h3 className="text-2xl font-bold">Ingredients</h3>
            <ul className="list-disc pl-5 mt-2">
              {post.ingredients.map((ingredient: string, index: number) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </>
        )}

        {post.instructions && (
          <>
            <h3 className="text-2xl font-bold mt-4">Instructions</h3>
            <ol className="list-decimal pl-5 mt-2">
              {post.instructions.map((step: string, index: number) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </>
        )}

        {/* Additional Content */}
        {post.content && <p className="mt-6">{post.content}</p>}
      </div>

      {/* Comment Section */}
      <CommentSection />
    </div>
  );
}
