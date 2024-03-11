import { React } from "react";

const EmailTemplate = ({ name, email, message }) => (
  <div>
    <h2>
      <strong>{name}</strong> has reached out with the following message:
    </h2>
    <h3>
      <em>{email}</em>
    </h3>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;
