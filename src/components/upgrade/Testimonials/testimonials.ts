interface ITestimonial {
  text: string;
  author: string;
  profession: string;
  primaryClr: string;
  secondaryClr: string;
}

const testimonials: ITestimonial[] = [
  {
    text: "Your essay has already provided advantages and assistance.</br /></br />For a working professional, your service is a <cursor>game changer.</cursor> I congratulate you on your fast, efficient service and hope you achieve the success you deserve.",
    author: "Peter Usher",
    profession: "United Nations - Climate Scientist",
    primaryClr: "#e736f3",
    secondaryClr: "#e736f333",
  },
  {
    text: "The AI offered by this platform is <cursor>simply great.</cursor><br /><br />The interface is super intuitive and very easy to use, the customer support is very good. Samwell.ai is a <cursor>must-have tool</cursor> for anyone who is a writer, teacher or student.",
    author: "David Sandua",
    profession: "Professional",
    primaryClr: "#fe7a15",
    secondaryClr: "#fe7a1533",
  },
  {
    text: "Since I discovered Samwell.ai, my professional Life has taken a 180-degree turn. The AI offered by this platform is <cursor>simply great.</cursor><br /><br />The interface is <cursor>super intuitive</cursor> and very easy to use, the customer support is very good, they are always ready to answer your questions.",
    author: "Sarah Davis",
    profession: "Student",
    primaryClr: "#2772f1",
    secondaryClr: "#2772f133",
  },
];

export default testimonials;
