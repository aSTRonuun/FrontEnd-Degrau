/* Imports of UI material components */
import { Box, Grid, Typography } from "@mui/material/";

function Localization() {
  return (
    <Box sx={{ textAlign: "center", bgcolor: "#f2f2f2" }} component="section">
      <Typography pt={4} pb={4} variant="h2" fontSize="25px" fontWeight="bold">
        Encontre-nos
      </Typography>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.760875997167!2d-39.05854788587398!3d-4.979358352204272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7be9e1bee212d41%3A0x705b4707028de537!2sUFC%20-%20Universidade%20Federal%20do%20Cear%C3%A1%20-%20Campus%20Quixad%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1638985688174!5m2!1spt-BR!2sbr`}
            height={350}
            width={"100%"}
            style={{ border: 0 }}
            loading="lazy"
            title="mapa"
          ></iframe>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Localization;