import React from "react";
import styled from "styled-components";

import SearchInput from "./SearchInput";

const Container = styled.div`
width: 100%;
height: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 25px;
  color: #2F56A0;
`;

const SearchBar = () => {
  return (
    <Container className="search-bar">
      <Title>Pokemon API</Title>
      <SearchInput />
    </Container>
  );
};

export default SearchBar;
