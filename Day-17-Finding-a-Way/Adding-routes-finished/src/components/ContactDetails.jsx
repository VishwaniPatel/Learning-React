import { useParams } from "react-router-dom";

const ContactDetails = () => {
    const { id } = useParams();
    return <h2>Contact Details for ID: {id}</h2>;
  };

  export default ContactDetails;