import { Post } from "../../Types/Task1";

interface postType {
  post: Post;
}
export default function PostUnit({ post }: postType): JSX.Element {
  const { body, title, id } = post;
  return (
    <div className="post" key={id}>
      <p className="title">{title}</p>
      <p className="body">{body}</p>
    </div>
  );
}
