import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import authOperations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";

import logo from "../../images/icons/Logo.png";
import defaultAvatar from "../../images/icons/user.png";

import Container from "../Container/Container";
import UserModal from "../UserModal/UserModal";

import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Root = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(8),
  },
}));

const UserAppBar = () => {
  const dispatch = useDispatch();
  const avatar = useSelector(authSelectors.getAvatar);

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isUserModal, setIsUserModal] = useState(false);

  const toggleUserModal = () => {
    setIsUserModal(!isUserModal);
  };

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
          <a href="/">
            <img src={logo} alt="Logo" width="220" height="50" />
          </a>

          <Box>
            <Tooltip title="Open settings">
              <Root>
                <Box sx={{ display: "flex" }}>
                  {avatar ? (
                    <Avatar src={avatar} alt="User " />
                  ) : (
                    <Avatar src={defaultAvatar} alt="User" />
                  )}
                  <IconButton onClick={handleOpenUserMenu}>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </Box>
              </Root>
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
              <MenuItem onClick={handleCloseUserMenu}>
                <Button
                  type="button"
                  onClick={toggleUserModal}
                  aria-label="Profile"
                >
                  Profile
                </Button>
                <Button
                  type="button"
                  onClick={() => dispatch(authOperations.logOut())}
                  aria-label="Logout"
                >
                  Logout
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
        {isUserModal && <UserModal onClose={toggleUserModal} />}
      </Container>
    </AppBar>
  );
};
export default UserAppBar;
