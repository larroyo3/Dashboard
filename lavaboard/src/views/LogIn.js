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


function Login() {

  const [values, setValues] = React.useState({
    mail: "",
    password: "",
    showPassword: false
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

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div class="wrapper">
      <div className='lb-space'></div>
      <div className='lb-card'>
        <ConnexionCard>
          <h1>Log In</h1>
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
          <Button variant="contained" onClick={() => console.log(values.mail, values.password)}>Connexion</Button>
        </ConnexionCard>
      </div>
      <div className='lb-space'></div>
    </div>
  );
}

export default Login;