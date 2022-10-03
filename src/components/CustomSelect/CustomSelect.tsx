import Select, { SingleValue } from "react-select";
import { setSortWord } from "store/features/sortWordSlice/sortWordSlice";
import { IOption } from "types/types";
import { CustomStyles } from "./styles";
import { useDispatch } from "react-redux";

const options: IOption[] = [
  { value: "?_sort=title", label: "Title" },
  { value: "?_sort=publishedAt", label: "Date" },
  { value: "", label: "Select" },
];

export const CustomSelect = () => {
  const dispatch = useDispatch();
  const handleSort = (option: any | SingleValue<IOption>): void => {
    dispatch(setSortWord(option.value));
  };

  return <Select options={options} styles={CustomStyles} onChange={handleSort} />;
};
