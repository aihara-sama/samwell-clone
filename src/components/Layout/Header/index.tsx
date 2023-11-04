import { Box, Hidden, Link as MuiLink } from "@mui/material";
import Logo from "components/Logo";
import LinkButton from "components/buttons/LinkButton";
import OptionsIcon from "components/icons/OptionsIcon";
import { interFont } from "fonts";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, type FunctionComponent } from "react";
import NavDrawer from "./NavDrawer";
import links from "./links";

interface IProps {}

const Header: FunctionComponent<IProps> = () => {
  const { pathname } = useRouter();

  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Box
      component="header"
      sx={{
        py: 3,
        px: 4,
        position: "fixed",
        top: 0,
        background: "#fff",
        zIndex: 1,
        right: 0,
        left: 0,
      }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box display="flex" alignItems="center" gap={8}>
        <Logo />
        <Hidden lgDown>
          <Box display="flex" gap={4}>
            {links.map(({ title, href }, idx) => (
              <MuiLink
                p={1}
                key={idx}
                component={Link}
                href={href}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontFamily: interFont.style.fontFamily,
                  fontSize: 18,
                  color: pathname === href ? "#923ed4" : "#000",
                  ":hover": {
                    color: "#923ed4",
                  },
                }}
                underline="none"
                color="inherit"
              >
                {title}
              </MuiLink>
            ))}
          </Box>
        </Hidden>
      </Box>
      <Box>
        <Hidden lgDown>
          <Box display="flex" gap={2}>
            <LinkButton href="/login" text="Login" />
            <LinkButton href="/register" text="Sign-up for Free" />
          </Box>
        </Hidden>
        <Hidden lgUp>
          <Box
            onClick={() => setIsNavDrawerOpen(true)}
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
            <OptionsIcon />
          </Box>
        </Hidden>
        <NavDrawer
          isDrawerOpen={isNavDrawerOpen}
          setIsDrawerOpen={setIsNavDrawerOpen}
        />
      </Box>
    </Box>
  );
};

export default Header;
