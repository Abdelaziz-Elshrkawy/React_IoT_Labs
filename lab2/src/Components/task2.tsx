import { Component, ReactNode } from "react";
import { task2Props } from "../types/taskTwoProps";

export default class ClassProps extends Component<task2Props> {
  render(): ReactNode {
    const { courseOne, CourseTwo } = this.props;
    return (
      <div id="task2">
        <hr/>
        <h3>Task2</h3>
        <p>{courseOne}</p>
        <p>{CourseTwo}</p>
      </div>
    );
  }
}
