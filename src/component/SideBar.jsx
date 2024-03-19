/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
// @ts-nocheck
import { Box, Button, Divider, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../public/images/White-logo.png";
import React from "react";
import Drawer from "./Drawer";
import ButtonLink from "./ButtonLink";
import UserData from "./UserData";


// eslint-disable-next-line react/prop-types
const SideBar = ({ data, DrawerHeader }) => {
  console.log('sideBar Page')
  const theme = useTheme();
  const navigate = useNavigate();
  const linksList = data.linksItemWeb.map((link, index) =>
    React.cloneElement(<ButtonLink />, {
      link,
      key: index,
      changeButton: false,
    })
  );
    return (
      <Drawer
        sx={{
          width: {md: '350px',lg: `280px`},
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: {md: '350px',lg: `280px`},
            boxSizing: "border-box",
          },
          ".MuiDrawer-paperAnchorLeft": {
            backgroundColor: "#081028 !important",
          },
          ".MuiDrawer-paperAnchorRight": {
            backgroundColor: "#081028 !important",
          },
          boxShadow: "1px 0px rgba(0, 0, 0, 0.5)",
        }}
        // anchor={anchor}
        variant="permanent"
      >
        <Toolbar sx={{ mt: 3 }}>
          <DrawerHeader>
            <Button
              sx={{
                "&:hover": {
                  backgroundColor: "inherit",
                },
                padding: 0,
                height: "64px",
                width: "180px",
              }}
              onClick={() => navigate("/")}
            >
              <img src={logo} alt="" style={{ width: "100%" }} />
            </Button>
          </DrawerHeader>
        </Toolbar>
        <Box height={"20px"} />

        {linksList}
        <Divider sx={{ backgroundColor: "#ffffff80", my: 2 }} />
        <ButtonLink link={data.linksItemAdmin[0]} changeButton={false} />
        <ButtonLink link={data.linksItemAdmin[1]} changeButton={true} />

        {useMediaQuery("(max-width:1201px)") && (
          <UserData data={data} />
        )}
      </Drawer>
    );
};

export default SideBar;
