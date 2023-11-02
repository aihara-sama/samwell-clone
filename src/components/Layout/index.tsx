import Header from "components/Header";
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
      {children}
    </>
  );
};

export default Layout;
