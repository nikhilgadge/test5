import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import { leaderBoardData, sortLeaderBoardData } from "../utils";
function LeaderBoard() {
  const sortedData = sortLeaderBoardData(leaderBoardData);
  return (
    <Wrapper className="round-corner">
      <header className="header">
        <h4 className="heading">Leaderboard</h4>
        <p className="text">10 in my team</p>
      </header>
      <div className="banner"></div>
      <div className="list-container">
        {sortedData.map((item, index) => (
          <ListItem {...item} key={index} />
        ))}
      </div>
      <button className="btn">SEE ALL</button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: white;
  padding: 20px;
  width: 100%;
  max-width: 400px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .banner {
    height: 100px;
    background-color: lightblue;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .btn {
    border: none;
    background-color: transparent;
    font-weight: bold;
    font-size: 15px;
    color: grey;
    padding: 10px;
    cursor: pointer;
  }
  .text {
    color: grey;
  }
  .heading {
    text-transform: uppercase;
  }
`;
export default LeaderBoard;
