import "normalize.css";
import styled from "styled-components";
import Badges from "./Components/Badges";
import Goals from "./Components/Goals";
import LeaderBoardS from "./Components/LeaderBoardS";
import Profile from "./Components/Profile";
import { profileData } from "./utils";

function App() {
  return (
    <Wrapper className="App">
      <Profile {...profileData} />
      <Badges badgesName={profileData.badgesName} />
      <Goals goals={profileData.goals} />
      <LeaderBoardS />
    </Wrapper>
  );
}
const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 15px;
  padding: 20px;
  max-width: 900px;
  margin: auto;
  .test {
    height: 200px;
    background-color: blue;
    width: 200px;
  }

  @media (max-width: 950px) {
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    grid-template-columns: 1fr;
    justify-items: center;
  }
  @media (max-width: 500px) {
  }
`;
export default App;
