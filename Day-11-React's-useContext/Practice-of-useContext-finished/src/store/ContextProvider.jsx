import { useState } from "react";
import { CurrentUserContext, ThemeContext } from "./Context"
import Form from "../Form";
import { WelcomePanel } from "../WelcomePanel";
export const ThemeProvider = () =>{
    // Updating data passed via context
    const [theme, setTheme] = useState('dark');
    const [currentUser, setCurrentUser] = useState(null);
    return (
      // Add theme provider
      // Add current user provider
     <>
        <WelcomePanel/>
         {/* <Form /> */}
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        />
        Use dark mode
      </label>
      </>
        )
}