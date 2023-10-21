import { Component } from "react";

export default function SingIn() {
  return (
    <div id="sign-in-div">
      <p>Sing In</p>
      <div id="form">
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button>Login</button>
      </div>
    </div>
  );
}
