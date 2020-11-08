import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 350px;
  height: 32px;
  background-color: #3bc659;
  border-radius: 10px;
  display: flex;

  input {
    flex: 1;
    border: none;
    background: transparent;
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;

    :focus {
      outline: none;
    }
  }

  button {
    background-color: transparent;
    border: none;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

const SearchInput = () => {
  return (
    <Container alt="container-search-input">
      <input/>
      <button>
        <img src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48---cone-de-pesquisa-by-vexels.png"/>
      </button>
    </Container>
  );
};

export default SearchInput;
