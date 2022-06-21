import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { editUser } from "./UserSlice";

const EditUser = () => {
  const params = useParams();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const exisitingUser = users.filter((user) => user.id === params.id);
  const { email, name } = exisitingUser[0];
  const [values, setValues] = useState({
    name,
    email,
  });
  const dispatch = useDispatch();
  const handleEditUser = () => {
    dispatch(
      editUser({
        id: params.id,
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
      <Button onClick={handleEditUser}>Update</Button>
    </div>
  );
};
export default EditUser;
