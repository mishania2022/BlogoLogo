import Select, { SingleValue } from "react-select";
import { setSortWord } from "store/features/sortWordSlice/sortWordSlice";
import { IOption } from "types/types";
import { CustomStyles } from "./styles";
import { useDispatch } from "react-redux";

const options: IOption[] = [
  { value: "?_limit=12&_sort=title", label: "Title" },
  { value: "?_limit=12&_sort=publishedAt", label: "Date" },
  { value: "?_limit=12&_start=0", label: "Select" },
];

export const CustomSelect = () => {
  const dispatch = useDispatch();
  const handleSort = (option: SingleValue<IOption> | null): void => {
    dispatch(setSortWord(option !== null ? option.value : ""));
  };

  return <Select options={options} styles={CustomStyles} onChange={handleSort} />;
};
