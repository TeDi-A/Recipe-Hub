import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="loader">
          <div className="words">
            <span className="word">tasty</span>
            <span className="word">exotic</span>
            <span className="word">delicious</span>
            <span className="word">tasty</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    color: rgb(124, 124, 124);
    font-family: "Poppins", sans-serif;
    box-sizing: content-box;
    height: 80px;
    display: flex;
    border-radius: 8px;
    font-weight: bold;

  }

  .words {
    overflow: hidden;
    position: relative;
  }

  .word {
    display: block;
    height: 100%;
    padding-left: 6px;
    color: #F6BB2E;
    animation: spin 4s infinite;
    font-size: 2em;
    margin-top: 2px;
  }

  @keyframes spin {
    0% {
      transform: translateY(0%);
    }
    33% {
      transform: translateY(-100%);
    }
    66% {
      transform: translateY(-200%);
    }
    100% {
      transform: translateY(-300%);
    }
  }
`;

export default Loader;
