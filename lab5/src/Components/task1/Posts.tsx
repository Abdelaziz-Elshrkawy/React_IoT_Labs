import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "../../Types/Task1";
import PostUnit from "./PostUnit";
export default function Posts(): JSX.Element {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((data) => {
      setPosts(data.data);
    });
  }, []);

  return (
    <div id="posts">
      {posts.map((e: Post) => {
        return (
          <PostUnit post={e}/>
        );
      })}
    </div>
  );
}
