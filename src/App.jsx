import Profile from "./components/Profile/Profile";
import FriendsList from "./components/FriendsList/FriendsList";

import userData from "./data/userData.json";
import friends from "./data/friends.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friends} />
    </>
  );
};

export default App;
