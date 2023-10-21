import { Component, PropsWithChildren } from "react";
import { Task2Types } from "../../Types/Task2Types";
type updateState =  {updateState: () => void}
export default function SignUp({ updateState }: updateState) {
  return (
    <div id="sign-up-div">
      <p>Sing Up</p>
      <div id="form">
        <input type="text" name="name" id="name" placeholder="name" />
        <input type="text" name="email" id="email" placeholder="email" />
        <input type="number" name="phone" id="phone" placeholder="phone" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button
          onClick={() => {
            updateState();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
