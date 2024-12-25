import Link from 'next/link';
import Image from 'next/image';

export default function PostCard({ post }: { post: any }) {
  return (
    <div className="border rounded-lg shadow-md p-4">
      {/* Display Image */}
      <div className="mb-4">
        <Image
          src={post.image}
          alt={post.title}
          width={500}
          height={300}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
      <h3 className="text-xl font-bold">{post.title}</h3>
      <p>{post.description}</p>
      <Link href={`/posts/${post.slug}`} className="text-blue-500 hover:underline mt-2 inline-block">
        Read Recipe
      </Link>
    </div>
  );
}
