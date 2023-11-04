import { Box } from "@mui/material";
import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
import type { FunctionComponent } from "react";

interface IProps {
  children: React.ReactNode;
}

const Layout: FunctionComponent<IProps> = ({ children }) => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <>
      <Header />
      <Box mt={10}>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
