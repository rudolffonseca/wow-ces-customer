import { FC } from "react";
import { NavbarItem } from "./NavbarItem";
export const LoggedOut: FC = () => {
  return (
    <>
      <NavbarItem path="/login" linkText="Login"></NavbarItem>
      <NavbarItem path="/signup" linkText="SignUp"></NavbarItem>
    </>
  );
};
