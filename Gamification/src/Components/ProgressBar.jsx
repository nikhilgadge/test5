import React from "react";
import styled from "styled-components";

function ProgressBar({ percent = 50 }) {
  return (
    <Wrapper percent={percent}>
      <div className="progress-bar"></div>
      <div className="circle"></div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 10px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  .progress-bar {
    width: ${(props) => `${props.percent}%`};
    background-color: teal;
    height: 10px;
  }
  .circle {
    width: 15px;
    height: 15px;
    background-color: white;
    border-radius: 50%;
    border: 5px solid teal;
    margin: -5px;
  }
`;
export default ProgressBar;
