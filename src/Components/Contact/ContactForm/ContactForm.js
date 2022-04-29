import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import classes from "./ContactForm.module.css";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const ContactForm = (props) => {
  const [enteredName, SetEnteredName] = useState("");
  const [enteredEmail, SetEnteredEmail] = useState("");
  const [enteredMessage, SetEnteredMessage] = useState("");
  const [error, setError] = useState();

  const sendEmail = (event) => {
    event.preventDefault();
    console.log(enteredName, enteredEmail, enteredMessage);
    if (
      enteredName.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
      enteredMessage.trim().length
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name or email",
      });
      return;
    }
    props.onContactForm(enteredName, enteredEmail, enteredMessage);
    SetEnteredName("");
    SetEnteredEmail("");
    SetEnteredMessage("");
  };

  const nameChangeHandler = (event) => {
    SetEnteredName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    SetEnteredEmail(event.target.value);
  };
  const messageChangeHandler = (event) => {
    SetEnteredMessage(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div className={classes.formPosition}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.form}>
        <form onSubmit={sendEmail}>
          <div className={classes.formContent}>
            <header>
              <div>Email Me!</div>
            </header>
            <div>
              <label htmlFor="name">Name</label>
            </div>
            <div>
              <input
                id="name"
                type="text"
                value={enteredName}
                onChange={nameChangeHandler}
              ></input>
            </div>
            <div>
              {" "}
              <label htmlFor="email">Email:</label>
            </div>
            <div>
              <input
                id="email"
                type="text"
                value={enteredEmail}
                onChange={emailChangeHandler}
              ></input>
            </div>
            <div>
              <label htmlFor="message">Message:</label>
            </div>
            <div>
              {" "}
              <input
              className={classes.messageHeight}
                id="message"
                type="text"
                value={enteredMessage}
                onChange={messageChangeHandler}
              ></input>
            </div>

            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ContactForm;
