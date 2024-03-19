/* eslint-disable react/prop-types */
import { MoreVert } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { useState } from "react";

const ITEM_HEIGHT = 60;

const DataOptions = ({data}) => {
    const options = data.options;

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="h6" sx={{ my: data.optionName == 'Patient Data' && 5  , color:'#fff' }}>
              {data.optionName}
            </Typography>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVert sx={{ transform: 'rotate(90deg)', fontSize: '40px', color: '#ffffff96' }} />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Stack>
    );
}

export default DataOptions;
