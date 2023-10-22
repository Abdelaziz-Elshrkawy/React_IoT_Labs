import axios from "axios";
import {  useState } from "react";
import PostUnit from "./PostUnit";

function PostById() {
  const [postById, setPostById] = useState({
    id: "",
    userId: "",
    title: "",
    body: "",
  });
  const [postId, setPostId] = useState(0);
  const handleClick = () => {
    console.log(postId);
    if (postId > 0 && !Number.isNaN(postId) && postId <= 100) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((data) => {
          setPostById(data.data);
        });
    }
  };

  return (
    <div id="post-by-id">
      <div id="input">
        <input
          type="number"
          name="postId"
          onChange={(e) => {
            setPostId(parseInt(e.target.value));
          }}
          id="postId-input"
        />
        <button id="postId-btn" onClick={handleClick}>
          Search
        </button>
      </div>
      <PostUnit post={postById} />
    </div>
  );
}

export default PostById;
