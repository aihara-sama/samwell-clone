import { Box, Link as MuiLink, Typography } from "@mui/material";
import Logo from "components/Logo";
import { openSansFont } from "fonts";
import Link from "next/link";
import type { FunctionComponent } from "react";
import contacts from "./contacts";

interface IProps {}

const Footer: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Box
      component="footer"
      bgcolor="#f3f5f7"
      py={{ xs: 4, md: 7, lg: 18 }}
      px={{ xs: 4, md: 10, lg: 22 }}
      display="flex"
      justifyContent="space-between"
      flexDirection={{ xs: "column", md: "row" }}
      gap={{ xs: 5, md: 0 }}
    >
      <Box>
        <Box display="flex">
          <Logo />
        </Box>
        <Typography maxWidth={270} fontSize={12} mt={2}>
          Hello, I‘m Sawmell, and my mission is to simplify the lives of
          students and academics. Focusing on Education, Wellness, and Finance,
          I save time in research and learning and reduce daily stress,
          promoting success and well-being.
        </Typography>
      </Box>
      <Box>
        <Typography mb={1} fontSize={20} fontWeight={500} color="#2d2d2d">
          Legal
        </Typography>
        <Box display="flex" flexDirection="column" gap={0.5}>
          <MuiLink
            fontFamily={openSansFont.style.fontFamily}
            component={Link}
            href="/terms-of-service"
            underline="none"
            color="inherit"
          >
            Terms and Service
          </MuiLink>
          <MuiLink
            fontFamily={openSansFont.style.fontFamily}
            component={Link}
            href="/privacy-policy"
            underline="none"
            color="inherit"
          >
            Privacy Policy
          </MuiLink>
        </Box>
      </Box>
      <Box>
        <Typography mb={1} fontSize={20} fontWeight={500} color="#2d2d2d">
          Contact Us
        </Typography>
        <Box display="flex" flexDirection="column" gap={1}>
          {contacts.map(({ title, href, Icon }, idx) => (
            <MuiLink
              key={idx}
              fontFamily={openSansFont.style.fontFamily}
              component={Link}
              href={href}
              underline="none"
              color="inherit"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Icon />
              {title}
            </MuiLink>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
