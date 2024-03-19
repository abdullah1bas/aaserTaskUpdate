// @ts-nocheck
/* eslint-disable no-unused-vars */
import { styled } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";

const Drawer = styled(MuiDrawer, {
 shouldForwardProp: (prop) => prop !== "open",
})(
  ({ theme }) => ({
    width: `280px`,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    backgroundColor: 'red !important',
  })
);

export default Drawer;
