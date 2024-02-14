import { useNavigate } from "react-router-dom";


const Button = () => {
 // add programmatic navigation using useNavigate

  const handleClick = () => {
    // Navigate to the contact page

  };

  return (
    <button onClick={handleClick}>
      Go to Contact
    </button>
  );
};

export default Button;
