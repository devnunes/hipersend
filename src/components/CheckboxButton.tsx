import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";

const useStyles = makeStyles()(() => ({
  checkboxButton: {
    borderRadius: "50%",
    backgroundColor: "#808080",
    color: "#fff",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    ["&:hover"]: {
      backgroundColor: "#0066ff",
    },
    ["&.Mui-checked"]: {
      color: "#fff",
      backgroundColor: "#0066ff",
    },
  },
}));

interface Props extends CheckboxProps {
  label: string;
}

const CheckboxButton: React.FC<Props> = (props) => {
  const { classes, cx } = useStyles();
  const { label } = props;

  return (
    <Checkbox
      {...props}
      classes={{
        root: cx(classes.checkboxButton, props.className),
      }}
      icon={<span>{label}</span>}
      checkedIcon={<span>{label}</span>}
    />
  );
};

export default CheckboxButton;
