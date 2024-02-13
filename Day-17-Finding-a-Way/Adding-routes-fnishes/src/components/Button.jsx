import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the contact page
    navigate("/contact");
  };

  return (
    <button onClick={handleClick}>
      Go to Contact
    </button>
  );
};

export default Button;
