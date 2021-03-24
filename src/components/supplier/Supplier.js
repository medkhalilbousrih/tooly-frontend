import styled from "styled-components";
import { useEffect } from "react";
import Info from "./Info";
import Nav from "./Nav";

const Profile = () => {
  useEffect(() => {}, []);

  return (
    <Container>
      <Info />
      <Nav />
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  font-family: "Open Sans", sans-serif;
  margin: 0 auto;
`;

export default Profile;
