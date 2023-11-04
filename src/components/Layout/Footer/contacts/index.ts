import InstagramIcon from "components/icons/InstagramIcon";
import MailIcon from "components/icons/MailIcon";
import TikTokIcon from "components/icons/TikTokIcon";
import type { FunctionComponent } from "react";

interface IContact {
  title: string;
  href: string;
  Icon: FunctionComponent;
}

const contacts: IContact[] = [
  {
    title: "hello@samwell.ai",
    href: "mailto:hello@samwell.ai",
    Icon: MailIcon,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/samwell.ai",
    Icon: InstagramIcon,
  },
  {
    title: "TikTok",
    href: "https://www.tiktok.com/@samwell.ai",
    Icon: TikTokIcon,
  },
];

export default contacts;
