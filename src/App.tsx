import { useState } from "react";
import {
  Container,
  Box,
  Checkbox,
  Typography,
  Select,
  MenuItem,
  CssBaseline,
  FormControl,
  FormLabel,
} from "@mui/material";
import CheckboxButton from "./components/CheckboxButton";
import HourInterval from "./components/HourInterval";

const styles = {
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

function App() {
  const [daysChecked, setDaysChecked] = useState<IdayChecks>([
    { name: "Dom", acronym: "D", value: false, startHour: "", endHour: "" },
    { name: "Seg", acronym: "S", value: false, startHour: "", endHour: "" },
    { name: "Ter", acronym: "T", value: false, startHour: "", endHour: "" },
    { name: "Quar", acronym: "Q", value: false, startHour: "", endHour: "" },
    { name: "Quin", acronym: "Q", value: false, startHour: "", endHour: "" },
    { name: "Sex", acronym: "S", value: false, startHour: "", endHour: "" },
    { name: "Sab", acronym: "S", value: false, startHour: "", endHour: "" },
  ] as IdayChecks);

  /*
TODO: #1 criar uma contextAPI para os dados serem acessados de dentro de HourInterval
TODO: #2 fazer a chamada para o back para a rota get e a post das horas
          
*/

  const handleActiveWorkHour = (day: Day) => {
    setDaysChecked((oldData) => {
      const dataUpdated = oldData.map((item) => {
        if (item.name === day) item.value = !item.value;
        return item;
      });
      return dataUpdated;
    });
  };

  const handleDayCheck = (day: Day) => {
    setDaysChecked((oldData) => {
      const dataUpdated = oldData.map((item) => {
        if (item.name === day) item.value = !item.value;
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
      <form>
        <Box sx={{ ...styles.flexCenter, flexDirection: "column" }}>
          <Typography variant="h4">Configuração jornada de trabalho</Typography>
          <FormControl sx={{ margin: 1 }}>
            <FormLabel>
              Ativar horário de trabalho
              <Checkbox />
            </FormLabel>
          </FormControl>
          <Select
            defaultValue={1}
            size="small"
            sx={{ width: "50%", margin: 1 }}
            onChange={() => {}}
          >
            <MenuItem value={1}>Enviar no próximo expediente</MenuItem>
            <MenuItem value={2}>Abortar</MenuItem>
          </Select>
        </Box>
        <Box sx={{ ...styles.flexCenter }}>
          {daysChecked &&
            daysChecked.map((item) => (
              <CheckboxButton
                key={item.name}
                checked={item.value}
                onChange={() => {
                  handleDayCheck(item.name);
                }}
                label={item.acronym}
                sx={{
                  margin: 2,
                }}
              />
            ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            minHeight: 371,
          }}
        >
          {daysChecked.map((item) => {
            return item.value ? (
              <HourInterval key={item.name} day={item} />
            ) : null;
          })}
        </Box>
      </form>
      <CssBaseline />
    </Container>
  );
}

export default App;
