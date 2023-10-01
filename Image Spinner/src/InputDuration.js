import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

export default function InputDuration({ seconds, onInputChange }) {
  return (
    <TextField
      id="seconds"
      label="Enter seconds"
      variant="outlined"
      value={seconds}
      type="number"
      sx={{
        width: "15ch",
        marginRight: "15px"
      }}
      InputLabelProps={{
        shrink: true
      }}
      InputProps={{
        endAdornment: <InputAdornment position="end">sec</InputAdornment>,
        inputProps: {
          style: {
            // textAlign: "right",
            height: "4px"
          }
        }
      }}
      onChange={(event) => {
        const value = Number(event.target.value);
        onInputChange(value);
      }}
      helperText="Spinner runs for duration specified above"
    />
  );
}
