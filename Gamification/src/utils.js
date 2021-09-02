import avatar from "./Assets/man.png";

export const profileData = {
  name: "Ronnie Coleman",
  level: "Rookie",
  points: "601",
  avatar,
  badgesName: ["badge3", "badge2", "badge1", "badge4"],
  goals: [
    { week: 1, status: "pending", current: 40 },
    { week: 2, status: "pending", current: 50 },
    { week: 3, status: "pending", current: 20 },
    { week: 4, status: "pending", current: 70 },
  ],
};

export const leaderBoardData = [
  { avatar, name: "Alan Lucas", points: 20000, rank: 1 },
  { avatar, name: "Keaun Evans", points: 20000, rank: 2 },
  { avatar, name: "Kelly Smith", points: 20000, rank: 4 },
  { avatar, name: "John K", points: 20000, rank: 3 },
];

export const sortLeaderBoardData = (leaderBoard) => {
  return leaderBoard.sort((a, b) => (a.rank > b.rank ? 1 : -1));
};
