import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ToggleCurrency = ({ setCurrency }) => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      setCurrency(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="currency toggle"
      fullWidth
    >
      <ToggleButton value="$" aria-label="left aligned">
        $
      </ToggleButton>
      <ToggleButton value="£" aria-label="centered">
        £
      </ToggleButton>
      <ToggleButton value="€" aria-label="right aligned">
        €
      </ToggleButton>
      <ToggleButton value="¥" aria-label="justified">
        ¥
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleCurrency;
