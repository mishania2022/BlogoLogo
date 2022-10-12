import Select, { SingleValue } from "react-select";
import { setSortWord } from "store/features/sortWordSlice/sortWordSlice";
import { IOption } from "types/types";
import { CustomStyles } from "./styles";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const CustomSelect = () => {
  const options: IOption[] = [
    { value: "title", label: "Title" },
    { value: "publishedAt", label: "Date" },
  ];

  const [sort, setSort] = useState(options[1].value);

  const getValue = () =>
    options.find((option) => {
      return option.value === sort;
    });

  const dispatch = useDispatch();
  const handleSort = (option: SingleValue<IOption> | null): void => {
    if (option) setSort(option.value);
    dispatch(setSortWord(option !== null ? option.value : ""));
  };

  return (
    <Select options={options} value={getValue()} styles={CustomStyles} onChange={handleSort} />
  );
};
