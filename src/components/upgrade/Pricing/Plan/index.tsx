import type { SxProps } from "@mui/material";
import { Box, Typography } from "@mui/material";
import CheckIcon from "components/icons/CheckIcon";
import StarIcon from "components/icons/StarIcon";
import { openSansFont } from "fonts";
import type { FunctionComponent } from "react";
import type { IPlan, TReccuringPlan } from "../plans";

interface IProps {
  plan: IPlan;
  reccuring: TReccuringPlan;
  sx?: SxProps;
}

const Plan: FunctionComponent<IProps> = ({ plan, reccuring, sx }) => {
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
      sx={{
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.25) 7.26%, rgba(255, 255, 255, 0) 95.83%), rgba(255, 255, 255, 0.65)",
        border: "6px solid",
        borderColor:
          plan.type === "University" ? "#fff" : "rgba(255, 255, 255, 0.1)",
        p: 3,
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        ...sx,
      }}
    >
      {plan.type === "University" && (
        <Box
          position="absolute"
          sx={{
            top: -18,
            border: "1px solid rgb(64, 50, 133)",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            py: 0.4,
            px: 2,
            borderRadius: "75px",
          }}
        >
          <StarIcon /> Most Popular
        </Box>
      )}
      <Typography color="#4b4b4b" fontSize={18} fontWeight={700}>
        {plan.type}
      </Typography>
      <Box mt={4} mb={8} display="flex" alignItems="flex-end">
        <Typography
          lineHeight="55px"
          color={plan.priceClr}
          fontWeight={700}
          fontSize={72}
        >
          ${plan.prices[reccuring]}
        </Typography>
        <Typography color="#969696" fontSize={18}>
          /month
        </Typography>
      </Box>

      <Box mb={3} display="flex" flexDirection="column" gap={2}>
        <Typography fontSize={18} fontWeight={700}>
          {plan.wordsPerMonth.toLocaleString("en-US").replaceAll(",", " ")}{" "}
          words {plan.type !== "Free Trial" && "per month"}
        </Typography>
        {plan.benefits.map((benefit, idx) => (
          <Box key={idx} display="flex" gap={1.2} alignItems="center">
            <CheckIcon />
            <Typography
              color="#4b4b4b"
              fontWeight={benefit.isHighlighted ? 700 : 400}
            >
              {benefit.title}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box flex={1} display="flex" alignItems="center">
        <Box
          component="button"
          sx={{
            fontWeight: 600,
            fontFamily: openSansFont.style.fontFamily,
            color: "#fff",
            background: plan.btnClr,
            borderRadius: "57px",
            outline: "none",
            border: "none",
            transition: "box-shadow 0.3s ease 0s",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 3,
            py: 1.2,
            fontSize: 18,
            textTransform: "uppercase",
            ":hover": {
              boxShadow: "#aaaaaa 3px 3px 5px -1px",
            },
          }}
        >
          {plan.type === "Free Trial" ? "Start for Free" : "Get the plan"}
        </Box>
      </Box>
      {plan.type !== "Free Trial" && (
        <Typography mt={2} color="#4b4b4b" fontWeight={700}>
          Cancel Anytime.
        </Typography>
      )}
    </Box>
  );
};

export default Plan;
