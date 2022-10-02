import { StyledBurger } from "./styles";
import { useState } from "react";
import { NavbarList } from "components";

export const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <NavbarList open={open} />
    </>
  );
};
