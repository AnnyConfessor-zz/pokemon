import React, { useState } from "react";
import styled from "styled-components";

import Image from "./Image";

const Container = styled.div`
  width: 482px;
  height: 32px;
  background-color: #EEE;
  border-radius: 10px;
  display: flex;

  input {
    flex: 1;
    border: none;
    background: transparent;
    color: #555;
    font-weight: bold;
    font-size: 18px;
    padding: .5rem 1rem;

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

const SearchInput = ({ onPress }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Container alt="container-search-input">
      <input 
        value={value}
        onChange={handleChange}/>
      <button 
         onClick={() => onPress(value)}>
          <Image image={'lupa'}/>
      </button>
    </Container>
  );
};

export default SearchInput;
