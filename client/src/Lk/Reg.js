import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from '@material-ui/core/Button';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { useHttp } from '../hooks/http.hook'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "50ch",
  },
}));

const formStyle = {
  margin: "auto", 
  marginTop: "40vh"
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Reg = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    login: "",
    password: "",
    passwordRepeat: ""
  });
  const [alert, setAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert(false);
  };

  const { request, error } = useHttp()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (values.password === values.passwordRepeat) {
      try {
          
        const data = await request('/auth/registration', 'POST', { 
          username: values.login,
          password: values.password 
        })
        
        
        localStorage.setItem("auth_token", data.token)
        document.location.replace("/lk");
  
      } catch (e) {
        console.log(e);
        setAlertMessage(e.message || 'Непредвиденная ошибка')
        setAlert(true);
      }      
    } else {
      setAlertMessage('Пароли не совпадают')
      setAlert(true)
    }
  }

  return (
    <div className={classes.root} >
      <form onSubmit={(event) => handleSubmit(event)} style = {formStyle}>
        <div>
          <TextField
            label="Login"
            id="standard-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            value={values.login}
            onChange={handleChange("login")}
          />
        </div>
        
        <div>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        <div>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="standard-adornment-password">
                Рassword Repeat
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.passwordRepeat}
              onChange={handleChange("passwordRepeat")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        <Button 
          variant="contained" 
          color="primary" 
          type="submit"
          style = {{
            display: "block",
            margin: "auto"
          }}
        >
          Регистрация
        </Button>
      </form>

      <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          { alertMessage ? alertMessage : 'Непредвиденная ошибка' }
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Reg;
