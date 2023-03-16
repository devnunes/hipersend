import { useState } from "react";
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
import CheckboxButton from "./components/CheckboxButton";
import HourInterval from "./components/HourInterval";

const styles = {
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  day: {},
};

function App() {
  const [daysChecked, setDaysChecked] = useState([
    { day: "Dom", acronym: "D", value: false },
    { day: "Seg", acronym: "S", value: false },
    { day: "Ter", acronym: "T", value: false },
    { day: "Quar", acronym: "Q", value: false },
    { day: "Quin", acronym: "Q", value: false },
    { day: "Sex", acronym: "S", value: false },
    { day: "Sab", acronym: "S", value: false },
  ] as IdayChecks);

  const handleCheck = (day: Day) => {
    setDaysChecked((oldData) => {
      const dataUpdated = oldData.map((item) => {
        if (item.day === day) item.value = !item.value;
        return item;
      });
      return dataUpdated;
    });
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        ...styles.flexCenter,
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Box sx={{ ...styles.flexCenter, flexDirection: "column" }}>
        <Typography>Configuração jornada de trabalho</Typography>
        <Typography>
          <Checkbox />
          Ativar horário de trabalho
        </Typography>

        <Select size="small" sx={{ width: "100%" }} onChange={() => {}}>
          <MenuItem defaultChecked value={2}>
            Enviar no próximo expediente
          </MenuItem>
          <MenuItem value={1}>Abortar</MenuItem>
        </Select>
      </Box>
      <Box sx={{ ...styles.flexCenter }}>
        {daysChecked &&
          daysChecked.map((item) => (
            <CheckboxButton
              key={item.day}
              checked={item.value}
              onChange={() => {
                handleCheck(item.day);
              }}
              label={item.acronym}
              sx={{
                margin: 2,
              }}
            />
          ))}
      </Box>

      {daysChecked.map((item) => {
        return item.value ? (
          <HourInterval sx={{ height: "1rem" }} key={item.day} day={item} />
        ) : null;
      })}

      <CssBaseline />
    </Container>
  );
}

export default App;
