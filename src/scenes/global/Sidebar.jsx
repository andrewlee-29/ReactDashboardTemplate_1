import React, { useEffect, useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  ListItemButton,
  Typography,
  useTheme,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MovieIcon from "@mui/icons-material/Movie";
import PasswordIcon from "@mui/icons-material/Password";

const drawerWidth = 240;

const navItems = [
  { text: "Dashboard", icon: <HomeOutlinedIcon /> },
  { text: "Type1", icon: null },
  { text: "Tool1", icon: <MovieIcon /> },
  { text: "Tool2", icon: <MovieIcon /> },
  { text: "Type2", icon: null },
  { text: "Tool3", icon: <PasswordIcon /> },
  { text: "Tool4", icon: <MovieIcon /> },
];

const Sidebar = ({ isDrawerOpen, setIsDrawerOpen, isNonMobile }) => {
  console.log(isNonMobile);
  const theme = useTheme();
  //active is used to look up what page we are on
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const { pathname } = useLocation();

  //look at the page every time when pathname is changed
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box>
      {isDrawerOpen && (
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: "transparent",
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width={drawerWidth} textAlign="center" sx={{ mt: 3, mb: 3 }}>
            <Typography variant="h4">Dashboard</Typography>
          </Box>
          {/* list items */}
          <List>
            {navItems.map(({ text, icon }) => {
              if (!icon) {
                return (
                  <Typography
                    key={text}
                    color={colors.grey[100]}
                    sx={{ m: "2.25rem 0 1rem 2rem" }}
                  >
                    {text}
                  </Typography>
                );
              }
              const lcText = text.toLowerCase();
              return (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate(`/${lcText}`);
                    }}
                    sx={{
                      backgroundColor:
                        active === lcText
                          ? theme.palette.secondary[300]
                          : "transparent",
                      color:
                        active === lcText
                          ? "#6870fa"
                          : theme.palette.secondary[100],
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        ml: 2,
                        color:
                          active === lcText
                            ? "#6870fa"
                            : theme.palette.secondary[100],
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      color={colors.grey[100]}
                    ></ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
