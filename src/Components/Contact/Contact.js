import React, { useState } from "react";
import "./Contact.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "../UI/Button/Button.module.css";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    // if (e.target.name === "email") {
    //   const isValid = validateEmail(e.target.value);
    //   if (!isValid) {
    //     setErrorMessage("Your Email is invalid.");
    //   } else {
    //     setErrorMessage("");
    //   }
    // } else {
    //   if (!e.target.value.length) {
    //     setErrorMessage(`${e.target.name} is required.`);
    //   } else {
    //     setErrorMessage("");
    //   }
    // }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };
  const [state, setState] = useState(true);
  let LIurl = "https://linkedin.com/in/raymond-flaherty-07b2011bb";
  let linkedInElement = <p>No handle exists for this user!</p>;
  if (state) linkedInElement = <a href={LIurl}>LinkedIn</a>;

  let GitHubLink = "https://github.com/RayFlaherty";
  let GitHubEl = <p>Link</p>;
  if (state) GitHubEl = <a href={GitHubLink}>Git Hub</a>;

  let FaceBookLink = "https://www.facebook.com/raymond.flahertyiv";
  let FacebookEl = <p>Link</p>;
  if (state) FacebookEl = <a href={FaceBookLink}>Facebook</a>;

  return (
    <Card>
      <div className="header h1Text">
        <h2> Contact Info </h2>
        <p>
          Please feel free to explore my social media links and add me! Don't
          forget to use the contact form and send a quick shout out.
        </p>
        <div className="header">
          <Card className="contactStyle left">
            <h3 data-testid="h1tag">Reach Out</h3>
            <form id="contact-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name :</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  onBlur={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email Address :</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={email}
                  onBlue={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message">Message :</label>
                <textarea
                  name="message"
                  rows="5"
                  defaultValue={message}
                  onBlur={handleChange}
                />
              </div>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <button
                data-testid="button"
                type="submit"
                className={styles.button}
              >
                Submit
              </button>
            </form>
          </Card>
          <Card className="contactStyle right">
            <div>
              <h2>FIND ME!</h2>
            </div>
            <div>
              <ul className="contactRow">
                <li className="contactText">{linkedInElement}</li>
                <li className="contactText">{GitHubEl}</li>
                <li className="contactText">{FacebookEl}</li>
              </ul>
            </div>
          </Card>
        </div>
        <Button />
      </div>
    </Card>
  );
};

export default Contact;
