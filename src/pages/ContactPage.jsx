import React, { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    content: ""
  });

  const [message, setMessage] = useState(""); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 
    console.log(formData);

    setMessage("Thanks for your interest! We'll contact you asap :D");

    setFormData({
      fullname: "",
      email: "",
      content: ""
    });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Full name:
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            type="text"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
