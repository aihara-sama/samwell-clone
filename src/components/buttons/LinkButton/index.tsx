import { Link as MuiLink } from "@mui/material";
import { openSansFont } from "fonts";
import Link from "next/link";
import type { FunctionComponent } from "react";

interface IProps {
  text: string;
  href: string;
}

const LinkButton: FunctionComponent<IProps> = ({ text, href }) => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <MuiLink
      component={Link}
      href={href}
      sx={{
        fontFamily: openSansFont.style.fontFamily,
        color: "#555555",
        background: "white",
        borderRadius: "57px",
        outline: "none",
        border: "1px solid #dddddd",
        transition: "box-shadow 0.3s ease 0s",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 1.3,
        fontSize: 18,
        ":hover": {
          boxShadow: "#aaaaaa 3px 3px 5px -1px",
        },
      }}
      underline="none"
      color="inherit"
    >
      {text}
    </MuiLink>
  );
};

export default LinkButton;
