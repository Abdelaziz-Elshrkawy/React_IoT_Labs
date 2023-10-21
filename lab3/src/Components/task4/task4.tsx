import axios from "axios";
import { Component, PropsWithChildren } from "react";
import Post from "./task4Post";
export interface state {
  posts: [];
}
export type post = {
  id?: number | string;
  userId?: number | string;
  title?: string;
  body?: string;
};
export default class Task4 extends Component<PropsWithChildren, state> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        this.setState({ posts: res.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
        <div>
            <div id="form">
                <Post/>
            </div>
        <div id="posts">
          {this.state.posts.map((post: post) => (
            <div key={post.id}>
              <hr />
              <div>{post.title}</div>
              <div>{post.body}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
