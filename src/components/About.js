import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <UserClass name={"Rohit Mathur Class"} location={"Jaipur"} />
      <UserContext.Consumer>
        {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
      </UserContext.Consumer>
    </>
  );
};

export default About;
