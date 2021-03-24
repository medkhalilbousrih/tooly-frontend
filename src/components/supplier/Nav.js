import { Link, NavLink, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import AddTool from "./AddTool";

const Nav = () => {
  return (
    <Navigation>
      <StyledNavLink to="/addtool">Add Tool</StyledNavLink>
      <StyledNavLink to="/tools">Tool List</StyledNavLink>
      <StyledNavLink to="/statistics">Statistics</StyledNavLink>
      <Switch>
        <Route path="/addtool">
          <AddTool />
        </Route>
        <Route path="/tools"></Route>
        <Route path="/statistics"></Route>
      </Switch>
    </Navigation>
  );
};
const Navigation = styled.div`
  text-align: center;
`;
const StyledNavLink = styled(NavLink)`
  margin: 1rem;
  color: rgba(255, 200, 0, 0.6);
  &.active {
    color: #ffc800;
  }
  &:hover {
    color: #ffc800;
  }
`;
export default Nav;
