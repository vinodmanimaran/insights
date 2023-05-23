import { Link } from 'react-router-dom';
import moment from 'moment';
import './post.css';

export default function Post({ post }) {
  const PF = 'https://blog-api-cvnk.onrender.com/images/';

  const formattedDate = moment(post.createdAt).format('MMMM DD, YYYY');

  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map(c => (
            <span className="postCat" key={c._id}>{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {formattedDate}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
