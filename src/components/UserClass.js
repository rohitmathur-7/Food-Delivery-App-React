import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "User Name",
        location: "Location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rohitmathur-7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { userInfo } = this.state;
    const { name, location, avatar_url, html_url } = userInfo;
    return (
      <>
        <img src={avatar_url}></img>
        <h2>{name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {html_url}</h4>
      </>
    );
  }
}

export default UserClass;
