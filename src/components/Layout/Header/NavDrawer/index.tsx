import Close from "@mui/icons-material/Close";
import { Box, Drawer, Hidden, Link as MuiLink } from "@mui/material";
import Logo from "components/Logo";
import LinkButton from "components/buttons/LinkButton";
import { interFont } from "fonts";
import Link from "next/link";
import type { FunctionComponent } from "react";
import React from "react";
import links from "../links";

interface IProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavDrawer: FunctionComponent<IProps> = ({
  isDrawerOpen,
  setIsDrawerOpen,
}) => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~
  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  // ~~~~~ JSX ~~~~~
  return (
    <Hidden lgUp>
      <Drawer
        hideBackdrop
        variant="temporary"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        data-testid="nav-drawer"
        PaperProps={{
          sx: {
            width: "100%",
            py: 3,
            px: 4,
          },
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Logo />

          <Box>
            <Box
              onClick={handleClose}
              component="button"
              sx={{
                background: "white",
                borderRadius: "12px",
                outline: "none",
                border: "1px solid #dddddd",
                display: "flex",
                width: "34px",
                height: "34px",
                alignItems: "center",
                justifyContent: "center",
                transition: "box-shadow 0.3s ease 0s",
                cursor: "pointer",
                ":hover": {
                  boxShadow: "#aaaaaa 3px 3px 5px -1px",
                },
              }}
            >
              <Close sx={{ cursor: "pointer" }} />
            </Box>
          </Box>
        </Box>
        <Box mt={5} display="flex" gap={5} flexDirection="column">
          {links.map(({ title, href }, idx) => (
            <MuiLink
              key={idx}
              component={Link}
              href={href}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontFamily: interFont.style.fontFamily,
                color: "#6f767e",
                position: "relative",
                fontWeight: 700,
                fontSize: 18,
                ":after": {
                  content: `url(/images/png/menu-forward.png)`,
                  position: "absolute",
                  right: 0,
                },
              }}
              underline="none"
              color="inherit"
            >
              {title}
            </MuiLink>
          ))}
        </Box>
        <Box mt={4} display="flex" flexDirection="column" gap={2}>
          <LinkButton href="/login" text="Login" />
          <LinkButton href="/register" text="Sign-up for Free" />
        </Box>
      </Drawer>
    </Hidden>
  );
};

export default NavDrawer;
