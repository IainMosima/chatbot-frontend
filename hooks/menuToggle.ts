import { menuToggler } from "@/lib/reducers/NavbarReducer";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { useCallback } from "react";

interface MenuTooggleHook {
    menuToggle: boolean;
    setMenuToggle: () => void;
}

export const useMenuToggler = (): MenuTooggleHook => {
    const dispatch = useAppDispatch();
    const menuToggle = useAppSelector(state => state.navbar.menuToggle);

    const menuToogler = useCallback(
      () => {
        dispatch(menuToggler(!menuToggle));
      },
      [dispatch, menuToggle],
    )
    

    return {
        menuToggle: menuToggle,
        setMenuToggle: menuToogler,
    }
}