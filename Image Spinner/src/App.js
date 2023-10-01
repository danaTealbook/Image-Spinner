import { useState, useEffect } from "react";
import InputDuration from "./InputDuration";
import "./styles.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import spinner from "./spinner.png";

export default function App() {
  const [clicked, setClicked] = useState(false);
  const [seconds, setSeconds] = useState(5);
  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        setClicked(false);
      }, seconds * 1000);
      return () => clearTimeout(timer);
    }
  }, [clicked, seconds]);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div className="App">
      <h2>Click Start to activate spinner </h2>
      <InputDuration seconds={seconds} onInputChange={setSeconds} />
      <Button variant="contained" endIcon={<SendIcon />} onClick={handleClick}>
        {clicked ? "Stop" : "Start"}
      </Button>
      <div className="center-image">
        {clicked && (
          <>
            <img src={spinner} alt="spinner" className="image-rotation" />
            <h4>LOADING...</h4>
          </>
        )}
      </div>
    </div>
  );
}
