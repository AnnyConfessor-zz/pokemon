import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 232px;
  height: 168px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0px 20px 20px 0px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Figure = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const WrapperImage = () => {
  return (
    <Container alt="wrapper-image">
      <Figure className="img-first">
        <img src="https://pngimg.com/uploads/pokemon/pokemon_PNG161.png"></img>
      </Figure>
      {/* <Figure className="img-two"/> */}
    </Container>
  );
};

export default WrapperImage;
