import React from "react";
import styled from "styled-components";

// import { listPokemons } from "services/pokeapi";

import Progress from "./components/Progress";
import Card from "./components/Card";
import ButtonRaw from "shared/Button"
import SearchInput from "shared/SearchInput";
import SearchBar from "shared/SearchBar";

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
    justify-content: space-evenly;
		align-items: center;
  `;

  return (
    <Container alt="container-list">
        {/* {pokes.map(item => <Card data={item}/>)} */}
        {/* <Card/>
				<Progress/>
				<ButtonRaw/> */}
				<SearchBar/>
    </Container>
  );
};

export default List;
