import { Outlet } from "react-router-dom";
import ProfileFuntionalComponet from "./Profile";
import Profile from "./ProfileClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    
    // console.log("parent-constructor");
  }

 componentDidMount() {


    // console.log("parent-componetDidMout");
  }

  render() {
    // console.log("parent-render");
    return (
      <div>
        <h1>About us page</h1>
        <p>how can i help you guys</p>
        <Profile    />

        {/* <Profile name={"first-Child"} xyz="abc" /> */}
      </div>
    );
  }
}

export default About;
