import React, { useContext } from "react";
import styled from "styled-components";

import { RainbowContext } from "../App";
import { RAINBOW_COLORS } from "../constants/rainbow";
import { Color } from "./Rainbow/Color";
import { Title } from "./Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 28%;
  color: #423340;
`;

const List = styled.div`
  width: 70%;
  margin-right: -6rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const Label = styled.label`
  display: inline-block;
  height: 48px;
  line-height: 48px;
  width: 100%;
  text-align: right;
  vertical-align: middle;
  margin-right: 1rem;
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
          <Label htmlFor="red">{RAINBOW_COLORS.RED}</Label>
          <Color
            item={RAINBOW_COLORS.RED}
            name="red"
            onClick={() => onClickItem({ item: RAINBOW_COLORS.RED })}
          />
        </ListItem>
        <ListItem>
          <Label htmlFor="orange">{RAINBOW_COLORS.ORANGE}</Label>
          <Color
            item={RAINBOW_COLORS.ORANGE}
            name="orange"
            onClick={() => onClickItem({ item: RAINBOW_COLORS.ORANGE })}
          />
        </ListItem>
        <ListItem>
          <Label htmlFor="yellow">{RAINBOW_COLORS.YELLOW}</Label>
          <Color
            item={RAINBOW_COLORS.YELLOW}
            name="yellow"
            onClick={() => onClickItem({ item: RAINBOW_COLORS.YELLOW })}
          />
        </ListItem>
        <ListItem>
          <Label htmlFor="green">{RAINBOW_COLORS.GREEN}</Label>
          <Color
            item={RAINBOW_COLORS.GREEN}
            name="green"
            onClick={() => onClickItem({ item: RAINBOW_COLORS.GREEN })}
          />
        </ListItem>
        <ListItem>
          <Label htmlFor="blue">{RAINBOW_COLORS.BLUE}</Label>
          <Color
            item={RAINBOW_COLORS.BLUE}
            name="blue"
            onClick={() => onClickItem({ item: RAINBOW_COLORS.BLUE })}
          />
        </ListItem>
        <ListItem>
          <Label htmlFor="violet">{RAINBOW_COLORS.VIOLET}</Label>
          <Color
            item={RAINBOW_COLORS.VIOLET}
            name="violet"
            onClick={() => onClickItem({ item: RAINBOW_COLORS.VIOLET })}
          />
        </ListItem>
      </List>
    </Container>
  );
}
