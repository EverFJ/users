import React from "react";
import userJson from "./users.json";
import UserInfo from "./components/UserInfo";
import "./App.css";

class App extends React.Component {
  render() {
    console.log(userJson);
    return (
      <div>
        {userJson.map((elem) => {
          return (
            <UserInfo
              name={elem.name}
              email={elem.email}
              website={elem.website}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
