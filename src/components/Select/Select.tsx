import { useForm } from "react-hook-form";
import { StyledForm, StyledSelect } from "./styles";
export const Select = () => {
  const { register } = useForm();

  return (
    <StyledForm >
      <StyledSelect {...register("gender")}>
        <option value="Title">Title</option>
        <option value="date">date</option>
        <option value="popular">popular</option>
      </StyledSelect>
    </StyledForm>
  );
};
