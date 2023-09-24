import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";
const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're Lost.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            molestiae itaque mollitia nobis ea nemo, incidunt eos vel provident
            quae est placeat in praesentium aut quisquam esse ipsam sit
            expedita.
          </p>
          <NavLink to='/home'>
            <Button>Go Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align:center;

    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 3rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;
export default ErrorPage;
