import React from "react";
import UserContext from "../utils/UserContext";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy Location",
      },
    };
    // console.log("child-Constractor" + this.props.name);
  }

  async componentDidMount() {
    //API Call
    const data = await fetch("https://api.github.com/users/Badshah-Alam");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });

    // this.timer=setInterval(()=>{
    // console.log("React OP")
    // },1000)
    // console.log("child-componentDidMount" + this.props.name);
  }
  componentDidUpdate() {
    console.log("component Did Update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("component Will Unmaount")
  }
  render() {
    const { count } = this.state;
    // console.log("child-render" + this.props.name);
    return (
      <div>
        <UserContext.Consumer>
          {({user}) => <h4 className="font-bold text-xl p-10">
            {user.name} - {user.email}
            </h4>}
        </UserContext.Consumer>
        <h1>Profile class Components</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name:{this.state.userInfo.name}</h2>
        <h2>Location:{this.state.userInfo.location}</h2>
      </div>
    );
  }
}
export default Profile;
