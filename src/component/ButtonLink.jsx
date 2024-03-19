/* eslint-disable react/prop-types */
import { Accordion, AccordionSummary, Avatar, Box, Button, ListItemButton, ListItemText, Stack, Tooltip, Typography, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import './all-component.css'

const ButtonLink = ({ link ,changeButton}) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = useCallback( (panel) => (event, isExpanded) => { setExpanded(isExpanded ? panel : false); }, []);
  const navigate = useNavigate();

  return (
    <Tooltip title={link.text} placement="right-start">
      <Button sx={{ m: 0, p: 0 }}>
        <Accordion
          expanded={expanded === link.panel}
          onChange={handleChange(link.panel)}
          sx={{ width: "100%", backgroundColor: "#081028 !important", color: "#fff",
            "& .css-pwcg7p-MuiCollapse-root": { pl: "18px !important", },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: "#fff" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              "& .MuiAccordion-region": { display: "flex !important", flexDirection: "column !important",
                alignItems: "start !important",
              },
            }}
          >

        {changeButton && (
                <Stack direction={'row'}
                  sx={{ gap: 1, p: 0 }}
                >
                  <Avatar sx={{ width: 30, height: 30 }} src={link.source} />
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                    <Typography sx={{ fontSize: "12px", textTransform: "capitalize" }}>{link.title}</Typography>
                    <Typography sx={{ fontSize: "10px", textTransform: "capitalize", color: "#ffffff6b" }}>{link.subTitle}</Typography>
                  </Box>
                </Stack>
            )}
            {!changeButton && (
              <>
                {link.icon && (
                  <link.icon sx={{ color: expanded === link.panel ? "#c33af6" : null }} />
                )}
                <Typography sx={{ ml: 1, fontSize: 16, textTransform: "capitalize"}}>
                  {link.text}
                </Typography>
              </>
            )}
          </AccordionSummary>

          {link.linkTeam.map((subLink, index) => {
            return (
              <ListItemButton
                key={index}
                className="subLink"
                sx={{
                  backgroundColor:
                    location.pathname == subLink.path
                      ? "#0e1a3d !important"
                      : null,
                  borderLeft:
                    location.pathname == subLink.path
                      ? "solid #c33af6 !important"
                      : "solid inherit !important",
                  borderLeftWidth: "10px !important",
                  "&:hover": {
                    background: "#0e1a3d !important",
                    borderLeft: "10px solid #c33af6 !important",
                  },
                }}
                onClick={() => navigate(subLink.path)}
              >
                <ListItemText
                  primary={subLink.text}
                  sx={{ opacity:  1,
                    "& .css-10hburv-MuiTypography-root, .css-yb0lig": { fontSize: "10px", }, textTransform: "capitalize",
                  }}
                />
              </ListItemButton>
            );
          })}
          
        </Accordion>
      </Button>
    </Tooltip>
  );
};

export default ButtonLink;
