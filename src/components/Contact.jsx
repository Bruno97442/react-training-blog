import React, { useState, useEffect } from "react";
import "./Contact.css";
import { db } from "../firebase";
import './Animation.css';

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <form className="form justify-content-center" onSubmit={handleSubmit}>
        
        <div className="form-box"><h1 className="text-center">Contact Me</h1>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            pattern="^[( )a-zA-Z]+$"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Message</label>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button
            type="submit"
            style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }} className="custom-btn"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
