import "./App.css";
import Contacting from "./Component/Contacting";
import Navigation from "./Component/Navigation";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <Navigation />
      {/* Profile */}
      <div className="FullProfile">
        <ProfilePhoto />
        <FullName />
        <Address />
      </div>
      {/* View Profile Button */}
      <Contacting />
    </div>
  );
}

export default App;
