import React, { useContext } from "react";
import styled from "styled-components";

import { COLORS } from "../constants/colors";
import { RainbowContext } from "../App";
import { CheckIcon } from "./CheckIcon";
import {isOrangeBetweenRedAndYellow, isRedFirst} from "../modules/checker";
import { Title } from "./Title";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-grow: 1;
  width: 28%;
  padding: 0 20px;
  color: #423340;
`;

const List = styled.ul`
  list-style: none;
  margin-top: 0;
  padding-left: 10px;
`;

const ListItem = styled.li`
  display: flex;
  color: ${COLORS.GREY_DARKEST};
  font-weight: 500;
  margin-bottom: 0.85rem;
`;

export function RulesList() {
  const { rainbow } = useContext(RainbowContext);

  return (
    <Container>
      <Title>Rules of a standard rainbow</Title>
      <List>
        <ListItem>
          {console.log(rainbow)}
          <CheckIcon checked={isRedFirst(rainbow)} />
          {console.log(isRedFirst(rainbow))}
          Red is the first
        </ListItem>
        <ListItem>
          <CheckIcon checked={isOrangeBetweenRedAndYellow(rainbow)} />
          Orange is between red and yellow
        </ListItem>
        <ListItem>
          <CheckIcon checked={false} />
          Yellow is located right after the orange
        </ListItem>
        <ListItem>
          <CheckIcon checked={false} />
          Green is before violet
        </ListItem>
        <ListItem>
          <CheckIcon checked={false} />
          Blue comes between green and violet
        </ListItem>
        <ListItem>
          <CheckIcon checked={false} />
          Violet is the last
        </ListItem>
        <ListItem>
          <CheckIcon checked={false} />
          The number of colors is limited to 6
        </ListItem>
        <ListItem>
          <CheckIcon checked={false} />
          Each color is unique
        </ListItem>
      </List>
    </Container>
  );
}
