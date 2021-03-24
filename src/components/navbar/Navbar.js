import { Link } from "react-router-dom";
import styled from "styled-components";
const Navbar = ({ user, login }) => {
  return (
    <>
      <Contact>
        <div>Call Tooly: 99 999 999</div>
        <div>
          <i className="fab fa-facebook-square fa-lg"></i>
          <i className="fab fa-twitter-square fa-lg"></i>
          <i className="fab fa-instagram-square fa-lg"></i>
        </div>
      </Contact>
      <Nav>
        <img src="/logo.png" alt="logo" />
        <div>
          
          <div>
            <Link to="/supplier">Supplier</Link>
            <a>&nbsp;</a>
            <Link to="/client">client</Link>
          </div>
          
        </div>
      </Nav>
      <Sep></Sep>
    </>
  );
};

const Contact = styled.div`
  display: flex;
  font-family: "Open Sans", sans-serif;
  justify-content: space-between;
  background-color: #353535;
  height: 2rem;
  div {
    margin: 0 1rem;
    margin-top: 5px;
    color: white;
    i {
      margin: 0 1rem;
    }
  }
`;
const Nav = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  font-family: "Open Sans", sans-serif;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  div {
    margin-top: 0.7rem;
  }
  i {
    margin-right: 1rem;
  }
`;
const Sep = styled.div`
  height: 0.1rem;
  background-color: #353535;
`;

export default Navbar;
