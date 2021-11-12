import React, { createContext, useState } from "react";
import styled from "styled-components";

import "./App.css";
import { ColorsList } from "./components/ColorsList";
import { MagicStation } from "./components/MagicStation";
import { RulesList } from "./components/RulesList";
import { isValidRainbow } from "./modules/checker";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5rem 5rem 5rem;
  color: #423340;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = styled.footer`
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin: 5rem;
  color: #fff;
  background: #423340;
  border-radius: 8px;
`;

export const RainbowContext = createContext();

function App() {
  const [rainbow, setRainbow] = useState([]);
  const [colors, setColors] = useState(6);
  return (
    <RainbowContext.Provider value={{ rainbow, setRainbow, colors, setColors }}>
      <Header>
        <h1>Rainbow maker</h1>
      </Header>
      <Wrapper>
        <ColorsList />
        <MagicStation />
        <RulesList />
      </Wrapper>
      {isValidRainbow(rainbow) && (
        <Footer>
          <h3>--- Certified valid rainbow ---</h3>
        </Footer>
      )}
    </RainbowContext.Provider>
  );
}

export default App;
