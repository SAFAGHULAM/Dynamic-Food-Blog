import Image from "next/image";
import PostCard from './components/PostCard';
import { posts } from '../app/data/post';

export default function HomePage() {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url('/images/background.webp')",
      }}
    >
      <div className="relative">
        <Image
          src="/images/blog.jpeg" 
          alt="Food Blog Banner"
          className="w-full h-auto"
        />
      </div>
      <div className="bg-white bg-opacity-75 p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8">TastyBites</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

