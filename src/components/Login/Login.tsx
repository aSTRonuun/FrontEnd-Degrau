import React from "react";
import {
  Grid,
  Hidden,
} from "@mui/material/";
import { makeStyles } from '@mui/styles';
import FormLogin from "./FormLogin";
import Registe from "../Register/Register";
import img from "../../images/LogoCall.png";

const useStyles = makeStyles((theme) => ({
  imgBackground: {
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function Login() {

  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <Grid container spacing={0} columns={16} >
      <Hidden lgDown>
        <Grid item xs={0} sm={0} md={0} lg={7} className={useStyles().imgBackground}>
        </Grid>
      </Hidden>

      <Grid item xs={16} sm={16} md={16} lg={9} >
        {isLogin ? <FormLogin setIsLogin={setIsLogin}   /> : <Registe setIsLogin={setIsLogin} />}
      </Grid>
    </Grid>
  )
}

export default Login;