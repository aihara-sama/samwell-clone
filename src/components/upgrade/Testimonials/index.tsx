import { Box, Container, Grid, Typography } from "@mui/material";
import type { FunctionComponent } from "react";

import ReactHtmlParser from "react-html-parser";
import testimonials from "./testimonials";

interface IProps {}

const Testimonials: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Container component={Box} pt={10} maxWidth="xl">
      <Typography
        textAlign="center"
        color="#923ed4"
        fontWeight={700}
        textTransform="uppercase"
        fontSize={{ xs: 14, md: 16 }}
      >
        OUR USERS SAY
      </Typography>
      <Typography
        mt={2}
        textAlign="center"
        fontWeight={500}
        color="#111111"
        fontSize={{ xs: 28, md: 46 }}
      >
        A Must Have Tool
      </Typography>
      <Typography textAlign="center" color="#4b4b4b" fontSize={20}>
        Save time, get the best results and create with confidence.
      </Typography>
      <Box mt={5}>
        <Grid container spacing={{ xs: 10, md: 5 }} sx={{ mt: 5 }}>
          {testimonials.map((testimonial, idx) => (
            <Grid
              item
              xs={12}
              md={4}
              key={idx}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                maxWidth={300}
                sx={{
                  position: "relative",
                  pt: 6,
                  pl: 6,
                  "::before": {
                    content: '""',
                    top: "0px",
                    left: "0px",
                    width: "40px",
                    height: "40px",
                    maskRepeat: "no-repeat",
                    maskPosition: "left top",
                    maskImage: "url(/images/svg/quotation.svg)",
                    backgroundColor: testimonial.primaryClr,
                    position: "absolute",
                  },
                  cursor: {
                    px: 0.5,
                    bgcolor: testimonial.secondaryClr,
                    wordBreak: "break-all",
                    whiteSpace: "nowrap",
                    position: "relative",
                    "::before": {
                      content: "''",
                      maskImage: "url(/images/svg/cursor.svg)",
                      maskSize: "cover",
                      width: "0.56em",
                      height: "1.6em",
                      left: "-4px",
                      top: "-0.3em",
                      backgroundColor: testimonial.primaryClr,
                      position: "absolute",
                    },
                    "::after": {
                      content: "''",
                      maskImage: "url(/images/svg/cursor.svg)",
                      maskSize: "cover",
                      position: "absolute",
                      backgroundColor: testimonial.primaryClr,
                      width: "0.56em",
                      height: "1.6em",
                      bottom: "-2px",
                      marginLeft: "-1px",
                    },
                  },
                }}
              >
                {ReactHtmlParser(testimonial.text)}
                <Box mt={5} display="flex" alignItems="center" gap={1}>
                  <Box
                    sx={{
                      background: "#e736f3",
                      borderRadius: "100%",
                      width: "35px",
                      height: "35px",
                    }}
                  />
                  <Box display="flex" flexDirection="column">
                    <Typography fontWeight={700}>
                      {testimonial.author}
                    </Typography>
                    <Typography fontSize={12}>
                      {testimonial.profession}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Testimonials;
