import React from "react";
import styled from "styled-components";
import CircularProgressBar from "./CircularProgressBar";

function GoalItem({ week, status, current }) {
  return (
    <Wrapper className="round-corner">
      <h5>WEEK {week} GOAL</h5>
      <p className="text-dark">
        Status : <span className="text-light">{status}</span>
      </p>
      <p className="text-dark">
        Current : <span className="text-light">{current}%</span>
      </p>
      <div>
        <CircularProgressBar percentage={100 - current} />
      </div>
    </Wrapper>
  );
}

export default GoalItem;

const Wrapper = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  p {
    font-size: 13px;
  }
  .text-dark {
    font-weight: bold;
    padding: 1px;
  }
  .text-light {
    font-weight: lighter;
  }
`;
