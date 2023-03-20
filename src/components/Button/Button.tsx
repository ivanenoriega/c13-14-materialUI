import { Button } from "@mui/material";
import React from "react";

type Props = { handleClick: () => void, variant: 'contained' | 'outlined' | 'text' };

const PrimaryButton: React.FC<Props> = ({ handleClick, variant }) => {
  return (
    <Button variant={variant} sx={{ width: 1 }} onClick={handleClick}>
      Texto Padre
    </Button>
  );
};

PrimaryButton.defaultProps = {
  variant: "contained",
}

export default PrimaryButton;
