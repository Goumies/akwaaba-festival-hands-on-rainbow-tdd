import React, { useContext } from "react";
import styled from "styled-components";

import { RainbowContext } from "../App";
import { RAINBOW_COLORS } from "../constants/rainbow";
import { Color } from "./Rainbow/Color";
import {Title} from "./Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 28%;
`;

const List = styled.div`
  width: 70%;
  max-width: 170px;
  margin-bottom: 1rem;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export function ColorsList() {
  const { rainbow, setRainbow } = useContext(RainbowContext);

  const onClickItem = ({ item }) => {
    setRainbow([...rainbow, { item }]);
  };

  return (
    <Container>
      <Title>Colors</Title>
      <List>
        <ListItem>
          <Color
            item={RAINBOW_COLORS.RED}
            onClick={() => onClickItem({ item: RAINBOW_COLORS.RED })}
          />
        </ListItem>
        <ListItem>
          <Color
            item={RAINBOW_COLORS.ORANGE}
            onClick={() => onClickItem({ item: RAINBOW_COLORS.ORANGE })}
          />
        </ListItem>
        <ListItem>
          <Color
            item={RAINBOW_COLORS.YELLOW}
            onClick={() => onClickItem({ item: RAINBOW_COLORS.YELLOW })}
          />
        </ListItem>
        <ListItem>
          <Color
            item={RAINBOW_COLORS.GREEN}
            onClick={() => onClickItem({ item: RAINBOW_COLORS.GREEN })}
          />
        </ListItem>
        <ListItem>
          <Color
            item={RAINBOW_COLORS.BLUE}
            onClick={() => onClickItem({ item: RAINBOW_COLORS.BLUE })}
          />
        </ListItem>
        <ListItem>
          <Color
            item={RAINBOW_COLORS.VIOLET}
            onClick={() => onClickItem({ item: RAINBOW_COLORS.VIOLET })}
          />
        </ListItem>
      </List>
    </Container>
  );
}
