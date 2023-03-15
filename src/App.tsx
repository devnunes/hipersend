import {
  Container,
  Box,
  Checkbox,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
} from "@mui/material";

function App() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ margin: "auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>Configuração jornada de trabalho</Typography>
            <Typography>
              <Checkbox />
              Ativar horário de trabalho
            </Typography>

            <InputLabel id="jornadaTrabalho">
              Configuração jornada de trabalho
            </InputLabel>
            <Select size="small" labelId="jornadaTrabalho" onChange={() => {}}>
              <MenuItem value={1}>Abortar</MenuItem>
              <MenuItem value={2}>Enviar no próximo expediente</MenuItem>
            </Select>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
