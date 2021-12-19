import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

function Footer() {
  return (
    <footer>
      <Box 
        paddingTop={3}
        px={{xs: 3, sm: 10}} 
        py={{xs: 5, sm: 10}}
        bgcolor="#4169E1"
        color="#fff"
        
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>Ajuda</Box>
              <Box mt={1}>
                <Link href="/" underline="none"  color="inherit">
                  Sonre nós
                </Link>
              </Box>
              <Box mt={1}>
                <Link href="/" underline="none" color="inherit">
                  Contato
                </Link>
              </Box>
              <Box mt={1}>
                <Link href="/" underline="none" color="inherit">
                  Carreiras
                </Link>
              </Box>
              <Box mt={1}>
                <Link href="/" underline="none"  color="inherit">
                  Impresa
                </Link>
              </Box>
              <Box mt={1}>
                <Link href="/" underline="none" color="inherit">
                  Blog
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>Mentorias</Box>
              <Box mt={1}>
                <Link href="/" underline="none" color="inherit">
                  Tecnologia
                </Link>
              </Box>
              <Box mt={1}>
                <Link href="/" underline="none" color="inherit">
                  Direito
                </Link>
              </Box>
              <Box mt={1}>
                <Link href="/" underline="none" color="inherit">
                  Saúde
                </Link>
              </Box>
              <Box mt={1}>
                <Link href="/" underline="none" color="inherit">
                  Educação
                </Link>
              </Box>
              <Box mt={1}>
                <Link href="/" underline="none" color="inherit">
                  Empreendedorismo
                </Link>
              </Box>
              <Box mt={1}>
                <Link href="/" underline="none" color="inherit">
                  Marketing
                </Link>
              </Box>
              <Box mt={1}>
                <Link href="/" underline="none" color="inherit">
                  Negócios
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>Instituições Parceiras</Box>
              <Box mt={1}>
                <Link href="/" underline="none" color="inherit">
                  Atlântico
                </Link>
              </Box>
              <Box mt={1}>
                <Link href="/" underline="none" color="inherit">
                  FB-UNI
                </Link>
              </Box>
              <Box mt={1}>
                <Link href="/" underline="none" color="inherit">
                  UFC - Campus Quixadá
                </Link>
              </Box>
              <Box mt={1}>
                <Link href="/" underline="none" color="inherit">
                  Inove - Campus Quixadá
                </Link>
              </Box>
              <Box mt={1}>
                <Link href="/" underline="none" color="inherit">
                  Ministério da Educação
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>Social</Box>
              <Box mt={1}>
                <Link href="/" underline="none"  color="inherit">
                  <i className="fab fa-facebook-f"></i> Facebook
                </Link>
              </Box>
              <Box mt={1}>
                <Link href="/" underline="none" color="inherit">
                  <i className="fab fa-instagram"></i> Instagram
                </Link>
              </Box>
              <Box mt={1}>
                <Link href="/" underline="none" color="inherit">
                  <i className="fab fa-twitter"></i> Twitter
                </Link>
              </Box>
              <Box mt={1}>
                <Link href="/" underline="none" color="inherit">
                  <i className="fab fa-youtube"></i> YouTube
                </Link>
              </Box>
              <Box mt={1}>
                <Link href="/" underline="none" color="inherit">
                  <i className="fab fa-linkedin-in"></i> Linkedin
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Box mt={1}>
                <Typography variant="body2" color="inherit" align="center">
                  Feito com <i className="fas fa-heart"></i> e <i className="fas fa-coffee"> </i> por <Link href="https://www.linkedin.com/in/vitor-alves-a089ab200/" underline="none" color="inherit">Vitor Alves</Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer;