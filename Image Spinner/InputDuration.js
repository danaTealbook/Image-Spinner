export default function InputDuration() {
  return (
    <TextField
      id="seconds"
      label="Enter seconds"
      variant="outlined"
      value={seconds}
      type="number"
      sx={{
        width: "15ch",
        height: "30",
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
        setSeconds(value);
      }}
      // helperText="Run spinner for seconds specified above"
    />
  );
}
