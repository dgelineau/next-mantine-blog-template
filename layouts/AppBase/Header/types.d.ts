import { Dispatch, SetStateAction } from "react";

export interface HeaderProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
