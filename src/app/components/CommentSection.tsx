// /components/CommentSection.tsx
import { useState } from 'react';

export default function CommentSection() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold">Comments</h3>
      <div className="mt-4">
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white mt-2 px-4 py-2"
          onClick={handleAddComment}
        >
          Add Comment
        </button>
      </div>

      <div className="mt-6">
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="border p-2 mt-2">
              <p>{comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
