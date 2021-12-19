/* React imports */
import React from "react";
import { Link } from "react-router-dom";

/* Material UI MakeStyles */
import { makeStyles } from '@mui/styles';

/* Imports of UI material components */
import { Box, Button, Grid } from "@mui/material/";

/* Image imports */
import img from "../../images/mentorar.jpg";

const useStyles = makeStyles((theme) => ({
  backimg: {
    height: "300px",
    display: "flex",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
  },
}));

function SectionCall() {
  return (
    <Box className={useStyles().backimg} component="section">
      <Grid
        py={4}
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button size="large" variant="contained">
              Quero ser Mentor
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SectionCall;