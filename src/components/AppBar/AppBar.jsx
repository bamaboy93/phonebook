import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import authOperations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";

import styled from "styled-components";
import logo from "../../images/icons/Logo.png";
import defaultAvatar from "../../images/icons/user.png";

import Container from "../Container/Container";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const settings = ["Change avatar", "Account", "Dashboard", "Logout"];
const Logo = styled.img`
  width: 220px;
  height: 50px;
`;

const UserAppBar = () => {
  const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);
  const avatar = useSelector(authSelectors.getAvatar);
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="inherit" sx={{ pt: 1, pb: 1 }}>
      <Container>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Logo src={logo} alt="Logo" />

          <Box>
            <Tooltip title="Open settings">
              <Box sx={{ display: "flex" }}>
                {avatar ? (
                  <Avatar src={avatar} alt="User " />
                ) : (
                  <Avatar src={defaultAvatar} alt="User" />
                )}
                <IconButton onClick={handleOpenUserMenu} sx={{ ml: 3 }}>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </Box>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                  <Button
                    type="button"
                    onClick={() => dispatch(authOperations.logOut())}
                    aria-label="Logout"
                    fill="grey"
                  ></Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default UserAppBar;
