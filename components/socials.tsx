import Link from "next/link";
import { SiGithub, SiLeetcode, SiX, SiYoutube, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export function Socials() {
  return (
    <>
      <Link
        href="https://github.com/tarushchandra"
        target="_blank"
        rel="noreferrer"
        className="focus-ring nav-link"
        aria-label="GitHub profile"
        data-testid="link-github"
      >
        <SiGithub size={17} className="hover:text-primary" />
      </Link>
      <Link
        href="https://leetcode.com/u/tarushchandra/"
        target="_blank"
        rel="noreferrer"
        className="focus-ring nav-link"
        aria-label="Leetcode profile"
        data-testid="link-leetcode"
      >
        <SiLeetcode size={16} className="hover:text-primary" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/tarush-chandra/"
        target="_blank"
        rel="noreferrer"
        className="focus-ring nav-link"
        aria-label="LinkedIn profile"
        data-testid="link-linkedin"
      >
        <FaLinkedin size={18} className="hover:text-primary" />
      </Link>
      <Link
        href="https://x.com/tarushchandra6"
        target="_blank"
        rel="noreferrer"
        className="focus-ring nav-link"
        aria-label="X profile"
        data-testid="link-x"
      >
        <SiX size={14} className="hover:text-primary" />
      </Link>
      <Link
        href="mailto:tarushchandra6@gmail.com"
        className="focus-ring nav-link"
        aria-label="Email Tarush"
        data-testid="link-footer-email"
      >
        <SiGmail size={16} className="hover:text-primary" />
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCs2parY2yWHS2kS80UtfnYg"
        target="_blank"
        className="focus-ring nav-link"
        aria-label="YouTube channel"
        data-testid="link-youtube"
      >
        <SiYoutube size={18} className="hover:text-primary" />
      </Link>
    </>
  );
}
