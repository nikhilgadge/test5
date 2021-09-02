import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

function CircularProgressBar({ percentage = 25 }) {
  return (
    <Wrapper>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: "teal",
          textColor: "teal",
        })}
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 5px;
`;
export default CircularProgressBar;
