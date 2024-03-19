import { MicNone } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  FormControl,
  IconButton,
  InputBase,
  NativeSelect,
  Stack,
  styled,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  p: 5,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(10),
  marginLeft: 5,
  width: "100%",
  flexGrow: 1,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const HeaderSearch = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        width: `calc(100% - 350px)`,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box />

      <Search
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "50px",
        }}
      >
        <SearchIconWrapper sx={{ color: "white !important" }}>
          <SearchIcon sx={{ color: "white !important", flexGrow: 1 }} />
        </SearchIconWrapper>
        <StyledInputBase
          sx={{ minWidth: "100px" }}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <IconButton sx={{ color: "white" }}>
          <MicNone sx={{ mx: 2 }} />
        </IconButton>
      </Search>

      <FormControl>
        <NativeSelect
          sx={{
            color: "#ffffff96 !important",
            flexGrow: 1,
            minWidth: `120px`,
            "& .css-1g12qau-MuiSvgIcon-root-MuiNativeSelect-icon": {
              color: "#ffffff96",
            },
            "& .css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input:not([multiple]) option":
              {
                backgroundColor: "white !important",
                color: "black !important",
              },
          }}
          defaultValue={"EN"}
          inputProps={{
            name: "EN",
            id: "uncontrolled-native",
          }}
        >
          <option value={"EN"}>English (US)</option>
          <option value={"AR"}>Arabic (AR)</option>
        </NativeSelect>
      </FormControl>
    </Stack>
  );
};

export default HeaderSearch;
