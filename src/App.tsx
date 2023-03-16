import {
  Container,
  Box,
  Checkbox,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  CssBaseline,
} from "@mui/material";
import { useState } from "react";

import CheckboxButton from "./components/CheckboxButton";

const flexCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

type Day =
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday";

interface IdayChecks {
  sunday: boolean;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
}

function App() {
  const [daysChecked, setDaysChecked] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  } as IdayChecks);

  const handleCheck = (day: Day) => {
    setDaysChecked((oldData) => {
      const dataUpdated = {
        ...oldData,
        [day]: !oldData[day],
      };
      return dataUpdated;
    });
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        ...flexCenter,
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Box sx={{ ...flexCenter, flexDirection: "column" }}>
        <Typography>Configuração jornada de trabalho</Typography>
        <Typography>
          <Checkbox />
          Ativar horário de trabalho
        </Typography>

        <InputLabel id="jornadaTrabalho">
          Configuração jornada de trabalho
        </InputLabel>
        <Select size="small" labelId="jornadaTrabalho" onChange={() => {}}>
          <MenuItem defaultChecked value={2}>
            Enviar no próximo expediente
          </MenuItem>
          <MenuItem value={1}>Abortar</MenuItem>
        </Select>
      </Box>
      <Box sx={{ ...flexCenter }}>
        <CheckboxButton
          checked={daysChecked.sunday}
          onChange={() => {
            handleCheck("sunday");
          }}
          label="D"
        />
        <CheckboxButton
          checked={daysChecked.monday}
          onChange={() => {
            handleCheck("monday");
          }}
          label="S"
        />
        <CheckboxButton
          checked={daysChecked.tuesday}
          onChange={() => {
            handleCheck("tuesday");
          }}
          label="T"
        />
        <CheckboxButton
          checked={daysChecked.wednesday}
          onChange={() => {
            handleCheck("wednesday");
          }}
          label="Q"
        />
        <CheckboxButton
          checked={daysChecked.thursday}
          onChange={() => {
            handleCheck("thursday");
          }}
          label="Q"
        />
        <CheckboxButton
          checked={daysChecked.friday}
          onChange={() => {
            handleCheck("friday");
          }}
          label="S"
        />
        <CheckboxButton
          checked={daysChecked.saturday}
          onChange={() => {
            handleCheck("saturday");
          }}
          label="S"
        />
      </Box>

      <CssBaseline />
    </Container>
  );
}

export default App;
