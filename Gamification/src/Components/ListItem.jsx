import React from "react";
import styled from "styled-components";
function ListItem(props) {
  const { avatar, name, rank, points } = props;
  return (
    <Wrapper>
      <img src={avatar} className="avatar" alt="avatar" />
      <div>
        <h4>{name}</h4>
        <p className="text-point">{points} points</p>
      </div>
      <h4 className="text-rank">#{rank}</h4>
    </Wrapper>
  );
}
const Wrapper = styled.article`
  display: flex;
  align-items: center;
  .avatar {
    width: 35px;
    padding: 10px;
  }
  .text-rank {
    margin-left: auto;
  }
  .text-point {
    color: grey;
  }
`;
export default ListItem;
