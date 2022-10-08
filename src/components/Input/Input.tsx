import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

export interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
}

export const Input = ({ value, onChange, placeholder, type }: IProps) => {
  return <StyledInput type={type} value={value} onChange={onChange} placeholder={placeholder} />;
};
