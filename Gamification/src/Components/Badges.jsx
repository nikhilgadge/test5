import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
function Badges({ badgesName }) {
  return (
    <Wrapper className="round-corner">
      <h4>My Badges</h4>
      <div className="icon-container">
        {badgesName.map((icon, index) => (
          <Icon key={index} name={icon} />
        ))}
      </div>

      <p>{badgesName.length} earned at 35 badges</p>
      <p className="text-light">Has all badges</p>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: white;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  .text-light {
    color: lightgray;
    margin-top: 5px;
  }
  .icon-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Badges;
