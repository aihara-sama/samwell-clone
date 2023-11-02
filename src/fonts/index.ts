import { Inter, Open_Sans, Poppins } from "next/font/google";

export const poppinsFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const interFont = Inter({
  subsets: ["latin"],
});
export const openSansFont = Open_Sans({
  subsets: ["latin"],
});

export const fontFamily = `${poppinsFont.style.fontFamily}, ${interFont.style.fontFamily}, ${openSansFont.style.fontFamily}, 'Roboto', 'Helvetica', 'Arial', sans-serif;`;
