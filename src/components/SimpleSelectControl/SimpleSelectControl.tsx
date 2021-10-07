import {
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import styled from "@emotion/styled";
import { SimpleSelect } from "../SimpleSelect/SimpleSelect";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const ErrorText = styled.span`
  color: red;
`;

interface SimpleSelectControlProps<T> extends UseControllerProps<T> {
  options: string[];
  placeholder?: string;
}

export const SimpleSelectControl = <T extends FieldValues>(
  props: SimpleSelectControlProps<T>
) => {
  const { options, placeholder, name, rules, control } = props;

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <Column>
      <SimpleSelect
        onChange={onChange}
        value={value}
        options={options}
        placeholder={placeholder}
      />
      {error != null ? (
        <ErrorText>{(error as FieldError)?.message}</ErrorText>
      ) : null}
    </Column>
  );
};
