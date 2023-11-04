import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Box } from "@mui/material";
import type { AccordionProps } from "@mui/material/Accordion";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import type { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ToggleArrowIcon from "components/icons/ToggleArrowIcon";
import { interFont } from "fonts";
import * as React from "react";

const StyledAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: `none`,
  backgroundColor: "background.default",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  " .MuiCollapse-root": {
    backgroundColor: "background.default",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper": {
    position: "absolute",
    right: 0,
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: 0,
    paddingRight: "38px",
  },
  " .MuiCollapse-root": {
    backgroundColor: "background.default",
  },
  position: "relative",
  paddingLeft: 0,
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingLeft: 0,
  border: "none",
}));

interface IMenuItem {
  title: string;
  body: string;
}

const Accordion: React.FunctionComponent<{ menu: IMenuItem[] }> = ({
  menu,
}) => {
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box display="flex" gap="85px" flexDirection={{ xs: "column", md: "row" }}>
      <Box display="flex" flexDirection="column" gap={3}>
        {menu.map((item, idx) => (
          <StyledAccordion
            key={idx}
            expanded={expanded === `panel${idx + 1}`}
            onChange={handleChange(`panel${idx + 1}`)}
          >
            <AccordionSummary
              sx={{
                pr: "12px !important",
              }}
              expandIcon={<ToggleArrowIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography
                fontSize={18}
                fontWeight={700}
                fontFamily={interFont.style.fontFamily}
              >
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "background.default" }}>
              <Typography fontFamily={interFont.style.fontFamily}>
                {item.body}
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
        ))}
      </Box>
    </Box>
  );
};

export default Accordion;
