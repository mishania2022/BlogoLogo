import { ChangeEvent } from "react";
import { StyledSearchInput } from "./styles";

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;  
}

export const SearchInput = ({ value, onChange }: IProps) => {
  return (
    <StyledSearchInput value={value} onChange={onChange} type="text" placeholder="search..." />
  );
};
