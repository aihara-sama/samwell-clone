import { Box, Container, Typography } from "@mui/material";
import Accordion from "components/Accordion";
import type { FunctionComponent } from "react";
import faqs from "./faq";

interface IProps {}

const FAQ: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Container component={Box} my={12}>
      <Typography
        textAlign="center"
        color="#923ed4"
        fontWeight={700}
        textTransform="uppercase"
        fontSize={{ xs: 14, md: 16 }}
      >
        faq
      </Typography>
      <Typography
        mb={5}
        mt={2}
        textAlign="center"
        fontWeight={500}
        color="#111111"
        fontSize={{ xs: 28, md: 48 }}
      >
        Frequently Asked Questions
      </Typography>
      <Accordion menu={faqs} />
    </Container>
  );
};

export default FAQ;
