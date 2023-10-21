import { Component, PropsWithChildren, ReactNode, useState } from "react";
import SignUp from "./signUp";
import './style.css'
import SingIn from "./signIn";
import { Task2Types } from "../../Types/Task2Types";
export default function Task2 (){
  const [Clicked, setClicked] = useState(false)
    const updateState = () => {
        setClicked(true)
    }
    return (
      <div id="task2">
            {
            Clicked ? <SingIn/> : <SignUp updateState={updateState}/>
        }
      </div>
    );
  }