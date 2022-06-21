import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { addUser } from "./UserSlice";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const handleUser = () => {
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );
    console.log(values);
    setValues({
      name: "",
      email: "",
    });
    navigate("/");
  };
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        inputProps={{ type: "text", placeholder: "John Doe" }}
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
      <br />
      <TextField
        label="Email"
        inputProps={{ type: "email", placeholder: "johndoe@mail.com" }}
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <Button onClick={handleUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
