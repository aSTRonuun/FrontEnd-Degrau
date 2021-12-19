/* React imports */
import React from "react";

/* Imports of UI material components */
import {
  Box,
  Card,
  CardMedia,
  Grid,
  Typography,
  Button,
  CardActions,
  CardContent 
} from "@mui/material/";

/* Image imports */
import mentor01 from "../../images/mentor01.jpg";
import mentor02 from "../../images/mento02.jpg";
import mentor04 from "../../images/mento04.jpg";
import mentor05 from "../../images/mentor04.jpg";

function ListOfTeachers() {
  return (
    <Box
      p={2}
      pb={4}
      sx={{ bgcolor: "#a8a8a8", textAlign: "center" }}
      component="section"
    >
      <Typography
        pb={4}
        variant="h2"
        sx={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}
      >
        Mentores em Destaque
      </Typography>
      <Grid
        container
        spacing={4}
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        {/*meacher 01*/}
        <Grid item lg={3} md={6} sm={6} xs={10}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Mentor - Rodrigo Campos"
            height="250"
            image={mentor01}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ana Paula
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Pleno Product Designer na Nubank
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Perfil</Button>
            <Button size="small">Seguir</Button>
          </CardActions>
        </Card>
        </Grid>
        {/*Teacher 02*/}
        <Grid item lg={3} md={6} sm={6} xs={10}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Mentor - Rodrigo Campos"
              height="270"
              image={mentor02}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Rodrigo Campos
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Senior Product Onwer no PicPay
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Perfil</Button>
              <Button size="small">Seguir</Button>
            </CardActions>
          </Card>
        </Grid>
        {/*mentor 03*/}
        <Grid item lg={3} md={6} sm={6} xs={10}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Mentor - Victor Lima"
              height="250"
              image={mentor04}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Victor Lima
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Senior Desenvolvedor Mobile na Disney+
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Perfil</Button>
              <Button size="small">Seguir</Button>
            </CardActions>
          </Card>
        </Grid>
        {/*mentor 04*/}
        <Grid item lg={3} md={6} sm={6} xs={10}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Mentor - Diego Fernandes"
              height="270"
              image={mentor05}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Diego Fernandes
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CTO na Rocketseat
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Perfil</Button>
              <Button size="small">Seguir</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ListOfTeachers;