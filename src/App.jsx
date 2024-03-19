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
    <Stack direction={"row"} className="app" >
      <SideBar {...{data, DrawerHeader}}/>
      <Container className="main" fixed component="main">
        <div>
          <HeaderSearch />
          <Outlet />
        </div>
      </Container>
    </Stack>
  );
}

export default React.memo(App);
