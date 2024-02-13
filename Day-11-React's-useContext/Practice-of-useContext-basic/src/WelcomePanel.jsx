import { useContext } from "react";
import { Greeting } from "./Greeting";
import LoginForm from "./LoginForm";
import Panel from "./Panel";
import { CurrentUserContext } from "./store/Context";

export function WelcomePanel({ children }) {
    const {currentUser} = useContext(CurrentUserContext);
    return (
      <Panel title="Welcome">
        {currentUser !== null ?
          <Greeting /> :
          <LoginForm />
        }
      </Panel>
    );
  }