import { useContext } from "react";
import { CurrentUserContext } from "./store/Context";

export function Greeting() {
    // get current user using context
    return (
      <p>You logged in as {currentUser.name}.</p>
    )
  }