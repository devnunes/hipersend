import React from "react";
import { Typography, Box, BoxProps } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

interface Props extends BoxProps {
  day: IDay;
}

const HourInterval: React.FC<Props> = (props) => {
  const { name } = props.day;
  const [startHour, setStartHour] = React.useState<Dayjs | null>(
    dayjs("2023-04-17T15:30")
  );
  const [endhour, setEndhour] = React.useState<Dayjs | null>(
    dayjs("2023-04-17T15:30")
  );
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 1,
        width: "100%",
      }}
    >
      <Typography minWidth={"35px"}>{name}</Typography>
      <TimePicker
        label="Início"
        value={startHour}
        onChange={(newValue) => setStartHour(newValue)}
        sx={{ "& .MuiInputBase-input": { height: 4 } }}
      />
      <Typography>até</Typography>
      <TimePicker
        label="Fim"
        value={endhour}
        onChange={(newValue) => setEndhour(newValue)}
        sx={{ "& .MuiInputBase-input": { height: 4 } }}
      />
    </Box>
  );
};

export default HourInterval;
