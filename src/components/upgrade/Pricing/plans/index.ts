type TPlanType = "Free Trial" | "High School" | "University" | "Academic";
export type TReccuringPlan = "monthly" | "semester" | "yearly";

interface IBenefit {
  title: string;
  isHighlighted: boolean;
}

interface IPrices {
  monthly: number;
  semester: number;
  yearly: number;
}

export interface IPlan {
  type: TPlanType;
  btnClr: string;
  priceClr: string;
  prices: IPrices;
  wordsPerMonth: number;
  benefits: IBenefit[];
}

const plans: IPlan[] = [
  {
    type: "Free Trial",
    btnClr:
      "linear-gradient(263deg, rgb(72, 185, 3) 5.12%, rgb(170, 221, 24) 96.68%)",
    priceClr: "#6bc60a",
    prices: {
      monthly: 0,
      semester: 0,
      yearly: 0,
    },
    wordsPerMonth: 2000,
    benefits: [
      {
        title: "Up to 2,000 word essays",
        isHighlighted: true,
      },
      {
        title: "Audio Summaries",
        isHighlighted: false,
      },
      {
        title: "In-Line MLA Citations",
        isHighlighted: false,
      },
      {
        title: "In-Line MLA Citations",
        isHighlighted: false,
      },
      {
        title: "Authentic Sources",
        isHighlighted: false,
      },
    ],
  },
  {
    type: "High School",
    btnClr:
      "linear-gradient(261deg, rgb(123, 97, 255) -26.67%, rgb(1, 195, 255) 103.1%)",
    priceClr: "#01c3ff",
    prices: {
      monthly: 7,
      semester: 5,
      yearly: 4,
    },
    wordsPerMonth: 20000,
    benefits: [
      {
        title: "Up to 20,000 word essay",
        isHighlighted: true,
      },
      {
        title: "Bypass All AI Detectors",
        isHighlighted: true,
      },
      {
        title: "Audio Summaries",
        isHighlighted: false,
      },
      {
        title: "In-Line MLA Citations",
        isHighlighted: false,
      },
      {
        title: "Key Point Highlights",
        isHighlighted: false,
      },
      {
        title: "Authentic Sources",
        isHighlighted: false,
      },
    ],
  },
  {
    type: "University",
    btnClr:
      "linear-gradient(82deg, rgb(231, 54, 243) 6.74%, rgb(123, 97, 255) 107.83%)",
    priceClr: "#01c3ff",
    prices: {
      monthly: 14,
      semester: 12,
      yearly: 9,
    },
    wordsPerMonth: 100000,
    benefits: [
      {
        title: "Up to 60,000 word essay",
        isHighlighted: true,
      },
      {
        title: "Bypass All AI Detectors",
        isHighlighted: true,
      },
      {
        title: "Audio Summaries",
        isHighlighted: false,
      },
      {
        title: "In-Line MLA Citations",
        isHighlighted: false,
      },
      {
        title: "Key Point Highlights",
        isHighlighted: false,
      },
      {
        title: "Authentic Sources",
        isHighlighted: false,
      },
    ],
  },
  {
    type: "Academic",
    btnClr:
      "radial-gradient(484.77% 151.49% at 119.8% 0%, rgb(29, 15, 90) 0%, rgb(123, 97, 255) 93.23%)",
    priceClr: "#403285",
    prices: {
      monthly: 24,
      semester: 19,
      yearly: 17,
    },
    wordsPerMonth: 200000,
    benefits: [
      {
        title: "Up to 60,000 word essay",
        isHighlighted: true,
      },
      {
        title: "Bypass All AI Detectors",
        isHighlighted: true,
      },
      {
        title: "Audio Summaries",
        isHighlighted: false,
      },
      {
        title: "In-Line MLA Citations",
        isHighlighted: false,
      },
      {
        title: "Key Point Highlights",
        isHighlighted: false,
      },
      {
        title: "Authentic Sources",
        isHighlighted: false,
      },
    ],
  },
];

export default plans;
