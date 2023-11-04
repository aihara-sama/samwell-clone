import { Box } from "@mui/material";
import FAQ from "components/upgrade/FAQ";
import Pricing from "components/upgrade/Pricing";
import Testimonials from "components/upgrade/Testimonials";
import type { NextPage } from "next";
import Head from "next/head";

interface IProps {}

const UpgradePage: NextPage<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Box>
      <Head>
        <title>Samwell - Upgrade</title>
      </Head>
      <Pricing />
      <Testimonials />
      <FAQ />
    </Box>
  );
};

export default UpgradePage;
