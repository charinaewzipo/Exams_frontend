import React, { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: white;
`;
const Wrapper = styled.div`
  width: 450px;
  height: 640px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;
const DisplayContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: black;
`;
const ButtonContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 10px;

  background-color: black;
`;
const DisplayText = styled.h1`
  color: white;
  margin: 0;
  padding: 20px;
  font-size: 50px;
  overflow: hidden;
`;
const ButtonOpera = styled.button`
  min-height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  font-weight: 700;
  font-size: 24px;
  background-color: orange;
  color: white;

  &:hover {
    filter: brightness(110%);
  }
`;
const ButtonNumber = styled.button`
  min-height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  font-weight: 700;
  font-size: 24px;
  background-color: gray;
  color: white;
  &:hover {
    filter: brightness(110%);
  }
`;
const ButtonClear = styled.button`
  min-height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  font-weight: 700;
  font-size: 24px;
  background-color: gray;
  color: white;
  &:hover {
    filter: brightness(110%);
  }
`;
const ButtonEqual = styled.button`
  min-height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  font-weight: 700;
  font-size: 24px;
  background-color: orange;
  color: white;
  &:hover {
    filter: brightness(110%);
  }
`;

const ButtonNumberZero = styled.button`
  min-height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 40px;
  font-weight: 700;
  font-size: 24px;
  background-color: gray;
  color: white;
  &:hover {
    filter: brightness(110%);
  }
  grid-column: span 2;
`;
const Calculator = () => {
  const [inputs, setInputs] = useState("0");
  const display = (value) => {
    if (inputs.toString().charAt(0) === "0") {
      setInputs(value);
    } else setInputs(inputs + value);
  };

  const calculate = () => {
    let result = eval(inputs);
    setInputs(result);
  };
  return (
    <Container>
      <Wrapper>
        <DisplayContainer>
          <DisplayText>{inputs}</DisplayText>
        </DisplayContainer>
        <ButtonContainer>
          <ButtonClear onClick={() => setInputs(0)}>AC</ButtonClear>
          <ButtonClear onClick={() => setInputs(inputs * -1)}>+/-</ButtonClear>
          <ButtonNumber onClick={() => display("%")}>%</ButtonNumber>
          <ButtonOpera onClick={() => display("/")}>/</ButtonOpera>
          <ButtonNumber onClick={() => display("7")}>7</ButtonNumber>
          <ButtonNumber onClick={() => display("8")}>8</ButtonNumber>
          <ButtonNumber onClick={() => display("9")}>9</ButtonNumber>
          <ButtonOpera onClick={() => display("*")}>X</ButtonOpera>
          <ButtonNumber onClick={() => display("4")}>4</ButtonNumber>
          <ButtonNumber onClick={() => display("5")}>5</ButtonNumber>
          <ButtonNumber onClick={() => display("6")}>6</ButtonNumber>
          <ButtonOpera onClick={() => display("-")}>-</ButtonOpera>
          <ButtonNumber onClick={() => display("1")}>1</ButtonNumber>
          <ButtonNumber onClick={() => display("2")}>2</ButtonNumber>
          <ButtonNumber onClick={() => display("3")}>3</ButtonNumber>
          <ButtonOpera onClick={() => display("+")}>+</ButtonOpera>
          <ButtonNumberZero onClick={() => display("0")}>0</ButtonNumberZero>
          <ButtonNumber onClick={() => display(".")}>.</ButtonNumber>
          <ButtonEqual onClick={calculate}>=</ButtonEqual>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default Calculator;
