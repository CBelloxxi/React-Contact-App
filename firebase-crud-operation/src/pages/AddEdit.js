import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import "firebase/compat/storage";
import "firebase/compat/database";

import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import './AddEdit.css';
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

export const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const {name, email, contact} = state;

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !contact) {
      toast.error("Please provide value in each input field")
    } else {
      firebase.child("contacts").push(state, (err) => {
        if(err) {
          toast.error(err)
        } else {
          toast.success("Contact Added Succesfully");
        }
      });
      setTimeout(() => navigate.push("/"), 500);
    }
  };
  return (
    <div style={{marginTop: "100px"}}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
         }}
         onSubmit={handleSubmit}
         >
          <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name..."
              value={name}
              onChange={handleInputChange}
              />
          <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email..."
              value={email}
              onChange={handleInputChange}
            />
          <label htmlFor="contact">Contact</label>
            <input
              type="number"
              id="contact"
              name="contact"
              placeholder="Your Contact Number..."
              value={contact}
              onChange={handleInputChange}
            />

          <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default AddEdit;
