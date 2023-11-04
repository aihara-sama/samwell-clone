import { Box, Container, Grid, Hidden, Typography } from "@mui/material";
import ArrowLeftIcon from "components/icons/ArrowLeftIcon";
import ArrowUpIcon from "components/icons/ArrowUpIcon";
import { useState, type FunctionComponent } from "react";
import Plan from "./Plan";
import type { TReccuringPlan } from "./plans";
import plans from "./plans";

interface IProps {}

const Pricing: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~
  const [reccuringPlan, setReccuringPlan] = useState<TReccuringPlan>("monthly");

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  // ~~~~~ JSX ~~~~~
  return (
    <Box
      sx={{
        background: "url(images/png/light-rose-bg.png) no-repeat",
        backgroundSize: "cover",
      }}
      px={{ xs: 2, md: 3 }}
      py={{ xs: 3, md: 8 }}
    >
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="center" mb={6}>
          <Box
            component="img"
            maxWidth="100%"
            height={128}
            src="/images/gif/logo.gif"
          />
        </Box>
        <Typography
          textAlign="center"
          color="#923ed4"
          fontWeight={700}
          textTransform="uppercase"
          fontSize={{ xs: 14, md: 16 }}
        >
          Pricing
        </Typography>
        <Typography
          mt={2}
          textAlign="center"
          fontWeight={500}
          color="#111111"
          fontSize={{ xs: 28, md: 46 }}
        >
          You‘re in control
        </Typography>
        <Typography textAlign="center" color="#4b4b4b" fontSize={20}>
          Choose the package that suits you best. You can switch anytime.
        </Typography>

        <Box display="flex" justifyContent="center" mt={5}>
          <Box
            sx={{
              bgcolor: "#ffffff66",
              borderRadius: { xs: "32px", lg: "52px" },
              border: "1px solid rgb(255, 255, 255)",
              display: "flex",
              justifyContent: "space-between",
              p: 0.6,
              gap: { xs: 1, lg: 15 },
              position: "relative",
              flexDirection: { xs: "column", lg: "row" },
              flex: { xs: 1, lg: 0 },
            }}
          >
            <Hidden lgDown>
              <Box
                position="absolute"
                sx={{
                  right: "48%",
                  bottom: "-37px",
                  color: "#45505e",
                  fontWeight: 600,
                  display: "flex",
                  gap: 1,
                  alignItems: "baseline",
                }}
              >
                Save 20%
                <ArrowUpIcon />
              </Box>
              <Box
                position="absolute"
                sx={{
                  left: "102%",
                  bottom: "25px",
                  color: "#45505e",
                  fontWeight: 600,
                  gap: 1,
                }}
              >
                <Box sx={{ transform: "rotate(15deg)", whiteSpace: "nowrap" }}>
                  Save 35%
                </Box>
                <ArrowLeftIcon />
              </Box>
            </Hidden>
            <Box
              textAlign="center"
              color="#45505e"
              fontWeight={700}
              py={2}
              fontSize={18}
              px={3}
              borderRadius="30px"
              sx={{
                cursor: "pointer",
                ...(reccuringPlan === "monthly" && {
                  background: "#fff",
                  color: "#7b61ff",
                }),
              }}
              onClick={() => setReccuringPlan("monthly")}
            >
              Monthly
            </Box>
            <Box
              textAlign="center"
              color="#45505e"
              fontWeight={700}
              py={2}
              fontSize={18}
              px={3}
              borderRadius="30px"
              sx={{
                cursor: "pointer",
                ...(reccuringPlan === "semester" && {
                  background: "#fff",
                  color: "#7b61ff",
                }),
              }}
              onClick={() => setReccuringPlan("semester")}
            >
              Semester
            </Box>
            <Box
              textAlign="center"
              color="#45505e"
              fontWeight={700}
              py={2}
              fontSize={18}
              px={3}
              borderRadius="30px"
              sx={{
                cursor: "pointer",
                ...(reccuringPlan === "yearly" && {
                  background: "#fff",
                  color: "#7b61ff",
                }),
              }}
              onClick={() => setReccuringPlan("yearly")}
            >
              Yearly
            </Box>
          </Box>
        </Box>

        <Grid container spacing={3} sx={{ mt: 5 }}>
          {plans.map((plan, idx) => (
            <Grid item xs={12} md={6} lg={3} key={idx} sx={{ display: "flex" }}>
              <Plan plan={plan} reccuring={reccuringPlan} sx={{ flex: 1 }} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;
