import React from "react";
import "./App.css";
import styled from "@emotion/styled";
import { SimpleSelect } from "./components/SimpleSelect/SimpleSelect";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Spacer = styled.div`
  margin-top: 24px;
`;

const ContentWidth = styled.div`
  width: 200px;
`;

function App() {
  return (
    <Center>
      <h1>test</h1>
      <ContentWidth>
        <SimpleSelect
          options={["Apple", "Banana", "Citrus", "Pear"]}
          placeholder={"Select fruit"}
        />
        <Spacer />
        <SimpleSelect
          options={["BMW", "Mercedes", "Audi"]}
          placeholder={"Select car"}
        />
      </ContentWidth>
    </Center>
  );
}

export default App;
