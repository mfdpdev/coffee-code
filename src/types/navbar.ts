import { Dispatch, SetStateAction } from "react";

export type navbarType = {
  value: { 
    cart: boolean, 
    setCart: Dispatch<SetStateAction<boolean>>, 
    navbar: boolean,
    setNavbar: Dispatch<SetStateAction<boolean>>,
  }
}
