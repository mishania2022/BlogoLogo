import Select, { SingleValue } from "react-select";
import { setSortWord } from "store/features/sortWordSlice/sortWordSlice";
import { IOption } from "types/types";
import { CustomStyles } from "./styles";
import { useDispatch } from "react-redux";

const options: IOption[] = [
  { value: "title", label: "Title" },
  { value: "publishedAt", label: "Date" },
  { value: "", label: "Select" },
];

export const CustomSelect = () => {
  const dispatch = useDispatch();
  const handleSort = (option: SingleValue<IOption> | null): void => {
    dispatch(setSortWord(option !== null ? option.value : ""));
  };

  return <Select options={options} styles={CustomStyles} onChange={handleSort} />;
};
