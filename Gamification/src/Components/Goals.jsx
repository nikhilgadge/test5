import React from "react";
import styled from "styled-components";
import GoalItem from "./GoalItem";

function Goals({ goals }) {
  return (
    <Wrapper>
      {goals.map((item, index) => (
        <GoalItem {...item} key={index} />
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 15px;
  width: 100%;
  max-width: 440px;

  background-color: lightgray;
  justify-items: stretch;
`;
export default Goals;
