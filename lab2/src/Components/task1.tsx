import { task1Props } from "../types/taskOneProps";

export default function FunctionalProps({ name, age, collage, track }: task1Props): JSX.Element{
  return (
    <div id="task-one">
        <h3>Task1</h3>
      <p>{name}</p>
      <p>{age}</p>
      <p>{collage}</p>
      <p>{track}</p>
    </div>
  );
}
