import { useState } from "react";
import Select, { SingleValue } from "react-select";
import { setSortWord } from "store/features/sortWordSlice/sortWordSlice";
import { IOption } from "../../types/types";
import { CustomStyles } from "./styles";

const options: IOption[] = [
  { value: "title", label: "Title" },
  { value: "publishedAt", label: "Date" },
];

export const CustomSelect = () => {
  
  const [value, setValue] = useState("");
  
  const { payload } = setSortWord(value);
  

  const handleSort = (option: SingleValue<IOption>): void => {
    if (option) setValue(option.value);
  };

  return <Select options={options} styles={CustomStyles} onChange={handleSort} />;
};
