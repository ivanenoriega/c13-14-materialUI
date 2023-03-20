import { Button } from "@mui/material";
import React from "react";

type Props = { handleClick: () => void };

const PrimaryButton: React.FC<Props> = ({ handleClick }) => {
  return (
    <Button variant="outlined" sx={{ width: 1 }} onClick={handleClick}>
      Texto Padre
    </Button>
  );
};

export default PrimaryButton;
