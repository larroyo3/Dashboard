import * as React from "react";

import ConnexionCard from "../ui-componants/ConnexionCard";
import "../ui-componants/ui-components.css"

//import MUI
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility as VisibilityIcon } from "@material-ui/icons";
import { VisibilityOff as VisibilityOffIcon } from "@material-ui/icons";

import axios from 'axios'

function Register() {

  function registerUser(name, password) {
    axios.post('http://localhost:8080/register', {"username": name, "pass": password})
    .catch(err => {
      console.error(err);
    })
  }

  function checkPass() {
    var divcomp;

    if (values.password === values.confirmPassword) {
      divcomp = "<p style='color:green'>Correct</p>";
      registerUser(values.mail, values.password)
    }
    else {
      divcomp = "<p style='color:red'>Mot de passe différent</p>";
    }
    document.getElementById("divcomp").innerHTML= divcomp;
  }

  const [values, setValues] = React.useState({
    mail: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };
  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div class="wrapper">
      <div className='lb-space'></div>
      <div className='lb-card'>
        <ConnexionCard>
          <h1>Register</h1>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Mail</InputLabel>
            <OutlinedInput
              id="component-outlined"
              value={values.mail}
              onChange={handleChange("mail")}
              label="Mail"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="outlined-adornment-password">
              ConfirmPassword
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showConfirmPassword ? "text" : "password"}
              value={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownConfirmPassword}
                    edge="end"
                  >
                    {values.showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
              label="ConfirmPassword"
            />
          </FormControl>
          <span id="divcomp"></span>
          <Button variant="contained" onClick={() => checkPass()}>Connexion</Button>
        </ConnexionCard>
      </div>
      <div className='lb-space'></div>
    </div>
  );
}

export default Register;