import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
  menuToggle: boolean,
}

const initialState: MenuState = {
  menuToggle: false,
};

const NavbarSlice = createSlice({
  name: 'Navbar',
  initialState,
  reducers: {
    menuToggler: (state, action) => {
      state.menuToggle = action.payload;
    }
  },
});

export const { menuToggler } = NavbarSlice.actions;
export default NavbarSlice.reducer;
