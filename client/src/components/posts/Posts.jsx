import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post-container" key={post._id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
}
