import React, { useState } from "react";
import styled from "styled-components";

import Icon from "screens/List/components/Icons";

const Wrapper = styled.div`
  width: 10rem;
  height: 5rem;
  background: #d1d1d1;
  display: flex;

  ${Icon} {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Text = styled.span`
  color: ${({ theme }) => theme.colors.grey};
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border: none;
  border-radius: 5px;
`;

const Filter = () => {
  const [value, setvalue] = useState();

  return (
    <Wrapper>
      <Button>
        <Text value={value} />
        <Icon name="down-arrow" />
      </Button>
    </Wrapper>
  );
};

export default Filter;
