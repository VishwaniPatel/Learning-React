import { useContext } from "react";
import Button from "./Button";
import { CurrentUserContext } from "./store/Context";

export function LoginButton() {
    const {
      currentUser,
      setCurrentUser
    } = useContext(CurrentUserContext);
  
    if (currentUser !== null) {
      return <p>You logged in as {currentUser.name}.</p>;
    }
  
    return (
      <Button onClick={() => {
        setCurrentUser({ name: 'Advika' })
      }}>Log in as Advika</Button>
    );
  }