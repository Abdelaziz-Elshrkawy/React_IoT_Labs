import { Component, PropsWithChildren } from "react";
import { post } from "./task4";
import axios from "axios";
export default class Post extends Component<PropsWithChildren, post> {
  constructor(props: PropsWithChildren) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

    handleSubmit = (e: any) => {
      console.log(e)
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChanges = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>userID</label>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={this.handleChanges}
          />
        </div>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChanges}
          />
        </div>
        <div>
          <label>Body</label>
          <input
            type="text"
            name="body"
            value={body}
            onChange={this.handleChanges}
          />
        </div>
        <button type="submit">Add Post</button>
      </form>
    );
  }
}
