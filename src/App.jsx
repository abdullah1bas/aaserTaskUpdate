/* eslint-disable react/prop-types */
// @ts-nocheck
import { Container, Stack, styled } from "@mui/material";
import "./app.css";
import { Outlet } from "react-router-dom";
import React from "react";
import SideBar from "./component/SideBar";

import HeaderSearch from "./component/HeaderSearch";

export const DrawerHeader = styled("div")(({ theme }) => ({
  width: `280px`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App({data}) {
  console.log("App Page");

  return (
    <Stack
      direction={"row"}
      className="app"
      style={{ backgroundColor: "#081028 !important" }}
    >
      <SideBar {...{data, DrawerHeader}}/>
      <Container fixed component="main" sx={{  p: 3, pr: 0, color: 'white' , justifyContent:'center',flexWrap: 'nowrap'}}>
        <div>
          <HeaderSearch />
          <Outlet />
        </div>
      </Container>
    </Stack>
  );
}

export default React.memo(App);
