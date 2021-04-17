import "./App.css";
import user from "./user.json";
import Profile from "./components/Profile/Profile.js";
import statisticalData from "./statistical-data.json";
import Statistics from "./components/Statistics/Statistics.js";
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList.js";
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.js";

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
