import React from "react";
import styled from "styled-components";
import sprite from "../Assets/sprite.svg";
function Icon({ name = "badge1" }) {
  return (
    <SVG className="icons">
      <use href={`${sprite}#${name}`}></use>
    </SVG>
  );
}

export default Icon;

const SVG = styled.svg`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 15px;
  box-shadow: 2px -2px 47px -21px rgba(0, 0, 0, 0.5);
  margin-right: 20px;
  margin-top: 10px;
`;
