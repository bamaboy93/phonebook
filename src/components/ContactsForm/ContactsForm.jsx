import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

import { useSelector, useDispatch } from "react-redux";
import operations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

const validationSchema = yup.object({
  name: yup
    .string("Enter Name")

    .required("Name is required"),
  number: yup
    .number("Enter Number")

    .required("Number is required"),
});
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  fontSize: 16,

  padding: "10px 50px",
  border: "1px solid",
  lineHeight: 1.5,
  "&:hover": {
    backgroundColor: purple[700],
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
}));

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  const onSubmit = ({ name, number }) => {
    if (!name || !number) return;
    const contactName = contacts.map((contact) => contact.name.toLowerCase());
    if (contactName.includes(name.toLowerCase())) {
      toast.warn(`${name} is already in contacts`);
      return;
    }
    dispatch(operations.addContact(name, number));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(operations.addContact(values));
    },
  });

  return (
    <Box textAlign="center">
      <form onSubmit={formik.handleSubmit} sx={{ mt: 10 }}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="number"
          name="number"
          label="Number"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            ),
          }}
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <ColorButton
          sx={{ mt: 25 }}
          color="primary"
          variant="contained"
          size="large"
          type="submit"
        >
          Add
        </ColorButton>
      </form>
    </Box>
  );
};

export default ContactForm;
