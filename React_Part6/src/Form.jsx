import { set } from "mongoose";
import React, { useState } from "react";

const Form = () => {
  // const [name, setName] = useState(' ');
  // const [email, setEmail] = useState(' ');
  //  const handleNameChange = (e) => {
  //     setName(e.target.value);
  // }
  // const handelEmailChange = (e) => {
  //     setEmail(e.target.value);
  // }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handelInputChange = (e) => {  
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <form action="" onSubmit={(e) => {e.preventDefault()
        console.log(formData);
        setFormData({ name: "", email: "" });
    }}>
      <div>
        <label htmlFor="name">Enter your name</label> <br />
        <input
          type="text"
          placeholder="enter your name"
          value={formData.name}
          onChange={handelInputChange}
          id="name"
          name="name"
        />
      </div>
      <div>
        <label htmlFor="email">Enter your email</label> <br />
        <input
          type="email"
          placeholder="enter your email"
          id="email"
          value={formData.email}
          onChange={handelInputChange}
          name="email"
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Form;
