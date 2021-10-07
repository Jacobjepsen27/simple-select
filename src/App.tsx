import React from "react";
import "./App.css";
import styled from "@emotion/styled";
import { SubmitHandler, useForm } from "react-hook-form";
import { SimpleSelectControl } from "./components/SimpleSelectControl/SimpleSelectControl";

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

export interface Formvalues {
  fruit: string;
  car: string;
}

function App() {
  const { handleSubmit, control } = useForm<Formvalues>();

  const onSubmit: SubmitHandler<Formvalues> = (data) => {
    window.alert(JSON.stringify(data));
  };
  return (
    <Center>
      <h1>Simple Selects</h1>
      <ContentWidth>
        <SimpleSelectControl
          name="fruit"
          control={control}
          rules={{ required: "Fruit required" }}
          options={["Apple", "Banana", "Citrus", "Pear"]}
          placeholder="Select fruit"
        />
        <Spacer />
        <SimpleSelectControl
          name="car"
          control={control}
          rules={{ required: "Car required" }}
          options={["BMW", "Mercedes", "Audi"]}
          placeholder="Select car"
        />

        <Spacer />
        <button onClick={() => handleSubmit(onSubmit)()}>submit form</button>
      </ContentWidth>
    </Center>
  );
}

export default App;
