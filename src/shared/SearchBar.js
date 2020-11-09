import React from "react";
import styled from "styled-components";

import SearchInput from "./SearchInput";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 1.5rem 0;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 25px;
  color: #2f56a0;
`;

const SearchBar = () => {
  return (
    <Container className="search-bar">
      {/* <Title>Pokemon List</Title> */}
      <SearchInput />
    </Container>
  );
};

export default SearchBar;
