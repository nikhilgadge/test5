import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
function Profile(props) {
  const { name, level, points, avatar } = props;
  return (
    <Wrapper className="round-corner">
      <header className="avatar_wrapper">
        <img className="avatar_image" src={avatar} alt="Avatar" />
        <div className="text-container">
          <h3 className="avatar_text-name">{name}</h3>
          <p class="text">{level} Level</p>
        </div>
      </header>
      <section className="point-text-wrapper">
        <h4 className="point-text-wrapper__heading">10,000</h4>

        <p className="text ">points</p>
        <p className="text point-text-wrapper__info">
          {points} points to next level
        </p>
      </section>
      <ProgressBar />
      <p className="info-text">Action plan is active for: CSAT and Probing.</p>
    </Wrapper>
  );
}

export default Profile;

const Wrapper = styled.section`
  background-color: white;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  .avatar_wrapper {
    display: flex;
    align-items: center;
    .text-container {
      margin-left: 10px;
    }
  }
  .avatar_image {
    width: 70px;
    object-fit: contain;
    border-radius: 50%;
  }
  .text {
    color: lightgray;
    margin-top: 3px;
  }
  .point-text-wrapper {
    display: flex;

    margin-top: 10px;
  }
  .info-text {
    margin-top: 10px;
  }
  .point-text-wrapper__info {
    margin-left: auto;
  }
  .point-text-wrapper__heading {
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 300px;
  }
`;
