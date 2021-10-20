import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Frame,
  Inner,
  Title,
  Item,
  Body,
  Header,
} from "./accordion.styles";

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner> {children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(true);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header {...restProps} onClick={() => setToggleShow(!toggleShow)}>
      {children}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext);
    return (
      <Body {...restProps} className={toggleShow ? 'open' : 'close'}>
        {children}
      </Body>
    );
  };
  
