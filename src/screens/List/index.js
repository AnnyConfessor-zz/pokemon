import React from "react";
import styled from "styled-components";
import Progress from "./components/Progress";

// import { listPokemons } from "services/pokeapi";

// import Card from "./components/Card";

const List = () => {
  // const [pokes, setPokes] = useState([]);

  // useEffect(async () => {
  //   const res = await listPokemons();

  //   setPokes(res.results);
  // }, []);

  const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.lightPurple};
    display: flex;
    justify-content: center;
  `;

  return (
    <Container alt="container-list">
      <div className="poke-name">
        {/* {pokes.map(item => <Card data={item}/>)} */}
        {/* <Card /> */}
        <Progress></Progress>
      </div>
    </Container>
  );
};

export default List;
