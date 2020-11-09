import React from "react";
import styled from "styled-components";

import Image from 'shared/Images'

const Container = styled.div`
  width: 482px;
  height: 32px;
  background-color: ${(props) => props.theme.colors.darkBlue};
  border-radius: 10px;
  display: flex;

  input {
    flex: 1;
    border: none;
    background: transparent;
    color: #FFFF;
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
        <Image name={'lupa'}/>
      </button>
    </Container>
  );
};

export default SearchInput;
